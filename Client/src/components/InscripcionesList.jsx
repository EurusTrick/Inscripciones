import { useEffect, useState } from "react"
import { getAllInscripciones } from "../api/alumnos.api"
import { InscripcionCard } from "./InscripcionCard"

export function InscripcionesList() {
    const [inscripciones, setInscripciones] = useState([])

    useEffect(() => {   
        async function loadInscripciones() {
            const res = await getAllInscripciones()
            setInscripciones(res.data)
        } loadInscripciones();
    }, [])
    


    return (
        <div>
            {inscripciones.map(inscripcion => (
                <InscripcionCard key={inscripcion.id} inscripcion={inscripcion} />
            ))}
        </div>
    )
}