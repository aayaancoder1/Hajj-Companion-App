export interface HotelInfo {
  id: string;
  name: string;
  address: string;
  arabicAddress: string;
  mapsUrl: string;
  frontDeskPhone: string;
}

export const hotelInfo: HotelInfo = {
  id: 'clock-tower',
  name: 'Fairmont Makkah Clock Royal Tower',
  address: 'King Abdul Aziz Endowment, Makkah 21955',
  arabicAddress: 'وقف الملك عبد العزيز، مكة المكرمة ٢١٩٥٥',
  mapsUrl: 'https://maps.google.com/?q=Fairmont+Makkah',
  frontDeskPhone: '+966 12 571 7777'
};
