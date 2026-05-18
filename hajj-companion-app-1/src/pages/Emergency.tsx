import React from 'react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Phone } from 'lucide-react';

export const Emergency: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500">
      <SectionHeader title="Emergency" subtitle="Immediate assistance" />
      
      <Card className="p-6 bg-error-container border-error/20">
        <h3 className="font-semibold text-on-error-container text-xl mb-2">Medical Emergency</h3>
        <p className="text-on-error-container/80 mb-6">
          Call the Saudi Red Crescent Authority for immediate medical assistance.
        </p>
        <Button className="w-full bg-error text-on-error hover:bg-error/90 border-0 flex gap-2">
          <Phone size={18} />
          Call 997
        </Button>
      </Card>
      
      <div className="grid gap-4 mt-2">
        <Card className="p-5">
          <h3 className="font-semibold text-on-surface text-lg mb-1">Police</h3>
          <p className="text-on-surface-variant text-sm mb-4">For security incidents</p>
          <Button variant="secondary" className="w-full flex gap-2">
            <Phone size={18} />
            Call 999
          </Button>
        </Card>
        
        <Card className="p-5">
          <h3 className="font-semibold text-on-surface text-lg mb-1">Lost Person</h3>
          <p className="text-on-surface-variant text-sm mb-4">Go to the nearest Haram security desk or open the guide.</p>
          <Button variant="secondary" className="w-full">
            View Lost Person Guide
          </Button>
        </Card>
      </div>
    </div>
  );
};
