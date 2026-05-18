import React from 'react';
import { useAppStore } from '../../store';
import { CloudOff } from 'lucide-react';

export const OfflineBanner: React.FC = () => {
  const { isOffline } = useAppStore();

  if (!isOffline) return null;

  return (
    <div className="bg-surface-variant border border-outline-variant text-on-surface px-4 py-3 rounded-2xl text-sm flex items-start gap-3 animate-in fade-in slide-in-from-top-2">
      <CloudOff size={18} className="text-on-surface-variant shrink-0 mt-0.5" />
      <div>
        <p className="font-semibold mb-0.5">You are currently offline</p>
        <p className="text-on-surface-variant text-xs">
          Basic features and cached guides are still available. Real-time updates will resume once connected.
        </p>
      </div>
    </div>
  );
};
