import React from 'react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Card } from '../components/ui/Card';
import { useAppStore } from '../store';

export const Home: React.FC = () => {
  const { selectedCity, isOffline } = useAppStore();

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500">
      <header className="pt-2">
        <h1 className="text-3xl font-serif font-bold text-primary">As-salamu alaykum</h1>
        <p className="text-on-surface-variant mt-1 text-lg">Your calm companion in {selectedCity}</p>
      </header>

      {isOffline && (
        <div className="bg-surface-variant text-on-surface-variant px-4 py-3 rounded-xl text-sm flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-outline"></div>
          You are currently offline. Basic features are still available.
        </div>
      )}

      <section>
        <SectionHeader title="Current Prayer" subtitle="Upcoming in 1 hr 20 min" />
        <Card className="p-6">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-on-surface-variant text-sm font-medium uppercase tracking-wider mb-1">Dhuhr</p>
              <p className="text-4xl font-serif text-on-surface">12:30 PM</p>
            </div>
            <div className="text-right">
              <p className="text-primary font-medium">Asr at 3:45 PM</p>
            </div>
          </div>
        </Card>
      </section>

      <section>
        <SectionHeader title="Haram Status" subtitle="Kaaba crowd level" />
        <Card className="p-6 bg-primary-container/10 border-primary/20">
          <h3 className="font-semibold text-lg text-primary mb-2">Manageable</h3>
          <p className="text-on-surface-variant">
            Current crowd levels are favorable. Recommended time to perform Tawaf.
          </p>
        </Card>
      </section>
    </div>
  );
};
