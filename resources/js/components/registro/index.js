import { React, useEffect, useState } from 'react';
import {Grid, Paper, TextField, Typography, Button, Divider } from '@material-ui/core';
import { motion } from "framer-motion";
import RegistroEstudiante from '../registro_estudiante';
import RegistroSostenedor from "../registro_sostenedor";
//import { Select, InputLabel, MenuItem} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Registro() {

  const [isOpen, setIsOpen] = useState(true)
  const [isActive, setIsActive] = useState(true)
  const [nombre, setNombre] = useState("")
  const[pos, setPos] = useState(0);

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
              <RegistroEstudiante pos={pos} nombre={nombre} setNombre={setNombre} isOpen={isOpen} setIsOpen={setIsOpen} isActive={isActive} setIsActive={setIsActive}/> 
            : 
              <RegistroSostenedor isOpen={!isOpen} setIsOpen={setIsOpen} isActive={isActive} setIsActive={setIsActive}/> 
          }          
        </Grid>
        <Grid item>
          {
            isActive ? 
              <motion.div 
                style={{  width: "fit-content", height: "fit-content"}} 
                whileHover={{ scale: 1.5 }}
                onClick={delayedOnClick}
                >
                <ArrowForwardIcon align="right" style={{ fontSize: 60 }}/>
              </motion.div>
            : 
              <motion.div 
                style={{  width: "fit-content", height: "fit-content"}} 
                whileHover={{ scale: 1.5 }}
                onClick={delayedOnClick}
                >
                <ArrowBackIcon style={{ fontSize: 60 }}/>
              </motion.div>
          }
        </Grid>                
      </Grid>          
    </>
  );
}

export default Registro;