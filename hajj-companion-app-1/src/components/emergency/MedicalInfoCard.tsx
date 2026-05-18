import React from 'react';
import { Card } from '../ui/Card';
import { Activity } from 'lucide-react';
import type { MedicalInfo } from '../../data/medicalInfo';

export const MedicalInfoCard: React.FC<{ info: MedicalInfo }> = ({ info }) => {
  return (
    <Card className="p-4 bg-surface-container border border-surface-container-highest flex flex-col gap-2 relative overflow-hidden">
      <div className="flex items-center gap-2 mb-1">
        <Activity size={16} className="text-secondary" />
        <h3 className="font-semibold text-on-surface">{info.condition}</h3>
      </div>
      
      <ul className="flex flex-col gap-1.5 pl-6 list-disc marker:text-secondary/50">
        {info.notes.map((note, idx) => (
          <li key={idx} className="text-on-surface-variant text-sm leading-snug">
            {note}
          </li>
        ))}
      </ul>
    </Card>
  );
};
