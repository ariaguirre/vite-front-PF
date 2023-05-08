import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { signOutUser } from '../../utils/firebase/firebaseClient';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <p               
        onClick={handleClick}        
      >
        Dashboard
      </p>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}><Link to="/admin">Profile</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/auth" onClick={()=>{signOutUser()}}>Logout</Link></MenuItem>
      </Menu>
    </>
  );
}