export type PrayerName = 'Fajr' | 'Sunrise' | 'Dhuhr' | 'Asr' | 'Maghrib' | 'Isha';

export interface PrayerTime {
  name: PrayerName;
  timeString: string; // e.g., "04:30 AM"
  timeMinutes: number; // minutes from midnight
}

// Curated times for realistic representation without API
const makkahPrayers: PrayerTime[] = [
  { name: 'Fajr', timeString: '04:12 AM', timeMinutes: 252 },
  { name: 'Sunrise', timeString: '05:38 AM', timeMinutes: 338 },
  { name: 'Dhuhr', timeString: '12:22 PM', timeMinutes: 742 },
  { name: 'Asr', timeString: '03:45 PM', timeMinutes: 945 },
  { name: 'Maghrib', timeString: '07:05 PM', timeMinutes: 1145 },
  { name: 'Isha', timeString: '08:35 PM', timeMinutes: 1235 },
];

const madinahPrayers: PrayerTime[] = [
  { name: 'Fajr', timeString: '04:10 AM', timeMinutes: 250 },
  { name: 'Sunrise', timeString: '05:35 AM', timeMinutes: 335 },
  { name: 'Dhuhr', timeString: '12:24 PM', timeMinutes: 744 },
  { name: 'Asr', timeString: '03:48 PM', timeMinutes: 948 },
  { name: 'Maghrib', timeString: '07:11 PM', timeMinutes: 1151 },
  { name: 'Isha', timeString: '08:41 PM', timeMinutes: 1241 },
];

export const getPrayerTimes = (city: 'Makkah' | 'Madinah') => {
  return city === 'Makkah' ? makkahPrayers : madinahPrayers;
};

export const getRiyadhMinutesFromMidnight = (): number => {
  const now = new Date();
  
  // Use en-GB which strictly defaults to 24-hour HH:mm format
  // hour12: false explicitly forces 24-hour time across all engines
  const formatter = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Riyadh',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
  
  const timeString = formatter.format(now); // e.g., "14:30" or "00:45"
  const match = timeString.match(/(\d+):(\d+)/);
  
  if (!match) {
    // Ultimate fallback if formatting completely fails
    return now.getHours() * 60 + now.getMinutes();
  }
  
  let hours = parseInt(match[1], 10);
  const minutes = parseInt(match[2], 10);
  
  // Handle edge case where some browsers return 24 for midnight instead of 00
  if (hours === 24) hours = 0;
  
  return hours * 60 + minutes;
};

export const getCurrentAndNextPrayer = (city: 'Makkah' | 'Madinah', currentMinutes?: number) => {
  const prayers = getPrayerTimes(city);
  
  const minutesFromMidnight = currentMinutes !== undefined 
    ? currentMinutes 
    : getRiyadhMinutesFromMidnight();

  let current = prayers[prayers.length - 1];
  let next = prayers[0];
  let nextIsTomorrow = true;

  for (let i = 0; i < prayers.length; i++) {
    if (minutesFromMidnight < prayers[i].timeMinutes) {
      next = prayers[i];
      current = i === 0 ? prayers[prayers.length - 1] : prayers[i - 1];
      nextIsTomorrow = false;
      break;
    }
  }

  // Calculate countdown
  let diff = 0;
  if (nextIsTomorrow) {
    diff = (24 * 60 - minutesFromMidnight) + next.timeMinutes;
  } else {
    diff = next.timeMinutes - minutesFromMidnight;
  }

  const hours = Math.floor(diff / 60);
  const mins = diff % 60;
  
  const countdown = hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;

  return { current, next, countdown };
};
