import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AlumnosPage } from './pages/AlumnosPage';
import { AlumnosFormPage } from './pages/AlumnosFormPage';
import { Navigation } from './components/Navigation';


function App() {
  return (
    <BrowserRouter> 

    <Navigation />
    <Routes>
      <Route path="/" element={<AlumnosPage />} />
      <Route path="/alumnos" element={<AlumnosPage />} />
      <Route path="/alumnos-create" element={<AlumnosFormPage />} />
    </Routes>
    </BrowserRouter>

  );
}

export default App;