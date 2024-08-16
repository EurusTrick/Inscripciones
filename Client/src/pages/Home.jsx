import { Link } from "react-router-dom";
import React from "react";

export function Home() {
    return (
        <div>
            <h1>Hola Ilian</h1>
            <p>¡Es un gusto verte de nuevo!</p>
            <p>
            EasyEnroll es una aplicación diseñada para <br/>
            facilitar la gestión de inscripciones, pagos, <br/>
            alumnos y tutores.
            </p>
            <p>
            En el menu inferior puedes: <br/>
            - Gestionar alumnos <br/>
            - Gestionar tutores <br/>
            - Gestionar pagos <br/>
            - Gestionar inscripciones
            </p>

            <div>
            <Link to="/alumnos"><h1>Alumnos</h1></Link>
            <Link to="/tutores"><h1>Tutores</h1></Link>
            <Link to="/pagos"><h1>Pagos</h1></Link>
            <Link to="/inscripciones"><h1>Inscripciones</h1></Link>
            </div>
            
        </div>
    );
}