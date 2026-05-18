import React from 'react';
import { Card } from '../ui/Card';

export interface DuaCardProps {
  title?: string;
  arabic: string;
  transliteration: string;
  translation: string;
}

export const DuaCard: React.FC<DuaCardProps> = ({ title, arabic, transliteration, translation }) => (
  <Card className="p-5 flex flex-col gap-4 bg-surface-container-low border border-surface-container shadow-sm relative overflow-hidden">
    <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-full pointer-events-none" />
    
    {title && <h4 className="font-semibold text-primary/80 uppercase tracking-widest text-xs">{title}</h4>}
    
    <div className="text-right">
      <p className="font-serif text-2xl leading-relaxed text-on-surface" dir="rtl">{arabic}</p>
    </div>
    
    <div className="flex flex-col gap-2">
      <p className="text-on-surface-variant text-sm italic font-medium">{transliteration}</p>
      <p className="text-on-surface-variant text-sm">{translation}</p>
    </div>
  </Card>
);
