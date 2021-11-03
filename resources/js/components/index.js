import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import "../../css/app.css";
import { MuiThemeProvider, createTheme } from "@material-ui/core";

const theme = createTheme({
    typography: {
        fontSize: 14,
        htmlFontSize: 17,
        //fontFamily: "MyriadPro",
    },
    palette: {
        primary: {
        light: "#003057",
        main: "#003057",
        dark: "#003057",
        contrastText: "#ffffff",
        },
        secondary: {
        light: "#4f5b62",
        main: "#263238",
        dark: "#000a12",
        contrastText: "#ffffff",
        },
        text: {
        primary: "rgba(0, 0, 0, 0.87)",
        secondary: "rgba(0, 0, 0, 0.54)",
        // disabled: "rgba(0, 0, 0, 0.38)",
        // hint: "rgba(0, 0, 0, 0.38)"
        },
        // background: {
        //   default: "#e7eaeb"
        // }
    },
});


ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>,
    document.getElementById('root')
);