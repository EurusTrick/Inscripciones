import { useForm } from "react-hook-form"
import { AlumnosSelect } from "../components/AlumnosSelect";
import { PagosSelect } from "../components/PagosSelect";
import { createInscripcion, deleteInscripcion, updateInscripcion, getInscripcion} from "../api/alumnos.api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export function InscripcionesFormPage() {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit(async data => {
        if (params.id) {
            updateInscripcion(params.id, data);
        } else {
            await createInscripcion(data);
        }
        navigate("/inscripciones");
    });


    useEffect(() => {
        async function loadInscripcion(){
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
        <div>
            <form onSubmit={onSubmit}>

                <AlumnosSelect register={register} errors={errors} />
                <PagosSelect register={register} errors={errors} />
                <label>
                    <input type="checkbox" {...register("factura", { required: true })} />
                    Factura
                </label>
                <input type="text" placeholder="Curso" {...register("curso", { required: true })} />
                {errors.curso && <span>Este campo es requerido</span>}
                <input type="text" placeholder="Tipo de inscripción" {...register("tipo_inscripcion", { required: true })} />
                {errors.tipo_inscripcion && <span>Este campo es requerido</span>}

                <button>Guardar</button>

                {params.id && (
                    <button
                        onClick={async () => {
                            const acepted = window.confirm("Estas seguro de que quieres eliminar esta inscripcion")
                            if (acepted) {
                                await deleteInscripcion(params.id);
                                navigate("/inscripciones");
                            }
                        }}
                    >Delete</button>)}
            </form>
        </div>
    )
}