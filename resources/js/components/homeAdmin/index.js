import { useState, useEffect } from 'react';
import {Grid, Typography, Divider, makeStyles} from '@material-ui/core'
import { Button } from '@material-ui/core'
import { useHistory } from "react-router-dom";
import AuthService from "../_hooks/AuthService";
import MaterialTable from 'material-table';
import RegisterService from "../_hooks/RegisterService";
import Loading from "../loading";
import AppBarCustom from "../appbar";
import PatchedPagination from "./PatchedPagination";

const useStyles = makeStyles(theme => ({
  root: {
    // "& .MuiPaper-root": {
    //   backgroundColor: "#003057",           
    //   color: "white",
    // },
    "& .MuiButtonBase-root": {
      outline: "none",
    }
  }
}));

function homeAdmin() {

  const [fetchedForms, setFetchedForms] = useState("");
  const [pending, setPending ] = useState(true);
  const [selectedRow, setSelectedRow] = useState(null);

  const classes = useStyles();
  let history = useHistory();

  const handleLogout = () => {
    AuthService.logout().then(() => {
        history.push("/");
    });
  }




  let getForms = async () => {

    const forms = await RegisterService.getRegisters();

    setFetchedForms(forms.data);
    setPending(false);
  }


  useEffect(() => {

    getForms();

}, [])

  if(pending){     
    return <Loading />
  }

  const filaSeleccionada = (evt, selectedRow) => {    
    setSelectedRow(selectedRow.tableData.id);
    const timer = setTimeout(() => history.push("/estudiantes/" + selectedRow.id), 500);
    return () => clearTimeout(timer);    
  }  

  return (
    <AppBarCustom>
    <div className="App" style={{width:1000}}>
      <Grid container direction={"column"} spacing={1}>
        <Grid item>
          <Grid container direction={"column"} spacing={3}>
            <Grid item>
              <Typography variant="h4" gutterBottom style={{ color: "#003057" }}>
                Perfil administrador

                <Button
                  className="linkItem"
                  style={{ maxWidth: '150px', minWidth: '150px', float: "right", outline: "none" }}
                  variant="contained"
                  color="primary"
                  onClick={handleLogout}
                >
                  Cerrar sesión
                </Button>
              </Typography>
              <Divider light />
            </Grid>
            <Grid item>

            </Grid>
          </Grid>
        </Grid>

      </Grid>

      <div className={classes.root}>


        <MaterialTable
          title="Solicitudes"
          
          columns={[
            { title: 'ID', field: 'id',cellStyle: {margin: "auto", width: "0%", padding:"auto", fontSize: 14}},
            { title: 'Rut', field: 'rutEstudiante', cellStyle: { minWidth: 100, fontSize: 14 }},
            //{ title: 'Nombre', field: 'nombreCompletoEstudiante', cellStyle: { width: 320, minWidth: 320 }},
            { title: 'Nombre', field: 'nombreCompletoEstudiante', cellStyle: {minWidth: 150, fontSize: 14}},
            { title: 'Correo', field: 'email', cellStyle: {fontSize: 14}},
            { title: 'Sede', field: 'sede', cellStyle: {fontSize: 14}},
            { title: 'Carrera', field: 'carrera' , cellStyle: {fontSize: 14}},
            { title: 'Estado solicitud', field: 'estado', cellStyle: {fontSize: 14}}

          ]}
          
          data={fetchedForms}
          localization={datosLocalizacion}
          components={{Pagination: PatchedPagination}}
          options={{          
            rowStyle: rowData => ({
              color: 'Black',
              backgroundColor: (selectedRow === rowData.tableData.id) ? '#c8d7e3' : '#FFF',
              border: 0,
              padding: 0
            })
            //filtering: true
          }}
          onRowClick={((evt, selectedRow) => filaSeleccionada(evt, selectedRow))}
        />

      </div>
    </div>
    </AppBarCustom>
  );

  
}


const datosLocalizacion = {
  body: {
    emptyDataSourceMessage: 'No hay datos por mostrar',
    addTooltip: 'Añadir',
    deleteTooltip: 'Eliminar',
    editTooltip: 'Editar',
    filterRow: {
      filterTooltip: 'Filtrar',
    },
    editRow: {
      deleteText: '¿Quieres eliminar este usuario del curso?',
      cancelTooltip: 'Cancelar',
      saveTooltip: 'Guardar',
    },
  },
  grouping: {
    placeholder: "Arrastre un encabezado aquí para agrupar",
    groupedBy: 'Agrupado por',
  },
  header: {
    actions: '',
  },
  pagination: {
    firstAriaLabel: 'Primera página',
    firstTooltip: 'Primera página',
    labelDisplayedRows: '{from}-{to} de {count}',
    labelRowsPerPage: 'Filas por página:',
    labelRowsSelect: 'filas',
    lastAriaLabel: 'Última página',
    lastTooltip: 'Última página',
    nextAriaLabel: 'Pagina siguiente',
    nextTooltip: 'Pagina siguiente',
    previousAriaLabel: 'Pagina anterior',
    previousTooltip: 'Pagina anterior',
  },
  toolbar: {
    addRemoveColumns: 'Agregar o eliminar columnas',
    exportAriaLabel: 'Exportar',
    exportName: 'Exportar a CSV',
    exportTitle: 'Exportar',
    nRowsSelected: '{0} filas seleccionadas',
    searchPlaceholder: 'Buscar',
    searchTooltip: 'Buscar',
    showColumnsAriaLabel: 'Mostrar columnas',
    showColumnsTitle: 'Mostrar columnas',
  },
};   


export default homeAdmin;
