import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.headers.get["Content-Type"] = "application/json";
axios.defaults.headers.get["Accept"] = "application/json";
axios.defaults.withCredentials = true;

const register = (username, email, password) => {
  return axios.post("signup", {
    username,
    email,
    password,
  });
};

const login = (email, password) => {
  return axios.post("login", { correo: email, contraseña: password })
    .then((response) => {
      if (response.data.access_token) {
        console.log("LOGIN EXITOSO");
        localStorage.setItem("user", JSON.stringify(response.data));
        localStorage.setItem("access_token",response.data.access_token);
      }
      return response.data;
    });
};

const logout = () => {

  return axios.get("logout")
    .then((response) => {
        console.log("LOGOUT EXITOSO");
        localStorage.removeItem("user");
        localStorage.removeItem("access_token");
        console.log(response.data);
      return response.data;
    });
};

const check = () => {

  return axios.get("check")
    .then((response) => {
      if (response.data.message) {
          console.log("AUTHENTICATED");
          return true;
      }
  });
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const getData = () => {

  return axios.get("user")
    .then((response) => {
      return response.data;
  });
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
  getData,
  check
};