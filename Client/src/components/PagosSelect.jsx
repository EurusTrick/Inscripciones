import { useEffect, useState } from "react";
import { getAllPagos } from "../api/alumnos.api";

export function PagosSelect({ register, errors }) {
    const [pagos, setPagos] = useState([]);

    useEffect(() => {
        async function loadPagos() {
            const res = await getAllPagos();
            setPagos(res.data);
        }
        loadPagos();
    }, []);

    return (
        <div className="mb-4">
            <label className="block text-blue-900 font-semibold mb-1">Pago</label>
            <select
                {...register("pago", { required: true })}
                className="bg-white border border-gray-300 text-blue-900 p-2 rounded-lg w-full"
            >
                <option value="">Selecciona un pago</option>
                {pagos.map(pago => (
                    <option key={pago.id} value={pago.id}>
                        {pago.monto} - {pago.alumno_details.nombre} {pago.alumno_details.apellidos}
                    </option>
                ))}
            </select>
            {errors.pago && <span className="text-red-500">Este campo es requerido</span>}
        </div>
    );
}
