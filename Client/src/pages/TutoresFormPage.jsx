import { useEffect } from "react";
import { useForm } from "react-hook-form"
import { createTutor, deleteTutor, updateTutor, getTutor } from "../api/alumnos.api";
import { useNavigate, useParams } from "react-router-dom";

export function TutoresFormPage() {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit(async data => {
        if (params.id) {
            await updateTutor (params.id, data)
        } else {
            await createTutor(data);
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

            }
        }
        loadTutor()
    }, []);


    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Nombre" {...register("nombre", { required: true })} />
                {errors.nombre && <span>Este campo es requerido</span>}
                <input type="text" placeholder="Apellidos" {...register("apellidos", { required: true })} />
                {errors.apellidos && <span>Este campo es requerido</span>}
                <input type="text" placeholder="email" {...register("email", { required: true })} />
                {errors.email && <span>Este campo es requerido</span>}
                <input type="text" placeholder="Teléfono" {...register("telefono", { required: true })} />
                {errors.telefono && <span>Este campo es requerido</span>}
                <button>Guardar</button>

                {params.id && (
                    <button
                        onClick={async () => {
                            const acepted = window.confirm("¿Estás seguro de que quieres eliminar este tutor?")
                            if (acepted) {
                                await deleteTutor(params.id)
                                navigate("/tutores")
                            }
                        }}
                    >
                        Eliminar</button>
                )}
            </form>
        </div>
    );
}
