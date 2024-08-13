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
        <div>
            <label>Pago</label>
            <select {...register("pago", { required: true })}>
                <option value="">Selecciona un pago</option>
                {pagos.map(pago => (
                    <option key={pago.id} value={pago.id}>
                     {pago.monto} - {pago.alumno_details.nombre} {pago.alumno_details.apellidos}
                    </option>
                ))}
            </select>
            {errors.pago && <span>Este campo es requerido</span>}
        </div>
    );
}
