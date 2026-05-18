export type PlaceCategory = 'restaurant' | 'pharmacy' | 'essential';

export interface NearbyPlace {
  id: string;
  city: 'Makkah' | 'Madinah';
  name: string;
  category: PlaceCategory;
  walkingDistanceMeters: number;
  walkingTimeMinutes: number;
  description: string;
  notes?: string;
  mapsUrl: string;
  recommended?: boolean;
}

export const nearbyPlaces: NearbyPlace[] = [
  {
    id: 'al-baik-makkah',
    city: 'Makkah',
    name: 'Al Baik (Jabal Omar)',
    category: 'restaurant',
    walkingDistanceMeters: 450,
    walkingTimeMinutes: 5,
    description: 'Famous Broasted Chicken & Seafood',
    notes: 'Usually very crowded after prayers. Order via app to save time.',
    mapsUrl: 'https://maps.google.com/?q=Al+Baik+Jabal+Omar',
    recommended: true
  },
  {
    id: 'al-baik-madinah',
    city: 'Madinah',
    name: 'Al Baik (Haram)',
    category: 'restaurant',
    walkingDistanceMeters: 300,
    walkingTimeMinutes: 4,
    description: 'Famous Broasted Chicken & Seafood',
    mapsUrl: 'https://maps.google.com/?q=Al+Baik+Madinah+Haram',
    recommended: true
  },
  {
    id: 'nahdi-pharmacy',
    city: 'Makkah',
    name: 'Nahdi Pharmacy (Clock Tower)',
    category: 'pharmacy',
    walkingDistanceMeters: 150,
    walkingTimeMinutes: 2,
    description: '24/7 Pharmacy with essentials',
    notes: 'Closest pharmacy to Gate 79',
    mapsUrl: 'https://maps.google.com/?q=Nahdi+Pharmacy+Makkah',
    recommended: true
  },
  {
    id: 'al-dawaa-pharmacy',
    city: 'Madinah',
    name: 'Al Dawaa Pharmacy',
    category: 'pharmacy',
    walkingDistanceMeters: 200,
    walkingTimeMinutes: 3,
    description: '24/7 Pharmacy near northern gates',
    mapsUrl: 'https://maps.google.com/?q=Al+Dawaa+Pharmacy+Madinah',
    recommended: true
  }
];
