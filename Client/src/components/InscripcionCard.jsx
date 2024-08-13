export function InscripcionCard({inscripcion}) {
    return (
        <div>
            <h1>{inscripcion.alumno_details.nombre} {inscripcion.alumno_details.apellidos}</h1>
            <p>{inscripcion.curso}</p>
            <hr />
        </div>
    )
}