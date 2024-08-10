import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AlumnosPage } from './pages/AlumnosPage';
import { AlumnosFormPage } from './pages/AlumnosFormPage';
//import { TutoresPage } from './pages/TutoresPage';
//import { TutoresFormPage } from './pages/TutoresFormPage';
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
    </Routes>

    </BrowserRouter>

  );
}

export default App;