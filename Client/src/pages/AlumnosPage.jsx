import { AlumnosList } from "../components/AlumnosList";
import { Link } from "react-router-dom";

export function AlumnosPage() {
  return (
    <div>

      <div className="flex justify-between items-center p-4">
        <Link to="/alumnos-create" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Agregar Alumno
        </Link>
      </div>



      <h1 className="text-center text-2xl my-4">Lista de alumnos</h1>
      <AlumnosList />
    </div>
  );
}