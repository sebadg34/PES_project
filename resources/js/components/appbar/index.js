import React, { useState, Fragment } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import { Stack } from '@mui/material';
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Tooltip } from "@material-ui/core";

import {
  Home as HomeIcon, 
} from "@material-ui/icons";

import {
  School as SchoolIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  HealthAndSafety as Health,
  SportsSoccer as Soccer,
  ChildFriendly as Baby,
  AllInclusive as Inclusive,
  ColorLens
} from '@mui/icons-material';

import logo from "../logo.png";
import dgelogo from "../dgelogo.jpg";

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';

import { styled } from '@mui/system';
import SwitchUnstyled, { switchUnstyledClasses } from '@mui/base/SwitchUnstyled';

function AppBarCustom(props) {

  const { children } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [switchEnable, setSwitchEnable] = useState(false);

  const label = { componentsProps: { input: { 'aria-label': 'Demo switch' } } };

  const [ elementosDrawer, setElementosDrawer ] = useState([
    {
        key: 1,
        nombre: "Inicio",
        tipo: "no colapsable",
        divider: true,
        icon: <HomeIcon/>
    },    
    {
        key: 2,
        nombre: "Beneficios",
        tipo: "colapsable",
        open: false,
        elementos: [
        {
            key: 2.1,
            nombreElemento: "Noticias",
            path: ""
        },
        {
            key: 2.2,
            nombreElemento: "Beneficios internos",
            path: ""
        },
        {
            key: 2.3,
            nombreElemento: "Beneficios externos",
            path: ""
        },
        {
            key: 2.4,          
            nombreElemento: "Preguntas frecuentes",
            path: ""
        },  
        ],
        divider: false,
        icon: <SchoolIcon/>
    },
    {
        key: 3,
        nombre: "Salud",
        tipo: "colapsable",
        open: false,
        elementos: [
            {
            key: 3.1,
            nombreElemento: "Noticias",
            path: ""
            },
            {
            key: 3.2,              
            nombreElemento: "Solicitud hora",
            path: ""
            },
            {
            key: 3.3,              
            nombreElemento: "Visado certificados",
            path: ""
            },
            {
            key: 3.4,
            nombreElemento: "Agenda PRO",
            path: ""
            },        
        ],
        divider: false,
        icon: <Health/>
    },
    {
        key: 4,
        nombre: "Deportes",
        tipo: "colapsable",
        open: false,
        elementos: [
            {
            key: 4.1,
            nombreElemento: "Noticias",
            path: ""
            },
            {
            key: 4.2,
            nombreElemento: "Equipo deportes UCN",
            path: ""
            },
            {
            key: 4.3,
            nombreElemento: "Deporte selectivo",
            path: ""
            },
            {
            key: 4.4,
            nombreElemento: "Deporte interno",
            path: ""
            },
            {
            key: 4.5,
            nombreElemento: "Actividades complementarias",
            path: ""
            },    
            {
            key: 4.6,
            nombreElemento: "Infraestructura deportiva",
            path: ""
            },                
        ],
        divider: false,
        icon: <Soccer/>
    },
    {
        key: 5,
        nombre: "Arte y cultura",
        tipo: "no colapsable",
        divider: false,
        icon: <ColorLens/>
    },          
    {
        key: 6,      
        nombre: "Jardín infantil Taqinki",
        tipo: "no colapsable",
        divider: false,
        icon: <Baby/>
    },   
    {
        key: 7,      
        nombre: "Inclusión UCN",
        tipo: "no colapsable",
        divider: true,
        icon: <Inclusive/>
    },           
    {
        key: 8,
        nombre: "Facebook DGE",
        tipo: "no colapsable",
        divider: false,
        icon: <FacebookIcon/>
    },     
    {
        key: 9,
        nombre: "Instagram DGE",
        tipo: "no colapsable",
        divider: false,
        icon: <InstagramIcon/>
    },             
  
  ]);

  function handleDrawer() {
    setOpen(!open);
    setSwitchEnable(!open);

    setElementosDrawer([...elementosDrawer].map(object => {
      if(object.tipo === "colapsable") {
        return {
          ...object,
          open: false
        }
      }
      else return object;
    }));    
  }

  function handleElementOpen(nombre, open) {

    if(!open){
      setSwitchEnable(true);
      setOpen(true);
      setTimeout(() => setElementosDrawer([...elementosDrawer].map(object => {
        if(object.nombre === nombre) {
          return {
            ...object,
            open: !open
          }
        }
        else return object;
      })), 200);
    }else{
      setElementosDrawer([...elementosDrawer].map(object => {
        if(object.nombre === nombre) {
          return {
            ...object,
            open: !open
          }
        }
        else return object;
      }));      
    }
  }  

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        elevation={0}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar
          variant="dense"
          style={{ backgroundColor: "#FFFFFF", paddingLeft: "10px", paddingTop: "15px"}}
        >

          <img src={logo} width="100" height="100"/>
          <img src={dgelogo} width="100" height="100"/>

          <div className={classes.grow} />

          <div className={classes.sectionDesktop}>                        
              <div className={classes.contenedorUser}>
                  <Stack direction="row" spacing={2}>
                      {elementosAppBar.map((element, index) => (
                        <Fragment key={element.nombre}>
                          <a
                              className={classes.titleNoMargin}
                              rel="noreferrer"
                              target="_blank"
                              href={element.path}                                             
                              style={{fontSize:"1.2rem", color:"#007bff", textDecoration:"none"}} 
                          >
                              {element.nombre}
                          </a>               
                          { element.divider ?                  
                            <Divider orientation="vertical" style={{ height: "2rem" }}/>    
                            :
                            ""
                          }
                        </Fragment>
                      ))}                                                                                                                                                   
                  </Stack>
              </div>  
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx(classes.rootScrollbar, {
            [classes.drawerOpenPaper]: open,
            [classes.drawerClosePaper]: !open
          })
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          <SwitchUnstyled component={RootSwitch} {...label} onClick={handleDrawer} checked={switchEnable} style={open? {marginRight: "12px"}:{marginRight: "4px"}}/>   
        </div>
        <List>
          {elementosDrawer.map((element, index) => (
            <Fragment key={element.key}>
            <Tooltip title={open ? "" : element.nombre} placement="right" >
              <ListItem button onClick={element.tipo === "colapsable" ? () => handleElementOpen(element.nombre, element.open) : undefined}>
                <ListItemIcon style={{ color:"white" }} >
                  {element.icon}
                </ListItemIcon>
                <ListItemText primary={element.nombre} style={{ color:"white" }} />
                {element.tipo === "colapsable" ? 
                  <>
                  {element.open ? 
                    <ExpandLess style={{ color:"white" }}/>
                    : 
                    <ExpandMore style={{ color:"white" }}/> 
                  }
                  </>
                  : 
                  ""
                }              
              </ListItem>  
            </Tooltip>
            {element.tipo === "colapsable" ? 
                <Collapse in={element.open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {element.elementos.map((elementoInterior, indexElemento) => (
                        <ListItem button key={elementoInterior.key}>
                            <ListItemIcon />                            
                            <ListItemText style={{ color:"white" }} primaryTypographyProps={{style: { whiteSpace: "normal" }}}> 
                              { elementoInterior.nombreElemento } 
                            </ListItemText>
                        </ListItem>            
                    ))}                                                         
                  </List>
                </Collapse> 
                : 
                ""
              }                                      
            {element.divider ? <Divider style={{height:"7px", backgroundColor:"#3a4955"}}/> : ""}
            </Fragment>
          ))}
        </List>
      </Drawer>
      <main className={classes.content} style={{paddingTop:"60px"}}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
}

export default AppBarCustom;

const drawerWidth = 260;
const drawerWidthClosed = 57; 

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    width: `calc(100% - ${drawerWidthClosed}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    backgroundColor: "#FFFFFF",
    width: drawerWidth,
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    backgroundColor: "#FFFFFF",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1
    }
  },
  drawerOpenPaper: {
    backgroundColor: "#425563",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    overflowX: "hidden",
  },
  drawerClosePaper: {
    backgroundColor: "#425563",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(7) + 1
    }
  },  
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 0px",
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  rootScrollbar: {
    "&::-webkit-scrollbar": {
      width: 9,
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: `inset 0 0 6px rgba(0, 0, 0, 0.3)`,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#003057",
      outline: `1px solid #003057`,
    },
  },  
  grow: {
    flexGrow: 1,
  },  
  sectionDesktop: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
    display: "flex",
    },
  },
  contenedorUser: {
    marginTop: "5px",
    marginBottom: "auto",
    marginLeft: "auto",
    marginRight: "auto",
  },    
  titleNoMargin: {
    margin: 0,
    textAlign: "end",
    color: "black",
  },  
}));

