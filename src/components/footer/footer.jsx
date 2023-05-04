import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import style from './footer.module.css'

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
    <div className={style.fullCont}>
    <Paper
      sx={{
        width: "100%",
        height: "auto",
        left: 0,
        bottom: 0, 
        textAlign: 'center',
        backgroundColor: "white",
        marginTop: 2,
        paddingTop: "2rem",
        paddingBottom: "2rem",
      }} elevation={8}
    >
      <Container maxWidth="lg">
        <div className={style.footerCont}>
           <div className={style.titulo}>
              Mom Home & Baby              
           </div>
            <div className={style.varios}>
              Contact | About us | FAQ
              
              <WhatsAppIcon
                sx={{
                  color: 'black',
                  // marginRight: '-6rem',
                  float: 'right',
                  fontSize: 25,
                }}
                />
              <InstagramIcon
                sx={{
                  color: 'black',
                  // marginRight: '-3rem',
                  float: 'right',
                  fontSize: 25,
                }}
                />
            </div>
            </div>
            <hr/>
                <div className={style.tipografia}>
                    {`@${new Date().getFullYear()} MH&B. All Rights Reserved.`}
                </div>
                
      </Container>
    </Paper>
    </div>

  );

};

export default Footer;

