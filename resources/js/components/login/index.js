import { React, useState } from 'react';
import {Grid, Paper, Avatar, TextField, Typography, Button, Divider} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useHistory } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
  
    let history = useHistory();

    const paperStyle = {
      padding: 20,
      height: "390px",
      width: 400,
      margin: "20px auto",
      border: "1px solid #003057",
    };
    
    const avatarStyle = { backgroundColor: "#003057" };
        
    const handleLogin = () => {

      setErrorEmail("");
      setErrorPassword("");

      const request = {
        method: 'POST',
        headers: {'Content-Type':'application/json', 'Accept': 'application/json'},
        body: JSON.stringify({ email: email , password: password})
     }

      fetch("api/login", request)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          if(data.hasOwnProperty("errors")){
            if(data.errors.hasOwnProperty("email")){
              setErrorEmail(data.errors.email[0]);
            }
            if(data.errors.hasOwnProperty("password")){
              setErrorPassword(data.errors.password[0]);
            }
          }else{
            history.push("/home");
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
                        <h4>Iniciar sesión</h4>
                      </Grid>                      
                    </Grid>
                    <Grid container direction={"column"} spacing={3}>
                      <Grid item>
                        <TextField
                          label="Correo electrónico"
                          placeholder="Ingresa tu correo electrónico"
                          variant="outlined"
                          id="email"
                          name="email"
                          onChange={(e) => {setEmail(e.target.value);}}
                          value={email}
                          fullWidth
                          required
                          autoFocus
                        />
                        <span className="errorMsg">{errorEmail}</span>
                      </Grid>
                      <Grid item>
                        <TextField
                          id="password"
                          name="password"
                          label="Contraseña"
                          placeholder="Ingresa tu contraseña"
                          variant="outlined"
                          type="password"
                          value={password}
                          onChange={(e) => {setPassword(e.target.value);}}
                          fullWidth
                          required
                          autoFocus
                        />
                        <span className="errorMsg">{errorPassword}</span>
                      </Grid>
                      <Grid item align="center">
                        <Button
                          className="linkItem"
                          style={{maxWidth: '250px', minWidth: '250px'}}
                          variant="contained"
                          color="primary"
                          onClick={handleLogin}
                        >
                          Iniciar sesión
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