import React, { useState } from 'react';

// Static map assets (PNG format) – Vite will process these imports
import makkahMap from '../../assets/maps/makkah-map.png';
import madinahMap from '../../assets/maps/madinah-map.png';

type City = 'Makkah' | 'Madinah';

interface MapImageProps {
  selectedCity: City;
}

/**
 * Renders the appropriate static map image.
 * Shows a simple SVG placeholder while the image loads or if it fails to load.
 */
const MapImage: React.FC<MapImageProps> = ({ selectedCity }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const src = selectedCity === 'Makkah' ? makkahMap : madinahMap;
  const alt = selectedCity === 'Makkah' ? 'Masjid al‑Haram map' : 'Masjid an‑Nabawi map';

  if (error) {
    // Fallback placeholder – same visual as before
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-surface-variant/20">
        <svg viewBox="0 0 200 150" className="w-full h-full text-primary/10" fill="currentColor">
          <rect x="50" y="30" width="100" height="90" rx="12" />
          <circle cx="100" cy="75" r="20" className="text-background" />
        </svg>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="absolute inset-0 w-full h-full object-cover"
      loading="lazy"
      onLoad={() => setLoading(false)}
      onError={() => setError(true)}
      style={loading ? { visibility: 'hidden' } : undefined}
    />
  );
};

export default MapImage;
