import { InscripcionesList } from "../components/InscripcionesList"
import { Link } from "react-router-dom";

export function InscripcionesPage() {
    return (
        <div className="bg-white min-h-screen p-6">
            <div className="flex justify-between items-center mb-6">
            <Link 
            to="/inscripciones-create"
            className="bg-blue-900 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-800"
            > Agregar Inscripcion</Link>
            </div>
            
            <h1 className="text-center text-2xl text-blue-900 mb-4">Lista de Inscriprciones</h1>
        <InscripcionesList />
        </div>
    );
}

