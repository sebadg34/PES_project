import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/";

const register = (datos) => {

    return axios.post(API_URL + "registro", datos).then((response) =>{
        return response.data;
    });
};

const cambiarSostenedor = (datos) => {

    return axios.post(API_URL + "cambiar-sostenedor", datos).then((response) =>{
        return response.data;
    });
};

const getRegister = () => {

    return axios.get(API_URL + "ver-registro").then((response) =>{
        return response.data;
    });
};

const getRegisterByID = (id) => {

    return axios.get(API_URL + "ver-registro/" + id).then((response) =>{
        return response.data;
    });
};

const getRegisters = () => {

    return axios.get(API_URL + "registros").then((response) =>{
        return response.data;
    });
};

export default {
    register,
    getRegister,
    cambiarSostenedor,
    getRegisters,
    getRegisterByID,
};