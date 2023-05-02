//React
import { useState } from 'react';
//Redux
import { useSelector } from 'react-redux';
//material UI
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Link from '@mui/material/Link';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Toolbar from '@mui/material/Toolbar';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
//FireBase
import { signOutUser } from "../../utils/firebase/firebaseClient";



const Navigation = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  //redux
  const {userCredentials} = useSelector((state)=> state.currentUser);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* LogoFullScreen */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            MB&H
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {/* Menu Movil */}
              <Link href='/' underline='none'>
                <MenuItem onClick={handleCloseNavMenu} >
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>
              </Link>
              <Link href='/shop' underline='none'>
                <MenuItem onClick={handleCloseNavMenu} >
                  <Typography textAlign="center">Shop</Typography>
                </MenuItem>
              </Link>
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            MB&H
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block', }} href='/'>
              Home
            </Button>
            <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }} href='shop'>
              Shop
            </Button>
          </Box>

          {
          userCredentials
          ? <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings" >
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Typography variant="body1" color="secondary" p={".5rem"} mr={1} >{userCredentials.displayName||"User"}</Typography>
                <Avatar alt={userCredentials.displayName} src={userCredentials.photoURL} />
                </IconButton>
              </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  
                  <MenuItem>
                    <Link variant="body1" color="primary" href="/admin" underline='none'>Profile</Link>                    
                  </MenuItem>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Link variant="body1" color="primary" href="/auth" underline='none' onClick={()=>signOutUser()}>Logout</Link>                    
                  </MenuItem>
                  
                </Menu>
            </Box> 
          :<Button variant='text' color='secondary' href='/auth'>Login</Button>
        }        
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navigation;