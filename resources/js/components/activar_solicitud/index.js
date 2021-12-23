import { React, useState } from 'react';
import { Grid, Typography, Divider, makeStyles, Button } from '@material-ui/core';
import MaterialTable from 'material-table';
import RegisterService from "../_hooks/RegisterService";
import AppBarCustom from "../appbar";
import { useHistory } from "react-router-dom";
import Swal from 'sweetalert2'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

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

function ActivarSolicitud() {

    const handleHome = () => {
        history.push("/home");
    }

    let history = useHistory();

    const [datos, setDatos] = useState([
        { newFileName: "SELECCIONA UN ARCHIVO (.PDF, .JPG, .PNG)", peso: "-" }
    ]);


    const [scanDefuncion, setScanDefuncion] = useState("");

    const [errores, setErrores] = useState([])

    const classes = useStyles();

    function bytesToSize(bytes) {
        var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        if (bytes == 0) return '0 Byte';
        var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
        return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
    }

    const handleActivarSolicitud = () => {

        setErrores([]);

        const formdata = new FormData();

        formdata.append("archivoDefuncion", scanDefuncion);
        formdata.append("estado", "En proceso");

        
        Swal.fire({
            title: '¿Estás seguro?',
            text: "No se puede revertir esta decisión una vez realizada.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Iniciar activación'
        }).then((result) => {
            if (result.isConfirmed) {

                RegisterService.adjuntarDefuncion(formdata).then((data) => {
                        if ("errors" in data) {
                            setErrores(data.errors);
                            console.log(data.errors);
                        } else {
                            Swal.fire(
                                'ACTIVACIÓN DE SOLICITUD INICIADA',
                                'El archivo fue subido exitosamente',
                                'success'
                            )
                            history.push("/home");
                        }
                    })
            }
        })
    }

    const handleUpload = (e) => {
        if (e.target.files[0]) {
            setScanDefuncion(e.target.files[0]);
            setDatos([
                { newFileName: e.target.files[0].name, peso: bytesToSize(e.target.files[0].size) }
            ]);
            e.target.value = null;
        }
    };

    return (
        <>
            <Grid container direction={"column"} spacing={2}>
                <Grid item>
                    <Typography variant="h4" gutterBottom style={{ color: "#003057" }}>
                        Activación de solicitud
                        <Button
                            className="linkItem"
                            style={{ maxWidth: '150px', minWidth: '150px', float: "right", outline: "none" }}
                            variant="contained"
                            color="primary"
                            onClick={handleHome}
                        >
                            volver
                        </Button>
                    </Typography>
                    <Divider light />
                </Grid>
                <Grid item>
                    <Alert variant="filled" severity="warning">
                        <strong>
                            <AlertTitle>¡ATENCIÓN!</AlertTitle>
                            Está a punto de iniciar la activación de la solicitud, esto sólo se puede realizar una única vez, una vez hecho este paso ya no podrá realizar esta función ni tampoco cambiar de sostenedor
                        </strong>
                    </Alert>
                </Grid>
                <Grid item className={classes.root}>
                    <MaterialTable
                        title="Adjuntar el archivo de defunción"
                        localization={{ header: { actions: '' } }}
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
                            { title: 'Nombre archivo', field: 'newFileName' },
                            { title: 'Peso', field: 'peso' },
                        ]}
                        data={datos}
                        actions={[
                            rowData => ({
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
                                        onChange={(e) => handleUpload(e)}
                                        hidden
                                    />
                                </Button>
                            ),
                        }}
                    />
                    <span className="errorMsg">{errores.archivoDefuncion}</span>
                </Grid>
                <Grid item align="center">
                    <Button
                        className="linkItem"
                        style={{ maxWidth: '250px', minWidth: '250px', outline: "none" }}
                        variant="contained"
                        color="primary"
                        disabled={scanDefuncion === "" ? true : false}
                        onClick={handleActivarSolicitud}
                    >
                        Iniciar la activación de solicitud
                    </Button>
                </Grid>
            </Grid>
        </>
    );

}

export default ActivarSolicitud;