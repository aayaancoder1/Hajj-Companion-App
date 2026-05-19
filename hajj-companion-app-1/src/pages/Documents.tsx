import React, { useEffect, useState, useCallback } from 'react';
import { useDocumentsStore } from '../store/documents';
import { FolderHeart, AlertTriangle, FileText, Folder as FolderIcon, X, Loader2 } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

// Utility components can be modularized later
const EmptyDocumentsState: React.FC<{ onConnect: () => void }> = ({ onConnect }) => (
  <Card className="p-8 bg-surface-container-low border border-dashed border-outline-variant flex flex-col items-center text-center gap-4 animate-in fade-in">
    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
      <FolderHeart size={32} />
    </div>
    <div>
      <h3 className="font-serif text-xl font-semibold text-on-surface mb-2">Set Documents Folder</h3>
      <p className="text-on-surface-variant text-sm mb-6 max-w-xs mx-auto">
        Connect a folder from your device containing your offline pilgrimage documents (passports, tickets, etc).
      </p>
      <Button onClick={onConnect} variant="primary" className="px-6 py-2.5">
        Choose Folder
      </Button>
    </div>
  </Card>
);

const ReconnectFolderCard: React.FC<{ onConnect: () => void, error: string }> = ({ onConnect, error }) => (
  <Card className="p-6 bg-error/10 border-none flex flex-col items-center text-center gap-4">
    <div className="w-12 h-12 rounded-full bg-error/20 flex items-center justify-center text-error">
      <AlertTriangle size={24} />
    </div>
    <div>
      <h3 className="font-semibold text-on-surface mb-1">Reconnect Documents Folder</h3>
      <p className="text-on-surface-variant text-sm mb-4">
        {error} Please select the folder again.
      </p>
      <Button onClick={onConnect} variant="secondary" className="bg-white text-error hover:bg-surface-container-lowest">
        Reconnect
      </Button>
    </div>
  </Card>
);

const FileListItem: React.FC<{ file: FileSystemFileHandle, onOpen: (file: FileSystemFileHandle) => void }> = ({ file, onOpen }) => (
  <button 
    onClick={() => onOpen(file)}
    className="flex items-center gap-3 p-3 w-full text-left bg-surface-container-lowest rounded-xl hover:bg-surface-container-low transition-colors active:scale-[0.98]"
  >
    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
      <FileText size={20} />
    </div>
    <div className="flex-1 overflow-hidden">
      <p className="text-sm font-medium text-on-surface truncate">{file.name}</p>
    </div>
  </button>
);

const DocumentSection: React.FC<{ title: string, files: FileSystemFileHandle[], onOpen: (file: FileSystemFileHandle) => void }> = ({ title, files, onOpen }) => {
  if (files.length === 0) return null;
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2 px-1">
        <FolderIcon size={16} className="text-on-surface-variant" />
        <h4 className="font-medium text-on-surface-variant text-sm">{title}</h4>
      </div>
      <div className="flex flex-col gap-2">
        {files.map(f => (
          <FileListItem key={f.name} file={f} onOpen={onOpen} />
        ))}
      </div>
    </div>
  );
};

