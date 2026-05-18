import React from 'react';
import { Card } from '../ui/Card';
import type { LostGuidanceStep } from '../../data/lostGuidance';

export const LostGuidanceCard: React.FC<{ step: LostGuidanceStep }> = ({ step }) => {
  return (
    <Card className="p-4 bg-surface-container-low flex items-start gap-4">
      <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm shrink-0">
        {step.step}
      </div>
      <div className="flex-1 mt-1">
        <h3 className="font-semibold text-on-surface mb-1">{step.title}</h3>
        <p className="text-on-surface-variant text-sm leading-relaxed">
          {step.description}
        </p>
      </div>
    </Card>
  );
};
