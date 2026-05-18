import React from 'react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Card } from '../components/ui/Card';

export const Rituals: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500">
      <SectionHeader title="Rituals" subtitle="Step-by-step guidance" />
      
      <div className="grid gap-4">
        <Card className="p-5">
          <h3 className="font-semibold text-on-surface text-lg mb-2">Umrah Guide</h3>
          <p className="text-on-surface-variant text-sm">
            Ihram, Tawaf, Sa'i, and Halq/Taqsir.
          </p>
        </Card>
        
        <Card className="p-5 opacity-70">
          <h3 className="font-semibold text-on-surface text-lg mb-2">Hajj Days</h3>
          <p className="text-on-surface-variant text-sm">
            8th to 13th of Dhul Hijjah steps.
          </p>
        </Card>

        <Card className="p-5">
          <h3 className="font-semibold text-on-surface text-lg mb-2">Duas</h3>
          <p className="text-on-surface-variant text-sm">
            Supplications for various moments.
          </p>
        </Card>
      </div>
    </div>
  );
};
