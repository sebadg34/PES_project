import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "./login";
import MenuContainer from "./menucontainer";
import Registro from "./registro";
import VisualizarSolicitud from "./visualizar_solicitud";
import CambiarSostenedor from "./cambiar_sostenedor";
import ProtectedRoute from "./_hooks/ProtectedRoute";
import RouteLogin from "./login/RouteLogin";
import axios from "axios";

function App(){
    axios.defaults.baseURL = "http://127.0.0.1:8000/api/";

    return (
        <Router>
            <Switch>
                <RouteLogin exact path={"/"} component={Login} />
                <ProtectedRoute exact path={"/registro"} component={Registro} />
                <ProtectedRoute exact path={"/visualizar-solicitud"} component={VisualizarSolicitud} />
                <ProtectedRoute exact path={"/cambiar-sostenedor"} component={CambiarSostenedor} />
                <ProtectedRoute exact path={"/home"} component={MenuContainer}/>
            </Switch>
        </Router>
    );
}

export default App;