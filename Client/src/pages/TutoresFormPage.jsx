import { useEffect } from "react";
import { useForm } from "react-hook-form"
import { createTutor, deleteTutor, updateTutor, getTutor } from "../api/alumnos.api";
import { useNavigate, useParams } from "react-router-dom";
import { AlumnosSelect } from "../components/AlumnosSelect";
import { toast } from "react-hot-toast";

export function TutoresFormPage() {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit(async data => {
        if (params.id) {
            await updateTutor(params.id, data);
            toast.success("Tutor actualizado correctamente", {
                style: {
                    backgroundColor: "#0033cc", //Azul rey
                    color: "#ffffff", //Blanco
                }
            });
        } else {
            await createTutor(data);
            toast.success("Tutor creado correctamente", {
                style: {
                    backgroundColor: "#0033cc", //Azul rey
                    color: "#ffffff", //Blanco
                }
            });
        }
        navigate("/tutores");
    });

    useEffect(() => {
        async function loadTutor() {
            if (params.id) {
                const res = await getTutor(params.id)
                setValue("nombre", res.data.nombre)
                setValue("apellidos", res.data.apellidos)
                setValue("email", res.data.email)
                setValue("telefono", res.data.telefono)
                setValue("alumno", res.data.alumno)

            }
        }
        loadTutor()
    }, []);


    return (
        <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <form onSubmit={onSubmit}>
                <AlumnosSelect register={register} errors={errors} />

                <label className="block text-blue-900 front-semibold mb-1">Nombre(s) del tutor</label>
                <input type="text" {...register("nombre", { required: true })}
                    className="bg-white border border-gray-300 text-blue-900 p-2 rounded-lg block w-full mb-3" />
                {errors.nombre && <span className="text-red-500">Este campo es requerido</span>}

                <label className="block text-blue-900 front-semibold mb-1">Apellidos del tutor</label>
                <input type="text" {...register("apellidos", { required: true })}
                    className="bg-white border border-gray-300 text-blue-900 p-2 rounded-lg block w-full mb-3" />
                {errors.apellidos && <span className="text-red-500">Este campo es requerido</span>}

                <label className="block text-blue-900 front-semibold mb-1">Email del tutor</label>
                <input type="text" {...register("email", { required: true })}
                    className="bg-white border border-gray-300 text-blue-900 p-2 rounded-lg block w-full mb-3" />
                {errors.email && <span className="text-red-500">Este campo es requerido</span>}

                <label className="block text-blue-900 front-semibold mb-1">Teléfono del tutor</label>
                <input type="text" {...register("telefono", { required: true })}
                    className="bg-white border border-gray-300 text-blue-900 p-2 rounded-lg block w-full mb-3" />
                {errors.telefono && <span className="text-red-500">Este campo es requerido</span>}

                <div className="flex justify-between mt-4">
                    {params.id && (
                        <button
                            className="bg-red-500 text-white p-2 rounded-lg w-48"
                            onClick={async () => {
                                const acepted = window.confirm("¿Estás seguro de que quieres eliminar este tutor?")
                                if (acepted) {
                                    await deleteTutor(params.id)
                                    toast.success("Tutor eliminado correctamente", {
                                        style: {
                                            backgroundColor: "#0033cc", //Azul rey
                                            color: "#ffffff", //Blanco
                                        }
                                    })
                                    navigate("/tutores")
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
                        Guardar Padre/Tutor
                    </button>
                </div>
            </form>
        </div>
    );
}
