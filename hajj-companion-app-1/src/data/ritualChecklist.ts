export interface ChecklistTask {
  id: string;
  label: string;
}

export const ritualChecklist: ChecklistTask[] = [
  { id: 'mina-ihram', label: 'Enter Ihram from Makkah/Hotel' },
  { id: 'mina-prayers', label: 'Pray Dhuhr, Asr, Maghrib, Isha, Fajr in Mina' },
  { id: 'arafat-wuquf', label: 'Wuquf in Arafat (make abundant dua)' },
  { id: 'muzdalifah-pebbles', label: 'Collect pebbles in Muzdalifah' },
  { id: 'jamarat-aqabah', label: 'Stone Jamarat Al-Aqabah (7 pebbles)' },
  { id: 'qurbani', label: 'Perform or arrange Qurbani (sacrifice)' },
  { id: 'halq', label: 'Shave or trim hair (Halq / Taqsir)' },
  { id: 'tawaf-ifadah', label: 'Perform Tawaf Al-Ifadah and Sa\'i' },
  { id: 'jamarat-all', label: 'Stone all three Jamarat during Tashreeq days' },
  { id: 'tawaf-wada', label: 'Perform Farewell Tawaf (Tawaf Al-Wada)' }
];
