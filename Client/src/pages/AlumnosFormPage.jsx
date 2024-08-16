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
      await updateAlumno(params.id, data);
      toast.success("Alumno actualizado correctamente", {
        style: {
          background: "#0033cc", // Azul rey
          color: "#ffffff" // Blanco
        }
      });
    } else {
      await createAlumno(data);
      toast.success("Alumno creado correctamente", {
        style: {
          background: "#0033cc", // Azul rey
          color: "#ffffff" // Blanco
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
  }, [params.id, setValue]);

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <form onSubmit={onSubmit}>
        <label className="block text-blue-900 font-semibold mb-1">Nombre</label>
        <input type="text" {...register("nombre", { required: true })}
          className="bg-white border border-gray-300 text-blue-900 p-2 rounded-lg block w-full mb-3" />
        {errors.nombre && <span className="text-red-500">Este campo es requerido</span>}

        <label className="block text-blue-900 font-semibold mb-1">Apellidos</label>
        <input type="text" {...register("apellidos", { required: true })}
          className="bg-white border border-gray-300 text-blue-900 p-2 rounded-lg block w-full mb-3" />
        {errors.apellidos && <span className="text-red-500">Este campo es requerido</span>}

        <label className="block text-blue-900 font-semibold mb-1">Fecha de nacimiento</label>
        <input type="date" {...register("fecha_nacimiento", { required: true })}
          className="bg-white border border-gray-300 text-blue-900 p-2 rounded-lg block w-full mb-3" />
        {errors.fecha_nacimiento && <span className="text-red-500">Este campo es requerido</span>}

        <label className="block text-blue-900 font-semibold mb-1">Dirección</label>
        <input rows="3" {...register("direccion", { required: true })}
          className="bg-white border border-gray-300 text-blue-900 p-2 rounded-lg block w-full mb-3" />
        {errors.direccion && <span className="text-red-500">Este campo es requerido</span>}

        <label className="block text-blue-900 font-semibold mb-1">Email</label>
        <input type="email" {...register("email", { required: true })}
          className="bg-white border border-gray-300 text-blue-900 p-2 rounded-lg block w-full mb-3" />
        {errors.email && <span className="text-red-500">Este campo es requerido</span>}

        <label className="block text-blue-900 font-semibold mb-1">Teléfono</label>
        <input type="tel" {...register("telefono", { required: true })}
          className="bg-white border border-gray-300 text-blue-900 p-2 rounded-lg block w-full mb-3" />
        {errors.telefono && <span className="text-red-500">Este campo es requerido</span>}

        <div className="flex justify-between mt-4">
          {params.id && (
            <button
              className="bg-red-500 text-white p-2 rounded-lg w-48"
              onClick={async () => {
                const aceptar = window.confirm("¿Estás seguro de que quieres eliminar este alumno?");
                if (aceptar) {
                  await deleteAlumno(params.id);
                  toast.success("Alumno eliminado correctamente", {
                    style: {
                      background: "#0033cc", // Azul rey
                      color: "#ffffff" // Blanco
                    }
                  });
                  navigate("/alumnos");
                }
              }}
            >
              Eliminar
            </button>
          )}

          <button
            className="bg-blue-900 text-white p-2 rounded-lg w-48 ml-auto"
            type="submit"
          >
            Guardar Alumno
          </button>
        </div>
      </form>
    </div>
  );
}
