import { AlumnosList } from "../components/AlumnosList";
import { Link } from "react-router-dom";

export function AlumnosPage() {
  return (
    <div>
      <h1>Lista de Alumnos</h1>
      <Link to="/alumnos-create">Agregar Alumno</Link>
      <AlumnosList />
    </div>
  );
}