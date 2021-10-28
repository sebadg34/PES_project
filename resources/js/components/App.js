import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./login";
import MenuContainer from "./menucontainer";
import Registro from "./registro";
import VisualizarSolicitud from "./visualizar_solicitud";

function App(){

    return (
        <Router>
            <Switch>
                <Route exact path={"/"} component={Login} />
                <Route exact path={"/home"} component={MenuContainer} />
                <Route exact path={"/registro"} component={Registro} />
                <Route exact path={"/visualizar-solicitud"} component={VisualizarSolicitud} />
            </Switch>
        </Router>
    );

}

export default App;