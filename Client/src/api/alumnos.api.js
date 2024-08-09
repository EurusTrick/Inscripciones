import axios from "axios";

const alumnosApi = axios.create({
    baseURL: "http://localhost:8000/alumnos/api/v1/alumno/"
});

export const getAllAlumnos = () => alumnosApi.get('/');
export const createAlumno = (data) => alumnosApi.post('/', data);
export const deleteAlumno = (id) => alumnosApi.delete(`/${id}/`);