import { AlumnosList } from "../components/AlumnosList";
import { Link } from "react-router-dom";
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons"; 

export function AlumnosPage() {
  return (
    <div className="bg-white min-h-screen p-6">
      <div className="flex justify-between items-center mb-6">
        <Link
          to="/alumnos-create"
          className="bg-blue-900 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-800"
        >
          <FontAwesomeIcon icon={faPlus} className="mr-2" />
          Agregar Alumno
        </Link>
      </div>
      <h1 className="text-center text-2xl text-blue-900 mb-4">Lista de alumnos</h1>
      <AlumnosList />
    </div>
  );
}
