import { useNavigate } from "react-router-dom"

export function InscripcionCard({ inscripcion }) {
    const navigate = useNavigate();

    return (
        <div style={{ background: "Black" }}

            onClick={() =>
                navigate(`/inscripciones/${inscripcion.id}`)}
        >

            <h1>{inscripcion.alumno_details.nombre} {inscripcion.alumno_details.apellidos}</h1>
            <p>{inscripcion.curso}</p>
            <hr />
        </div>
    )
}