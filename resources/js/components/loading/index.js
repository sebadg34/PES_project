import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { LinearProgress } from '@mui/material';
import { Grid, Typography } from '@material-ui/core';
import logo from "../ucn-logo.png";

const useStyles = makeStyles(theme => ({
    center: {
        textAlign: "center",
        paddingTop: theme.spacing(11)
    },
    img:{
        height: 400,
        display: 'flex',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    linearProgress:{
        marginLeft: '30vh', marginRight: '30vh' 
    },
    title:{
        margin: theme.spacing(3,1,3,1)
    }
}));

function Loading(props) {
    const classes = useStyles();

    return (
        <Fragment>
            <Grid container alignContent="center" alignItems="center">
                <Grid item lg className={classes.center}>
                    <img className={classes.img} src={logo} alt="logo" />                
                    <Typography className={classes.title} variant="h1"></Typography>    
                    <LinearProgress color="primary" className={classes.linearProgress} />
                </Grid>                
            </Grid>
        </Fragment>
    );
}

export default Loading;
