import { useForm } from "react-hook-form";
import { createAlumno } from "../api/alumnos.api";
import { useNavigate } from "react-router-dom";

export function AlumnosFormPage() {
  const { register, handleSubmit, formState : {errors} } = useForm();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async data => {
    await createAlumno(data);
    navigate ("/alumnos");
    
  })
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Nombre" {...register("nombre", { required: true })} />
        {errors.apellidos && <span>Este campo es requerido</span>}
        <input type="text" placeholder="Apellidos" {...register("apellidos", { required: true })} />
        {errors.apellidos && <span>Este campo es requerido</span>}
        <input type="text" placeholder="Fecha de nacimiento 'aaaa-mm-dd'" {...register("fecha_nacimiento", { required: true })} />
        {errors.fechaNacimiento && <span>Este campo es requerido</span>}
        <input rows="3" placeholder="Dirección" {...register("direccion", { required: true })} />
        {errors.direccion && <span>Este campo es requerido</span>}
        <input type="email" placeholder="Email" {...register("email", { required: true })} />
        {errors.email && <span>Este campo es requerido</span>}
        <input type="tel" placeholder="Teléfono" {...register("telefono", { required: true })} />
        {errors.telefono && <span>Este campo es requerido</span>}
        <button>Guardar</button>
      </form>
    </div>
  );
}

