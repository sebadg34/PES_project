import { React, useState , useLayoutEffect} from 'react';
import {Grid, Typography, Divider} from '@material-ui/core'
import { Button } from '@material-ui/core'
import MenuItems from "../menuitems";
import { useHistory } from "react-router-dom";
import AuthService from "../_hooks/AuthService";
import RegisterService from "../_hooks/RegisterService";
import Loading from "../loading";
import AppBarCustom from '../appbar';

function MenuContainer() {

  const [pending, setPending ] = useState(true);
  const [estadoRegistro, setEstadoRegistro] = useState(null);

  let history = useHistory();

  const handleLogout = () => {
    AuthService.logout().then(() => {
        history.push("/");
    });
  }

  useLayoutEffect(() => {
    async function getRegister() {
      RegisterService.getRegister().then((data) => {
    
        if("errors" in data){
          setErrores(data.errors);
        }
        // TIENE REGISTRO
        else if (data.data){
      
          setEstadoRegistro(data.data.estado);
          setPending(false);
          
        // NO TIENE REGISTRO
        }else{
          setEstadoRegistro("");
          setPending(false);
        }
    });
  
    }

    getRegister();
    
  }, []);

  if(pending){     
    return <Loading />
  }  

  return (
    <AppBarCustom>
    <div className="App">
        <Grid container direction={"column"} spacing={1}>
            <Grid item>
              <Grid container direction={"column"} spacing={3}>
                <Grid item>
                  <Typography variant="h4" gutterBottom style={{ color: "#003057" }}>
                      Perfil estudiante

                      <Button
                    className="linkItem"
                    style={{maxWidth: '150px', minWidth: '150px', float:"right", outline: "none"}}
                    variant="contained"
                    color="primary"
                    onClick={handleLogout}
                    >
                    Cerrar sesión
                  </Button>    
                  </Typography>                            
                  <Divider light />        
                </Grid>
                <Grid item></Grid>                            
              </Grid>               
            </Grid>
            <Grid item>
                <MenuItems estadoRegistro={estadoRegistro}/>
            </Grid>            
        </Grid>
    </div>
    </AppBarCustom>
  );
}

export default MenuContainer;
