import React from 'react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Card } from '../components/ui/Card';

export const HaramGuide: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500">
      <SectionHeader title="Haram Guide" subtitle="Interactive maps and gates" />
      
      <div className="grid gap-4">
        <Card className="p-5 flex items-center gap-4">
          <div className="w-12 h-12 bg-surface-variant rounded-full flex items-center justify-center shrink-0">
            <span className="font-serif font-bold text-on-surface-variant">M</span>
          </div>
          <div>
            <h3 className="font-semibold text-on-surface text-lg">Masjid al-Haram</h3>
            <p className="text-on-surface-variant text-sm mt-0.5">Makkah</p>
          </div>
        </Card>
        
        <Card className="p-5 flex items-center gap-4">
          <div className="w-12 h-12 bg-surface-variant rounded-full flex items-center justify-center shrink-0">
            <span className="font-serif font-bold text-on-surface-variant">N</span>
          </div>
          <div>
            <h3 className="font-semibold text-on-surface text-lg">Masjid an-Nabawi</h3>
            <p className="text-on-surface-variant text-sm mt-0.5">Madinah</p>
          </div>
        </Card>
      </div>
    </div>
  );
};
