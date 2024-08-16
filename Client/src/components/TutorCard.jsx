import { useNavigate } from "react-router-dom"

export function TutorCard({ tutor }) {
    const navigate = useNavigate();

    return (
        <div
        className="bg-white text-blue-900 p-4 hover:bg-gray-100 cursor-pointer rounded shadow-md border-b border-gray-300"
            onClick={() => {
                navigate(`/tutores/${tutor.id}`)
            }}
        >
            <h1 className="text-xl front-semibold">{tutor.nombre} {tutor.apellidos}</h1>
            <p>Tutor de: {tutor.alumno_details.apellidos} {tutor.alumno_details.nombre}</p>
        </div>
    )

}