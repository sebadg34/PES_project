import { React, useState, useEffect } from 'react';
import {Grid, TextField, Typography, Divider } from '@material-ui/core';
import MaterialTable from 'material-table';
import RegisterService from "../_hooks/RegisterService";

function VisualizarSolicitud() {

    //variables estudiante
    const [rutEstudiante, setRutEstudiante] = useState("");
    const [nombreCompletoEstudiante, setNombreCompletoEstudiante] = useState("");
    const [sede, setSede] = useState("");
    const [carrera, setCarrera] = useState("");
    const [anioIngreso, setAnioIngreso] = useState("");
    const [email, setEmail] = useState("");
    const [scanCarnetEstudiante, setScanCarnetEstudiante] = useState("");
    //variables sostenedor
    const [rutSostenedor, setRutSostenedor] = useState("");
    const [nombreCompletoSostenedor, setNombreCompletoSostenedor] = useState("");
    const [parentezco, setParentezco] = useState("");
    const [scanCarnetSostenedor, setScanCarnetSostenedor] = useState("");

    let getRegister = async () =>{
        const register = await RegisterService.getRegister();
        console.log(register);

        setRutEstudiante(register.data.rutEstudiante);
        setNombreCompletoEstudiante(register.data.nombreCompletoEstudiante);
        setSede(register.data.sede);
        setCarrera(register.data.carrera);
        setAnioIngreso(register.data.anioIngreso);
        setEmail(register.data.email);
        setRutSostenedor(register.data.rutSostenedor);
        setNombreCompletoSostenedor(register.data.nombreCompletoSostenedor);
        setParentezco(register.data.parentezco);
        

    }
        

    useEffect(() => {
        
        getRegister();

    }, [])

    return (
    //   <form onSubmit={hasAccount ? handleLogin : handleSignup}>
        <>
            <Grid container direction={"column"} spacing={4}>
                <Grid item>
                    <h1>ESTADO: <span style={{ color: "gray" }}>INGRESADO</span></h1>
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
                                        variant="outlined"
                                        type="text"
                                        value={nombreCompletoEstudiante}                                    
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
                                        variant="outlined"
                                        type="text"
                                        value={nombreCompletoSostenedor}                                    
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
                                        variant="outlined"
                                        type="text"
                                        value={rutEstudiante}                                    
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
                                        variant="outlined"
                                        type="text"
                                        value={rutSostenedor}                                    
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
                                        variant="outlined"
                                        type="text"
                                        value={sede}                                    
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
                                        variant="outlined"
                                        type="text"
                                        value={parentezco}                                    
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
                                        variant="outlined"
                                        type="text"
                                        value={carrera}                                    
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
                                        variant="outlined"
                                        type="text"
                                        value={anioIngreso}                                    
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
                                        variant="outlined"
                                        type="text"
                                        value={email}                                    
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
                    <MaterialTable
                        title="Archivos adjuntos"
                        options={{search: false, paging: false}}           
                        columns={[
                            { title: 'Nombre archivo', field: 'nombreArchivo' },
                            { title: 'Peso', field: 'peso' },
                            { title: 'Persona correspondiente', field: 'Persona'},
                        ]}
                        data={[
                            { name: 'Mehmet', surname: 'Baran', birthYear: "1987"},
                            { name: 'Zerya Betül', surname: 'Baran', birthYear: "2017"},
                        ]}
                        detailPanel={rowData => {
                            return (
                            <iframe
                                width="100%"
                                height="1120"
                                src="https://fi.ort.edu.uy/innovaportal/file/2021/1/metodologia_xp.pdf"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            />
                            )
                        }}
                        />
                </Grid>                                                                    
            </Grid>
            
        </>
    );
}

export default VisualizarSolicitud;