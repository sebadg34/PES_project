import { React, useState, useEffect } from 'react';
import { Grid, TextField, Typography, Divider, makeStyles, Button } from '@material-ui/core';
import MaterialTable from 'material-table';
import RegisterService from "../_hooks/RegisterService";
import Loading from "../loading";
import AppBarCustom from "../appbar";
import { useParams } from 'react-router-dom';
import ArchivosService from "../_hooks/ArchivosService";
import { Delete } from "@material-ui/icons";
import Swal from 'sweetalert2'
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
        "& .MuiPaper-root": {
            backgroundColor: "#003057",
            color: "white",
        },
        "& .MuiButtonBase-root": {
            outline: "none",
        },
        "& .MuiTableCell-body": {
            color: "white",
        }
    }
}));

function VisualizarSolicitudAdmin() {

    const { id } = useParams();

    let history = useHistory();
    const handleHome = () => {
        history.push("/administracion");

    }    

    //variables estudiante
    const [rutEstudiante, setRutEstudiante] = useState("");
    const [nombreCompletoEstudiante, setNombreCompletoEstudiante] = useState("");
    const [sede, setSede] = useState("");
    const [carrera, setCarrera] = useState("");
    const [anioIngreso, setAnioIngreso] = useState("");
    const [email, setEmail] = useState("");
    //variables sostenedor
    const [rutSostenedor, setRutSostenedor] = useState("");
    const [nombreCompletoSostenedor, setNombreCompletoSostenedor] = useState("");
    const [parentesco, setParentesco] = useState("");
    const [estado, setEstado] = useState("");
    const [pending, setPending] = useState(true);

    const [datos, setDatos] = useState([]);
    const [archivosAdjuntos, setArchivosAdjuntos] = useState([]);

    const [errores, setErrores] = useState([]);

    const classes = useStyles();

    function bytesToSize(bytes) {
        var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        if (bytes == 0) return '0 Byte';
        var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
        return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
    }

    let getRegister = async () => {
        const register = await RegisterService.getRegisterByID(id);
        const archivosAdjuntos = await ArchivosService.getArchivosAdjuntos(id);
        console.log(register);
        console.log(archivosAdjuntos);

        setRutEstudiante(register.data.rutEstudiante);
        setNombreCompletoEstudiante(register.data.nombreCompletoEstudiante);
        setSede(register.data.sede);
        setCarrera(register.data.carrera);
        setAnioIngreso(register.data.anioIngreso);
        setEmail(register.data.email);
        setRutSostenedor(register.data.rutSostenedor);
        setNombreCompletoSostenedor(register.data.nombreCompletoSostenedor);
        setParentesco(register.data.parentesco);
        setEstado(register.data.estado);
        setDatos([
            { nombre: register.data.scanCarnetEstudiante, carnet: "Carnet estudiante", peso: bytesToSize(register.pesoCE), tipo: "normal" },
            { nombre: register.data.scanCarnetSostenedor, carnet: "Carnet sostenedor", peso: bytesToSize(register.pesoCS), tipo: "normal" },            
        ]);

        if(register.data.archivoDefuncion !== null){
            setDatos(datos => [...datos, { nombre: register.data.archivoDefuncion, carnet: "Documento defunción sostenedor", peso: bytesToSize(register.pesoAD), tipo: "defuncion" }]);  
        }

        archivosAdjuntos.data.forEach(element => {
            setDatos(datos => [...datos, { nombre: element.nombreArchivo, carnet: element.nombreArchivoOriginal, peso: bytesToSize(element.peso), tipo: "adjunto" }]);  
        })

        setPending(false);

    }

    const handleUpload = async (e, rowData) => {

        const archivo = e.target.files[0];

        setArchivosAdjuntos(archivosAdjuntos.map(item => {
            if (item.tableData.id == rowData.tableData.id) {
                return { ...item, archivo: archivo, newFileName: archivo.name, peso: bytesToSize(archivo.size) }; //gets everything that was already in item, and updates "done"
            }
            return item;
        }));
        e.target.files = null;

    };

    const handleAdjuntarArchivos = async () => {

        setErrores([]);

        const formdata = new FormData();

        formdata.append("idFormulario", id);

        for (let i = 0; i < archivosAdjuntos.length; i++) {
            formdata.append(`Archivos[${i}]`, archivosAdjuntos[i]["archivo"]);                        
        }

        ArchivosService.adjuntarArchivos(formdata)
        .then((data) => {
            if("errors" in data){
                for (let key of Object.keys(data)) {
                    for (let key1 of Object.keys(data[key])) {
                        setErrores(data[key][key1]);
                    }                           
                }                
            }else{
                Swal.fire(
                'Archivos adjuntados',
                'Los archivos fueron adjuntados a la solicitud correctamente',
                'success'
                ).then((result) => {
                    window.location.reload(true);
                })
            }
        })        

    };    

    useEffect(() => {

        getRegister();

    }, [])

    if (pending) {
        return <Loading />
    }

    return (
        //   <form onSubmit={hasAccount ? handleLogin : handleSignup}>
        <>
            <AppBarCustom>
                <Grid container direction={"column"} spacing={4}>
                    <Grid item>
                        <h1>ESTADO:

                            {estado === "Registrada"
                                    ?
                                    <span style={{ color: "green" }}>{" "}{estado.toLocaleUpperCase()}</span>
                                    :
                                    estado === "En proceso"
                                        ?
                                        <span style={{ color: "orange" }}>{" "}{estado.toLocaleUpperCase()}</span>
                                        :
                                        estado === "Aceptada"
                                            ?
                                            <span style={{ color: "blue" }}>{" "}{estado.toLocaleUpperCase()}</span>
                                            :
                                            estado === "Rechazada"
                                                ?
                                                <span style={{ color: "red" }}>{" "}{estado.toLocaleUpperCase()}</span>
                                                :
                                                estado === "Cargando beneficio"
                                                ?           
                                                <span style={{ color: "teal" }}>{" "}{estado.toLocaleUpperCase()}</span>
                                                :                                 
                                                <span style={{ color: "black" }}>{" "}{estado.toLocaleUpperCase()}</span>
                            }

                            <Button
                                className="linkItem"
                                style={{ maxWidth: '150px', minWidth: '150px', float: "right", outline: "none" }}
                                variant="contained"
                                color="primary"
                                onClick={handleHome}
                            >
                                volver
                            </Button>
                        </h1>
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
                                            value={parentesco}
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
                    <Grid item className={classes.root}>
                        <MaterialTable
                            title="Archivos adjuntos"
                            options={{
                                search: false,
                                paging: false,
                                draggable: false,
                                // headerStyle: {
                                //     backgroundColor: '#003057',
                                //     color: 'White',
                                // },
                                rowStyle: (rowData) => {
                                    return {
                                        color: 'Black',
                                        //fontFamily: "Mulish-Regular",
                                        backgroundColor: 'White',
                                    };
                                },
                            }}
                            columns={[
                                { title: 'Archivo', field: 'carnet' },
                                { title: 'Peso archivo', field: 'peso' },
                            ]}
                            data={datos}
                            detailPanel={rowData => {
                                return (
                                    <iframe
                                        width="100%"
                                        height="1120"
                                        src={
                                            rowData.tipo === "adjunto" ?                                                 
                                                "/storage/archivos_adjuntos/" + rowData.nombre
                                            : 
                                                rowData.tipo === "defuncion"? 
                                                    "/storage/defuncion/" + rowData.nombre
                                                :
                                                    "/storage/carnet/" + rowData.nombre
                                                                                                   
                                        }
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                )
                            }}
                        />
                    </Grid>
                    <Grid item className={classes.root}>
                        <MaterialTable
                            title="Adjuntar archivos"
                            localization={{
                                body: {
                                    emptyDataSourceMessage: 'No hay documentos por mostrar',
                                    deleteTooltip: 'Eliminar documento',
                                    editRow: {
                                        deleteText: '¿Quieres eliminar este documento?',
                                        cancelTooltip: 'Cancelar',
                                        saveTooltip: 'Eliminar',
                                    },
                                },
                                header: {
                                    actions: ''
                                }
                            }}
                            icons={{
                                Delete: () => <Delete style={{ color: "crimson" }} />
                            }}
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
                                {
                                    title: "", field: "cambiarImagen", render: (rowData) =>
                                        <Button variant="contained" component="label" color="primary">
                                            Adjuntar archivo
                                            <input type="file"
                                                accept="image/x-png,image/jpeg,application/pdf"
                                                onChange={(e) => handleUpload(e, rowData)}
                                                hidden />
                                        </Button>, editable: "never"
                                },
                                { title: 'Nombre archivo', field: 'newFileName', cellStyle: { width: 500, minWidth: 500 } },
                                { title: 'Peso', field: 'peso' },
                            ]}
                            data={archivosAdjuntos}
                            actions={[
                                ({
                                    icon: "add_box",
                                    iconProps: { style: { color: "white" } },
                                    tooltip: "Agregar un documento",
                                    position: "toolbar",
                                    onClick: () => {
                                        setArchivosAdjuntos([...archivosAdjuntos, { archivo: "", newFileName: "SELECCIONA UN ARCHIVO (.PDF, .JPG, .PNG)", peso: "-" }]);
                                    }
                                }), ,
                            ]}
                            editable={{
                                onRowDelete: async (oldData) => {
                                    setArchivosAdjuntos(archivosAdjuntos.filter(({ tableData }) => tableData.id !== oldData.tableData.id));
                                }
                            }}
                        />
                        <span className="errorMsg">{errores[0]}</span>                                       
                    </Grid>
                    <Grid item align="center">                        
                        <Button
                            className="linkItem"
                            style={{maxWidth: '250px', minWidth: '250px', outline: "none"}}
                            variant="contained"
                            color="primary"   
                            disabled={archivosAdjuntos.length === 0? true : false}                         
                            onClick={handleAdjuntarArchivos}
                        >
                            Adjuntar archivos
                        </Button>                     
                    </Grid>                      
                </Grid>
            </AppBarCustom>
        </>
    );
}


export default VisualizarSolicitudAdmin;