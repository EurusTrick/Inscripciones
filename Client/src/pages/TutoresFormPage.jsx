import { useEffect } from "react";
import { useForm } from "react-hook-form"
import { createTutor, deleteTutor, updateTutor, getTutor } from "../api/alumnos.api";
import { useNavigate, useParams } from "react-router-dom";
import { AlumnosSelect } from "../components/AlumnosSelect";

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
                setValue("alumno", res.data.alumno)

            }
        }
        loadTutor()
    }, []);


    return (
        <div>
            <form onSubmit={onSubmit}>
                <AlumnosSelect register={register} errors={errors} />

                <label>Nombre</label>
                <input type="text" {...register("nombre", { required: true })} />
                {errors.nombre && <span>Este campo es requerido</span>}

                <label>Apellidos</label>
                <input type="text" {...register("apellidos", { required: true })} />
                {errors.apellidos && <span>Este campo es requerido</span>}

                <label>Email</label>
                <input type="text" {...register("email", { required: true })} />
                {errors.email && <span>Este campo es requerido</span>}

                <label>Teléfono</label>
                <input type="text" {...register("telefono", { required: true })} />
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
