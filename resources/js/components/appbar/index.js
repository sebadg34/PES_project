import React, {
    Fragment,
    useState,
  } from "react";
import clsx from "clsx";
import {
    AppBar as MaterialAppBar,
    Box,
    IconButton,
    Menu,
    Toolbar,
    Typography,
    Drawer,
    Divider,
    List,
    ListItemIcon,
    ListItemText,
    ListItem,
    
  } from "@material-ui/core";

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';

import {
    Menu as MenuIcon,
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

import { styled } from '@mui/system';
import SwitchUnstyled, { switchUnstyledClasses } from '@mui/base/SwitchUnstyled';

import { Stack } from '@mui/material';

import { makeStyles, withStyles } from "@material-ui/core/styles";

import logo from "../logo.png";
import dgelogo from "../dgelogo.jpg";

const Root = styled('span')`
  font-size: 0;
  position: relative;
  display: inline-block;
  width: 32px;
  height: 20px;
  margin: 10px;
  cursor: pointer;

  &.${switchUnstyledClasses.disabled} {
    opacity: 0.4;
    cursor: not-allowed;
  }

  & .${switchUnstyledClasses.track} {
    background: #b3c3d3;
    border-radius: 10px;
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
  }

  & .${switchUnstyledClasses.thumb} {
    display: block;
    width: 14px;
    height: 14px;
    top: 3px;
    left: 3px;
    border-radius: 16px;
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
      left: 14px;
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

function AppBarCustom(props) {

    const { children } = props;

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(null);
    const menuId = "primary-search-account-menu";
    const isMenuOpen = Boolean(anchorEl);

    const [open, setOpen] = useState(false);

    const label = { componentsProps: { input: { 'aria-label': 'Demo switch' } } };

    const [openBeneficios, setOpenBeneficios] = useState(false);
    const [openSalud, setOpenSalud] = useState(false);
    const [openDeportes, setOpenDeportes] = useState(false);
    const [openAccesos, setOpenAccesos] = useState(false);
    const [openNoticias, setOpenNoticias] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(!open);
        if (openAccesos === true) {
        setOpenAccesos(false);
        }
        if (openNoticias === true) {
        setOpenNoticias(false);
        }
        setOpenBeneficios(false);
        setOpenSalud(false);
        setOpenDeportes(false);
    };

    const handleOpenBeneficios = () => {
        setOpenBeneficios(!openBeneficios);
        if(!open){
            setOpen(true);
        }
    };

    const handleOpenSalud = () => {
        setOpenSalud(!openSalud);
        if(!open){
            setOpen(true);
        }
    };    

    const handleOpenDeportes = () => {
        setOpenDeportes(!openDeportes);
        if(!open){
            setOpen(true);
        }
    };        

    const handleClickClose = () => {
        setOpenAccesos(false);
    };

    function handleMenuClose() {
        setAnchorEl(null);
    }

    const GlobalCss = withStyles({
        // @global is handled by jss-plugin-global.
        "@global": {
        // You should target [class*="MuiButton-root"] instead if you nest themes.
        ".Mui-selected": {
            borderRadius: "0 25px 25px 0",
        },
        ".MuiListItem-button:hover ": {
            borderRadius: "0 25px 25px 0",
        },
        },
    })(() => null);

    const renderMenu = () => {
        return (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            id={menuId}
            transformOrigin={{ vertical: "bottom", horizontal: "right" }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            {/* <MenuItem onClick={handleCerrarSession}>Cerrar Sesión</MenuItem> */}
        </Menu>
        );
    };

    const renderAppMobile = () => {
        return (
        <Fragment>
            <GlobalCss />
            <div className={classes.root}>
            <MaterialAppBar
                position="fixed"
                //variant="outlined"      
                elevation={0}

                className={clsx(classes.appBar, { [classes.appBarShift]: open })}
            >
                <Box boxShadow={0}>
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
                                <a
                                    className={classes.titleNoMargin}
                                    rel="noreferrer"
                                    target="_blank"
                                    href="https://www.google.com"                                                
                                    style={{fontSize:"1.2rem", color:"#007bff", textDecoration:"none"}} 
                                >
                                    Home
                                </a>                                
                                <Divider
                                    orientation="vertical"
                                    style={{
                                    height: "2rem",
                                    }}
                                />                                
                                <a
                                    className={classes.titleNoMargin}
                                    rel="noreferrer"
                                    target="_blank"
                                    href="https://miportal.ucn.cl"                                                
                                    style={{fontSize:"1.2rem", color:"#007bff", textDecoration:"none"}} 
                                >
                                    Mi portal
                                </a>       
                                <Divider
                                    orientation="vertical"
                                    style={{
                                    height: "2rem",
                                    }}
                                />                                       
                                <a
                                    className={classes.titleNoMargin}
                                    rel="noreferrer"
                                    target="_blank"
                                    href="https://online.ucn.cl"                                                
                                    style={{fontSize:"1.2rem", color:"#007bff", textDecoration:"none"}} 
                                >
                                    Online UCN
                                </a>      
                                <Divider
                                    orientation="vertical"
                                    style={{
                                    height: "2rem",
                                    }}
                                />                                    
                                <a
                                    className={classes.titleNoMargin}
                                    rel="noreferrer"
                                    target="_blank"
                                    href="https://noticias.ucn.cl"                                                
                                    style={{fontSize:"1.2rem", color:"#007bff", textDecoration:"none"}} 
                                >
                                    Noticias UCN
                                </a>     
                                <Divider
                                    orientation="vertical"
                                    style={{
                                    height: "2rem",
                                    }}
                                />                                    
                                <a
                                    className={classes.titleNoMargin}
                                    rel="noreferrer"
                                    target="_blank"
                                    href="https://campusvirtual.ucn.cl"                                                
                                    style={{fontSize:"1.2rem", color:"#007bff", textDecoration:"none"}} 
                                >
                                    Campus UCN
                                </a>                                                                                                                            
                            </Stack>
                        </div>  
                    </div>
                </Toolbar>
                </Box>
            </MaterialAppBar>
            {renderMenu()}
            <Drawer
                variant="permanent"                
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                  }}                
                className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
                })}
                classes={{
                paper: clsx({
                    [classes.drawerOpenLateral]: open,
                    [classes.drawerCloseLateral]: !open,
                }),
                }}
            >
                <div className={classes.toolbar}>
                    <SwitchUnstyled component={Root} {...label} onClick={handleDrawerOpen}/>
                    {/* <IconButton
                        // color="black"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton)}
                        >
                        <MenuIcon />
                    </IconButton>                     */}
                </div>
                
                <ListItem
                    key={1}
                    button
                    // component={Link}
                    // to={currentUser.rol === "ADMIN"? Routes.HOME : Routes.MISCURSOS}                    
                    className={classes.selectItem}
                >
                    
                    <ListItemIcon>
                    <HomeIcon style={{ color:"white" }} />
                    </ListItemIcon>
                    <ListItemText style={{ color:"white" }}>
                    Inicio
                    </ListItemText>
                </ListItem>
                
                <Divider style={{height:"7px", backgroundColor:"#3a4955"}}/>

                {/*Menus colapsables*/}
                <ListItem button className={classes.selectItem} onClick={handleOpenBeneficios}>
                    <ListItemIcon>
                        <SchoolIcon style={{ color:"white" }} />
                    </ListItemIcon>
                    <ListItemText style={{ color:"white" }}>
                        Beneficios
                    </ListItemText>
                    {openBeneficios ? <ExpandLess style={{ color:"white" }}/> : <ExpandMore style={{ color:"white" }}/>}
                </ListItem>
                <Collapse in={openBeneficios} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button>
                            <ListItemIcon />                            
                            <ListItemText style={{ color:"white" }}> Noticias </ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon />                            
                            <ListItemText style={{ color:"white" }}> Beneficios Internos </ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon />                            
                            <ListItemText style={{ color:"white" }}> Beneficios Externos </ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon />                            
                            <ListItemText style={{ color:"white" }}> Preguntas Frecuentes </ListItemText>
                        </ListItem>                                                                        
                    </List>
                </Collapse>

                <ListItem button className={classes.selectItem} onClick={handleOpenSalud}>
                    <ListItemIcon>
                        <Health style={{ color:"white" }} />
                    </ListItemIcon>
                    <ListItemText style={{ color:"white" }}>
                        Salud
                    </ListItemText>
                    {openSalud ? <ExpandLess style={{ color:"white" }}/> : <ExpandMore style={{ color:"white" }}/>}
                </ListItem>
                <Collapse in={openSalud} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button>
                            <ListItemIcon />                            
                            <ListItemText style={{ color:"white" }}> Noticias </ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon />                            
                            <ListItemText style={{ color:"white" }}> Solicitud Hora </ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon />                            
                            <ListItemText style={{ color:"white" }}> Visado Certificados </ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon />                            
                            <ListItemText style={{ color:"white" }}> Agenda Pro </ListItemText>
                        </ListItem>                                                                        
                    </List>
                </Collapse>

                <ListItem button className={classes.selectItem} onClick={handleOpenDeportes}>
                    <ListItemIcon>
                        <Soccer style={{ color:"white" }} />
                    </ListItemIcon>
                    <ListItemText style={{ color:"white" }}>
                        Deportes
                    </ListItemText>
                    {openDeportes ? <ExpandLess style={{ color:"white" }}/> : <ExpandMore style={{ color:"white" }}/>}
                </ListItem>
                <Collapse in={openDeportes} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button>
                            <ListItemIcon />                            
                            <ListItemText style={{ color:"white" }}> Noticias </ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon />                            
                            <ListItemText style={{ color:"white" }}> Equipo Deportes UCN </ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon />                            
                            <ListItemText style={{ color:"white" }}> Deporte Selectivo </ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon />                            
                            <ListItemText style={{ color:"white" }}> Deporte Interno </ListItemText>
                        </ListItem>    
                        <ListItem button>
                            <ListItemIcon />                            
                            <ListItemText style={{ color:"white" }}> Actividades Complementarias </ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon />                            
                            <ListItemText style={{ color:"white" }}> Infraestructura Deportiva </ListItemText>
                        </ListItem>                                                                                                                            
                    </List>
                </Collapse>

                <ListItem
                    key={2}
                    button
                    //component={Link}
                    //to={Routes.CURSOS}
                    
                    className={classes.selectItem}
                    onClick={() => {
                    
                    }}
                >
                    
                    <ListItemIcon>
                    <ColorLens style={{ color:"white" }} />
                    </ListItemIcon>
                    <ListItemText style={{ color:"white" }}>
                    Arte y Cultura
                    </ListItemText>
                </ListItem>

                <ListItem
                    key={2}
                    button
                    //component={Link}
                    //to={Routes.CURSOS}
                    
                    className={classes.selectItem}
                    onClick={() => {
                    
                    }}
                >
                    
                    <ListItemIcon>
                    <Baby style={{ color:"white" }} />
                    </ListItemIcon>
                    <ListItemText style={{ color:"white" }}>
                    Jardín Infantil Taqinki
                    </ListItemText>
                </ListItem>                

                <ListItem
                    key={2}
                    button
                    //component={Link}
                    //to={Routes.CURSOS}
                    
                    className={classes.selectItem}
                    onClick={() => {
                    
                    }}
                >
                    
                    <ListItemIcon>
                    <Inclusive style={{ color:"white" }} />
                    </ListItemIcon>
                    <ListItemText style={{ color:"white" }}>
                    Inclusión UCN
                    </ListItemText>
                </ListItem>                
                
                <Divider style={{height:"7px", backgroundColor:"#3a4955"}}/>

                <ListItem
                    key={2}
                    button
                    //component={Link}
                    //to={Routes.CURSOS}
                    
                    className={classes.selectItem}
                    onClick={() => {
                    
                    }}
                >
                    
                    <ListItemIcon>
                    <FacebookIcon style={{ color:"white" }} />
                    </ListItemIcon>
                    <ListItemText style={{ color:"white" }}>
                    Facebook DGE
                    </ListItemText>
                </ListItem>

                <ListItem
                    key={2}
                    button
                    //component={Link}
                    //to={Routes.CURSOS}
                    
                    className={classes.selectItem}
                    onClick={() => {
                    
                    }}
                >
                    
                    <ListItemIcon>
                    <InstagramIcon style={{ color:"white" }} />
                    </ListItemIcon>
                    <ListItemText style={{ color:"white" }}>
                    Instagram DGE
                    </ListItemText>
                </ListItem>                

            </Drawer>
            <main
                className={clsx(classes.content, {
                [classes.contentShift]: open,
                })}
                style={{paddingTop:"60px"}}
            >
                <div className={classes.drawerHeader} />
                {children}
            </main>
            </div>
        </Fragment>
        );
    };

    return renderAppMobile();

}

export default AppBarCustom;

const drawerWidth = 250;
const drawerWidthClose = 57;
const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    contentShift: {
        transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    listScroll: {
        overflowY: "auto",
        margin: 0,
        padding: 0,
        listStyle: "none",
        height: "100%",
        "&::-webkit-scrollbar": {
        width: "0.4em",
        },
        "&::-webkit-scrollbar-track": {
        boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
        webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
        },
        "&::-webkit-scrollbar-thumb": {
        backgroundColor: "rgba(0,0,0,.1)",
        outline: "1px solid slategrey",
        },
    },
    grow: {
        flexGrow: 1,
    },
    appBar: {
        width: `calc(100% - ${drawerWidthClose}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
      appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
    },
    drawerOpen: {
        backgroundColor: "#FFFFFF",
        width: drawerWidth,
        transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerOpenLateral: {
        backgroundColor: "#425563",
        width: drawerWidth,
        transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
        }),
        zIndex:1205,
    },    
    drawerClose: {
        backgroundColor: "#FFFFFF",
        transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: "hidden",
        width: theme.spacing(7) + 1,
    },
    drawerCloseLateral: {
        backgroundColor: "#425563",
        transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: "hidden",
        width: theme.spacing(7) + 1,
        zIndex:1205,
    },    
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    menuButton: {
        marginRight: "-3px",
        '&:focus': {
            outline: "none",
        },        
    },    
    nested: {
        paddingLeft: theme.spacing(4),
    },
    nested2: {
        paddingLeft: theme.spacing(8),
    },
    linksSecundarios: {
        padding: 8,
    },
    infoButton: {
        marginLeft: theme.spacing(2),
    },
    sectionDesktop: {
        display: "flex",
        [theme.breakpoints.up("md")]: {
        display: "flex",
        },
    },
    sectionMobile: {
        display: "flex",
        [theme.breakpoints.down("md")]: {
        display: "none",
        },
    },
    contenedorUser: {
        marginTop: "5px",
        marginBottom: "auto",
        marginLeft: "auto",
        marginRight: "auto",
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: "25ch",
    },
    titleNoMargin: {
        margin: 0,
        textAlign: "end",
        color: "black",
    },
    titleBold: {
        color: "black",
    },
    toolbar: {
        height: "83px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    hide: {
        display: "none",
    },
    button: {
        zIndex: theme.zIndex.drawer + 2,
        margin: theme.spacing(1),    
    },    
    input: {
        display: "none",
    },
    homeLink: {
        color: "white",
        textDecoration: "none",
    },
    img: {
        height: "40px",
        marginTop: "12px",
        marginBottom: "12px",
        marginRight: theme.spacing(2),
    },

    selectItem: {
        color: "primary",
    },
    search_div: {
        marginLeft: theme.spacing(5),
        width: "50%",
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        //padding: theme.spacing(0, 1),
        paddingTop: "30px",
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },  
}));
