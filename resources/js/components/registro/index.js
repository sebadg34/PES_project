import { React } from 'react';
import {Grid, Typography, Divider} from '@material-ui/core'

function Registro() {

    return (
    //   <form onSubmit={hasAccount ? handleLogin : handleSignup}>
      <>
        <Grid container direction={"column"} spacing={3}>
          <Grid item>
            <Typography variant="h4" gutterBottom style={{ color: "#003057" }}>
                Identificación del estudiante
            </Typography>
            <Divider light />
          </Grid>
        </Grid>          
      </>
    );
}

export default Registro;