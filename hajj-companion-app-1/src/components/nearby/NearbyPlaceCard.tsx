import React from 'react';
import { Card } from '../ui/Card';
import { ExternalLink } from 'lucide-react';
import { DistanceBadge } from './DistanceBadge';
import { RecommendedPill } from './RecommendedPill';
import type { NearbyPlace } from '../../data/nearbyPlaces';

export const NearbyPlaceCard: React.FC<{ place: NearbyPlace }> = ({ place }) => {
  return (
    <Card className="p-4 bg-surface-container-lowest transition-shadow hover:shadow-md border-transparent">
      <div className="flex justify-between items-start gap-4 mb-2">
        <div className="flex flex-col items-start gap-1.5">
          {place.recommended && <RecommendedPill />}
          <h3 className="font-semibold text-base text-on-surface">{place.name}</h3>
        </div>
        <a 
          href={place.mapsUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 -mr-2 -mt-2 text-primary hover:bg-primary/5 rounded-full transition-colors flex-shrink-0"
          aria-label={`Open ${place.name} in Google Maps`}
        >
          <ExternalLink size={20} />
        </a>
      </div>
      
      <p className="text-on-surface-variant text-sm mb-4 leading-snug">{place.description}</p>
      
      <div className="flex items-center justify-between mt-auto">
        <DistanceBadge meters={place.walkingDistanceMeters} minutes={place.walkingTimeMinutes} />
        {place.notes && (
          <span className="text-xs text-on-surface-variant/70 italic ml-2 text-right truncate">
            {place.notes}
          </span>
        )}
      </div>
    </Card>
  );
};
