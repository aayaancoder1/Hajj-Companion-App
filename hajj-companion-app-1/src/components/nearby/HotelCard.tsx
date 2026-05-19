import React from 'react';
import { Card } from '../ui/Card';
import { ExternalLink, Building2 } from 'lucide-react';
import type { HotelInfo } from '../../data/hotelInfo';
import { Button } from '../ui/Button';

export const HotelCard: React.FC<{ hotel: HotelInfo }> = ({ hotel }) => {
  return (
    <Card className="p-5 bg-primary text-on-primary border-none shadow-md overflow-hidden relative">
      <div className="absolute -right-6 -top-6 text-on-primary/10 pointer-events-none">
        <Building2 size={120} strokeWidth={1} />
      </div>
      <div className="relative z-10">
        <h3 className="font-serif text-xl font-bold mb-1 pr-8">{hotel.name}</h3>
        
        {(hotel.buildingNumber || hotel.roomNumbers) && (
          <div className="bg-on-primary/10 p-3 rounded-lg mb-4 text-sm">
            {hotel.buildingNumber && (
              <p className="font-medium text-on-primary mb-1">Building Number: <span className="font-bold">{hotel.buildingNumber}</span></p>
            )}
            {hotel.roomNumbers && hotel.roomNumbers.length > 0 && (
              <div className="flex flex-col gap-0.5 mt-1">
                {hotel.roomNumbers.map((room, idx) => (
                  <p key={idx} className="text-on-primary/90">• {room}</p>
                ))}
              </div>
            )}
          </div>
        )}

        <p className="text-on-primary/90 text-sm mb-2 leading-relaxed">{hotel.address}</p>
        <p className="font-serif text-on-primary/80 text-sm mb-6 text-right" dir="rtl">{hotel.arabicAddress}</p>
        
        <div className="flex gap-3">
          <Button 
            variant="secondary" 
            size="sm" 
            className="w-full bg-surface-container-lowest text-primary hover:bg-surface-variant border-none"
            onClick={() => window.open(hotel.mapsUrl, '_blank')}
          >
            <ExternalLink size={16} /> Open in Maps
          </Button>
        </div>
      </div>
    </Card>
  );
};
