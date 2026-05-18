import React, { useMemo } from 'react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { CityToggle } from '../components/home/CityToggle';
import { CategorySection } from '../components/nearby/CategorySection';
import { NearbyPlaceCard } from '../components/nearby/NearbyPlaceCard';
import { HotelCard } from '../components/nearby/HotelCard';
import { ShuttleInfoCard } from '../components/nearby/ShuttleInfoCard';
import { nearbyPlaces } from '../data/nearbyPlaces';
import { hotelInfo } from '../data/hotelInfo';
import { shuttlePoints } from '../data/shuttlePoints';
import { useAppStore } from '../store';
import { MapPin } from 'lucide-react';

export const Nearby: React.FC = () => {
  const { selectedCity } = useAppStore();

  // Sorting logic: nearest -> farthest
  // In a real app, this would filter by selectedCity as well.
  const sortedPlaces = useMemo(() => {
    return [...nearbyPlaces].sort((a, b) => a.walkingDistanceMeters - b.walkingDistanceMeters);
  }, [selectedCity]);

  const restaurants = sortedPlaces.filter(p => p.category === 'restaurant');
  const pharmacies = sortedPlaces.filter(p => p.category === 'pharmacy');

  return (
    <div className="flex flex-col gap-8 pb-8 animate-in fade-in duration-500">
      <header className="pt-2">
        <h1 className="text-3xl font-serif font-bold text-on-background tracking-tight mb-2">
          Nearby Essentials
        </h1>
        <p className="text-on-surface-variant text-base">
          Find what you need, close to where you are.
        </p>
      </header>

      <CityToggle />

      {/* Hotel Section */}
      <section>
        <SectionHeader title="Your Hotel" subtitle="Return safely" />
        <HotelCard hotel={hotelInfo} />
      </section>

      {/* Shuttle Points */}
      {shuttlePoints.length > 0 && (
        <CategorySection title="Shuttle Points" subtitle="Transportation around the Haram">
          {shuttlePoints.map(shuttle => (
            <ShuttleInfoCard key={shuttle.id} shuttle={shuttle} />
          ))}
        </CategorySection>
      )}

      {/* Restaurants */}
      {restaurants.length > 0 && (
        <CategorySection title="Restaurants" subtitle="Food and refreshments">
          {restaurants.map(place => (
            <NearbyPlaceCard key={place.id} place={place} />
          ))}
        </CategorySection>
      )}

      {/* Pharmacies */}
      {pharmacies.length > 0 && (
        <CategorySection title="Pharmacies" subtitle="Medical essentials">
          {pharmacies.map(place => (
            <NearbyPlaceCard key={place.id} place={place} />
          ))}
        </CategorySection>
      )}

      {restaurants.length === 0 && pharmacies.length === 0 && (
        <div className="flex flex-col items-center justify-center p-8 text-center bg-surface-variant/30 rounded-3xl mt-4 border border-outline-variant/30">
          <MapPin size={48} className="text-on-surface-variant/50 mb-4" strokeWidth={1} />
          <p className="text-on-surface font-medium">No places found</p>
          <p className="text-sm text-on-surface-variant mt-1">Try changing your selected city above.</p>
        </div>
      )}
    </div>
  );
};
