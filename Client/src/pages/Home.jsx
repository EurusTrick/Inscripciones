/*import { Link } from "react-router-dom";*/
import React from "react";
import Logo from "../assets/Logo.png";

export function Home() {
    return (
        <div className="flex flex-col h-screen justify-between">
            <div className="text-left p-4 mx-auto max-w-lg" >
                <h1 className="text-3xl font-bold text-center">Hola Ilian</h1>
                <p className="text-center">¡Es un gusto verte de nuevo!</p>
                
                <img src={Logo} alt="Logo" className="mx-auto w-[300px] h-[250px] "/>
                <p className="text-left p-3 mx-auto max-w-lg ">
                    EasyEnroll es una aplicación diseñada para <br/>
                    facilitar la gestión de inscripciones, pagos, <br/>
                    alumnos y tutores. <br/>
                    <br/>
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
