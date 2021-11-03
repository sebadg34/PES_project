import axios from "axios";

const API_URL = "http://localhost:8000/api/";

const register = (datos) => {

    return axios.post(API_URL + "registro", datos).then((response) =>{
        return response.data;
    });
};

const getRegister = () => {

    return axios.get(API_URL + "ver-registro").then((response) =>{
        return response.data;
    });
};

export default {
    register,
    getRegister
};