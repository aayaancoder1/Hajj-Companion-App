import React from 'react';
import { cn } from './Button';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  elevation?: 'none' | 'sm' | 'md';
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, elevation = 'sm', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-2xl bg-surface-container-lowest border border-surface-container overflow-hidden',
          {
            'shadow-sm': elevation === 'sm',
            'shadow-md': elevation === 'md',
            'shadow-none': elevation === 'none',
          },
          className
        )}
        {...props}
      />
    );
  }
);
Card.displayName = 'Card';
