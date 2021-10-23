import React, {
    Fragment,
    useState,
    useContext,
    useEffect,
    useCallback,
  } from "react";
import clsx from "clsx";
import {
    AppBar as MaterialAppBar,
    Box,
    Grid,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
    Drawer,
    List,
    Divider,
    ListItemIcon,
    ListItemText,
    ListItem,
    Tooltip,
    
  } from "@material-ui/core";
import {
    Menu as MenuIcon,
    ChevronLeft as ChevronLeftIcon,
    ChevronRight as ChevronRightIcon,
    People as PeopleIcon,
    LaptopChromebook as LaptopChromebookIcon,
    Home as HomeIcon, 
} from "@material-ui/icons";

import { Stack } from '@mui/material';

import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
  
import { Link } from "react-router-dom";
   
function AppBarCustom(props) {

    const { children } = props;

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(null);
    const menuId = "primary-search-account-menu";
    const isMenuOpen = Boolean(anchorEl);

    const theme = useTheme();
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

    function cerrarMenuConTodo() {
        handleDrawerClose();
        handleClickClose();
    }

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
                variant="outlined"      
                elevation={0}

                className={clsx(classes.appBar, { [classes.appBarShift]: open })}
            >
                <Box boxShadow={0}>
                <Toolbar
                    variant="dense"
                    style={{ backgroundColor: "#FFFFFF", paddingLeft: "18px" }}
                >
                    <IconButton
                    // color="black"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton)}
                    >
                    <MenuIcon />
                    </IconButton>

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
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                }),
                }}
            >
                <div className={classes.toolbar}>
                </div>
                
                <ListItem
                    key={1}
                    button
                    // component={Link}
                    // to={currentUser.rol === "ADMIN"? Routes.HOME : Routes.MISCURSOS}                    
                    className={classes.selectItem}
                >
                    
                    <ListItemIcon>
                    <HomeIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText style={{ color:"#000000" }}>
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
                    <LaptopChromebookIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText style={{ color:"#000000" }}>
                    Cursos
                    </ListItemText>
                </ListItem>

                <Divider/>

                <List style={{ backgroundColor: "#FFFFFF" }}></List>
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
        overflow: "auto !important",
        paddingRight: "0px !important",
        zIndex: theme.zIndex.drawer + 3,
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100%px)`,
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
    drawerClose: {
        backgroundColor: "#FFFFFF",
        transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: "hidden",
        width: theme.spacing(7) + 1,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    menuButton: {
        marginRight: theme.spacing(2),
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
