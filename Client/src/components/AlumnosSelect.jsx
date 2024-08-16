import { useEffect, useState } from "react";
import { getAllAlumnos } from "../api/alumnos.api";

export function AlumnosSelect({ register, errors }) {
    const [alumnos, setAlumnos] = useState([]);

    useEffect(() => {
        async function loadAlumnos() {
            const res = await getAllAlumnos();
            setAlumnos(res.data);
        }
        loadAlumnos();
    }, []);

    return (
        <div className="mb-4">
            <label className="block text-blue-900 font-semibold mb-1">Alumno</label>
            <select
                {...register("alumno", { required: true })}
                className="bg-white border border-gray-300 text-blue-900 p-2 rounded-lg block w-full"
            >
                <option value="">Selecciona un alumno</option>
                {alumnos.map(alumno => (
                    <option key={alumno.id} value={alumno.id}>
                        {alumno.nombre} {alumno.apellidos}
                    </option>
                ))}
            </select>
            {errors.alumno && <span className="text-red-500">Este campo es requerido</span>}
        </div>
    );
}
