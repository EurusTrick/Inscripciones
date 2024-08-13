import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AlumnosPage } from './pages/AlumnosPage';
import { AlumnosFormPage } from './pages/AlumnosFormPage';
import { TutoresPage } from './pages/TutoresPage';
import { TutoresFormPage } from './pages/TutoresFormPage';
import { PagosPage } from './pages/PagosPage';
import { PagosFormPage } from './pages/PagosFormPage';
import { Home } from './pages/Home';
import { Navigation } from './components/Navigation';


function App() {
  return (
    <BrowserRouter> 

    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/alumnos" element={<AlumnosPage />} />
      <Route path="/alumnos-create" element={<AlumnosFormPage />} />
      <Route path="/alumnos/:id" element={<AlumnosFormPage />} />
      <Route path="/tutores" element={<TutoresPage />} />
      <Route path="/tutores-create" element={<TutoresFormPage />} />
      <Route path="/tutores/:id" element={<TutoresFormPage />} />
      <Route path="/pagos" element={<PagosPage />} />
      <Route path="/pagos-create" element={<PagosFormPage />} />

    </Routes>

    </BrowserRouter>

  );
}

export default App; 