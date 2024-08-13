import { useEffect, useState } from "react"
import { getAllPagos } from "../api/alumnos.api"
import { PagosCard } from "./PagosCard";

export function PagosList() {
    const [pagos, setPagos] = useState([]);

    useEffect(() => {
        async function loadPagos() {
            const res = await getAllPagos();
            setPagos(res.data);
        } loadPagos();
    }, [])


    return <div>
            {pagos.map(pago => (
                <PagosCard key={pago.id} pago={pago} />
            ))}
        </div>
}
