import { React, useState, useEffect } from 'react';
import {Grid, TextField, Typography, Divider, makeStyles, Button, Paper } from '@material-ui/core';
import MaterialTable from 'material-table';
import RegisterService from "../_hooks/RegisterService";
import Loading from "../loading";
import AppBarCustom from "../appbar";
import Select from "react-select";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import { useHistory } from "react-router-dom";
import Swal from 'sweetalert2'

const useStyles = makeStyles(theme => ({
    root: {
      "& .MuiPaper-root": {
        backgroundColor: "#003057",           
        color: "white",
      },
      "& .MuiButtonBase-root": {
        outline: "none",
      }
    }
  }));

function CambiarSostenedor(){

    const paperStyle = {
        padding: 20,
        width: 550,
        margin: "20px auto",
        border: "1px solid #003057",
    };

    let history = useHistory();

    const [rutSostenedor, setRutSostenedor] = useState("");
    const [nombreCompletoSostenedor, setNombreCompletoSostenedor] = useState("");
    const [parentesco, setParentesco] = useState("");
    const [scanCarnetSostenedor, setScanCarnetSostenedor] = useState("");
    const [datos, setDatos] = useState([]);

    const [pending, setPending ] = useState(true);
    const [errores, setErrores] = useState([])

    const classes = useStyles();

    function bytesToSize(bytes) {
        var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        if (bytes == 0) return '0 Byte';
        var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
        return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
    }

    let getRegister = async () =>{
        const register = await RegisterService.getRegister();

        setRutSostenedor(register.data.rutSostenedor);
        setNombreCompletoSostenedor(register.data.nombreCompletoSostenedor);    
        setParentesco({label: register.data.parentesco, value: register.data.parentesco});

        setDatos([
            {nombre: register.data.scanCarnetSostenedor, newFileName: "SELECCIONA UN ARCHIVO (.PDF, .JPG, .PNG)", peso: "-"}
        ]);

        setPending(false);

    }
        

    useEffect(() => {

        getRegister();

    }, [])

    const handleUpload = (e, data) => {
        if(e.target.files[0]){
            setScanCarnetSostenedor(e.target.files[0]);
            setDatos([
                {nombre: data.nombre, newFileName: e.target.files[0].name, peso: bytesToSize(e.target.files[0].size)}
            ]);            
            e.target.value = null;
        }        
    };

    const changeSostenedor = () => {
        
        setErrores([]);

        const formdata = new FormData();

        formdata.append("RutSostenedor", rutSostenedor);
        formdata.append("NombreSostenedor", nombreCompletoSostenedor);
        formdata.append("parentesco", parentesco.value);
        formdata.append("CarnetSostenedor",scanCarnetSostenedor);     
        formdata.append("filename", datos[0].nombre);   
        
        RegisterService.cambiarSostenedor(formdata)
        .then((data) => {
            if("errors" in data){
                setErrores(data.errors);
            }else{
                Swal.fire(
                'Datos del sostenedor actualizados',
                'Los datos fueron actualizados satisfactoriamente',
                'success'
                )
                history.push("/home");
            }
        })
    };

    if(pending){     
        return <Loading />
    }


    return(
        <>
            <AppBarCustom>
                <Grid container direction={"column"} spacing={4}>
                    <Grid item>
                        <Typography variant="h4" gutterBottom style={{ color: "#003057" }}>
                                    Cambiar datos del sostenedor
                        </Typography>
                        <Divider light />                  
                    </Grid>                         
                    <Grid item>
                        <Paper elevation={0} style={paperStyle}>                     
                            <Grid container direction={"column"} spacing={3}>
                                <Grid item>
                                    <TextField
                                        label="Nombre completo"
                                        placeholder="Ingresa el nombre completo"
                                        variant="outlined"
                                        id="nombreCompletoSOS"
                                        name="nombreCompletoSOS"                                    
                                        value={nombreCompletoSostenedor}            
                                        onChange={(e) => {setNombreCompletoSostenedor(e.target.value);}}                        
                                        fullWidth
                                        required
                                        autoFocus
                                    /> 
                                    <span className="errorMsg">{errores.NombreSostenedor}</span>
                                </Grid>
                                <Grid item>
                                    <TextField
                                        id="rutSOS"
                                        name="rutSOS"         
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
                                    <Grid container direction={"column"} spacing={1}>
                                        <Grid item>
                                            <span className="labelSelect" >Escoge el parentesco *</span>
                                        </Grid>             
                                        <Grid item>
                                            <Select
                                                placeholder="Selecciona un parentesco"
                                                name="par"
                                                defaultValue={parentesco}
                                                menuPortalTarget={document.body}
                                                styles={{ menuPortal: base => ({ ...base, zIndex: 1000 }) }}
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
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item className={classes.root}>
                        <MaterialTable
                            title="Carnet sostenedor"
                            localization={{header: { actions: '' }}}
                            options={{
                                    search: false, 
                                    paging: false,
                                    draggable: false,                              
                                    rowStyle: (rowData) => {
                                            return {
                                                color: 'Black',
                                                backgroundColor: 'White',
                                            };
                                        },                                                                
                                    }}           
                            columns={[                          
                                { title: 'Nombre archivo', field: 'newFileName'},
                                { title: 'Peso', field: 'peso'},
                            ]}
                            data={datos}
                            detailPanel={[
                                {
                                icon: AssignmentIndIcon,
                                tooltip: "Mostrar carnet del actual sostenedor",
                                render: rowData => {
                                return (<iframe
                                            width="100%"
                                            height="1120"
                                            src={"/storage/carnet/" + rowData.nombre}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />)
                                    }
                                }
                            ]}          
                            actions={[
                                rowData => ({  // <-- ***NOW A FUNCTION***
                                    tooltip: 'Adjuntar un nuevo archivo',                                                                        
                                }),                                                                                                 
                            ]}
                            components={{
                            Action: props => (
                                <Button
                                    variant="contained"
                                    color="primary"
                                    component="label"
                                    size="small"
                                >
                                Adjuntar archivo
                                <input
                                    type="file"
                                    accept="image/x-png,image/jpeg,application/pdf"
                                    onChange={(e) => handleUpload(e, props.data)}
                                    hidden
                                />
                                </Button>   
                            ),
                            }}                                          
                            />
                            <span className="errorMsg">{errores.CarnetSostenedor}</span>                                       
                    </Grid>          
                    <Grid item align="center">
                        <Button
                            className="linkItem"
                            style={{maxWidth: '250px', minWidth: '250px', outline: "none"}}
                            variant="contained"
                            color="primary"                            
                            onClick={changeSostenedor}
                        >
                            Cambiar datos
                        </Button>                            
                    </Grid>                                                                                 
                </Grid>
            </AppBarCustom>
        </>
    );

}

export default CambiarSostenedor;