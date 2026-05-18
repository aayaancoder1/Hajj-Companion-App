import React from 'react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { RitualTimeline } from '../components/rituals/RitualTimeline';
import { DuaCard } from '../components/rituals/DuaCard';
import { duas } from '../data/duas';

export const Rituals: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 pb-8 animate-in fade-in duration-500">
      
      <header className="pt-2">
        <h1 className="text-3xl font-serif font-bold text-on-background tracking-tight mb-2">
          Ritual Journey
        </h1>
        <p className="text-on-surface-variant text-base">
          Track your spiritual progress through the holy days.
        </p>
      </header>

      <section>
        <SectionHeader title="Journey Timeline" />
        <RitualTimeline />
      </section>

      <section>
        <SectionHeader title="Recommended Duas" subtitle="Supplications for your journey" />
        <div className="flex flex-col gap-4">
          {duas.map(dua => (
            <DuaCard 
              key={dua.id}
              title={dua.title}
              arabic={dua.arabic}
              transliteration={dua.transliteration}
              translation={dua.translation}
            />
          ))}
        </div>
      </section>

    </div>
  );
};
