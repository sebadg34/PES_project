import { React, useEffect, useState } from 'react';
import {Grid, Paper, TextField, Typography, Button, Divider } from '@material-ui/core';
import { motion } from "framer-motion";
import RegistroEstudiante from '../registro_estudiante';
import RegistroSostenedor from "../registro_sostenedor";
//import { Select, InputLabel, MenuItem} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import axios from "axios";
import RegisterService from "../_hooks/RegisterService";

function Registro() {

  const [isOpen, setIsOpen] = useState(true)
  const [isActive, setIsActive] = useState(true)
  const [pos, setPos] = useState(0);

  //variables para el formulario

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


  const delayedOnClick = ()=>{
    setIsOpen(isOpen => !isOpen);
    setTimeout(() => {
        setIsActive(isActive => !isActive);
      }, 430);
  }

  useEffect(() => {
    
    if(!isOpen){
      setPos(100);
    }
    

  }, [isOpen, setPos])

  const completeRegister = () =>{
      RegisterService.register(rutEstudiante, nombreCompletoEstudiante, sede, carrera, anioIngreso, email, rutSostenedor,
      nombreCompletoSostenedor, parentezco);
  }

  return (
  //   <form onSubmit={hasAccount ? handleLogin : handleSignup}>
    <>
      <Grid container direction={"column"} spacing={3}>
        <Grid item>
          <Typography variant="h4" gutterBottom style={{ color: "#003057" }}>
              Registro del beneficio
          </Typography>
          <Divider light />
        </Grid>
        <Grid item>
          {
            isActive ? 
              <RegistroEstudiante pos={pos} isOpen={isOpen} setIsOpen={setIsOpen} isActive={isActive} setIsActive={setIsActive} rutEstudiante={rutEstudiante} setRutEstudiante={setRutEstudiante}
                nombreCompletoEstudiante={nombreCompletoEstudiante} setNombreCompletoEstudiante={setNombreCompletoEstudiante} sede={sede} setSede={setSede} carrera={carrera} setCarrera={setCarrera}
                anioIngreso={anioIngreso} setAnioIngreso={setAnioIngreso} email={email} setEmail={setEmail} scanCarnetEstudiante={scanCarnetEstudiante}
                setScanCarnetEstudiante={setScanCarnetEstudiante} /> 
            : 
              <RegistroSostenedor isOpen={!isOpen} setIsOpen={setIsOpen} isActive={isActive} setIsActive={setIsActive} rutSostenedor={rutSostenedor} setRutSostenedor={setRutSostenedor}
                nombreCompletoSostenedor={nombreCompletoSostenedor} setNombreCompletoSostenedor={setNombreCompletoSostenedor} parentezco={parentezco} setParentezco={setParentezco}
                scanCarnetSostenedor={scanCarnetEstudiante} setScanCarnetSostenedor={setScanCarnetSostenedor} completeRegister={completeRegister}/> 
          }          
        </Grid>
        <Grid item>
          <motion.div 
            style={{  width: "fit-content", height: "fit-content", display: isActive ? "none" : "block"}} 
            whileHover={{ scale: 1.5 }}
            onClick={delayedOnClick}
            >
            <ArrowBackIcon style={{ fontSize: 60 }}/>
          </motion.div>     
          <motion.div 
            style={{  width: "fit-content", height: "fit-content", float:"right", display: isActive ? "block" : "none"}} 
            whileHover={{ scale: 1.5 }}
            onClick={delayedOnClick}
            >
            <ArrowForwardIcon style={{ fontSize: 60 }}/>
          </motion.div>              
        </Grid>                
      </Grid>          
    </>
  );
}

export default Registro;