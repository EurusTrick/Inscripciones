import { useNavigate } from "react-router-dom";

export function AlumnoCard({ alumno }) {

    const navigate = useNavigate();

    return (
        <div style={{ background: "Black" }}

            onClick={() => {
                navigate(`/alumnos/${alumno.id}`)
            }
            }
        >
            <h1>{alumno.nombre} {alumno.apellidos}</h1>
            <hr />
        </div>

    );
} 