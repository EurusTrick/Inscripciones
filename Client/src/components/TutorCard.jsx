import { useNavigate } from "react-router-dom"

export function TutorCard({ tutor }) {

    const navigate = useNavigate();

    return (
        <div style={{ background : "Black"}}
            onClick={() => {
                navigate(`/tutores/${tutor.id}`)
            }}
        >
            <h1>{tutor.nombre} {tutor.apellidos}</h1>
            <hr />
        </div>
    )

}