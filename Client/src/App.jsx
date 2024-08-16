import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { AlumnosPage } from './pages/AlumnosPage';
import { AlumnosFormPage } from './pages/AlumnosFormPage';
import { TutoresPage } from './pages/TutoresPage';
import { TutoresFormPage } from './pages/TutoresFormPage';
import { PagosPage } from './pages/PagosPage';
import { PagosFormPage } from './pages/PagosFormPage';
import { InscripcionesPage } from './pages/InscripcionesPage';
import { InscripcionesFormPage } from './pages/InscripcionesFormPage';
import { Navigation } from './components/Navigation';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <BrowserRouter> 
    <div className="container mx-auto pb-16">

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
      <Route path="/pagos/:id" element={<PagosFormPage/>}/>
      <Route path="/inscripciones" element={<InscripcionesPage />} />
      <Route path="/inscripciones-create" element={<InscripcionesFormPage />} />
      <Route path="/inscripciones/:id" element={<InscripcionesFormPage />} />
    
    </Routes>
    <Toaster />

    </div>
    </BrowserRouter>

  );
}

export default App; 