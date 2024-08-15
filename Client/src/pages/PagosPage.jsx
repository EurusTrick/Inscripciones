import { PagosList } from "../components/PagosList"
import { Link } from "react-router-dom"

export function PagosPage() {
    return (
        <div>
            <h1>Lista de Pagos</h1>
            <Link to="/pagos-create">Agregar Pago</Link>
            <PagosList />
        </div>
        )
}