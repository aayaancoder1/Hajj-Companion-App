import React from 'react';
import type { MapFeature } from '../../maps/mapData';
import { Footprints, CheckCircle, Activity, X } from 'lucide-react';

interface MarkerInfoSheetProps {
  feature: MapFeature;
  onClose: () => void;
}

export const MarkerInfoSheet: React.FC<MarkerInfoSheetProps> = ({ feature, onClose }) => {
  return (
    <div className="absolute bottom-4 left-4 right-4 bg-surface-container-lowest rounded-3xl p-5 shadow-xl animate-in slide-in-from-bottom-8 z-30 pointer-events-auto">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 p-2 bg-surface-variant/50 rounded-full text-on-surface-variant hover:bg-surface-variant transition-colors"
        aria-label="Close"
      >
        <X size={16} />
      </button>
      
      <div className="pr-8 mb-4">
        <h3 className="font-serif text-xl font-bold text-on-surface">{feature.title}</h3>
        <p className="text-on-surface-variant text-sm capitalize">{feature.type}</p>
      </div>

      <div className="flex gap-4 mb-4">
        {feature.walkingTime && (
          <div className="flex items-center gap-1.5 text-sm font-medium text-on-surface">
            <Footprints size={16} className="text-secondary" />
            {feature.walkingTime}
          </div>
        )}
        {feature.accessible && (
          <div className="flex items-center gap-1.5 text-sm font-medium text-primary">
            <CheckCircle size={16} /> Accessible
          </div>
        )}
        {feature.traffic && (
          <div className="flex items-center gap-1.5 text-sm font-medium text-on-surface">
            <Activity size={16} className="text-secondary" />
            {feature.traffic} Traffic
          </div>
        )}
      </div>

      {feature.description && (
        <p className="text-on-surface-variant text-sm bg-surface-variant/30 p-3 rounded-xl leading-snug">
          {feature.description}
        </p>
      )}
    </div>
  );
};
