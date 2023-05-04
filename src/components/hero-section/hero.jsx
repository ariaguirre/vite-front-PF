import { Paper, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles'
import bebe1 from '../../../documents/Image/bebe1.jpg'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { Link } from 'react-router-dom';


const HeroContainer = styled(Paper)(({ theme }) => ({
  backgroundImage: `url(${bebe1})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: '100%',
  padding: theme.spacing(6),
  minHeight: '100vh',
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(6),
  },
}));

const HeroTitle = styled('h1')(({ theme }) => ({
  color: 'white',
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(2),
  fontSize: theme.typography.pxToRem(50),
  textAlign: 'center',
  fontWeight: 'bold',
  maxWidth: '700px',
  [theme.breakpoints.up('sm')]: {
    fontSize: theme.typography.pxToRem(70),
    marginTop: theme.spacing(10),
  },
}));

const HeroSubtitle = styled('h2')(({ theme }) => ({
  color: 'white',
  marginTop: theme.spacing(4),
  textAlign: 'center',
  fontSize: theme.typography.pxToRem(16),
  fontWeight: 'normal',
  maxWidth: '700px',
  [theme.breakpoints.up('sm')]: {
    fontSize: theme.typography.pxToRem(20),
    marginTop: theme.spacing(8),
  },
}));

const HeroButton = styled(Button)(({ theme }) => ({
  backdropFilter: 'blur(10px)',
  color: '#ffffff',
  float: 'right',
  marginTop: '20px',
  marginRight: theme.spacing(12),
  padding: theme.spacing(1),
  fontSize: theme.typography.pxToRem(20),
  borderColor: 'red',
  borderWidth: 'thick',
  borderRadius: '20px',
  [theme.breakpoints.up('sm')]: {
    fontSize: theme.typography.pxToRem(24),
    marginRight: theme.spacing(25),
    marginTop: '-160px',
  },
}));

export default function Hero() {
  return (
    <HeroContainer elevation={8}>
      <HeroTitle>Mom Home & Baby</HeroTitle>
      <HeroSubtitle>
        Asesoramos a mamitas primerizas en la elección de los mejores productos para su embarazo, lactancia y sus bebés. ¡Ahorrándoles horas de investigación!
      </HeroSubtitle>
      <HeroButton startIcon={<LocalMallIcon />}>
        <Link to={"/shop"}>
          <Typography variant="body1" color="secondary">Tienda</Typography>
        </Link>
      </HeroButton>
    </HeroContainer>
  );
}