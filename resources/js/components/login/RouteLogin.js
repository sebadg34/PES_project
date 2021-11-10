import React, {useState }from "react";
import { Route, Redirect } from "react-router-dom";
import AppBarCustom from "../appbar";

function RouteLogin({component: Component, ...rest }) {

    const [user, setUser] = useState(localStorage.getItem("user"));

    return <Route {...rest} render={(props) => {
        if (!user) {
            return (
            <AppBarCustom>
                <Component />
            </AppBarCustom>)
        }
        else {
            return <Redirect to={{ pathname: '/home', state: { from: props.location } }} />
        }
    }} />;


    // return (
    //     <AppBarCustom>
    //         <Component />
    //     </AppBarCustom>);




}

export default RouteLogin;