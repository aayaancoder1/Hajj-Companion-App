import React from 'react';
import { cn } from '../ui/Button';

interface FilterChipProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

export const FilterChip: React.FC<FilterChipProps> = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={cn(
      "px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 whitespace-nowrap",
      active ? "bg-primary text-on-primary" : "bg-surface-variant text-on-surface-variant hover:bg-surface-variant/80"
    )}
  >
    {label}
  </button>
);
