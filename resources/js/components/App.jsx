import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "./login";
import MenuContainer from "./menucontainer";
import homeAdmin from "./homeAdmin";
import Registro from "./registro";
import VisualizarSolicitud from "./visualizar_solicitud";
import ActivarSolicitud from "./activar_solicitud";
import CambiarSostenedor from "./cambiar_sostenedor";
import ProtectedRoute from "./_hooks/ProtectedRoute";
import RouteLogin from "./login/RouteLogin";
import axios from "axios";
import { Role } from "./auxiliars/role";
import VisualizarSolicitudAdmin from "./visualizar_solicitud_admin";

function App(){
    axios.defaults.baseURL = "http://127.0.0.1:8000/api/";

    return (
        <Router>
            <Switch>
            
                <RouteLogin exact path={"/"} component={Login} />
                
                <ProtectedRoute exact path={"/registro"} roles={Role.User} component={Registro} />
                <ProtectedRoute exact path={"/visualizar-solicitud"} roles={Role.User} component={VisualizarSolicitud} />
                <ProtectedRoute exact path={"/cambiar-sostenedor"} roles={Role.User} component={CambiarSostenedor} />
                <ProtectedRoute exact path={"/home"} roles={Role.User} component={MenuContainer}/>
                <ProtectedRoute exact path={"/activar-solicitud"} roles={Role.User} component={ActivarSolicitud}/>

                <ProtectedRoute exact path={"/administracion"} roles={Role.Admin} component={homeAdmin}/>
                <ProtectedRoute exact path={"/estudiantes/:id"} roles={Role.Admin} component={VisualizarSolicitudAdmin}/>

            </Switch>
        </Router>
    );
}

export default App;