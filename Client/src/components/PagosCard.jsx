import { useNavigate } from "react-router-dom"

export function PagosCard({ pago }) {

    const navigate = useNavigate();
    
    return (
        <div style ={{ background: "Black"}}

        onClick={() =>{
            navigate(`/pagos/${pago.id}`)
        }}
        
        >
            
            <h1>{pago.alumno_details.nombre} {pago.alumno_details.apellidos}</h1>
            <p>Fecha de pago : {pago.fecha_pago}</p>
            <p>Monto : {pago.monto}</p>
            <hr/>
        </div>
    )

}