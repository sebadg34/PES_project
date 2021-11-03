
import React from "react";
import AppBarCustom from "../appbar";

function RouteLogin({component: Component, ...rest }) {

    return (
        <AppBarCustom>
            <Component />
        </AppBarCustom>);
}

export default RouteLogin;