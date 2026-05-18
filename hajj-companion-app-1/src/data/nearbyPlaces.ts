export type PlaceCategory = 'restaurant' | 'pharmacy' | 'essential';

export interface NearbyPlace {
  id: string;
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
    id: 'al-baik',
    name: 'Al Baik',
    category: 'restaurant',
    walkingDistanceMeters: 450,
    walkingTimeMinutes: 5,
    description: 'Famous Broasted Chicken & Seafood',
    notes: 'Usually very crowded after prayers.',
    mapsUrl: 'https://maps.google.com/?q=Al+Baik+Makkah',
    recommended: true
  },
  {
    id: 'felafel-pie',
    name: 'Felafel Pie',
    category: 'restaurant',
    walkingDistanceMeters: 200,
    walkingTimeMinutes: 3,
    description: 'Traditional Felafel & Arabic Pies',
    mapsUrl: 'https://maps.google.com/?q=Felafel+Makkah',
  },
  {
    id: 'nahdi-pharmacy',
    name: 'Nahdi Pharmacy',
    category: 'pharmacy',
    walkingDistanceMeters: 150,
    walkingTimeMinutes: 2,
    description: '24/7 Pharmacy with essentials',
    notes: 'Closest pharmacy to Gate 79',
    mapsUrl: 'https://maps.google.com/?q=Nahdi+Pharmacy+Makkah',
    recommended: true
  }
];
