import * as React from 'react';
import { useEffect } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';
import FolderSharedRoundedIcon from '@mui/icons-material/FolderSharedRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PlaylistAddCheckCircleRoundedIcon from '@mui/icons-material/PlaylistAddCheckCircleRounded';
import PlaylistAddCircleRoundedIcon from '@mui/icons-material/PlaylistAddCircleRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import CreateProduct from "./createProduct";
import AllProducts from './allProducts';
import VentasTotales from './ventasTotales';
import Inicio from './inicio';
import Users from './users';
import NavBar from '../navbar/navbar'

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function SideBar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const isLargeScreen = useMediaQuery(theme => theme.breakpoints.up('sm')); //para manejar drawer visble/oculto responsive
  const [content, setContent] = React.useState(<Inicio/>) //estado local para manejar contenido dinamico

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  //funcion para manejar el contenido dinamico del drawer
  const handleItemClick = (newContent) => {
    setContent(newContent);
  };
  //para drawer abierto o cerrado segun tamaño de pantalla
  useEffect(() => {
    setOpen(isLargeScreen);
  }, [isLargeScreen]);
  

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
         </IconButton>
         <NavBar />
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          
         {/*menu latera*/}
            <ListItem>
            <ListItemButton
               onClick={() => handleItemClick(<Inicio/>)}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              > 
              <ListItemIcon>
                <HomeRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Inicio"  />      
              </ListItemButton>      
            </ListItem>
            
            <ListItem>
            <ListItemButton
             onClick={() => handleItemClick(<AllProducts/>)}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
              <ListItemIcon>
                <PlaylistAddCheckCircleRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Ver Productos" /> 
              </ListItemButton>           
            </ListItem>
            
            <ListItem>
            <ListItemButton
            onClick={() => handleItemClick(<CreateProduct/>)}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
              <ListItemIcon>
              <PlaylistAddCircleRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Nuevo Producto" />  
            </ListItemButton>           
            </ListItem>

            <ListItem>
            <ListItemButton
               onClick={() => handleItemClick(<VentasTotales/>)}
              
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  
                }}
              >
              <ListItemIcon>
                <TrendingDownRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Ventas" />  
            </ListItemButton>           
            </ListItem>

            <ListItem>
            <ListItemButton
            onClick={() => handleItemClick(<Users/>)}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
              <ListItemIcon>
                <FolderSharedRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Clientes" />     
              </ListItemButton>      
            </ListItem>
        </List>
        <Divider />
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3, alignContent:"center"}}>
        <DrawerHeader />
        {content} 
       
      </Box>
    </Box>
  );
}
