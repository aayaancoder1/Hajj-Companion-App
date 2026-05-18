export interface TimelineItem {
  id: string;
  day: string;
  title: string;
  description: string;
  warnings?: string[];
  checklistIds?: string[];
}

export const ritualTimeline: TimelineItem[] = [
  {
    id: 'mina',
    day: 'Day 8 (Tarwiyah)',
    title: 'Mina',
    description: 'Staying in the city of tents, preparing for the great day.',
    warnings: ['Hydrate frequently during your stay in Mina.'],
    checklistIds: ['mina-ihram', 'mina-prayers']
  },
  {
    id: 'arafat-muzdalifah',
    day: 'Day 9 (Arafat)',
    title: 'Arafat & Muzdalifah',
    description: 'The pinnacle of Hajj at Mount Arafat, followed by a night in Muzdalifah.',
    warnings: ['Do not leave Arafat before Maghrib.', 'Collect 49-70 pebbles at Muzdalifah.'],
    checklistIds: ['arafat-wuquf', 'muzdalifah-pebbles']
  },
  {
    id: 'eid',
    day: 'Day 10 (Eid al-Adha)',
    title: 'Jamarat & Tawaf',
    description: 'Stoning the big Jamarah (Aqabah), Qurbani (sacrifice), Halq/Taqsir, and Tawaf Al-Ifadah.',
    warnings: ['The crowds at Jamarat can be extreme. Proceed with caution and patience.'],
    checklistIds: ['jamarat-aqabah', 'qurbani', 'halq', 'tawaf-ifadah']
  },
  {
    id: 'tashreeq',
    day: 'Day 11-13 (Tashreeq)',
    title: 'Tashreeq Days',
    description: 'Completion of Jamarat (stoning all three pillars) and the Farewell Tawaf (Wada) before departing.',
    checklistIds: ['jamarat-all', 'tawaf-wada']
  }
];
