import { useNavigate } from "react-router-dom"

export function InscripcionCard({ inscripcion }) {
    const navigate = useNavigate();

    return (
        <div
            className="bg-white text-blue-900 p-4 hover:bg-gray-100 cursor-pointer rounded shadow-md border-b border-gray-300"
            onClick={() =>
                navigate(`/inscripciones/${inscripcion.id}`)}
        >

            <h1 className="text-xl font-semibold">{inscripcion.alumno_details.apellidos} {inscripcion.alumno_details.nombre} </h1>
            <p>Curso: {inscripcion.curso}</p>
        </div>
    )
}