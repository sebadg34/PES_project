import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/";

const adjuntarArchivos = (datos) => {

    return axios.post(API_URL + "adjuntar-archivos", datos).then((response) =>{
        return response.data;
    });
};

const getArchivosAdjuntos = (id) => {

    return axios.get(API_URL + "archivos-adjuntos/" + id).then((response) =>{
        return response.data;
    });
};

export default {
    adjuntarArchivos,
    getArchivosAdjuntos,
};