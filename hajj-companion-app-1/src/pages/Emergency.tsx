import React, { useMemo } from 'react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { HotelCard } from '../components/nearby/HotelCard';
import { hotels } from '../data/hotelInfo';
import { ImOkayButton } from '../components/emergency/ImOkayButton';
import { EmergencyContactCard } from '../components/emergency/EmergencyContactCard';
import { emergencyContacts } from '../data/emergencyContacts';
import { LostGuidanceCard } from '../components/emergency/LostGuidanceCard';
import { lostGuidance } from '../data/lostGuidance';
import { MedicalInfoCard } from '../components/emergency/MedicalInfoCard';
import { medicalInfo } from '../data/medicalInfo';
import { SupportTipCard } from '../components/emergency/SupportTipCard';
import { supportTips } from '../data/supportTips';
import { useAppStore } from '../store';

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
          Organized support during uncertainty.
        </p>
      </header>

      {/* 4. “I’m Okay” Quick Actions */}
      <section>
        <ImOkayButton />
      </section>

      {/* 1. Hotel & Stay Information */}
      <section>
        <SectionHeader title="Your Hotel" subtitle="Show this to local authorities if lost" />
        <HotelCard hotel={cityHotel} />
      </section>

      {/* 5. Lost Guidance */}
      <section>
        <SectionHeader title="If You Are Lost" subtitle="Simple step-by-step guide" />
        <div className="flex flex-col gap-3">
          {lostGuidance.map(step => (
            <LostGuidanceCard key={step.id} step={step} />
          ))}
        </div>
      </section>

      {/* 2. Emergency Contacts */}
      <section>
        <SectionHeader title="Emergency Contacts" subtitle="Reach out for help" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {emergencyContacts.map(contact => (
            <EmergencyContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      </section>

      {/* 3. Medical & Health Information */}
      <section>
        <SectionHeader title="Medical Notes" subtitle="Important health information" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {medicalInfo.map(info => (
            <MedicalInfoCard key={info.id} info={info} />
          ))}
        </div>
      </section>

      {/* 6. Important Support Information */}
      <section>
        <SectionHeader title="Practical Reminders" subtitle="Keep these in mind" />
        <div className="flex flex-col gap-3">
          {supportTips.map(tip => (
            <SupportTipCard key={tip.id} tip={tip} />
          ))}
        </div>
      </section>

    </div>
  );
};
