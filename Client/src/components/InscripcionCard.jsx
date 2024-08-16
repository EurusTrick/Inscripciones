import { useNavigate } from "react-router-dom"

export function InscripcionCard({ inscripcion }) {
    const navigate = useNavigate();

    return (
        <div
            className="bg-white text-blue-900 p-4 hover:bg-gray-100 cursor-pointer rounded shadow-md"
            onClick={() =>
                navigate(`/inscripciones/${inscripcion.id}`)}
        >

            <h1 className="text-xl font-semibold">{inscripcion.alumno_details.nombre} {inscripcion.alumno_details.apellidos}</h1>
            <p>{inscripcion.curso}</p>
        </div>
    )
}