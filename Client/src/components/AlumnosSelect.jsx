import { useEffect, useState } from "react";
import { getAllAlumnos } from "../api/alumnos.api";

export function AlumnosSelect({register, errors}) {
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
            <label>Alumno</label>
            <select {...register("alumno", { required: true })}>
                <option value="">Selecciona un alumno</option>
                {alumnos.map(alumno => (
                    <option key={alumno.id} value={alumno.id}>
                        {alumno.nombre} {alumno.apellidos}
                    </option>
                ))}
            </select>
            {errors.alumno && <span>Este campo es requerido</span>}
        </div>
    );
}
