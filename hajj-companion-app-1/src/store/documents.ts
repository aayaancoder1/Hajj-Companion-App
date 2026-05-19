import { create } from 'zustand';
import { get, set, del } from 'idb-keyval';

interface DocumentsState {
  handle: FileSystemDirectoryHandle | null;
  isInitializing: boolean;
  loadHandle: () => Promise<void>;
  setHandle: (handle: FileSystemDirectoryHandle) => Promise<void>;
  clearHandle: () => Promise<void>;
}

export const useDocumentsStore = create<DocumentsState>((setStore) => ({
  handle: null,
  isInitializing: true,
  loadHandle: async () => {
    try {
      const handle = await get<FileSystemDirectoryHandle>('hajj-docs-handle');
      if (handle) {
        setStore({ handle, isInitializing: false });
      } else {
        setStore({ handle: null, isInitializing: false });
      }
    } catch (e) {
      console.error('Error loading folder handle:', e);
      setStore({ handle: null, isInitializing: false });
    }
  },
  setHandle: async (handle) => {
    try {
      await set('hajj-docs-handle', handle);
      setStore({ handle });
    } catch (e) {
      console.error('Error saving folder handle:', e);
    }
  },
  clearHandle: async () => {
    try {
      await del('hajj-docs-handle');
      setStore({ handle: null });
    } catch (e) {
      console.error('Error deleting folder handle:', e);
    }
  }
}));
