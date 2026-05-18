import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Compass, BookOpen, MapPin, AlertCircle } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home', icon: Home, path: '/' },
  { id: 'guide', label: 'Haram Guide', icon: Compass, path: '/guide' },
  { id: 'rituals', label: 'Rituals', icon: BookOpen, path: '/rituals' },
  { id: 'nearby', label: 'Nearby', icon: MapPin, path: '/nearby' },
  { id: 'emergency', label: 'Emergency', icon: AlertCircle, path: '/emergency' },
];

export const BottomNavigation: React.FC = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 h-[80px] bg-surface-container-lowest border-t border-surface-container pb-safe z-40">
      <div className="flex h-full items-center justify-around px-2 max-w-3xl mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center w-full h-full gap-1 transition-colors ${
                  isActive ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <div
                    className={`flex items-center justify-center w-14 h-8 rounded-full transition-colors ${
                      isActive ? 'bg-primary-container/20' : ''
                    }`}
                  >
                    <Icon size={24} className={isActive ? 'fill-primary-container/20 text-primary' : ''} />
                  </div>
                  <span className="text-[11px] font-medium leading-none font-sans">{item.label}</span>
                </>
              )}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};
