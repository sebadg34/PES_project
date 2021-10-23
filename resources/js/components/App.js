import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./home";
import Login from "./login";

function App(){

    return (
        <Router>
            <Switch>
                <Route exact path={"/"} component={Login} />
                <Route exact path={"/home"} component={Home} />
            </Switch>
        </Router>
    );

}

export default App;