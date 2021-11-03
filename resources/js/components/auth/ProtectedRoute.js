
import React, {useState, useEffect }from "react";
import { Route, Redirect } from "react-router-dom";
import Loading from "../loading";
import AppBarCustom from "../appbar";

function ProtectedRoute({component: Component, ...rest }) {

    const [user, setUser] = useState(localStorage.getItem("user"));
    const [pending, setPending ] = useState(false);

    useEffect(() => {

        if(user){
          setPending(false);
        }
    
      }, [user]);


    if(pending){
        return <Loading />
    }

console.log(localStorage.getItem('user'));


    return <Route {...rest} render={(props) => {
        if (user) {
            return (
            <AppBarCustom>
                <Component />
            </AppBarCustom>)
        }
        else {
            return <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        }
    }} />;
}

export default ProtectedRoute;