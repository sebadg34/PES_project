import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./home";
import Login from "./login";
import MenuContainer from "./menucontainer";
import Perfil from "./perfil";
import Registro from "./registro";

function App(){

    return (
        <Router>
            <Switch>
                <Route exact path={"/"} component={Login} />
                <Route exact path={"/home"} component={MenuContainer} />
                <Route exact path={"/registro"} component={Registro} />
            </Switch>
        </Router>
    );

}

export default App;