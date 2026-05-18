import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { DayBadge } from './DayBadge';
import { WarningCard } from './WarningCard';
import { RitualChecklist } from './RitualChecklist';
import type { TimelineItem } from '../../data/ritualTimeline';
import { ChevronDown } from 'lucide-react';
import { cn } from '../ui/Button';

export const RitualCard: React.FC<{ item: TimelineItem; isLast?: boolean; defaultExpanded?: boolean }> = ({ item, isLast, defaultExpanded = false }) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <div className="relative pl-8 pb-6">
      {!isLast && (
        <div className="absolute top-8 bottom-0 left-[11px] w-0.5 bg-surface-variant/50" />
      )}
      <div className="absolute top-2 left-0 w-6 h-6 rounded-full bg-surface-container-lowest border-4 border-background flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-primary/50" />
      </div>

      <Card className="p-0 overflow-hidden bg-surface-container-lowest transition-shadow duration-300 hover:shadow-md">
        <button 
          onClick={() => setExpanded(!expanded)}
          className="w-full text-left p-5 flex flex-col gap-2 focus:outline-none"
        >
          <div className="flex items-start justify-between">
            <DayBadge day={item.day} />
            <ChevronDown size={20} className={cn("text-on-surface-variant transition-transform duration-300 shrink-0", expanded ? "rotate-180" : "")} />
          </div>
          <h3 className="text-xl font-serif font-semibold text-on-surface">{item.title}</h3>
          <p className="text-on-surface-variant text-sm leading-relaxed">{item.description}</p>
        </button>

        {/* Expandable content */}
        <div 
          className={cn(
            "px-5 transition-all duration-300 ease-in-out origin-top overflow-hidden", 
            expanded ? "max-h-[1500px] pb-5 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          {item.warnings && item.warnings.length > 0 && (
            <div className="flex flex-col gap-3 mt-2">
              {item.warnings.map((warning, idx) => (
                <WarningCard key={idx} message={warning} />
              ))}
            </div>
          )}

          {item.checklistIds && item.checklistIds.length > 0 && (
            <RitualChecklist ids={item.checklistIds} />
          )}
        </div>
      </Card>
    </div>
  );
};
