import { React, useState } from 'react';
import {Grid, Paper, Avatar, TextField} from '@material-ui/core'
import { Button } from '@mui/material';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [rut, setRut] = useState("");
    const [phone, setPhone] = useState("");
    const [hasAccount, setHasAccount] = useState(true);
  
    const paperStyle = {
      padding: 20,
      height: "60vh",
      width: 400,
      margin: "20px auto",
    };
  
    const paperStyleLarge = {
      padding: 20,
      height: "85vh",
      width: 400,
      margin: "20px auto",
    };
  
    const avatarStyle = { backgroundColor: "#010b40" };
        
    return (
    //   <form onSubmit={hasAccount ? handleLogin : handleSignup}>
    <form>
        <Grid>
          <Paper elevation={10} style={hasAccount ? paperStyle : paperStyleLarge}>
            <Grid align="center">
              <Avatar style={avatarStyle}>
                <LockOutlinedIcon />
              </Avatar>
            </Grid>
            <Grid container direction={"column"} spacing={3}>
              <Grid item align="center">
                <h4>{hasAccount? 'Ingresa' : 'Regístrate'}</h4>
              </Grid>
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
              </Grid>
              {hasAccount?
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
                </Grid>
                  : (
                <>
                <Grid item>
                  <TextField
                    id="name"
                    name="name"
                    label="Nombre"
                    placeholder="Ingresa tu nombre completo"
                    variant="outlined"
                    type="text"
                    value={name}
                    onChange={(e) => {setName(e.target.value);}}
                    fullWidth
                    required
                    autoFocus
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id="rut"
                    name="rut"
                    label="Rut"
                    placeholder="Ingresa tu rut (incluya puntuación y guión)"
                    variant="outlined"
                    type="text"
                    value={rut}
                    onChange={(e) => {setRut(e.target.value);}}
                    fullWidth
                    required
                    autoFocus
                  />
                </Grid>                 
                </>
                )}
              <Grid align="center">
                <Button
                  style={{maxWidth: '250px', minWidth: '250px'}}
                  variant="contained"
                  color="primary"
                //   onClick={hasAccount ? handleLogin : handleSignup}
                >
                  {hasAccount? 'Iniciar sesión' : 'Registrarse'}
                </Button>
                <p>
                {hasAccount? '¿No tienes cuenta?' : '¿Ya tienes una cuenta?'}
                <span className="loginMsg" onClick={() => setHasAccount(!hasAccount)}>{hasAccount? '   Regístrate' : ' Inicia sesión'}</span>              
                </p>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </form>
    );
}

export default Login;