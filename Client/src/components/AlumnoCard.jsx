import { useNavigate } from "react-router-dom";

export function AlumnoCard({ alumno }) {

    const navigate = useNavigate();

    return (
        <div 
            className="bg-zinc-800 p-3 hover:bg-zinc-700 cursor-pointer"

            onClick={() => {
                navigate(`/alumnos/${alumno.id}`)
            }
            }
        >
            <h1>{alumno.nombre} {alumno.apellidos}</h1>
        </div>

    );
} 