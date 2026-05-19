import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppShell } from './layouts/AppShell';

const Home = React.lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const Guide = React.lazy(() => import('./pages/Guide').then(module => ({ default: module.Guide })));
const Rituals = React.lazy(() => import('./pages/Rituals').then(module => ({ default: module.Rituals })));
const Nearby = React.lazy(() => import('./pages/Nearby').then(module => ({ default: module.Nearby })));
const Emergency = React.lazy(() => import('./pages/Emergency').then(module => ({ default: module.Emergency })));
const Documents = React.lazy(() => import('./pages/Documents').then(module => ({ default: module.Documents })));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppShell />}>
          <Route index element={<Home />} />
          <Route path="guide" element={<Guide />} />
          <Route path="rituals" element={<Rituals />} />
          <Route path="nearby" element={<Nearby />} />
          <Route path="emergency" element={<Emergency />} />
          <Route path="documents" element={<Documents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
