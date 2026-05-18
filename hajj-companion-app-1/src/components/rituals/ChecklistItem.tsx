import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '../ui/Button';

interface ChecklistItemProps {
  label: string;
  isCompleted: boolean;
  onToggle: () => void;
}

export const ChecklistItem: React.FC<ChecklistItemProps> = ({ label, isCompleted, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={cn(
        "w-full flex items-center gap-4 p-3 rounded-xl transition-all duration-300 text-left group",
        isCompleted ? "bg-primary/5" : "bg-transparent hover:bg-surface-variant/50"
      )}
    >
      <div 
        className={cn(
          "w-6 h-6 rounded-full flex items-center justify-center shrink-0 border-2 transition-colors duration-300",
          isCompleted ? "bg-primary border-primary" : "border-outline-variant group-hover:border-primary/50"
        )}
      >
        <Check size={14} className={cn("text-on-primary transition-transform duration-300", isCompleted ? "scale-100" : "scale-0")} strokeWidth={3} />
      </div>
      <span className={cn(
        "text-sm font-medium transition-colors duration-300 flex-1",
        isCompleted ? "text-primary/70 line-through" : "text-on-surface"
      )}>
        {label}
      </span>
    </button>
  );
};
