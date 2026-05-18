import React from 'react';
import { ritualTimeline } from '../../data/ritualTimeline';
import { RitualCard } from './RitualCard';

export const RitualTimeline: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {ritualTimeline.map((item, index) => (
        <RitualCard 
          key={item.id} 
          item={item} 
          isLast={index === ritualTimeline.length - 1} 
          defaultExpanded={index === 0}
        />
      ))}
    </div>
  );
};
