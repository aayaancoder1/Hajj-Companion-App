import React from 'react';
import { Compass, BookOpen, MapPin, AlertCircle } from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { PrayerCard } from '../components/home/PrayerCard';
import { CityToggle } from '../components/home/CityToggle';
import { CrowdCard } from '../components/home/CrowdCard';
import { QuickActionCard } from '../components/home/QuickActionCard';
import { QuoteCard } from '../components/home/QuoteCard';
import { OfflineBanner } from '../components/home/OfflineBanner';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 pb-8 animate-in fade-in duration-500">
      
      {/* 1. Greeting / Header Area */}
      <header className="pt-2 flex flex-col gap-1">
        <h1 className="text-3xl font-serif font-bold text-on-background tracking-tight">
          Assalamu Alaikum, Pilgrim
        </h1>
        <p className="text-on-surface-variant text-base">
          Today is 14 Dhul-Hijjah, 1445 AH
        </p>
      </header>

      {/* 2. Offline Status Awareness */}
      <OfflineBanner />

      {/* 3. Makkah/Madinah City Toggle */}
      <CityToggle />

      {/* 4. Current Prayer Card & Next Prayer Countdown */}
      <section>
        <PrayerCard />
      </section>

      {/* 5 & 6. Crowd Guidance Recommendation & Intensity Indicator */}
      <section>
        <SectionHeader title="Best time to visit Kaaba" subtitle="Optimized for Tawaf clarity" />
        <CrowdCard 
          level="light" 
          title="Lower Crowds" 
          recommendation="Lower crowds predicted at 2:00 AM. Ideal for a peaceful spiritual experience." 
        />
      </section>

      {/* 7. Quick Action Shortcuts */}
      <section>
        <SectionHeader title="Quick Actions" subtitle="Navigate your journey" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <QuickActionCard 
            title="Haram Guide" 
            description="Interactive maps and gates" 
            icon={Compass} 
            to="/guide" 
          />
          <QuickActionCard 
            title="Rituals" 
            description="Step-by-step guidance" 
            icon={BookOpen} 
            to="/rituals" 
          />
          <QuickActionCard 
            title="Nearby" 
            description="Pharmacies and essentials" 
            icon={MapPin} 
            to="/nearby" 
          />
          <QuickActionCard 
            title="Emergency" 
            description="Immediate assistance contacts" 
            icon={AlertCircle} 
            to="/emergency" 
          />
        </div>
      </section>

      {/* 9. Contextual Information Cards */}
      <section>
        <QuoteCard 
          quote="And proclaim to the people the Hajj [pilgrimage]; they will come to you on foot and on every lean camel; they will come from every distant pass."
          source="Surah Al-Hajj, 22:27"
        />
      </section>
      
    </div>
  );
};
