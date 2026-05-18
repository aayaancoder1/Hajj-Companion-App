import React from 'react';
import { Card } from '../ui/Card';
import { AlertTriangle } from 'lucide-react';

export const WarningCard: React.FC<{ message: string }> = ({ message }) => (
  <Card className="p-4 bg-secondary-container/20 border border-secondary-container/30 flex items-start gap-3">
    <AlertTriangle size={18} className="text-secondary shrink-0 mt-0.5" />
    <p className="text-on-surface-variant text-sm font-medium leading-snug">{message}</p>
  </Card>
);
