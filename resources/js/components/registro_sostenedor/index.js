import { React } from 'react';
import {Grid, Paper, TextField, Button } from '@material-ui/core';
import { motion } from "framer-motion";
import Select from "react-select";
//import { Select, InputLabel, MenuItem} from "@mui/material";

function RegistroSostenedor({isOpen,rutSostenedor, setRutSostenedor, nombreCompletoSostenedor, setNombreCompletoSostenedor, parentesco,
    setParentesco, scanCarnetSostenedor, setScanCarnetSostenedor,completeRegister, errores}) {

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
            setScanCarnetSostenedor(e.target.files[0]);
            e.target.value = null;
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
                            <span className="errorMsg">{errores.NombreSostenedor}</span>
                        </Grid>
                        <Grid item>
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
                            <span className="errorMsg">{errores.RutSostenedor}</span>                                             
                        </Grid>  
                        <Grid item>
                            <Grid container direction={"row"} spacing={0}>
                                <Grid item xs={8}>
                                <TextField
                                    className="TextField-without-border-radius"
                                    id="outlined-disabled"
                                    name="filename"
                                    variant="outlined"
                                    fullWidth
                                    value={scanCarnetSostenedor.name}
                                    disabled
                                />
                                <span className="errorMsg">{errores.CarnetSostenedor}</span>  
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
                                    onChange={handleSubirArchivo}
                                    accept="image/x-png,image/jpeg,application/pdf"
                                />
                                </Button>                                       
                                </Grid>        
                            </Grid>              
                        </Grid>                          
                        <Grid item>
                            <Grid container direction={"column"} spacing={1}>
                                <Grid item>
                                <span className="labelSelect" >Escoge el parentesco *</span>
                                </Grid>             
                                <Grid item>
                                    <Select
                                        placeholder="Selecciona un parentesco"
                                        name="par"
                                        defaultValue={parentesco}
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
                                        {label: "MADRE", value: "MADRE"},
                                        {label: "PADRE", value: "PADRE"},
                                        {label: "TUTOR", value: "TUTOR"}
                                        ]}
                                        classNamePrefix="select"
                                        onChange={event => setParentesco(event)}
                                    />                                        
                                    <span className="errorMsg">{errores.parentesco}</span>                                       
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