const RootSwitch = styled('span')`
  font-size: 0;
  position: relative;
  display: inline-block;
  width: 47px;
  height: 25px;
  margin: 10px;
  margin-left: 0px;
  cursor: pointer;

  &.${switchUnstyledClasses.disabled} {
    opacity: 0.4;
    cursor: not-allowed;
  }

  & .${switchUnstyledClasses.track} {
    background: #b3c3d3;
    border-radius: 14px;
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
  }

  & .${switchUnstyledClasses.thumb} {
    display: block;
    width: 19px;
    height: 19px;
    top: 3px;
    left: 3px;
    border-radius: 12px;
    background-color: #fff;
    position: relative;
    transition: all 200ms ease;
  }

  &.${switchUnstyledClasses.focusVisible} .${switchUnstyledClasses.thumb} {
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
  }

  &.${switchUnstyledClasses.checked} {
    .${switchUnstyledClasses.thumb} {
      left: 25px;
      top: 3px;
      background-color: #fff;
    }

    .${switchUnstyledClasses.track} {
      background: #007fff;
    }
  }

  & .${switchUnstyledClasses.input} {
    cursor: inherit;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 1;
    margin: 0;
  }
`;

const elementosAppBar = [
  {
      nombre: "Home",
      path: "https://www.google.cl",
      divider: true,
  },    
  {
      nombre: "Mi Portal",
      path: "https://miportal.ucn.cl",
      divider: true,
  },
  {
      nombre: "Online UCN",
      path: "https://online.ucn.cl",
      divider: true,
  },
  {
      nombre: "Noticias UCN",
      path: "https://noticias.ucn.cl",
      divider: true,
  },
  {
      nombre: "Campus UCN",
      path: "https://campusvirtual.ucn.cl",
      divider: false,
  },                
]