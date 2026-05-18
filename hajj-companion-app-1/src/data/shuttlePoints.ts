export interface ShuttlePoint {
  id: string;
  name: string;
  walkingDistanceMeters: number;
  walkingTimeMinutes: number;
  intervalMinutes: string;
  notes: string;
  mapsUrl: string;
}

export const shuttlePoints: ShuttlePoint[] = [
  {
    id: 'kudai-shuttle',
    name: 'Kudai Parking Shuttle',
    walkingDistanceMeters: 800,
    walkingTimeMinutes: 10,
    intervalMinutes: '15-30',
    notes: 'Government buses usually arrive every 15–30 mins near prayer times.',
    mapsUrl: 'https://maps.google.com/?q=Kudai+Parking'
  }
];
