import { Link } from "react-router-dom";
import React from "react";

export function Home() {
    return (
        <div>
            <h1>Bienvenido al Home</h1>
            <Link to="/alumnos">
            <h1>Alumnos</h1>
            </Link>
            <Link to="/alumnos-create">Agregar Alumno</Link>
        </div>
    );
}