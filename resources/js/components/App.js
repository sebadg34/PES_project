import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Login from "./login";
import MenuContainer from "./menucontainer";
import Registro from "./registro";
import VisualizarSolicitud from "./visualizar_solicitud";
import CambiarSostenedor from "./cambiar_sostenedor";
import ProtectedRoute from "./auth/ProtectedRoute";
import RouteLogin from "./login/RouteLogin";



function App(){

  

    return (
        <Router>
            <Switch> 

                <RouteLogin exact path={"/"} component={Login} />
                {/* <AppBarCustom>
                    <Route exact path={"/"} component={Login} />
                </AppBarCustom> */}
                {/*<Route exact path={"/home"} component={MenuContainer} />*/}
                <ProtectedRoute exact path={"/registro"} component={Registro} />
                <ProtectedRoute exact path={"/visualizar-solicitud"} component={VisualizarSolicitud} />
                <ProtectedRoute exact path={"/cambiar-sostenedor"} component={CambiarSostenedor} />
                <ProtectedRoute exact path={"/home"} component={MenuContainer}/>
            </Switch>
        </Router>
    );
}

export default App;