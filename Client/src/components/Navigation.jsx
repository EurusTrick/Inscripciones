import { Link } from "react-router-dom";
import React from "react";

export function Navigation() {
    return (
        <div className="fixed bottom-0 left-0 w-full bg-gray-800">
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
        </div>
    );
}
