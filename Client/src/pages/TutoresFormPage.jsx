import { useForm } from "react-hook-form"
import { createTutor, deleteTutor } from "../api/alumnos.api";
import { useNavigate, useParams } from "react-router-dom";

export function TutoresFormPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit(async data => {
        const res = await createTutor(data);
        navigate("/tutores");
    });

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Nombre" {...register("nombre", { required: true })} />
                {errors.nombre && <span>Este campo es requerido</span>}
                <input type="text" placeholder="Apellidos" {...register("apellidos", { required: true })} />
                {errors.apellidos && <span>Este campo es requerido</span>}
                <input type="text" placeholder="email" {...register("email", { required: true })} />
                {errors.email && <span>Este campo es requerido</span>}
                <input type="tel" placeholder="Teléfono" {...register("telefono", { required: true })} />
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
