import { Link } from "react-router-dom";
import React from "react";

export function Home() {
    return (
        <div>
            <h1>Bienvenido al Home</h1>
            <Link to="/alumnos"><h1>Alumnos</h1></Link>
            <Link to="/alumnos-create">Agregar Alumno</Link>
            <Link to="/tutores"><h1>Tutores</h1></Link>
            <Link to="/tutores-create">Agregar Tutor</Link>
            <Link to="/pagos"><h1>Pagos</h1></Link>
            <Link to="/pagos-create">Agregar Pago</Link>
            <Link to="/inscripciones"><h1>Inscripciones</h1></Link>
            <Link to="/inscripciones-create"> Agregar Inscripcion</Link>
            
        </div>
    );
}