import React from 'react';
import { Card } from '../ui/Card';
import { Phone, MessageCircle } from 'lucide-react';
import type { EmergencyContact } from '../../data/emergencyContacts';
import { Button } from '../ui/Button';

export const EmergencyContactCard: React.FC<{ contact: EmergencyContact }> = ({ contact }) => {
  return (
    <Card className="p-4 bg-surface-container-lowest border-none shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-semibold text-lg text-on-surface">{contact.name}</h3>
          <p className="text-secondary font-medium text-sm">{contact.role}</p>
        </div>
      </div>
      
      {contact.note && (
        <p className="text-on-surface-variant text-sm mb-4 leading-snug bg-surface-variant/30 p-2.5 rounded-lg border border-outline-variant/30">
          {contact.note}
        </p>
      )}

      <div className="flex gap-3 mt-auto">
        <Button 
          variant="primary" 
          size="sm" 
          className="flex-1"
          onClick={() => window.location.href = `tel:${contact.phone.replace(/\s+/g, '')}`}
        >
          <Phone size={16} /> Call
        </Button>
        
        {contact.whatsapp && (
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex-1 border-primary/30 text-primary hover:bg-primary/5"
            onClick={() => window.open(`https://wa.me/${contact.whatsapp?.replace(/\s+/g, '')}`, '_blank')}
          >
            <MessageCircle size={16} /> WhatsApp
          </Button>
        )}
      </div>
    </Card>
  );
};
