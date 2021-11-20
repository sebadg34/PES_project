/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, Global } from "@emotion/react";
import { React, useState, useEffect } from 'react';
import {Grid, Typography, Divider} from '@material-ui/core'
import { Button } from '@material-ui/core'
import MenuItems from "../menuitems";
import { useHistory } from "react-router-dom";
import AuthService from "../_hooks/AuthService";
import MaterialTable from 'material-table';
import RegisterService from "../_hooks/RegisterService";
import Loading from "../loading";


function homeAdmin() {

/*
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
    const [pending, setPending ] = useState(true);
    const [datos, setDatos] = useState([]);
    

*/


const [fetchedForms, setFetchedForms] = useState("");
const [pending, setPending ] = useState(true);
const [selectedRow, setSelectedRow] = useState(null);

  let history = useHistory();

  const handleLogout = () => {
    AuthService.logout().then(() => {
        history.push("/");
    });
  }




  let getForms = async () => {

    const forms = await RegisterService.getRegisters();
    console.log(forms);

    setFetchedForms(forms.data);

    /*
       setRutEstudiante(register.data.rutEstudiante);
       setNombreCompletoEstudiante(register.data.nombreCompletoEstudiante);
       setSede(register.data.sede);
       setCarrera(register.data.carrera);
       setAnioIngreso(register.data.anioIngreso);
       setEmail(register.data.email);
       setRutSostenedor(register.data.rutSostenedor);
       setNombreCompletoSostenedor(register.data.nombreCompletoSostenedor);
       setParentesco(register.data.parentesco);
       
       setDatos([
           {nombre: register.data.scanCarnetEstudiante ,carnet: "Carnet estudiante", peso: bytesToSize(register.pesoCE)},
           {nombre: register.data.scanCarnetSostenedor ,carnet: "Carnet sostenedor", peso: bytesToSize(register.pesoCS)}
       ]);
   
       setPending(false);
     */

       setPending(false);
  }


  useEffect(() => {

    getForms();

}, [])

if(pending){     
  return <Loading />
}

  return (
    <div
      className="App"
      css={css`
        height: 100%;
      `}
    >
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

    



      <MaterialTable
        title="Solicitudes"
        columns={[
          { title: 'ID', field: 'id' },
          { title: 'Rut', field: 'rutEstudiante' },
          { title: 'Nombre', field: 'nombreCompletoEstudiante' },
          { title: 'Correo', field: 'email' },
          { title: 'Sede', field: 'sede' },
          { title: 'Carrera', field: 'carrera' },
          { title: 'Estado', field: 'estado' }

        ]}
        data={fetchedForms}
        localization={{
          toolbar: {
            searchTooltip: 'Buscar',
            searchPlaceholder: 'Buscar'
          },
          pagination: {
            labelDisplayedRows: '{from}-{to} de {count}',
            labelRowsSelect: 'filas',
            firstAriaLabel: 'Primera pagina',
            firstTooltip: 'Primera pagina',
            previousAriaLabel: 'Página anterior',
            previousTooltip: 'Página anterior',
            nextAriaLabel: 'Página siguiente',
            nextTooltip: 'Página siguiente',
            lastAriaLabel: 'Ultima página',
            lastTooltip: 'Última página'

          },
        }}
        onRowClick={((evt, selectedRow) => setSelectedRow(selectedRow.tableData.id))}
        options={{
          rowStyle: rowData => ({
            backgroundColor: (selectedRow === rowData.tableData.id) ? '#EEE' : '#FFF'
          })


          //filtering: true
        }}
      />




      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap");

          ::selection {
            background: #000;
            color: #f0eff1;
          }

          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "Poppins", sans-serif;
            --webkit-tap-highlight-color: transparent;
          }
                    
          .container {
            width: 100%;
            margin: auto;
          }
        `}
      />
    </div>
  );
}

export default homeAdmin;
