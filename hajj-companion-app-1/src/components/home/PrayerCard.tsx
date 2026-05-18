import React, { useEffect, useState } from 'react';
import { Card } from '../ui/Card';
import { useAppStore } from '../../store';
import { getCurrentAndNextPrayer } from '../../utils/prayerTimes';

export const PrayerCard: React.FC = () => {
  const { selectedCity } = useAppStore();
  const [prayerData, setPrayerData] = useState(() => getCurrentAndNextPrayer(selectedCity));

  useEffect(() => {
    // Update prayer data when city changes
    setPrayerData(getCurrentAndNextPrayer(selectedCity));
    
    // Refresh countdown every minute
    const interval = setInterval(() => {
      setPrayerData(getCurrentAndNextPrayer(selectedCity));
    }, 60000);
    
    return () => clearInterval(interval);
  }, [selectedCity]);

  return (
    <Card className="p-6 relative overflow-hidden bg-surface-container-lowest">
      {/* Decorative background accent */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
      
      <div className="flex flex-col gap-4 relative z-10">
        <div className="flex items-center justify-between">
          <p className="text-on-surface-variant text-sm font-semibold uppercase tracking-widest">
            Current Prayer
          </p>
          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
            {selectedCity === 'Makkah' ? 'Masjid al-Haram' : 'Masjid an-Nabawi'}
          </span>
        </div>
        
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-5xl font-serif text-on-surface font-semibold tracking-tight">{prayerData.current.name}</h2>
            <p className="text-on-surface-variant mt-1 text-lg">{prayerData.current.timeString}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-on-surface-variant mb-0.5">{prayerData.next.name} in</p>
            <p className="text-xl font-medium text-primary">{prayerData.countdown}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};
