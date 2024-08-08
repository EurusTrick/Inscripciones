import { useEffect, useState} from "react";
import { getAllAlumnos } from "../api/alumnos.api";

export function AlumnosList() {
    const [alumnos, setAlumnos] = useState([]);
    useEffect(() => {

        async function loadAlumnos() {
            const res = await getAllAlumnos();
            setAlumnos(res.data);
        }
        loadAlumnos();
    }, []);

    return (
        <div>
            {alumnos.map((alumno) => (
                <div key={alumno.id}>
                    <h1>{alumno.nombre} {alumno.apellidos}</h1>
        </div>
    ))}
    </div>
    );
}