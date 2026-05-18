import React from 'react';
import { Card } from '../ui/Card';
import { StatusPill, type StatusLevel } from './StatusPill';
import { Users } from 'lucide-react';

interface CrowdCardProps {
  level: StatusLevel;
  title: string;
  recommendation: string;
}

export const CrowdCard: React.FC<CrowdCardProps> = ({ level, title, recommendation }) => {
  return (
    <Card className="p-5 flex flex-col gap-3">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2 text-primary font-serif">
          <Users size={18} className="text-primary/70" />
          <h3 className="font-semibold text-lg">{title}</h3>
        </div>
        <StatusPill level={level} />
      </div>
      <p className="text-on-surface-variant text-sm leading-relaxed">
        {recommendation}
      </p>
    </Card>
  );
};
