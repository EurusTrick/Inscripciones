import { useForm } from "react-hook-form"
import { useEffect } from "react"
import { AlumnosSelect } from "../components/AlumnosSelect";
import { createPago, deletePago, updatePago, getPago } from "../api/alumnos.api";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";


export function PagosFormPage() {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit(async data => {
        if (params.id) {
            updatePago(params.id, data);
            toast.success("Pago actualizado correctamente", {
                style: {
                    background: "#0033cc", //Azul rey
                    color: "#ffffff", //Blanco
                }
            });
        } else {
            await createPago(data);
            toast.success("Pago creado correctamente", {
                style: {
                    background: "#0033cc", //Azul rey
                    color: "#ffffff", //Blanco
                }
            });
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
        <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <form onSubmit={onSubmit}>
                <AlumnosSelect register={register} errors={errors} />

                <label className="block text-blue-900 font-semibold mb-1">Fecha de Pago</label>
                <input type="date" {...register("fecha_pago", { required: true })}
                    className="bg-white border border-gray-300 text-blue-900 p-2 rounded-lg block w-full mb-3" />
                {errors.fecha_pago && <span className="text-red-500">Este campo es requerido</span>}

                <label className="block text-blue-900 font-semibold mb-1">Monto</label>
                <input type="number" step="0.01" {...register("monto", { required: true })}
                    className="bg-white border border-gray-300 text-blue-900 p-2 rounded-lg block w-full mb-3" />
                {errors.monto && <span className="text-red-500">Este campo es requerido</span>}

                <label className="block text-blue-900 font-semibold mb-1">Método de Pago</label>
                <input type="text" {...register("metodo_pago", { required: true })}
                    className="bg-white border border-gray-300 text-blue-900 p-2 rounded-lg block w-full mb-3" />
                {errors.metodo_pago && <span className="text-red-500">Este campo es requerido</span>}


                <div className="flex justify-between mt-4">
                {params.id && (
                    <button
                        className="bg-red-500 text-white p-2 rounded-lg w-48"
                        onClick={async () => {
                            const acepted = window.confirm("¿Estás seguro de eliminar este pago?");
                            if (acepted) {
                                await deletePago(params.id);
                                toast.success("Pago eliminado correctamente", {
                                    style: {
                                        background: "#0033cc", //Azul rey
                                        color: "#ffffff", //Blanco
                                    }
                                });
                                navigate("/pagos");
                            }
                        }}
                    >
                        Delete</button>)}
                <button 
                className="bg-blue-900 text-white p-2 rounded-lg w-48 ml-auto"
                type="submit">Guardar Pago
                </button>
                </div>  
            </form>
        </div>
    );
}