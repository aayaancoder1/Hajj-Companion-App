import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type City = 'Makkah' | 'Madinah';

interface AppState {
  selectedCity: City;
  setSelectedCity: (city: City) => void;
  isOffline: boolean;
  setOfflineStatus: (status: boolean) => void;
  preferences: {
    language: string;
    notificationsEnabled: boolean;
  };
  updatePreferences: (prefs: Partial<AppState['preferences']>) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      selectedCity: 'Makkah',
      setSelectedCity: (city) => set({ selectedCity: city }),
      isOffline: !navigator.onLine,
      setOfflineStatus: (status) => set({ isOffline: status }),
      preferences: {
        language: 'en',
        notificationsEnabled: false,
      },
      updatePreferences: (prefs) =>
        set((state) => ({
          preferences: { ...state.preferences, ...prefs },
        })),
    }),
    {
      name: 'hajj-companion-storage',
      partialize: (state) => ({ selectedCity: state.selectedCity, preferences: state.preferences }), // persist these only
    }
  )
);

// Offline listener
if (typeof window !== 'undefined') {
  window.addEventListener('online', () => useAppStore.getState().setOfflineStatus(false));
  window.addEventListener('offline', () => useAppStore.getState().setOfflineStatus(true));
}
