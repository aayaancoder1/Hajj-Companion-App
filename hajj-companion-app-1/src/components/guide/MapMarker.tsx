import React from 'react';
import { MapPin, Droplets, HeartPulse, DoorOpen, Bath } from 'lucide-react';
import type { MapFeature } from '../../maps/mapData';
import { cn } from '../ui/Button';

interface MapMarkerProps {
  feature: MapFeature;
  isActive: boolean;
  onClick: () => void;
}

export const MapMarker: React.FC<MapMarkerProps> = ({ feature, isActive, onClick }) => {
  const getIcon = () => {
    switch (feature.type) {
      case 'gate': return DoorOpen;
      case 'medical': return HeartPulse;
      case 'zamzam': return Droplets;
      case 'washroom': return Bath;
      default: return MapPin;
    }
  };
  
  const Icon = getIcon();

  return (
    <button
      onClick={onClick}
      style={{ left: `${feature.x}%`, top: `${feature.y}%` }}
      className={cn(
        "absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group outline-none",
        isActive ? "z-20 scale-125" : "z-10 scale-100 hover:scale-110"
      )}
    >
      <div className={cn(
        "flex items-center justify-center rounded-full shadow-md transition-colors",
        isActive ? "bg-primary text-on-primary w-10 h-10 ring-4 ring-primary/20" : "bg-surface-container-lowest text-primary w-8 h-8"
      )}>
        <Icon size={isActive ? 20 : 16} />
      </div>
      {isActive && (
        <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-surface-container-lowest px-2 py-1 rounded text-xs font-bold text-on-surface whitespace-nowrap shadow-sm pointer-events-none">
          {feature.title}
        </div>
      )}
    </button>
  );
};
