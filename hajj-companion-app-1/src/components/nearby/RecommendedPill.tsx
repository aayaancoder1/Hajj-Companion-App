import React from 'react';
import { Star } from 'lucide-react';

export const RecommendedPill: React.FC = () => {
  return (
    <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-secondary/10 text-secondary text-[10px] font-bold rounded-sm uppercase tracking-wider">
      <Star size={10} fill="currentColor" />
      <span>Recommended</span>
    </div>
  );
};
