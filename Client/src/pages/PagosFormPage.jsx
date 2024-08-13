import { useForm } from "react-hook-form"
import { AlumnosSelect } from "../components/AlumnosSelect";
import { createPago } from "../api/alumnos.api";
import { useNavigate } from "react-router-dom";

export function PagosFormPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = handleSubmit(async (data) => {
        await createPago(data);
        navigate ("/pagos");
    });

    return (
        <div>
            <form onSubmit={onSubmit}>
                <AlumnosSelect register={register} errors={errors} />

                <label>Fecha de Pago</label>
                <input type="date" {...register("fecha_pago", { required: true })} />
                {errors.fecha_pago && <span>Este campo es requerido</span>}

                <label>Monto</label>
                <input type="number" step="0.01" {...register("monto", { required: true })} />
                {errors.monto && <span>Este campo es requerido</span>}

                <label>Método de Pago</label>
                <input type="text" {...register("metodo_pago", { required: true })} />
                {errors.metodo_pago && <span>Este campo es requerido</span>}

                <button type="submit">Guardar Pago</button>
            </form>
        </div>
    )
}