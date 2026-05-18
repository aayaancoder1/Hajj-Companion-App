import React from 'react';
import { Card } from '../ui/Card';
import { Link } from 'react-router-dom';
import { ChevronRight, type LucideIcon } from 'lucide-react';

interface QuickActionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  to: string;
}

export const QuickActionCard: React.FC<QuickActionCardProps> = ({ title, description, icon: Icon, to }) => {
  return (
    <Link to={to} className="block group outline-none">
      <Card className="p-4 flex items-center gap-4 transition-all duration-300 group-hover:shadow-md group-focus:ring-2 group-focus:ring-primary group-active:scale-[0.98]">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
          <Icon size={24} strokeWidth={1.5} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-on-surface text-base mb-0.5 truncate">{title}</h3>
          <p className="text-on-surface-variant text-xs truncate">{description}</p>
        </div>
        <div className="text-primary opacity-50 group-hover:opacity-100 transition-opacity">
          <ChevronRight size={20} />
        </div>
      </Card>
    </Link>
  );
};
