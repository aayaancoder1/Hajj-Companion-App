import React from 'react';
import { Footprints } from 'lucide-react';

interface DistanceBadgeProps {
  meters: number;
  minutes: number;
}

export const DistanceBadge: React.FC<DistanceBadgeProps> = ({ meters, minutes }) => {
  return (
    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-surface-variant text-on-surface-variant text-xs font-semibold rounded-full tracking-wide">
      <Footprints size={12} className="opacity-70" />
      <span>{minutes} min ({meters}m)</span>
    </div>
  );
};
