export type MapFeatureType = 'gate' | 'washroom' | 'medical' | 'zamzam' | 'escalator';

export interface MapFeature {
  id: string;
  city: 'Makkah' | 'Madinah';
  type: MapFeatureType;
  title: string;
  x: number; // percentage (0-100) for responsive positioning
  y: number; // percentage (0-100)
  description?: string;
  walkingTime?: string;
  accessible?: boolean;
  traffic?: 'Low' | 'Moderate' | 'Heavy';
}

export const mapFeatures: MapFeature[] = [
  {
    id: 'gate-abdulaziz',
    city: 'Makkah',
    type: 'gate',
    title: 'King Abdulaziz Gate',
    x: 50,
    y: 85,
    walkingTime: '8 min',
    accessible: true,
    traffic: 'Moderate',
    description: 'Main southern entrance. "O Allah, open for me the gates of Your mercy."'
  },
  {
    id: 'gate-fahd',
    city: 'Makkah',
    type: 'gate',
    title: 'King Fahd Gate',
    x: 20,
    y: 50,
    walkingTime: '12 min',
    accessible: true,
    traffic: 'Heavy'
  },
  {
    id: 'medical-1',
    city: 'Makkah',
    type: 'medical',
    title: 'Medical Center',
    x: 80,
    y: 50,
    description: 'Emergency medical center and pharmacy.'
  },
  {
    id: 'zamzam-1',
    city: 'Makkah',
    type: 'zamzam',
    title: 'Zamzam Station',
    x: 50,
    y: 15,
  },
  {
    id: 'gate-nabawi-main',
    city: 'Madinah',
    type: 'gate',
    title: 'King Fahd Gate (Madinah)',
    x: 50,
    y: 90,
    walkingTime: '5 min',
    accessible: true,
    traffic: 'Low',
    description: 'Main northern entrance.'
  }
];

export const filterOptions: { label: string; value: MapFeatureType }[] = [
  { label: 'Gates', value: 'gate' },
  { label: 'Washrooms', value: 'washroom' },
  { label: 'Medical', value: 'medical' },
  { label: 'Zamzam', value: 'zamzam' }
];
