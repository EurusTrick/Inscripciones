import { useForm } from "react-hook-form"
import { useEffect } from "react"
import { AlumnosSelect } from "../components/AlumnosSelect";
import { createPago, deletePago, updatePago, getPago } from "../api/alumnos.api";
import { useNavigate, useParams } from "react-router-dom";

export function PagosFormPage() {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit(async data => {
        if (params.id) {
            updatePago(params.id, data);
        } else {
            await createPago(data);
        }
        navigate("/pagos");
    });

    useEffect(() => {
        async function loadPago() {
            if (params.id) {
                const res = await getPago(params.id);
                setValue("fecha_pago", res.data.fecha_pago);
                setValue("monto", res.data.monto);
                setValue("metodo_pago", res.data.metodo_pago);
                setValue("alumno", res.data.alumno);

            }
        }
        loadPago()
    }, []);






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

                {params.id && (
                    <button
                        onClick={async () => {
                            const acepted = window.confirm("¿Estás seguro de eliminar este pago?");
                            if (acepted) {
                                await deletePago(params.id);
                                navigate("/pagos");
                            }
                        }}
                    >
                        Delete</button>)}
            </form>
        </div>
    );
}