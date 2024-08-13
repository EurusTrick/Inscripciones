export function PagosCard({ pago }) {
    return (
        <div>
            <h1>{pago.alumno_details.nombre} {pago.alumno_details.apellidos}</h1>
            <p>Fecha de pago : {pago.fecha_pago}</p>
            <p>Monto : {pago.monto}</p>
            <hr/>
        </div>
    )

}