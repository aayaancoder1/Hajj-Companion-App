import React from 'react';
import { Button } from '../ui/Button';
import { Heart } from 'lucide-react';

export const ImOkayButton: React.FC = () => {
  const handleQuickMessage = () => {
    const message = encodeURIComponent("I'm okay Alhamdulillah. Everything is fine.");
    // This tries to open the default SMS app with the pre-filled body
    window.location.href = `sms:?&body=${message}`;
  };

  return (
    <div className="bg-surface-variant/40 p-4 rounded-2xl border border-primary/20 flex flex-col sm:flex-row items-center gap-4 justify-between">
      <div>
        <h3 className="font-semibold text-on-surface mb-0.5 text-center sm:text-left">Quick Reassurance</h3>
        <p className="text-on-surface-variant text-sm text-center sm:text-left">Let your family know you are safe with one tap.</p>
      </div>
      <Button 
        variant="primary" 
        className="w-full sm:w-auto shrink-0 bg-secondary hover:bg-secondary/90 text-on-primary border-none shadow-md"
        onClick={handleQuickMessage}
      >
        <Heart size={18} className="fill-on-primary/20" /> Send "I'm Okay"
      </Button>
    </div>
  );
};
