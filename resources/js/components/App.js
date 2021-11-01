import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Login from "./login";
import MenuContainer from "./menucontainer";
import Registro from "./registro";
import VisualizarSolicitud from "./visualizar_solicitud";
import CambiarSostenedor from "./cambiar_sostenedor";
import ProtectedRoute from "./auth/ProtectedRoute";




function App(){

  

    return (
        <Router>
            <Switch> 
                <Route exact path={"/"} component={Login} />
                {/*<Route exact path={"/home"} component={MenuContainer} />*/}
                <Route exact path={"/registro"} component={Registro} />
                <Route exact path={"/visualizar-solicitud"} component={VisualizarSolicitud} />
                <Route exact path={"/cambiar-sostenedor"} component={CambiarSostenedor} />
                <ProtectedRoute exact path={"/home"} component={MenuContainer}/>
            </Switch>
        </Router>
    );
}

export default App;