import React from 'react';
import { Paper, Button } from '@mui/material';
// import {makeStyles} from '@mui/styles';
import {styled} from '@mui/material/styles'
import bebe1 from '../../../documents/Image/bebe1.jpg'

// const styles ={
//     paperContainer: {
//         backgroundImage:`url(${bebe1})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         width:`calc(100vw)`,
//         padding: '32px',
//         height: '95vh',
//         opacity: 'revert-layer'
//     },
//     button:{
//         backdropFilter:'blur(10px)',
//         color: '#ffffff',
//         float: 'right',
//         marginTop: '-130px',
//         marginRight: '200px',
//         padding: '8px',
//         fontSize: '30px',
//         borderColor: 'red',
//         borderWidth: 'thick'

//     },
//     h1:{
//         color: 'white',
//         marginTop: '60px',
//         marginLeft: '50px',
//         fontSize: '80px',
//         fontWeight: 'bolder', 
//         maxWidth: '700px'

//     },
//     h2:{
//         color: 'white',
//         marginTop: '80px',
//         marginLeft: '50px',
//         fontSize: '20px',
//         fontWeight: 'normal', 
//         maxWidth: '700px'
//     }
// }


// export default function Hero(){
//     return(
//         <Paper style={styles.paperContainer} elevation={8} >
//             <h1 style={styles.h1}>Mom Baby & Home</h1>
//             <h2 style={styles.h2}>Asesoramos a mamitas primerizas en la elección de los mejores productos para su embarazo, 
//             lactancia y sus bebés. ¡Ahorrándoles horas de investigación!</h2>
//             <Button style={styles.button}>
//                 Tienda
//             </Button>
//         </Paper>
//     )
// }


const HeroContainer = styled(Paper)(({ theme }) => ({
    backgroundImage: `url(${bebe1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100vw',
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

  const HeroSubtitle2 = styled('h2')(({ theme }) => ({
    color: 'white',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(4),
    textAlign: 'center',

    fontSize: theme.typography.pxToRem(16),
    fontWeight: 'normal',
    maxWidth: '700px',
    [theme.breakpoints.up('sm')]: {
      fontSize: theme.typography.pxToRem(20),
      marginTop: theme.spacing(-4),
    },
  }));
  
  const HeroButton = styled(Button)(({ theme }) => ({
    backdropFilter: 'blur(10px)',
    color: '#ffffff',
    float: 'right',
    marginTop: '20px',
    marginRight: theme.spacing(12),
    padding: theme.spacing(2),
    fontSize: theme.typography.pxToRem(20),
    borderColor: 'red',
    borderWidth: 'thick',
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
          Asesoramos a mamitas primerizas en la elección de los mejores productos para su embarazo, lactancia y sus bebés. 
        </HeroSubtitle>
        <HeroSubtitle2>
        ¡Ahorrándoles horas de investigación!
        </HeroSubtitle2>
        <HeroButton>
          Tienda
        </HeroButton>
      </HeroContainer>
    );
  }