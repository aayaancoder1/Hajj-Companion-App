export interface Dua {
  id: string;
  title?: string;
  arabic: string;
  transliteration: string;
  translation: string;
}

export const duas: Dua[] = [
  {
    id: 'rabbana-atina',
    title: 'Comprehensive Goodness',
    arabic: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
    transliteration: 'Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan waqina \'adhaban-nar.',
    translation: 'Our Lord, give us in this world that which is good and in the Hereafter that which is good and protect us from the punishment of the Fire.'
  },
  {
    id: 'rabbana-ghfir-li',
    title: 'Forgiveness for Parents',
    arabic: 'رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ',
    transliteration: 'Rabbana ghfir li wa li-walidayya wa lil-mu\'minina yawma yaqumu-l-hisab.',
    translation: 'Our Lord, forgive me and my parents and the believers the Day the account is established.'
  }
];
