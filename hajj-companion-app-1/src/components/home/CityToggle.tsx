import React from 'react';
import { useAppStore } from '../../store';
import { cn } from '../ui/Button';

export const CityToggle: React.FC = () => {
  const { selectedCity, setSelectedCity } = useAppStore();

  return (
    <div className="flex bg-surface-container rounded-full p-1 border border-surface-variant">
      <button
        onClick={() => setSelectedCity('Makkah')}
        className={cn(
          'flex-1 py-2 px-4 rounded-full text-sm font-semibold transition-all duration-300 ease-out',
          selectedCity === 'Makkah'
            ? 'bg-surface-container-lowest text-primary shadow-sm'
            : 'text-on-surface-variant hover:text-on-surface'
        )}
      >
        Makkah
      </button>
      <button
        onClick={() => setSelectedCity('Madinah')}
        className={cn(
          'flex-1 py-2 px-4 rounded-full text-sm font-semibold transition-all duration-300 ease-out',
          selectedCity === 'Madinah'
            ? 'bg-surface-container-lowest text-primary shadow-sm'
            : 'text-on-surface-variant hover:text-on-surface'
        )}
      >
        Madinah
      </button>
    </div>
  );
};