export const Documents: React.FC = () => {
  const { handle, isInitializing, loadHandle, setHandle, clearHandle } = useDocumentsStore();
  const [permissionError, setPermissionError] = useState<string | null>(null);
  const [isReading, setIsReading] = useState(false);
  
  // Grouped by directory path relative to root
  const [groupedFiles, setGroupedFiles] = useState<Record<string, FileSystemFileHandle[]>>({});

  useEffect(() => {
    loadHandle();
  }, [loadHandle]);

  const verifyPermission = useCallback(async (fileHandle: FileSystemHandle, withInteraction = false) => {
    const options: any = { mode: 'read' };
    const handleAny = fileHandle as any;
    if ((await handleAny.queryPermission(options)) === 'granted') {
      return true;
    }
    if (withInteraction) {
      if ((await handleAny.requestPermission(options)) === 'granted') {
        return true;
      }
    }
    return false;
  }, []);

  const readDirectory = useCallback(async (dirHandle: FileSystemDirectoryHandle) => {
    setIsReading(true);
    try {
      const groups: Record<string, FileSystemFileHandle[]> = { 'Root': [] };
      
      for await (const entry of (dirHandle as any).values()) {
        if (entry.kind === 'file') {
          groups['Root'].push(entry as FileSystemFileHandle);
        } else if (entry.kind === 'directory') {
          groups[entry.name] = [];
          for await (const subEntry of (entry as any).values()) {
            if (subEntry.kind === 'file') {
              groups[entry.name].push(subEntry as FileSystemFileHandle);
            }
          }
        }
      }
      setGroupedFiles(groups);
      setPermissionError(null);
    } catch (e: any) {
      console.error(e);
      setPermissionError("Browser lost access to the folder.");
    } finally {
      setIsReading(false);
    }
  }, []);

  useEffect(() => {
    if (handle) {
      verifyPermission(handle, false).then(granted => {
        if (granted) {
          readDirectory(handle);
        } else {
          setPermissionError("Access permission is required to read your documents.");
        }
      });
    }
  }, [handle, verifyPermission, readDirectory]);

  const handleConnectFolder = async () => {
    if (!('showDirectoryPicker' in window)) {
      setPermissionError("Your browser does not support local folder access. Please use Chrome for Android.");
      return;
    }
    try {
      const dirHandle = await (window as any).showDirectoryPicker({ mode: 'read' });
      await setHandle(dirHandle);
      await readDirectory(dirHandle);
    } catch (e: any) {
      if (e.name !== 'AbortError') {
        console.error(e);
        setPermissionError("Failed to select folder.");
      }
    }
  };

  const handleReconnect = async () => {
    if (handle) {
      const granted = await verifyPermission(handle, true);
      if (granted) {
        await readDirectory(handle);
      } else {
        // Fallback to full reselect
        handleConnectFolder();
      }
    } else {
      handleConnectFolder();
    }
  };

  const handleOpenFile = async (fileHandle: FileSystemFileHandle) => {
    try {
      const file = await fileHandle.getFile();
      const url = URL.createObjectURL(file);
      window.open(url, '_blank');
      // Revoking immediately can break opening in some browsers, 
      // but ideally we should revoke later. We'll rely on session end to clean up.
    } catch (e) {
      console.error('Failed to open file', e);
      alert('Failed to open document. Permission might have been lost.');
    }
  };

  if (isInitializing) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <Loader2 className="animate-spin text-primary opacity-50" size={32} />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8 pb-8 animate-in fade-in duration-500">
      <header className="pt-2 flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-serif font-bold text-on-background tracking-tight mb-2">
            Documents Hub
          </h1>
          <p className="text-on-surface-variant text-base">
            Secure offline access to your files.
          </p>
        </div>
        {handle && (
          <button 
            onClick={clearHandle}
            className="p-2 bg-surface-container rounded-full text-on-surface-variant hover:bg-surface-variant transition-colors"
            aria-label="Disconnect folder"
          >
            <X size={20} />
          </button>
        )}
      </header>

      {!handle ? (
        <EmptyDocumentsState onConnect={handleConnectFolder} />
      ) : permissionError ? (
        <ReconnectFolderCard onConnect={handleReconnect} error={permissionError} />
      ) : isReading ? (
        <div className="flex flex-col items-center justify-center py-12 text-on-surface-variant gap-4">
          <Loader2 className="animate-spin" size={32} />
          <p className="text-sm font-medium">Scanning offline documents...</p>
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          {Object.entries(groupedFiles).map(([groupName, files]) => (
            <DocumentSection 
              key={groupName} 
              title={groupName === 'Root' ? 'Unsorted Documents' : groupName} 
              files={files} 
              onOpen={handleOpenFile} 
            />
          ))}
          {Object.values(groupedFiles).every(arr => arr.length === 0) && (
            <div className="text-center py-12 text-on-surface-variant">
              <p>No files found in the connected folder.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
