import { React, useState } from 'react';
import MaterialTable from 'material-table';
import { Grid } from '@material-ui/core'
import { Stack, Button } from '@mui/material';


function Home() {

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
            deleteText: '¿Quieres eliminar este registro?',
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

    const [selectedRow, setSelectedRow] = useState(null);

    const filaSeleccionada = (evt, selectedRow) => {
        setSelectedRow(selectedRow.tableData.id);
        //alert(selectedRow.nombreAlumno);
    }

    return (    
        <>
        <Grid container direction={"column"} spacing={5}> 
            <Grid item>
                <Stack direction="row" spacing={2}>
                    <Button variant="contained" color="success">Botón de ejemplo</Button>
                    <Button variant="outlined" href="/">A la siguiente ruta</Button>
                </Stack>
            </Grid>
            <Grid item>
                <MaterialTable
                    title="Solicitudes disponibles"
                    localization={datosLocalizacion}        
                    columns={[
                    { title: 'Nombre alumno', field: 'nombreAlumno'},
                    { title: 'Correo alumno', field: 'correoAlumno' },
                    { title: 'Nombre sostenedor', field: 'nombreSostenedor'},
                    { title: 'Fecha inicio solicitud', field: 'fechaInicio'},
                    { title: 'Estado', field:"estado"},
                    ]}
                    data={[
                    { nombreAlumno: "Manuel Trigo Montalban", correoAlumno: 'aaa@aaa.cl', nombreSostenedor: 'Maria Delgado', fechaInicio: "03/10/2021 17:55", estado: "xd"},
                    { nombreAlumno: "44", correoAlumno: 'bbb@bbb.cl', nombreSostenedor: 'Maria Delgado', fechaInicio: "03/10/2021 17:55", estado: "xd"},
                    { nombreAlumno: "Pepito Perez", correoAlumno: 'ccc@ccc.cl', nombreSostenedor: 'Celeste Blanco Negrete Azulejo', fechaInicio: "03/10/2021 17:55", estado: "xd"},
                    ]}
                    onRowClick={((evt, selectedRow) => filaSeleccionada(evt, selectedRow))}
                    options={{
                    rowStyle: rowData => ({
                        backgroundColor: (selectedRow === rowData.tableData.id) ? '#EEE' : '#FFF'
                    })
                    }}
                />
            </Grid>            
        </Grid>
      </>
    );
}

export default Home;