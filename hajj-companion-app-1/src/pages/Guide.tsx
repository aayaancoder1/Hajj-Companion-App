import React from 'react';
import { MapContainer } from '../components/guide/MapContainer';
import { CityToggle } from '../components/home/CityToggle';

export const Guide: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 pb-8 h-[calc(100vh-80px)] animate-in fade-in duration-500">
      <header className="pt-2 flex justify-between items-center shrink-0">
        <div>
          <h1 className="text-3xl font-serif font-bold text-on-background tracking-tight mb-1">
            Haram Guide
          </h1>
          <p className="text-on-surface-variant text-base">
            Orientation & amenities
          </p>
        </div>
        <CityToggle />
      </header>

      <div className="flex-1 min-h-[400px]">
        <MapContainer />
      </div>
    </div>
  );
};
