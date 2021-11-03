import axios from "axios";

const API_URL = "http://localhost:8000/api/";

const register = (rutEstudiante, nombreCompletoEstudiante, sede, carrera, anioIngreso, email, rutSostenedor,
                  nombreCompletoSostenedor, parentezco) => {

    console.log("llegamos a la función register dentro de RegisterService");

    return axios.post(API_URL + "registro", {
        rutEstudiante,
        nombreCompletoEstudiante,
        sede,
        carrera,
        anioIngreso,
        email,
        rutSostenedor,
        nombreCompletoSostenedor,
        parentezco
    }).then((response) =>{
        console.log(response.data);
        return response.data;
    });
};

export default {
    register
};