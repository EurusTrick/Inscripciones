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
export const getTutor = (id) => tutoresApi.get(`/${id}/`);
export const createTutor = (data) => tutoresApi.post('/', data);
export const deleteTutor = (id) => tutoresApi.delete(`/${id}/`);
export const updateTutor = (id, data) => tutoresApi.put(`/${id}/`, data); 

//Pagos API
const pagosApi = axios.create({
    baseURL: "http://localhost:8000/pagos/api/v1/pago"
});

export const getAllPagos = () => pagosApi.get('/');
export const getPago = (id) => pagosApi.get(`/${id}/`);
export const createPago = (data) => pagosApi.post('/', data);
export const deletePago = (id) => pagosApi.delete(`/${id}/`);
export const updatePago = (id, data) => pagosApi.put(`/${id}/`, data);

//Inscripciones API
const inscripcionesApi = axios.create({
    baseURL: "http://localhost:8000/inscripciones/api/v1/inscripcion"
});

export const getAllInscripciones = () => inscripcionesApi.get('/');
export const createInscripcion = (data) => inscripcionesApi.post('/', data);
