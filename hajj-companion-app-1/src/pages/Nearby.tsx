import React from 'react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Card } from '../components/ui/Card';

export const Nearby: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500">
      <SectionHeader title="Nearby Essentials" subtitle="Useful places around you" />
      
      <div className="grid gap-4">
        <Card className="p-5">
          <h3 className="font-semibold text-on-surface text-lg mb-1">Al Rajhi Pharmacy</h3>
          <p className="text-on-surface-variant text-sm mb-3">5 min walk • Open 24/7</p>
          <div className="text-primary text-sm font-medium">Get Directions</div>
        </Card>
        
        <Card className="p-5">
          <h3 className="font-semibold text-on-surface text-lg mb-1">Medical Center</h3>
          <p className="text-on-surface-variant text-sm mb-3">12 min walk • Clock Tower Gate</p>
          <div className="text-primary text-sm font-medium">Get Directions</div>
        </Card>
      </div>
    </div>
  );
};
