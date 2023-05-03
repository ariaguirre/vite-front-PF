import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

import styles from "./footer.module.css";
import Typography from '@mui/material/Typography'
import {Grid, IconButton } from '@mui/material';
const Footer = () => {
  return (
    <footer>
      <Grid container justifyContent="center">
        <Grid item md={4} xs={12}>
          <Grid container justifyContent="center" alignItems="center" height="50px" overflow="hidden">
            <Typography variant="body1" color="initial" align='center'>{new Date().getFullYear()} &copy; All Rights Reserved.</Typography>
          </Grid>
        </Grid>
        <Grid item md={4} xs={12}>
          <Grid container justifyContent="center" alignItems="center" height="50px" overflow="hidden">
            <Typography variant="body1" color="initial" align='center'>Build With<span className={styles.heart}>&#9825;</span>by &nbsp; Us</Typography>
          </Grid>
        </Grid>        
        <Grid item md={4} xs={12}>
          <Grid container justifyContent="center" alignItems="center" height="50px" overflow="hidden">
            <IconButton color='primary'><WhatsAppIcon/></IconButton><IconButton color='primary'><InstagramIcon/></IconButton> 
          </Grid>
        </Grid>

      </Grid>
    </footer>
  );

};


export default Footer;
