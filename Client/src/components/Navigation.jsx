import { Link } from "react-router-dom";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGraduate, faUser, faHome, faMoneyBill, faClipboardList } from "@fortawesome/free-solid-svg-icons";

export function Navigation() {
    return (
        <div className="fixed bottom-0 left-0 w-full bg-gray-800">
            <div className="flex justify-around p-4">
                <Link to="/alumnos" className="text-white flex flex-col items-center">
                    <FontAwesomeIcon icon={faUserGraduate} className="text-white mb-1" />
                    Alumnos
                </Link>
                <Link to="/tutores" className="text-white flex flex-col items-center">
                    <FontAwesomeIcon icon={faUser} className="text-white mb-1" />
                    Padres
                </Link>
                <Link to="/" className="text-white flex flex-col items-center">
                    <FontAwesomeIcon icon={faHome} className="text-white mb-1" />
                    Home
                </Link>
                <Link to="/pagos" className="text-white flex flex-col items-center">
                    <FontAwesomeIcon icon={faMoneyBill} className="text-white mb-1" />
                    Pagos
                </Link>
                <Link to="/inscripciones" className="text-white flex flex-col items-center">
                    <FontAwesomeIcon icon={faClipboardList} className="text-white mb-1" />
                    Inscripciones
                </Link>
            </div>
        </div>
    );
}
