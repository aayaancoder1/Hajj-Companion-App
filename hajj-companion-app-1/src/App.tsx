
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppShell } from './layouts/AppShell';
import { Home } from './pages/Home';
import { HaramGuide } from './pages/HaramGuide';
import { Rituals } from './pages/Rituals';
import { Nearby } from './pages/Nearby';
import { Emergency } from './pages/Emergency';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppShell />}>
          <Route index element={<Home />} />
          <Route path="guide" element={<HaramGuide />} />
          <Route path="rituals" element={<Rituals />} />
          <Route path="nearby" element={<Nearby />} />
          <Route path="emergency" element={<Emergency />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
