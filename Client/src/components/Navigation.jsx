import { Link } from "react-router-dom";

export function Navigation() {
    return (
        <div>
            <Link to="/alumnos">
            <h1>Alumnos</h1>
            </Link>
            <Link to="/alumnos-create">Add Alumno</Link>
        </div>
    );
}