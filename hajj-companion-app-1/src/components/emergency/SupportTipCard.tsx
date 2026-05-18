import React from 'react';
import { Card } from '../ui/Card';
import { Info } from 'lucide-react';
import type { SupportTip } from '../../data/supportTips';

export const SupportTipCard: React.FC<{ tip: SupportTip }> = ({ tip }) => {
  return (
    <Card className="p-4 bg-surface-container-lowest border-none shadow-sm flex items-start gap-3">
      <div className="text-secondary shrink-0 mt-0.5">
        <Info size={18} />
      </div>
      <div>
        <h3 className="font-semibold text-on-surface text-sm mb-1">{tip.title}</h3>
        <p className="text-on-surface-variant text-sm leading-snug">
          {tip.tip}
        </p>
      </div>
    </Card>
  );
};
