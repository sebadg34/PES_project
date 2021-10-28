import { React, useState } from 'react';
import {Grid, Paper, Avatar, TextField, Typography, Button, Divider} from '@material-ui/core'
//import { Button } from '@mui/material';
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
      height: "390px",
      width: 400,
      margin: "20px auto",
      border: "1px solid #003057",
    };
  
    const paperStyleLarge = {
      padding: 20,
      height: "85vh",
      width: 400,
      margin: "20px auto",
    };
  
    const avatarStyle = { backgroundColor: "#003057" };
        
    return (
    //   <form onSubmit={hasAccount ? handleLogin : handleSignup}>
      <>
        <Grid container direction={"column"} spacing={3}>
          <Grid item>
            <Typography variant="h4" gutterBottom style={{ color: "#003057" }}>
              Plan de escolaridad segura
            </Typography>
            <Divider light />
          </Grid>
          <Grid item>
            <form>
                <Grid>
                  <Paper elevation={0} style={hasAccount ? paperStyle : paperStyleLarge}>
                    <Grid align="center" container direction={"column"} spacing={3}>
                      <Grid item>
                        <Avatar style={avatarStyle}>
                          <LockOutlinedIcon />
                        </Avatar>
                      </Grid>
                      <Grid item>
                        <h4>{hasAccount? 'Iniciar sesión' : 'Regístrate'}</h4>
                      </Grid>                      
                    </Grid>
                    <Grid container direction={"column"} spacing={2}>
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
                      <Grid item align="center">
                        <Button
                          className="linkItem"
                          style={{maxWidth: '250px', minWidth: '250px'}}
                          variant="contained"
                          color="primary"
                          href="/home"
                        //   onClick={hasAccount ? handleLogin : handleSignup}
                        >
                          {hasAccount? 'Iniciar sesión' : 'Registrarse'}
                        </Button>
                        <p>
                        {hasAccount? '¿No tienes cuenta?' : '¿Ya tienes una cuenta?'}
                        <span className="loginMsg" 
                              // onClick={() => setHasAccount(!hasAccount)}
                              >{hasAccount? '   Regístrate' : ' Inicia sesión'}</span>              
                        </p>
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