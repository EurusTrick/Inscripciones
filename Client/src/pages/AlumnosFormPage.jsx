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
        <label>Nombre</label>
        <input type="text" {...register("nombre", { required: true })} />
        {errors.apellidos && <span>Este campo es requerido</span>}
        
        <label>Apellidos</label>
        <input type="text" {...register("apellidos", { required: true })} />
        {errors.apellidos && <span>Este campo es requerido</span>}

        <label>Fecha de nacimiento</label>
        <input type="date" {...register("fecha_nacimiento", { required: true })} />
        {errors.fechaNacimiento && <span>Este campo es requerido</span>}

        <label>Dirección</label>
        <input rows="3"  {...register("direccion", { required: true })} />
        {errors.direccion && <span>Este campo es requerido</span>}
        
        <label>Email</label>
        <input type="email" {...register("email", { required: true })} />
        {errors.email && <span>Este campo es requerido</span>}
        
        <label>Teléfono</label>
        <input type="tel" {...register("telefono", { required: true })} />
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

 