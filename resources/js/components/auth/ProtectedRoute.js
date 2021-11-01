
import React, {useEffect, useState, useContext} from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import AuthService from "./AuthService";


function ProtectedRoute({component: Component, ...rest }) {

console.log(localStorage.getItem('user'));


      return <Route {...rest} render={(props) => {
        if (localStorage.getItem("user")) {
            return <Component />
        }
        else {
            return <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        }
    }} />;
}

export default ProtectedRoute;