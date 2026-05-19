import React, { useMemo } from 'react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { HotelCard } from '../components/nearby/HotelCard';
import { hotels } from '../data/hotelInfo';
import { ImOkayButton } from '../components/emergency/ImOkayButton';
import { EmergencyContactCard } from '../components/emergency/EmergencyContactCard';
import { emergencyContacts } from '../data/emergencyContacts';
import { LostGuidanceCard } from '../components/emergency/LostGuidanceCard';
import { lostGuidance } from '../data/lostGuidance';
import { useAppStore } from '../store';
import { Card } from '../components/ui/Card';
import { PlaneTakeoff, PlaneLanding } from 'lucide-react';

export const Emergency: React.FC = () => {
  const { selectedCity } = useAppStore();
  const cityHotel = useMemo(() => hotels.find(h => h.city === selectedCity) || hotels[0], [selectedCity]);

  return (
    <div className="flex flex-col gap-8 pb-8 animate-in fade-in duration-500">
      <header className="pt-2">
        <h1 className="text-3xl font-serif font-bold text-on-background tracking-tight mb-2">
          Support & Guidance
        </h1>
        <p className="text-on-surface-variant text-base">
          Essential contacts and orientation.
        </p>
      </header>

      {/* “I’m Okay” Quick Actions */}
      <section>
        <ImOkayButton />
      </section>

      {/* Hotel & Stay Information */}
      <section>
        <SectionHeader title="Your Hotel" subtitle="Show this to local authorities if lost" />
        <HotelCard hotel={cityHotel} />
      </section>

      {/* Emergency Contacts */}
      <section>
        <SectionHeader title="Emergency Contacts" subtitle="Reach out for help" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {emergencyContacts.map(contact => (
            <EmergencyContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      </section>

      {/* Flight Information */}
      <section>
        <SectionHeader title="Travel Reference" subtitle="Flight details" />
        <Card className="p-4 bg-surface-container-low border border-surface-container flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <PlaneTakeoff size={20} />
            </div>
            <div>
              <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-0.5">Departure</p>
              <h3 className="font-bold text-on-surface text-lg">XY-8100</h3>
              <p className="text-sm text-on-surface-variant mt-0.5">20 May (Early Morning)</p>
            </div>
          </div>
          
          <div className="h-px bg-outline-variant/30 w-full" />
          
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
              <PlaneLanding size={20} />
            </div>
            <div>
              <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-0.5">Return</p>
              <h3 className="font-bold text-on-surface text-lg">XY-9244</h3>
              <p className="text-sm text-on-surface-variant mt-0.5">13 June</p>
            </div>
          </div>
        </Card>
      </section>

      {/* Lost Guidance */}
      <section>
        <SectionHeader title="If You Are Lost" subtitle="Simple step-by-step guide" />
        <div className="flex flex-col gap-3">
          {lostGuidance.map(step => (
            <LostGuidanceCard key={step.id} step={step} />
          ))}
        </div>
      </section>

    </div>
  );
};
