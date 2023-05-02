import { Paper, Container, Grid, Typography } from "@mui/material";
import { styled } from '@mui/material/styles'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';


const Various = styled('h2')(({ theme }) => ({
  color: 'black',
  textAlign: 'start',
  fontSize: theme.typography.pxToRem(6),
  fontWeight: 'normal',
  [theme.breakpoints.up('sm')]: {
    fontSize: theme.typography.pxToRem(17),
  },
}));


const Footer = () => {
  return (
    <Paper
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "transparent",
        marginTop: 2,
        paddingTop: "2rem",
        paddingBottom: "2rem",
      }} elevation={8}
    >
      <Container maxWidth="lg">
        <Grid container direction="row" justifyContent='space-around' alignItems='center'>
          <Grid item xs={6}>
            <Typography
              sx={{
                float: 'left',
                marginLeft: '-18rem',
                color: 'black',
                fontWeight: 'bolder',
                fontSize: 20                
              }}
            >
              Mom Home & Baby              
            </Typography>
{/* Typography no puede estar dentro de otro typography */}
            <Typography sx={{ color: 'darkGrey' }}>
                {`${new Date().getFullYear()} All Rights Reserved.`}
            </Typography>
            <Various item xs={12}
              sx={{ marginRight: '-12rem', marginLeft: '10rem', marginTop: '1rem' }}
            >
              Contact | About us | Preguntas frecuentes
              <WhatsAppIcon
                sx={{
                  color: 'black',
                  marginRight: '-6rem',
                  float: 'right',
                  fontSize: 25,
                }}
              />
              <InstagramIcon
                sx={{
                  color: 'black',
                  marginRight: '-3rem',
                  float: 'right',
                  fontSize: 25,
                }}
              />
            </Various>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};


export default Footer;