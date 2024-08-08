export function AlumnoCard({ alumno }) {
    return (
        <div>
            <h1>{alumno.nombre} {alumno.apellidos}</h1>
            <hr />
        </div>
        
    );
}