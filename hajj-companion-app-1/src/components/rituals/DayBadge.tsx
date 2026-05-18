import React from 'react';

export const DayBadge: React.FC<{ day: string }> = ({ day }) => (
  <div className="inline-flex items-center px-3 py-1 bg-surface-variant text-on-surface-variant text-xs font-bold rounded-full uppercase tracking-widest mb-2">
    {day}
  </div>
);
