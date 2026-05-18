export interface HotelInfo {
  id: string;
  city: 'Makkah' | 'Madinah';
  name: string;
  address: string;
  arabicAddress: string;
  mapsUrl: string;
  frontDeskPhone: string;
}

export const hotels: HotelInfo[] = [
  {
    id: 'clock-tower',
    city: 'Makkah',
    name: 'Fairmont Makkah Clock Royal Tower',
    address: 'King Abdul Aziz Endowment, Makkah 21955',
    arabicAddress: 'وقف الملك عبد العزيز، مكة المكرمة ٢١٩٥٥',
    mapsUrl: 'https://maps.google.com/?q=Fairmont+Makkah',
    frontDeskPhone: '+966 12 571 7777'
  },
  {
    id: 'madinah-hilton',
    city: 'Madinah',
    name: 'Madinah Hilton',
    address: 'King Fahd Rd, Bidaa, Madinah 41419',
    arabicAddress: 'طريق الملك فهد، بضاعة، المدينة المنورة ٤١٤١٩',
    mapsUrl: 'https://maps.google.com/?q=Madinah+Hilton',
    frontDeskPhone: '+966 14 820 1000'
  }
];
