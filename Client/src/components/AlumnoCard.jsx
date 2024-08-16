import { useNavigate } from "react-router-dom";

export function AlumnoCard({ alumno }) {
    const navigate = useNavigate();

    return (
        <div
            className="bg-white text-blue-900 p-4 hover:bg-gray-100 cursor-pointer rounded shadow-md"
            onClick={() => {
                navigate(`/alumnos/${alumno.id}`);
            }}
        >
            <h1 className="text-xl font-semibold">{alumno.nombre} {alumno.apellidos}</h1>
        </div>
    );
}
