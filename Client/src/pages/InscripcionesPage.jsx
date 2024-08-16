import { InscripcionesList } from "../components/InscripcionesList"
import { Link } from "react-router-dom";

export function InscripcionesPage() {
    return (
        <div>
            <h1>Lista de Inscriprciones</h1>
            <Link to="/inscripciones-create"> Agregar Inscripcion</Link>
        <InscripcionesList />
        </div>
    );
}

