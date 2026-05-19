export interface HotelInfo {
  id: string;
  city: 'Makkah' | 'Madinah';
  name: string;
  buildingNumber?: string;
  roomNumbers?: string[];
  address: string;
  arabicAddress: string;
  mapsUrl: string;
}

export const hotels: HotelInfo[] = [
  {
    id: 'makkah-hotel',
    city: 'Makkah',
    name: 'AZIZYA-RAS/RAS',
    buildingNumber: '1112',
    roomNumbers: ['Room 215 (Abbu)', 'Room 211 (Dadi)'],
    address: 'Aziziyah District, Makkah',
    arabicAddress: 'حي العزيزية، مكة المكرمة',
    mapsUrl: 'TODO_INSERT_MAKKAH_GOOGLE_MAPS_LINK'
  },
  {
    id: 'madinah-hotel',
    city: 'Madinah',
    name: 'Rua International Hotel',
    address: 'King Fahd Rd, Madinah',
    arabicAddress: 'فندق رؤى الدولي، طريق الملك فهد، المدينة المنورة',
    mapsUrl: 'https://maps.app.goo.gl/SxaxE9FSqtoJKpPg9'
  }
];
