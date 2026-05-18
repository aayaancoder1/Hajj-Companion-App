import React, { useState } from 'react';
import { Navigation } from 'lucide-react';
import { cn } from '../ui/Button';

export const LocateMeButton: React.FC<{ onLocated: () => void }> = ({ onLocated }) => {
  const [locating, setLocating] = useState(false);

  const handleClick = () => {
    setLocating(true);
    // Mock geolocation delay
    setTimeout(() => {
      setLocating(false);
      onLocated();
    }, 800);
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "w-12 h-12 rounded-full bg-surface-container-lowest text-primary flex items-center justify-center shadow-lg transition-all",
        locating ? "animate-pulse scale-95" : "hover:scale-105"
      )}
      aria-label="Locate me"
    >
      <Navigation size={24} className={cn(locating ? "opacity-50" : "opacity-100")} />
    </button>
  );
};
