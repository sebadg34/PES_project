import { React, useEffect, useState } from 'react';
import {Grid, Paper, TextField, Typography, Button, Divider } from '@material-ui/core';

function VisualizarSolicitud() {

  return (
  //   <form onSubmit={hasAccount ? handleLogin : handleSignup}>
    <>
        <Grid container direction={"column"} spacing={4}>
            <Grid item>
                <h1>ESTADO: <span style={{ color: "green" }}>DELICIOSO</span></h1>
            </Grid>
            <Grid item>
                <Grid container direction={"row"} spacing={10} style={{ height: 120 }} >
                    <Grid item xs={6}>
                        <Typography variant="h4" gutterBottom style={{ color: "#003057" }}>
                            Datos estudiante
                        </Typography>
                        <Divider light />
                    </Grid>   
                    <Grid item xs={6}>
                        <Typography variant="h4" gutterBottom style={{ color: "#003057" }}>
                            Datos sostenedor
                        </Typography>
                        <Divider light />
                    </Grid>                           
                </Grid>                    
            </Grid>     
            <Grid item>
                <Grid container direction={"row"} spacing={10}>
                    <Grid item xs={6}>
                        <Grid container direction={"column"} spacing={1}>
                            <Grid item>
                                <span className="labelSelect" >Nombre completo</span>
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="nombreCompleto"
                                    name="nombreCompleto"
                                    label="Nombre completo"                                    
                                    variant="outlined"
                                    type="text"
                                    //value={}                                    
                                    fullWidth
                                    disabled
                                    autoFocus
                                />                    
                            </Grid>
                        </Grid>
                    </Grid>   
                    <Grid item xs={6}>
                        <Grid container direction={"column"} spacing={1}>
                            <Grid item>
                                <span className="labelSelect">Nombre completo</span>
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="nombreCompletoSOS"
                                    name="nombreCompletoSOS"
                                    label="Nombre completo"                                    
                                    variant="outlined"
                                    type="text"
                                    //value={}                                    
                                    fullWidth
                                    disabled
                                    autoFocus
                                />                    
                            </Grid>
                        </Grid>
                    </Grid>                           
                </Grid>                    
            </Grid>         
            <Grid item>
                <Grid container direction={"row"} spacing={10}>
                    <Grid item xs={6}>
                        <Grid container direction={"column"} spacing={1}>
                            <Grid item>
                                <span className="labelSelect" >Rut</span>
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="rut"
                                    name="rut"
                                    label="Rut"                                    
                                    variant="outlined"
                                    type="text"
                                    //value={}                                    
                                    fullWidth
                                    disabled
                                    autoFocus
                                />                    
                            </Grid>
                        </Grid>
                    </Grid>   
                    <Grid item xs={6}>
                        <Grid container direction={"column"} spacing={1}>
                            <Grid item>
                                <span className="labelSelect">Rut</span>
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="rutSOS"
                                    name="rutSOS"
                                    label="Rut"                                    
                                    variant="outlined"
                                    type="text"
                                    //value={}                                    
                                    fullWidth
                                    disabled
                                    autoFocus
                                />                    
                            </Grid>
                        </Grid>
                    </Grid>                           
                </Grid>                    
            </Grid>     
            <Grid item>
                <Grid container direction={"row"} spacing={10}>
                    <Grid item xs={6}>
                        <Grid container direction={"column"} spacing={1}>
                            <Grid item>
                                <span className="labelSelect" >Sede</span>
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="sede"
                                    name="sede"
                                    label="Sede"                                    
                                    variant="outlined"
                                    type="text"
                                    //value={}                                    
                                    fullWidth
                                    disabled
                                    autoFocus
                                />                    
                            </Grid>
                        </Grid>
                    </Grid>   
                    <Grid item xs={6}>
                        <Grid container direction={"column"} spacing={1}>
                            <Grid item>
                                <span className="labelSelect">Parentesco</span>
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="parentesco"
                                    name="parentesco"
                                    label="Parentesco"                                    
                                    variant="outlined"
                                    type="text"
                                    //value={}                                    
                                    fullWidth
                                    disabled
                                    autoFocus
                                />                    
                            </Grid>
                        </Grid>
                    </Grid>                           
                </Grid>                    
            </Grid>            
            <Grid item>
                <Grid container direction={"row"} spacing={10}>
                    <Grid item xs={6}>
                        <Grid container direction={"column"} spacing={1}>
                            <Grid item>
                                <span className="labelSelect" >Carrera</span>
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="carrera"
                                    name="carrera"
                                    label="Carrera"                                    
                                    variant="outlined"
                                    type="text"
                                    //value={}                                    
                                    fullWidth
                                    disabled
                                    autoFocus
                                />                    
                            </Grid>
                        </Grid>
                    </Grid>                           
                </Grid>                    
            </Grid>         
            <Grid item>
                <Grid container direction={"row"} spacing={10}>
                    <Grid item xs={6}>
                        <Grid container direction={"column"} spacing={1}>
                            <Grid item>
                                <span className="labelSelect" >Año de ingreso</span>
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="year"
                                    name="year"
                                    label="Año de ingreso"                                    
                                    variant="outlined"
                                    type="text"
                                    //value={}                                    
                                    fullWidth
                                    disabled
                                    autoFocus
                                />                    
                            </Grid>
                        </Grid>
                    </Grid>                           
                </Grid>                    
            </Grid>    
            <Grid item>
                <Grid container direction={"row"} spacing={10}>
                    <Grid item xs={6}>
                        <Grid container direction={"column"} spacing={1}>
                            <Grid item>
                                <span className="labelSelect" >Correo institucional</span>
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="correo"
                                    name="correo"
                                    label="Correo institucional"                                    
                                    variant="outlined"
                                    type="text"
                                    //value={}                                    
                                    fullWidth
                                    disabled
                                    autoFocus
                                />                    
                            </Grid>
                        </Grid>
                    </Grid>                           
                </Grid>                    
            </Grid>         
            <Grid item>
                <Typography variant="h4" gutterBottom style={{ color: "#003057" }}>
                    Archivos adjuntos    
                </Typography>
                <Divider light />
            </Grid>                                                                    
        </Grid>
          
    </>
  );
}

export default VisualizarSolicitud;