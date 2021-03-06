import { React, useState } from 'react';
import {Grid, Paper, Avatar, TextField, Typography, Button, Divider} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useHistory } from "react-router-dom";
import AuthService from "../_hooks/AuthService";
import { useReducedMotion } from 'framer-motion';

function Login() {

  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errores, setErrores] = useState([])
  
    let history = useHistory();

    const paperStyle = {
      padding: 20,
      width: 400,
      margin: "20px auto",
      border: "1px solid #003057",
    };
    
    const avatarStyle = { backgroundColor: "#003057" };
        
    const handleLogin = () => {
      
      setErrores([]);

      AuthService.login(email, password).then((data) => {
        if("errors" in data){
          setErrores(data.errors);
        }else{
          if(JSON.parse(localStorage.getItem('isAdmin')) == false){
            console.log("ESTUDIANTE ENTRANDO");
            history.push("/home");
          }else{
            console.log("ADMIN ENTRANDO");
            history.push("/administracion");
          }
          
        }          
      });

    }


    return (
    //   <form onSubmit={hasAccount ? handleLogin : handleSignup}>
      <>
        <Grid container direction={"column"} spacing={1}>
          <Grid item>
            <Typography variant="h4" gutterBottom style={{ color: "#003057" }}>
              Plan de escolaridad segura
            </Typography>
            <Divider light />
          </Grid>
          <Grid item>
            <form>
                <Grid>
                  <Paper elevation={0} style={paperStyle}>
                    <Grid align="center" container direction={"column"} spacing={2}>
                      <Grid item>
                        <Avatar style={avatarStyle}>
                          <LockOutlinedIcon />
                        </Avatar>
                      </Grid>
                      <Grid item>
                        <h4>Iniciar sesi??n</h4>
                      </Grid>                      
                    </Grid>
                    <Grid container direction={"column"} spacing={3}>
                      <Grid item>
                        <TextField
                          label="Correo electr??nico"
                          placeholder="Ingresa tu correo electr??nico"
                          variant="outlined"
                          id="email"
                          name="email"
                          onChange={(e) => {setEmail(e.target.value);}}
                          value={email}
                          fullWidth
                          required
                          autoFocus
                        />
                        <span className="errorMsg">{errores.correo}</span>
                      </Grid>
                      <Grid item>
                        <TextField
                          id="password"
                          name="password"
                          label="Contrase??a"
                          placeholder="Ingresa tu contrase??a"
                          variant="outlined"
                          type="password"
                          value={password}
                          onChange={(e) => {setPassword(e.target.value);}}
                          fullWidth
                          required
                          autoComplete="off"
                          autoFocus
                        />
                        <span className="errorMsg">{errores.contrase??a}</span>
                      </Grid>
                      <Grid item align="center">
                        <Button
                          className="linkItem"
                          style={{maxWidth: '250px', minWidth: '250px', outline: "none"}}
                          variant="contained"
                          color="primary"
                          onClick={handleLogin}
                        >
                          Iniciar sesi??n
                        </Button>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
            </form>
          </Grid>
        </Grid>          
      </>
    );
}

export default Login;