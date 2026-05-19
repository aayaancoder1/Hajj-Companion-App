import React from 'react';
import { useAppStore } from '../../store';
import { Info, Map as MapIcon, Droplets, ArrowUpRight } from 'lucide-react';

export const MapContainer: React.FC = () => {
  const { selectedCity } = useAppStore();

  return (
    <div className="flex flex-col gap-4 h-full relative overflow-y-auto no-scrollbar">
      
      {/* High Quality Static Map Container */}
      <div className="w-full aspect-[4/3] bg-surface-container rounded-3xl overflow-hidden border border-outline-variant/30 shadow-sm relative group cursor-crosshair">
        
        {/* Placeholder for real static map image */}
        <div className="absolute inset-0 flex items-center justify-center bg-surface-variant/20">
          <svg viewBox="0 0 200 150" className="w-full h-full text-primary/10" fill="currentColor">
            <rect x="50" y="30" width="100" height="90" rx="12" />
            <circle cx="100" cy="75" r="20" className="text-background" />
          </svg>
        </div>

        <div className="absolute inset-0 p-4 flex flex-col items-center justify-center text-center opacity-80">
          <MapIcon size={32} className="text-primary mb-2 opacity-50" />
          <p className="text-primary font-medium text-sm">
            [Static Map Image: {selectedCity}]
          </p>
          <p className="text-on-surface-variant text-xs mt-1 max-w-[200px]">
            Pinch to zoom when image is added.
          </p>
        </div>
      </div>

      {/* Quick Reference Overlays / Cards instead of interactive pins */}
      <div className="flex flex-col gap-3 mt-2">
        <h3 className="font-serif text-lg font-semibold text-on-surface px-1">Key Locations</h3>
        
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-surface-container-low p-3 rounded-2xl border border-surface-container shadow-sm flex flex-col gap-2">
            <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
              <ArrowUpRight size={18} />
            </div>
            <h4 className="font-semibold text-on-surface text-sm">Main Gates</h4>
            <p className="text-xs text-on-surface-variant leading-snug">King Abdulaziz (Gate 1), King Fahd (Gate 79)</p>
          </div>

          <div className="bg-surface-container-low p-3 rounded-2xl border border-surface-container shadow-sm flex flex-col gap-2">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Droplets size={18} />
            </div>
            <h4 className="font-semibold text-on-surface text-sm">Zamzam Points</h4>
            <p className="text-xs text-on-surface-variant leading-snug">Available at all entrances and basement levels</p>
          </div>

          <div className="bg-surface-container-low p-3 rounded-2xl border border-surface-container shadow-sm flex flex-col gap-2 col-span-2">
            <div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center text-on-surface-variant">
              <Info size={18} />
            </div>
            <h4 className="font-semibold text-on-surface text-sm">Washrooms & Wudu</h4>
            <p className="text-xs text-on-surface-variant leading-snug">Located outside the main courtyards. Look for underground facilities (e.g., Courtyard 3).</p>
          </div>
        </div>
      </div>
    </div>
  );
};
