export type PlaceCategory = 'restaurant' | 'pharmacy' | 'essential' | 'atm';

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
  // MAKKAH 
  {
    id: 'al-baik-makkah',
    city: 'Makkah',
    name: 'Al Baik (Jabal Omar)',
    category: 'restaurant',
    walkingDistanceMeters: 450,
    walkingTimeMinutes: 5,
    description: 'Famous Broasted Chicken',
    notes: 'Usually very crowded. Order via app to save time.',
    mapsUrl: 'https://maps.google.com/?q=Al+Baik+Jabal+Omar',
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
    mapsUrl: 'https://maps.google.com/?q=Nahdi+Pharmacy+Makkah',
  },
  // MADINAH - FOOD
  {
    id: 'zaitoon-restaurant',
    city: 'Madinah',
    name: 'Zaitoon Restaurant',
    category: 'restaurant',
    walkingDistanceMeters: 300,
    walkingTimeMinutes: 4,
    description: 'Pakistani & Indian Food',
    mapsUrl: 'https://maps.google.com/?q=Zaitoon+Restaurant+Madinah',
    recommended: true
  },
  {
    id: 'multani-restaurant',
    city: 'Madinah',
    name: 'Pakistani Multani Restaurant Rukn Rihab',
    category: 'restaurant',
    walkingDistanceMeters: 450,
    walkingTimeMinutes: 6,
    description: 'Authentic Pakistani Cuisine',
    mapsUrl: 'https://maps.google.com/?q=Pakistani+Multani+Restaurant+Rukn+Rihab',
  },
  {
    id: 'new-punjab',
    city: 'Madinah',
    name: 'New Punjab Restaurant',
    category: 'restaurant',
    walkingDistanceMeters: 500,
    walkingTimeMinutes: 7,
    description: 'Punjabi & Indian Dishes',
    mapsUrl: 'https://maps.google.com/?q=New+Punjab+Restaurant+Madinah',
  },
  {
    id: 'al-madina-indian',
    city: 'Madinah',
    name: 'New Al Madina Indian Restaurant',
    category: 'restaurant',
    walkingDistanceMeters: 400,
    walkingTimeMinutes: 5,
    description: 'Indian Food',
    mapsUrl: 'https://maps.google.com/?q=New+Al+Madina+Indian+Restaurant',
  },
  {
    id: 'delhi-darbar',
    city: 'Madinah',
    name: 'Delhi Darbar Restaurant',
    category: 'restaurant',
    walkingDistanceMeters: 550,
    walkingTimeMinutes: 7,
    description: 'Indian Cuisine',
    mapsUrl: 'https://maps.google.com/?q=Delhi+Darbar+Restaurant+Madinah',
  },
  // MADINAH - ATMs
  {
    id: 'al-rajhi-atm',
    city: 'Madinah',
    name: 'Al-Rajhi ATM',
    category: 'atm',
    walkingDistanceMeters: 200,
    walkingTimeMinutes: 3,
    description: 'Cash Withdrawal',
    mapsUrl: 'https://maps.google.com/?q=Al+Rajhi+ATM+Madinah',
  },
  {
    id: 'sab-atm',
    city: 'Madinah',
    name: 'SAB الأول ATM',
    category: 'atm',
    walkingDistanceMeters: 250,
    walkingTimeMinutes: 4,
    description: 'Cash Withdrawal',
    mapsUrl: 'https://maps.google.com/?q=SAB+ATM+Madinah',
  },
  {
    id: 'alinma-atm',
    city: 'Madinah',
    name: 'alinma ATM',
    category: 'atm',
    walkingDistanceMeters: 300,
    walkingTimeMinutes: 4,
    description: 'Cash Withdrawal',
    mapsUrl: 'https://maps.google.com/?q=alinma+ATM+Madinah',
  }
];
