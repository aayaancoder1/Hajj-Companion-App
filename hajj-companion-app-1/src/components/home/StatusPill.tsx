import React from 'react';
import { cn } from '../ui/Button';

export type StatusLevel = 'light' | 'moderate' | 'heavy';

interface StatusPillProps {
  level: StatusLevel;
  className?: string;
}

export const StatusPill: React.FC<StatusPillProps> = ({ level, className }) => {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-1 text-[11px] font-bold rounded-full uppercase tracking-widest',
        {
          'bg-primary/10 text-primary': level === 'light',
          'bg-secondary/15 text-secondary': level === 'moderate',
          'bg-error/10 text-error': level === 'heavy',
        },
        className
      )}
    >
      {level === 'light' && 'Light'}
      {level === 'moderate' && 'Moderate'}
      {level === 'heavy' && 'Heavy'}
    </span>
  );
};
