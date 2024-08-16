import { useForm } from "react-hook-form"
import { AlumnosSelect } from "../components/AlumnosSelect";
import { PagosSelect } from "../components/PagosSelect";
import { createInscripcion, deleteInscripcion, updateInscripcion, getInscripcion } from "../api/alumnos.api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import toast from "react-hot-toast";

export function InscripcionesFormPage() {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit(async data => {
        if (params.id) {
            updateInscripcion(params.id, data);
            toast.success("Inscripcion actualizada corectamente", {
                style: {
                    backgroundColor: "#0033cc", //Azul Rey
                    color: "#ffffff", //Blanco
                }
            });
        } else {
            await createInscripcion(data);
            toast.success("Inscripcion creada corectamente", {
                style: {
                    backgroundColor: "#0033cc", //Azul Rey
                    color: "#ffffff", //Blanco
                }
            });
        }
        navigate("/inscripciones");
    });


    useEffect(() => {
        async function loadInscripcion() {
            if (params.id) {
                const res = await getInscripcion(params.id);
                setValue("alumno", res.data.alumno);
                setValue("pago", res.data.pago);
                setValue("factura", res.data.factura);
                setValue("curso", res.data.curso);
                setValue("tipo_inscripcion", res.data.tipo_inscripcion);
            }
        } loadInscripcion();
    }, []);



    return (
        <div className="max-w-xl- mx-auto bg-white p-6 rounded-lg shadow-md">
            <form onSubmit={onSubmit}>
                <AlumnosSelect register={register} errors={errors} />
                <PagosSelect register={register} errors={errors} />

                <div className="felx items-center mb-4">
                <label className="block text-blue-900 font-semibold">Factura</label>
                <input type="checkbox" {...register("factura")} className="mr-2" />
                </div>


                <label className="block text-blue-900 font-semibold mb-1">Curso</label>
                <input type="text" {...register("curso", { required: true })}
                    className="bg-white border border-gray-300 text-blue-900 p-2 rounded-lg block w-full mb-3" />
                {errors.curso && <span className="text-red-500">Este campo es requerido</span>}

                <label className="block text-blue-900 font-semibold mb-1">Tipo de inscripción</label>
                <input type="text"{...register("tipo_inscripcion", { required: true })}
                    className="bg-white border border-gray-300 text-blue-900 p-2 rounded-lg block w-full mb-3" />
                {errors.tipo_inscripcion && <span className="text-red-500">Este campo es requerido</span>}

                <div className="flex justify-between mt-4">
                    {params.id && (
                        <button
                            className="bg-red-500 text-white p-2 rounded-lg w-48"
                            onClick={async () => {
                                const acepted = window.confirm("Estas seguro de que quieres eliminar esta inscripcion")
                                if (acepted) {
                                    await deleteInscripcion(params.id);
                                    toast.success("Inscripcion eliminada correctamente", {
                                        style: {
                                            backgroundColor: "#0033cc", //Azul Rey
                                            color: "#ffffff", //Blanco
                                        }
                                    });
                                    navigate("/inscripciones");
                                }
                            }}
                        >Delete</button>
                        )}
                    <button
                    className="bg-blue-900 text-white p-2 rounded-lg w-48 ml-auto"
                    >Guardar</button>
                </div>
            </form>
        </div>
    )
}