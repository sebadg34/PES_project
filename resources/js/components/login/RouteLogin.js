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
            // En caso de entrar al login ya logeado, redirigir al home correspondiente al rol
            if(JSON.parse(localStorage.getItem('isAdmin')) == true){
                console.log("redireccionando admin a su pag")
                return <Redirect to={{ pathname: '/administracion', state: { from: props.location } }} />
            }else{
                return <Redirect to={{ pathname: '/home', state: { from: props.location } }} />
            }

            
            
        }
    }} />;


    // return (
    //     <AppBarCustom>
    //         <Component />
    //     </AppBarCustom>);




}

export default RouteLogin;