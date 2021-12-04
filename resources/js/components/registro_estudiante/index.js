import { React } from 'react';
import {Grid, Paper, TextField, Button } from '@material-ui/core';
import Select from "react-select";
import { motion } from "framer-motion";
import {Carreras} from "../auxiliars/carreras"

function RegistroEstudiante({isOpen, pos, rutEstudiante, setRutEstudiante, nombreCompletoEstudiante, setNombreCompletoEstudiante, sede, setSede, carrera, setCarrera,
     anioIngreso, setAnioIngreso, email, setEmail, scanCarnetEstudiante, setScanCarnetEstudiante, errores}) {

    const paperStyle = {
        padding: 20,
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

    const handleSubirArchivo = e => {
        if(e.target.files[0]){
            setScanCarnetEstudiante(e.target.files[0]);
            e.target.value = null;
        }
    }  

    return (
    //   <form onSubmit={hasAccount ? handleLogin : handleSignup}>
        <motion.div
            style={{ x: pos }}
            //style={{ x: 100 }}
            animate={isOpen ? "open" : "closed"}
            variants={variants}
        >  
            <form>
                <Grid>
                    <Paper elevation={0} style={paperStyle}>
                    <Grid align="center" container direction={"column"} spacing={3}>
                        <Grid item>
                        <h4>{"Identificación del estudiante"}</h4>
                        </Grid>                      
                    </Grid>                    
                    <Grid container direction={"column"} spacing={3}>
                        <Grid item>
                        <TextField
                            label="Nombre completo"
                            placeholder="Ingresa tu nombre completo"
                            variant="outlined"
                            id="name"
                            name="name"
                            onChange={(e) => {setNombreCompletoEstudiante(e.target.value);}}
                            value={nombreCompletoEstudiante}
                            fullWidth
                            required
                            autoFocus
                        />
                        <span className="errorMsg">{errores.NombreEstudiante}</span>
                        </Grid>
                        <Grid item>
                        <Grid container direction={"row"} spacing={2}>
                            <Grid item xs={4}>
                            <TextField
                                id="rut"
                                name="rut"
                                label="Rut"
                                placeholder="Ingresa tu Rut"
                                variant="outlined"
                                onChange={(e) => {setRutEstudiante(e.target.value);}}
                                value={rutEstudiante}
                                fullWidth
                                required
                                autoFocus
                            />
                            <span className="errorMsg">{errores.RutEstudiante}</span>
                            </Grid>
                                <Grid item xs={8}>
                                    <TextField
                                    id="email"
                                    name="email"
                                    label="Correo electrónico"
                                    placeholder="Ingresa tu correo electrónico"
                                    variant="outlined"
                                    value={email}
                                    onChange={(e) => {setEmail(e.target.value);}}
                                    fullWidth
                                    required
                                    autoFocus
                                    />
                                    <span className="errorMsg">{errores.email}</span>
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
                                variant="outlined"
                                value={scanCarnetEstudiante.name}
                                fullWidth
                                disabled
                            />
                            <span className="errorMsg">{errores.CarnetEstudiante}</span>     
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
                                accept="image/x-png,image/jpeg,application/pdf"
                                onChange={handleSubirArchivo}
                                hidden
                            />
                            </Button>   
                
                            </Grid>        
                        </Grid>              
                        </Grid>                         
                        <Grid item>
                        <Grid container direction={"column"} spacing={1}>
                            <Grid item>
                            <span className="labelSelect" >Escoge el año de ingreso *</span>
                            </Grid>
                            <Grid item>
                            <Select
                                placeholder="Selecciona un año"
                                name="year"
                                defaultValue={anioIngreso}
                                theme={(theme) => ({
                                ...theme,
                                colors: {
                                    ...theme.colors,
                                    primary50: "#91a7bb",
                                    primary25: "#b5c4d1",
                                    primary: '#003057',
                                },                 
                                })}                      
                                options={[
                                {label: "2020", value: "2020"},
                                {label: "2019", value: "2019"}
                                ]}
                                classNamePrefix="select"
                                onChange={event => setAnioIngreso(event)}
                            />                 
                            <span className="errorMsg">{errores.AñoIngreso}</span>       
                            </Grid>
                        </Grid>
                        </Grid>     
                        <Grid item>
                        <Grid container direction={"column"} spacing={1}>
                            <Grid item>
                            <span className="labelSelect" >Escoge una sede *</span>
                            </Grid>
                            <Grid item>
                            <Select
                                name="sede"
                                defaultValue={sede}
                                theme={(theme) => ({
                                ...theme,
                                colors: {
                                    ...theme.colors,
                                    primary50: "#91a7bb",
                                    primary25: "#b5c4d1",
                                    primary: '#003057',
                                },                 
                                })}
                                placeholder="Selecciona una sede"
                                options={[
                                {label: "SEDE ANTOFAGASTA", value: "ANTOFAGASTA"},
                                {label: "SEDE COQUIMBO", value: "COQUIMBO"},
                                {label: "SEDE SAN PEDRO DE ATACAMA", value: "SAN PEDRO"}
                                ]}
                                onChange={event => setSede(event)}          
                            />          
                            <span className="errorMsg">{errores.sede}</span>          
                            </Grid>
                        </Grid>
                        </Grid>            
                        <Grid item>
                        <Grid container direction={"column"} spacing={1}>
                            <Grid item>
                            <span className="labelSelect" >Escoge tu carrera *</span>
                            </Grid>
                            <Grid item>
                            <Select
                                placeholder="Selecciona una carrera"
                                name="year"
                                defaultValue={carrera}
                                theme={(theme) => ({
                                ...theme,
                                colors: {
                                    ...theme.colors,
                                    primary50: "#91a7bb",
                                    primary25: "#b5c4d1",
                                    primary: '#003057',
                                },                 
                                })}                      
                                options={Carreras}
                                classNamePrefix="select"
                                onChange={event => setCarrera(event)}
                            />           
                            <span className="errorMsg">{errores.carrera}</span>             
                            </Grid>
                        </Grid>
                        </Grid>                                                                                                        
                    </Grid>
                    </Paper>
                </Grid>
            </form>     
        </motion.div>
    );
}

export default RegistroEstudiante;