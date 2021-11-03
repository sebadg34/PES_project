import { React, useEffect, useState } from 'react';
import {Grid, Typography, Divider } from '@material-ui/core';
import { motion } from "framer-motion";
import RegistroEstudiante from '../registro_estudiante';
import RegistroSostenedor from "../registro_sostenedor";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import RegisterService from "../_hooks/RegisterService";
import Swal from 'sweetalert2'
import { useHistory } from "react-router-dom";

function Registro() {

  let history = useHistory();

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

  const [errores, setErrores] = useState([])

  const delayedOnClick = ()=>{
    setIsOpen(isOpen => !isOpen);
    setTimeout(() => {
        setIsActive(isActive => !isActive);
      }, 430);
  }

  const completeRegister = () =>{

    setErrores([]);

    const formdata = new FormData();
    formdata.append("RutEstudiante",rutEstudiante);
    formdata.append("NombreEstudiante", nombreCompletoEstudiante);
    formdata.append("sede", sede.value ? sede.value : "");
    formdata.append("carrera", carrera.value ? carrera.value : "");
    formdata.append("AñoIngreso",anioIngreso.value ? anioIngreso.value : "");
    formdata.append("email",email);
    formdata.append("CarnetEstudiante", scanCarnetEstudiante);
    formdata.append("RutSostenedor", rutSostenedor);
    formdata.append("NombreSostenedor", nombreCompletoSostenedor);
    formdata.append("parentezco", parentezco);
    formdata.append("CarnetSostenedor",scanCarnetSostenedor);

    RegisterService.register(formdata)
    .then((data) => {
      if("errors" in data){
        setErrores(data.errors);
      }else{
        Swal.fire(
          'Registro completado',
          'Tu registro fue completado satisfactoriamente',
          'success'
        )
        history.push("/home");
      }
    })
  };  

  useEffect(() => {
    
    if(!isOpen){
      setPos(100);
    }
    

  }, [isOpen, setPos])

  
  // useEffect(() => {
    
  //   console.log(errores);

  // }, [errores])

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
                setScanCarnetEstudiante={setScanCarnetEstudiante} errores={errores}/> 
            : 
              <RegistroSostenedor isOpen={!isOpen} setIsOpen={setIsOpen} isActive={isActive} setIsActive={setIsActive} rutSostenedor={rutSostenedor} setRutSostenedor={setRutSostenedor}
                nombreCompletoSostenedor={nombreCompletoSostenedor} setNombreCompletoSostenedor={setNombreCompletoSostenedor} parentezco={parentezco} setParentezco={setParentezco}
                scanCarnetSostenedor={scanCarnetSostenedor} setScanCarnetSostenedor={setScanCarnetSostenedor} completeRegister={completeRegister} errores={errores}/> 
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