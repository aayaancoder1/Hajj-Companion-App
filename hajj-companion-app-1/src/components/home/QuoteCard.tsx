import React from 'react';
import { Card } from '../ui/Card';
import { Book } from 'lucide-react';

interface QuoteCardProps {
  quote: string;
  source: string;
}

export const QuoteCard: React.FC<QuoteCardProps> = ({ quote, source }) => {
  return (
    <Card className="p-6 bg-surface-container-low border-none relative overflow-hidden">
      {/* Decorative vertical accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary/60 rounded-l-2xl" />
      
      <div className="flex flex-col gap-3">
        <Book size={20} className="text-secondary/60" />
        <blockquote className="font-serif text-[17px] leading-relaxed text-on-surface">
          "{quote}"
        </blockquote>
        <p className="text-on-surface-variant text-sm font-medium mt-1">
          — {source}
        </p>
      </div>
    </Card>
  );
};
