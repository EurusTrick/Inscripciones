import { useForm } from "react-hook-form";
import { createAlumno, deleteAlumno, updateAlumno, getAlumno } from "../api/alumnos.api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export function AlumnosFormPage() {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async data => {
    if (params.id) {
      await updateAlumno (params.id, data)
    } else {
      await createAlumno(data);
    }
    navigate("/alumnos");
  });

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const res = await getAlumno(params.id);
        setValue("nombre", res.data.nombre);
        setValue("apellidos", res.data.apellidos);
        setValue("fecha_nacimiento", res.data.fecha_nacimiento);
        setValue("direccion", res.data.direccion);
        setValue("email", res.data.email);
        setValue("telefono", res.data.telefono);
      }
    }
    loadTask();
  }, []);


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

        {params.id && (
          <button onClick={async () => {
            const aceptar = window.confirm("¿Estás seguro de que quieres eliminar este alumno?")
            if (aceptar) {
              await deleteAlumno(params.id);
              navigate("/alumnos");
            }
          }}
          >Eliminar</button>
        )}

      </form>
    </div>
  );
}

