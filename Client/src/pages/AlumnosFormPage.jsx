import { useForm } from "react-hook-form";
import { createAlumno, deleteAlumno, updateAlumno, getAlumno } from "../api/alumnos.api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

export function AlumnosFormPage() {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async data => {
    if (params.id) {
      await updateAlumno(params.id, data)
      toast.success("Alumno actualizado correctamente", {
        style: {
          background: "#001f3f",
          color: "#fff"
        }
      });
    } else {
      await createAlumno(data);
      toast.success("Alumno creado correctamente", {
        style: {
          background: "#001f3f",
          color: "#fff"
        }
      });
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
    <div className="max-w-xl mx-auto">
      <form onSubmit={onSubmit}>

        <label>Nombre</label>
        <input type="text" {...register("nombre", { required: true })}
          className="bg-zinc-700 p-2 rounded-lg block w-full mb-3" />
        {errors.apellidos && <span>Este campo es requerido</span>}

        <label>Apellidos</label>
        <input type="text" {...register("apellidos", { required: true })}
          className="bg-zinc-700 p-2 rounded-lg block w-full mb-3" />
        {errors.apellidos && <span>Este campo es requerido</span>}

        <label>Fecha de nacimiento</label>
        <input type="date" {...register("fecha_nacimiento", { required: true })}
          className="bg-zinc-700 p-2 rounded-lg block w-full mb-3" />
        {errors.fechaNacimiento && <span>Este campo es requerido</span>}

        <label>Dirección</label>
        <input rows="3"  {...register("direccion", { required: true })}
          className="bg-zinc-700 p-2 rounded-lg block w-full mb-3" />
        {errors.direccion && <span>Este campo es requerido</span>}

        <label>Email</label>
        <input type="email" {...register("email", { required: true })}
          className="bg-zinc-700 p-2 rounded-lg block w-full mb-3" />
        {errors.email && <span>Este campo es requerido</span>}

        <label>Teléfono</label>
        <input type="tel" {...register("telefono", { required: true })}
          className="bg-zinc-700 p-2 rounded-lg block w-full mb-3" />
        {errors.telefono && <span>Este campo es requerido</span>}

        <div className="flex justify-between mt-3">
        {params.id && (
          <button
            className="bg-red-500 p-2 rounded-lg w-48"
            onClick={async () => {
              const aceptar = window.confirm("¿Estás seguro de que quieres eliminar este alumno?")
              if (aceptar) {
                await deleteAlumno(params.id);
                toast.success("Alumno eliminado correctamente", {
                  style: {
                    background: "#001f3f",
                    color: "#fff"
                  }
                });
                navigate("/alumnos");
              }
            }}
          >Eliminar</button>
        )}

        <button
          className="bg-indigo-500 p-2 rounded-lg w-48 ml-auto"
        >Guardar</button>

        </div>

        
      </form>
    </div>
  );
}

