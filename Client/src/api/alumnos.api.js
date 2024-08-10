import axios from "axios";

//Alumnos API
const alumnosApi = axios.create({
    baseURL: "http://localhost:8000/alumnos/api/v1/alumno/"
});

export const getAllAlumnos = () => alumnosApi.get('/');
export const getAlumno = (id) => alumnosApi.get(`/${id}/`);
export const createAlumno = (data) => alumnosApi.post('/', data);
export const deleteAlumno = (id) => alumnosApi.delete(`/${id}/`);
export const updateAlumno = (id, data) => alumnosApi.put(`/${id}/`, data);

//Tutores API

const tutoresApi = axios.create({
    baseURL: "http://localhost:8000/tutores/api/v1/padretutor/"
});

export const getAllTutores = () => tutoresApi.get('/');