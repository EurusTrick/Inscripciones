import { TutoresList } from "../components/TutoresList";
import {Link} from "react-router-dom";

export function TutoresPage() {
  return (
    <div>
      <h1>Lista de Tutores</h1>
      <Link to="/tutores-create">Agregar Tutor</Link>
    <TutoresList />
    </div>
  );
}

