import React from 'react';
import { Card } from '../ui/Card';
import { ExternalLink, Phone, Building2 } from 'lucide-react';
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
        <p className="text-on-primary/90 text-sm mb-4 leading-relaxed">{hotel.address}</p>
        <p className="font-serif text-on-primary/80 text-sm mb-6 text-right" dir="rtl">{hotel.arabicAddress}</p>
        
        <div className="flex gap-3">
          <Button 
            variant="secondary" 
            size="sm" 
            className="flex-1 bg-surface-container-lowest text-primary hover:bg-surface-variant border-none"
            onClick={() => window.open(hotel.mapsUrl, '_blank')}
          >
            <ExternalLink size={16} /> Maps
          </Button>
          <Button 
            variant="ghost" 
            size="sm"
            className="flex-1 border-on-primary/30 text-on-primary hover:bg-on-primary/10"
            onClick={() => window.location.href = `tel:${hotel.frontDeskPhone.replace(/\s+/g, '')}`}
          >
            <Phone size={16} /> Call Desk
          </Button>
        </div>
      </div>
    </Card>
  );
};
