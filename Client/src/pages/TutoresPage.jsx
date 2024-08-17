import { TutoresList } from "../components/TutoresList";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export function TutoresPage() {
  return (
    <div className="bg-white min-h-screen p-6">
      <div className="flex justify-between items-center mb-6">
        <Link
          to="/tutores-create"
          className="bg-blue-900 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-800"
        >
          <FontAwesomeIcon icon={faPlus} className="mr-2" />
          Agregar Tutor</Link>
      </div>

      <h1 className="text-center text-2xl text-blue-900 mb-4">Lista de Tutores</h1>
      <TutoresList />
    </div>
  );
}

