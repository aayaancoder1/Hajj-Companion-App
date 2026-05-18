import React from 'react';
import { Card } from '../ui/Card';
import { Bus, Clock, ExternalLink } from 'lucide-react';
import { DistanceBadge } from './DistanceBadge';
import type { ShuttlePoint } from '../../data/shuttlePoints';

export const ShuttleInfoCard: React.FC<{ shuttle: ShuttlePoint }> = ({ shuttle }) => {
  return (
    <Card className="p-4 bg-surface-container-low border border-surface-container flex flex-col gap-3">
      <div className="flex justify-between items-start gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
            <Bus size={20} />
          </div>
          <div>
            <h3 className="font-semibold text-on-surface">{shuttle.name}</h3>
            <div className="flex items-center gap-1.5 text-xs text-on-surface-variant mt-0.5 font-medium">
              <Clock size={12} /> Every {shuttle.intervalMinutes} mins
            </div>
          </div>
        </div>
        <a 
          href={shuttle.mapsUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 -mr-2 -mt-2 text-primary hover:bg-primary/5 rounded-full transition-colors flex-shrink-0"
        >
          <ExternalLink size={20} />
        </a>
      </div>
      
      <p className="text-on-surface-variant text-sm bg-surface-variant/50 p-3 rounded-lg leading-snug">
        {shuttle.notes}
      </p>
      
      <div className="flex justify-end mt-1">
        <DistanceBadge meters={shuttle.walkingDistanceMeters} minutes={shuttle.walkingTimeMinutes} />
      </div>
    </Card>
  );
};
