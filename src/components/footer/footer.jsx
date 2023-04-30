import React from "react";
import { Box, Paper, Container, Grid, Typography, Icon } from "@mui/material";
import {styled} from '@mui/material/styles'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer () {
  return (
   <Paper
   sx ={{
    width: "100%",
    height: "auto",
    backgroundColor: "transparent",
    marginTop: 2,
    paddingTop: "1rem",
    paddingBottom: "1rem",
   }} elevation={8}
   >
      <Container maxWidth="lg">
        <Grid container direction="row" >
          <Grid item xs={12}>
            <Typography 
            sx={{
                color: 'black', 
                fontWeight: 'bolder',    
                textAlign: 'start',
            }}
            >
              Mom Home & Baby
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1" alignItems='end'>
              {`${new Date().getFullYear()} | Contact | About us | Socials`}
              {/* <WhatsAppIcon/> */}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};


