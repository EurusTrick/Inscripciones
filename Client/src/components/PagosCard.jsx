import { useNavigate } from "react-router-dom"

export function PagosCard({ pago }) {
    const navigate = useNavigate();
    
    return (
        <div className="bg-white text-blue-900 p-4 hover:bg-gray-100 cursor-pointer rounded-lg shadow-md border-b border-gray-300"
        onClick={() =>{
            navigate(`/pagos/${pago.id}`)
        }}
        >
            <h1 className="text-xl font-semibold">{pago.alumno_details.apellidos} {pago.alumno_details.nombre}</h1>
            <p>Fecha de pago : {pago.fecha_pago}</p>
            <p>Monto : {pago.monto}</p>
        </div>
    )
}