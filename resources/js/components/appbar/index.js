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
    List,
    Divider,
    ListItemIcon,
    ListItemText,
    ListItem,
    
  } from "@material-ui/core";
import {
    Menu as MenuIcon,
    LaptopChromebook as LaptopChromebookIcon,
    Home as HomeIcon, 
} from "@material-ui/icons";

import { Stack } from '@mui/material';

import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";

import logo from "../logo.png";
import { height } from "@mui/system";

function AppBarCustom(props) {

    const { children } = props;

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(null);
    const menuId = "primary-search-account-menu";
    const isMenuOpen = Boolean(anchorEl);

    const [open, setOpen] = useState(false);
    const [openAccesos, setOpenAccesos] = useState(false);
    const [openNoticas, setOpenNoticias] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(!open);
        if (openAccesos === true) {
        setOpenAccesos(false);
        }
        if (openNoticas === true) {
        setOpenNoticias(false);
        }
    };
    const handleDrawerClose = () => {
        setOpen(false);
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
                    style={{ backgroundColor: "#FFFFFF", paddingLeft: "18px" }}
                >

                    <img src={logo} width="80" height="80"/>

                    <div className={classes.grow} />

                    <div className={classes.sectionDesktop}>                        

                        <div className={classes.contenedorUser}>
                            <Stack direction="row" spacing={2}>
                                <Typography
                                    className={classes.titleNoMargin}
                                    variant="body2"
                                    gutterBottom
                                    color="inherit"
                                    >
                                    Home
                                </Typography>
                                <Divider
                                    orientation="vertical"
                                    style={{
                                    height: "1.3rem",
                                    }}
                                />                                
                                <Typography
                                    className={classes.titleNoMargin}
                                    variant="body2"
                                    gutterBottom
                                    color="inherit"
                                    >
                                    Mi portal
                                </Typography>     
                                <Divider
                                    orientation="vertical"
                                    style={{
                                    height: "1.3rem",
                                    }}
                                />                                       
                                <Typography
                                    className={classes.titleNoMargin}
                                    variant="body2"
                                    gutterBottom
                                    color="inherit"
                                    >
                                    Online UCN
                                </Typography>  
                                <Divider
                                    orientation="vertical"
                                    style={{
                                    height: "1.3rem",
                                    }}
                                />                                    
                                <Typography
                                    className={classes.titleNoMargin}
                                    variant="body2"
                                    gutterBottom
                                    color="inherit"
                                    >
                                    Noticias UCN
                                </Typography>  
                                <Divider
                                    orientation="vertical"
                                    style={{
                                    height: "1.3rem",
                                    }}
                                />                                    
                                <Typography
                                    className={classes.titleNoMargin}
                                    variant="body2"
                                    gutterBottom
                                    color="inherit"
                                    >
                                    Campus UCN
                                </Typography>                                                                                                                            
                            </Stack>
                        </div>  
                    </div>
                </Toolbar>
                </Box>
            </MaterialAppBar>
            {renderMenu()}
            <Drawer
                variant="permanent"                
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
                    <IconButton
                        // color="black"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton)}
                        >
                        <MenuIcon />
                    </IconButton>                    
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
                    <LaptopChromebookIcon style={{ color:"white" }} />
                    </ListItemIcon>
                    <ListItemText style={{ color:"white" }}>
                    Cursos
                    </ListItemText>
                </ListItem>

                <Divider style={{height:"7px", backgroundColor:"#3a4955"}}/>

            </Drawer>
            <main
                className={clsx(classes.content, {
                [classes.contentShift]: open,
                })}
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
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },  
}));
