/*import { Link } from "react-router-dom";*/
import React from "react";

export function Home() {
    return (
        <div className="flex flex-col h-screen justify-between">
            <div className="text-center p-4">
                <h1>Hola Ilian</h1>
                <p>¡Es un gusto verte de nuevo!</p>
                <p>
                    EasyEnroll es una aplicación diseñada para <br/>
                    facilitar la gestión de inscripciones, pagos, <br/>
                    alumnos y tutores.
                </p>
                <p>
                    En el menú inferior puedes: <br/>
                    - Gestionar alumnos <br/>
                    - Gestionar tutores <br/>
                    - Gestionar pagos <br/>
                    - Gestionar inscripciones
                </p>
            </div>

            {/*<div className="fixed bottom-0 left-0 w-full bg-gray-800">
                <div className="flex justify-around p-4">
                    <Link to="/alumnos" className="text-white">
                        Alumnos
                    </Link>
                    <Link to="/tutores" className="text-white">
                        Padres
                    </Link>
                    <Link to="/" className="text-white">
                        Home
                    </Link>
                    <Link to="/pagos" className="text-white">
                        Pagos
                    </Link>
                    <Link to="/inscripciones" className="text-white">
                        Inscripciones
                    </Link>
                </div>
            </div*/}
        </div>
    );
}
