import { useEffect, useState } from "react";
import { getAllTutores } from "../api/alumnos.api";
import { TutorCard } from "./TutorCard";

export function TutoresList() {
  const [tutores, setTutores] = useState([]);

  useEffect(() => {
    async function loadTutores() {
      const res = await getAllTutores();
      setTutores(res.data);
    }
    loadTutores(); 
  }, []);
  
  return <div>
      {tutores.map((tutor) => (
          <TutorCard key={tutor.id} tutor = {tutor} />
        ))}
    </div>
}
