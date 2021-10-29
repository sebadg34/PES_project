import { React, useState } from 'react';
import {Grid, Paper, Avatar, TextField, Typography, Button, Divider} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const paperStyle = {
      padding: 20,
      height: "390px",
      width: 400,
      margin: "20px auto",
      border: "1px solid #003057",
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
                  <Paper elevation={0} style={paperStyle}>
                    <Grid align="center" container direction={"column"} spacing={4}>
                      <Grid item>
                        <Avatar style={avatarStyle}>
                          <LockOutlinedIcon />
                        </Avatar>
                      </Grid>
                      <Grid item>
                        <h4>Iniciar sesión</h4>
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
                      <Grid item align="center">
                        <Button
                          className="linkItem"
                          style={{maxWidth: '250px', minWidth: '250px'}}
                          variant="contained"
                          color="primary"
                          href="/home"
                        //   onClick={hasAccount ? handleLogin : handleSignup}
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