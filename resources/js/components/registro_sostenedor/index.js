import { React, useState } from 'react';
import {Grid, Paper, TextField, Button } from '@material-ui/core';
import { motion } from "framer-motion";
//import { Select, InputLabel, MenuItem} from "@mui/material";

function RegistroSostenedor({isOpen,rutSostenedor, setRutSostenedor, nombreCompletoSostenedor, setNombreCompletoSostenedor, parentezco,
    setParentezco, scanCarnetSostenedor, setScanCarnetSostenedor,completeRegister}) {

  const paperStyle = {
    padding: 20,
    height: "365px",
    width: 550,
    margin: "20px auto",
    border: "1px solid #003057",
  };

  const variants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        x: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      x: 100,
      opacity: 0,
      transition: {
        x: { stiffness: 1000 }
      }
    }
  }

  return (
  //   <form onSubmit={hasAccount ? handleLogin : handleSignup}>
    <motion.div
        style={{ x: 100 }}
        animate={isOpen ? "open" : "closed"}
        variants={variants}
    >  
        <form>
            <Grid>
                <Paper elevation={0} style={paperStyle}>
                <Grid align="center" container direction={"column"} spacing={3}>
                    <Grid item>
                    <h4>{"Registro del sostenedor"}</h4>
                    </Grid>                      
                </Grid>                      
                <Grid container direction={"column"} spacing={3}>
                    <Grid item>
                        <TextField
                            label="Nombre completo"
                            placeholder="Ingresa el nombre completo"
                            variant="outlined"
                            id="nameSostenedor"
                            name="nameSostenedor"
                            onChange={(e) => {setNombreCompletoSostenedor(e.target.value);}}
                            value={nombreCompletoSostenedor}
                            fullWidth
                            required
                            autoFocus
                        />
                    </Grid>
                    <Grid item>
                        <Grid container direction={"row"} spacing={2}>
                            <Grid item xs={4}>
                            <TextField
                                id="rutSostenedor"
                                name="rutrutSostenedor"
                                label="Rut"
                                placeholder="Ingresa el Rut"
                                variant="outlined"
                                value={rutSostenedor}
                                onChange={(e) => {setRutSostenedor(e.target.value);}}
                                fullWidth
                                required
                                autoFocus
                            />
                            </Grid>
                            <Grid item xs={8}>
                                <TextField
                                id="parentesco"
                                name="parentesco"
                                label="Parentesco"
                                placeholder="Ingresa el parentesco"
                                variant="outlined"
                                value={parentezco}
                                onChange={(e) => {setParentezco(e.target.value);}}
                                fullWidth
                                required
                                autoFocus
                                />
                            </Grid>                      
                        </Grid>                    
                    </Grid>                                    
                    <Grid item>
                        <Grid container direction={"row"} spacing={0}>
                            <Grid item xs={8}>
                            <TextField
                                className="TextField-without-border-radius"
                                id="outlined-disabled"
                                name="filename"
                                label="Copia Carnet sostenedor"                        
                                variant="outlined"
                                value={scanCarnetSostenedor}
                                onChange={(e) => {setScanCarnetSostenedor(e.target.value);}}
                                fullWidth
                                disabled
                            />
                            </Grid>
                            <Grid item xs={4}>
                            <Button
                                style={{borderRadius:0, height:54.88}}
                                variant="contained"
                                color="primary"
                                component="label"
                            >
                            Adjuntar (.jpg, .png, o .pdf)
                            <input
                                type="file"
                                hidden
                            />
                            </Button>        
                            </Grid>        
                        </Grid>              
                    </Grid>                                                                                                                                      
                    <Grid item align="center">
                        <Button
                            className="linkItem"
                            style={{maxWidth: '250px', minWidth: '250px'}}
                            variant="contained"
                            color="primary"
                            //href="/registro-sostenedor"
                            onClick={completeRegister}
                        >
                            {"Finalizar"}
                        </Button>
                    </Grid>
                </Grid>
                </Paper>
            </Grid>
        </form>     
    </motion.div>
  );
}

export default RegistroSostenedor;