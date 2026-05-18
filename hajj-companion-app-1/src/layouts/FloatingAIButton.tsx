import React from 'react';
import { Sparkles } from 'lucide-react';

const AI_URL = "https://www.google.com/search?q=&client=ms-android-xiaomi-terr1-rso2&sourceid=chrome-mobile&ie=UTF-8&udm=50&aep=43&cud=0&qsubts=1778808932663&source=chrome.crn.obic";

export const FloatingAIButton: React.FC = () => {
  return (
    <a
      href={AI_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-[100px] right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95"
      style={{
        background: 'linear-gradient(135deg, #1A73E8, #8AB4F8, #D2E3FC)',
      }}
      aria-label="Ask AI Assistant"
    >
      <div className="absolute inset-0 rounded-full bg-white opacity-20 mix-blend-overlay animate-pulse" />
      <Sparkles className="text-white drop-shadow-md relative z-10" size={24} strokeWidth={2.5} />
    </a>
  );
};
