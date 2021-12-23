import { React, useState, useEffect } from 'react';
import { Grid, TextField, Typography, Divider, makeStyles } from '@material-ui/core';
import MaterialTable from 'material-table';
import RegisterService from "../_hooks/RegisterService";
import Loading from "../loading";
import { Button } from '@material-ui/core'
import AppBarCustom from "../appbar";
import { useHistory } from "react-router-dom";

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

function VisualizarSolicitud() {


    let history = useHistory();
    const handleHome = () => {
        history.push("/home");

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
    const [defuncion, setDefuncion] = useState("");

    const classes = useStyles();

    function bytesToSize(bytes) {
        var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        if (bytes == 0) return '0 Byte';
        var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
        return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
    }

    let getRegister = async () => {
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
        setParentesco(register.data.parentesco);
        setEstado(register.data.estado);
        setDatos([
            { nombre: register.data.scanCarnetEstudiante, carnet: "Carnet estudiante", peso: bytesToSize(register.pesoCE) },
            { nombre: register.data.scanCarnetSostenedor, carnet: "Carnet sostenedor", peso: bytesToSize(register.pesoCS) }
        ]);
        setDefuncion([{ nombre: register.data.archivoDefuncion, documento: "Documento" }]);

        setPending(false);

    }


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
                                        estado === "Cancelada"
                                            ?
                                            <span style={{ color: "red" }}>{" "}{estado.toLocaleUpperCase()}</span>
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
                                { title: 'Tipo carnet', field: 'carnet' },
                                { title: 'Peso archivo', field: 'peso' },
                            ]}
                            data={datos}
                            detailPanel={rowData => {
                                return (
                                    <iframe
                                        width="100%"
                                        height="1120"
                                        src={"/storage/carnet/" + rowData.nombre}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                )
                            }}
                        />



                    </Grid>


                </Grid>

                {
                    estado == "En proceso" ?
                        <Grid item className={classes.root}>
                            <MaterialTable
                                title="Documento de defunción"
                                options={{
                                    search: false,
                                    paging: false,
                                    draggable: false,
                                    header: false,
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
                                    { title: 'nombre', field: 'documento' },
                                    { title: 'Peso archivo', field: 'peso' },
                                ]}
                                data={defuncion}
                                detailPanel={rowData => {
                                    return (
                                        <iframe
                                            width="100%"
                                            height="1120"
                                            src={"/storage/defuncion/" + rowData.nombre}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    )
                                }}
                            />
                        </Grid> :
                        <div />
                }


            </AppBarCustom>
        </>
    );
}


export default VisualizarSolicitud;