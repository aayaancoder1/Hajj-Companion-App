export interface ShuttlePoint {
  id: string;
  city: 'Makkah' | 'Madinah';
  name: string;
  route: string;
  intervalMinutes: number;
  walkingDistanceMeters: number;
  walkingTimeMinutes: number;
  mapsUrl: string;
  notes: string;
}

export const shuttlePoints: ShuttlePoint[] = [
  {
    id: 'kudai-parking',
    city: 'Makkah',
    name: 'Kudai Parking Shuttle',
    route: 'Kudai ⇄ King Abdulaziz Gate',
    intervalMinutes: 10,
    walkingDistanceMeters: 300,
    walkingTimeMinutes: 4,
    mapsUrl: 'https://maps.google.com/?q=Kudai+Parking+Makkah',
    notes: 'Buses run 24/7. Wait times increase significantly after prayers.'
  },
  {
    id: 'jamarat-station',
    city: 'Makkah',
    name: 'Jamarat Bus Station',
    route: 'Jamarat ⇄ Haram (Ghazawi)',
    intervalMinutes: 15,
    walkingDistanceMeters: 800,
    walkingTimeMinutes: 10,
    mapsUrl: 'https://maps.google.com/?q=Jamarat+Bus+Station',
    notes: 'Primary route for Mina camps.'
  },
  {
    id: 'qiba-shuttle',
    city: 'Madinah',
    name: 'Qiba Mosque Shuttle',
    route: 'Masjid an-Nabawi ⇄ Masjid Qiba',
    intervalMinutes: 20,
    walkingDistanceMeters: 400,
    walkingTimeMinutes: 5,
    mapsUrl: 'https://maps.google.com/?q=Masjid+Qiba+Shuttle+Madinah',
    notes: 'Departs from the southern side of Masjid an-Nabawi.'
  }
];
