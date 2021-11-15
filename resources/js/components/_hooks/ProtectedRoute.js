
import React, { useState, useEffect, useRef }from "react";
import { Route, Redirect } from "react-router-dom";
import Loading from "../loading";
import AppBarCustom from "../appbar";
import { useIdleTimer } from 'react-idle-timer'
import Swal from 'sweetalert2'
import AuthService from "./AuthService";
import { useHistory } from "react-router-dom";

function ProtectedRoute({component: Component, ...rest }) {

    let history = useHistory();

    const [user, setUser] = useState(localStorage.getItem("user"));
    const [ pending, setPending ] = useState(true);

    //60 * 1000 ms = 1 min (60000 ms) * 15  = 15 minutos (900000 ms)
    const timeout = 60 * 1000 * 15;
    //const timeout = 10000;
    //1 minuto
    const timeoutLogout = 60000;
    //const timeoutLogout = 5000;

    const [isIdle, setIsIdle] = useState(false);
    const [messageActive, setMessageActive] = useState(false);
    const sessionTimeoutRef = useRef(null);
  
    const handleOnActive = () => setIsIdle(false)
    const handleOnIdle = () => setIsIdle(true)
  
    const handleLogout = () => {
        AuthService.logout().then(() => {
            history.push("/");
        });
      }    

    useIdleTimer({ timeout, onActive: handleOnActive, onIdle: handleOnIdle })
  
    useEffect(() => {

        if(user){
            if(localStorage.getItem("access_token")){
                setPending(false);
            }
        }else{
            setPending(false);
        }
    
    }, [user]);

    useEffect(() => {

        console.log(isIdle);
        if(isIdle && !messageActive){
            setMessageActive(true);  
            sessionTimeoutRef.current = setTimeout(handleLogout, timeoutLogout);          
            Swal.fire({
                title: 'Sesión inactiva',
                text: "Tu sesión caducará pronto...",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Mantener mi sesión iniciada',
                cancelButtonText: "Cerrar sesión",
                timer: timeoutLogout
              }).then((result) => {
                setMessageActive(false);              
                if (result.isDismissed) {
                    if(result.dismiss !== "timer"){
                        clearTimeout(sessionTimeoutRef.current);
                        handleLogout();
                    }
                }
                if (result.isConfirmed) {
                    clearTimeout(sessionTimeoutRef.current);
                }                
              })
        }
    }, [isIdle]);

    if(pending){     
        return <Loading />
    }

    console.log(localStorage.getItem('user'));

    return <Route {...rest} render={(props) => {
        if (user) {   
            if(rest.path === "/visualizar-solicitud"){
                return (<Component />)
            }
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