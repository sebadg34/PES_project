import { React } from 'react';
import {Grid, TextField, Typography, Divider } from '@material-ui/core';
import MaterialTable from 'material-table';

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