import React from 'react';
import { cn } from './Button';

export interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
}

export const SectionHeader = React.forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ className, title, subtitle, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('mb-6', className)} {...props}>
        <h2 className="text-2xl font-serif font-semibold text-on-background tracking-tight">{title}</h2>
        {subtitle && <p className="text-on-surface-variant mt-1 text-base">{subtitle}</p>}
      </div>
    );
  }
);
SectionHeader.displayName = 'SectionHeader';
