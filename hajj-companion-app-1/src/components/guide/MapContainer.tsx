import React, { useState } from 'react';
import { mapFeatures, filterOptions } from '../../maps/mapData';
import type { MapFeatureType } from '../../maps/mapData';
import { MapMarker } from './MapMarker';
import { MarkerInfoSheet } from './MarkerInfoSheet';
import { FilterChip } from './FilterChip';
import { LocateMeButton } from './LocateMeButton';
import { useAppStore } from '../../store';

export const MapContainer: React.FC = () => {
  const { selectedCity } = useAppStore();
  const [activeFilter, setActiveFilter] = useState<MapFeatureType | 'all'>('all');
  const [activeMarkerId, setActiveMarkerId] = useState<string | null>(null);
  const [locationMessage, setLocationMessage] = useState<string | null>(null);

  const cityFeatures = mapFeatures.filter(f => f.city === selectedCity);
  const visibleFeatures = activeFilter === 'all' 
    ? cityFeatures 
    : cityFeatures.filter(f => f.type === activeFilter);

  const activeFeature = mapFeatures.find(f => f.id === activeMarkerId);

  const handleLocateMe = () => {
    // Mock geolocation response
    setLocationMessage("You appear near Gate 79.");
    setTimeout(() => setLocationMessage(null), 4000);
  };

  return (
    <div className="flex flex-col gap-4 h-full relative">
      {/* Filters */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 pt-1 px-1">
        <FilterChip 
          label="All" 
          active={activeFilter === 'all'} 
          onClick={() => { setActiveFilter('all'); setActiveMarkerId(null); }} 
        />
        {filterOptions.map(opt => (
          <FilterChip 
            key={opt.value} 
            label={opt.label} 
            active={activeFilter === opt.value} 
            onClick={() => { setActiveFilter(opt.value); setActiveMarkerId(null); }} 
          />
        ))}
      </div>

      {/* Map Area */}
      <div className="relative flex-1 bg-surface-container rounded-3xl overflow-hidden border border-surface-container-highest shadow-inner min-h-[400px]">
        {/* Placeholder SVG Map Background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-[150%] h-[150%] fill-surface-variant stroke-outline-variant stroke-[0.5]">
             <rect x="20" y="20" width="60" height="60" rx="10" />
             <rect x="35" y="35" width="30" height="30" rx="5" className="fill-background" />
             <path d="M50 20 v-10 M50 80 v10 M20 50 h-10 M80 50 h10" className="stroke-outline" />
          </svg>
        </div>

        {/* Markers */}
        <div className="absolute inset-0 p-8 pointer-events-none">
          <div className="relative w-full h-full pointer-events-auto">
            {visibleFeatures.map(feature => (
              <MapMarker 
                key={feature.id} 
                feature={feature} 
                isActive={activeMarkerId === feature.id}
                onClick={() => setActiveMarkerId(feature.id)}
              />
            ))}
          </div>
        </div>

        {/* Locate Me Button */}
        <div className="absolute bottom-4 right-4 pointer-events-auto z-10">
          <LocateMeButton onLocated={handleLocateMe} />
        </div>

        {/* Location Message */}
        {locationMessage && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-4 py-2 rounded-full text-sm font-medium shadow-md animate-in fade-in slide-in-from-top-4 z-20 whitespace-nowrap">
            {locationMessage}
          </div>
        )}
        
        {/* Info Sheet */}
        {activeFeature && (
          <MarkerInfoSheet 
            feature={activeFeature} 
            onClose={() => setActiveMarkerId(null)} 
          />
        )}
      </div>
    </div>
  );
};
