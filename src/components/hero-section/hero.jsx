//import react y redux
import { useSelector } from 'react-redux';
import { Paper, Button, Typography, Box, Grid  } from '@mui/material';
import { styled } from '@mui/material/styles'
import bebe1 from '../../../documents/Image/bebe1.jpg'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { Link } from 'react-router-dom';
//import componentes
import Slider from "./slider/slider"
import CardInf from "../card/card"


import styles from './hero.module.css';

const HeroContainer = styled(Paper)(({ theme }) => ({
  backgroundImage: `url(${bebe1})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: '100vw',  
  padding: theme.spacing(6),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(6),
    minHeight: "100vh",
  },
}));

const HeroTitle = styled('h1')(({ theme }) => ({
 
  color: 'black',
  marginTop: "1px",
  marginRight:"1px",
  fontSize: theme.typography.pxToRem(20),
  textAlign: 'center',
  fontWeight: 'bold',  
  maxWidth: '700px',
  [theme.breakpoints.up('sm')]: {
    fontSize: theme.typography.pxToRem(50),
    marginTop: theme.spacing(2),
  },
}));

const HeroSubtitle = styled('h2')(({ theme }) => ({
  
  color: 'black',  
  textAlign: 'center',
  fontSize: theme.typography.pxToRem(14),
  fontWeight: 'normal',
  maxWidth: '700px',
  [theme.breakpoints.up('sm')]: {
    fontSize: theme.typography.pxToRem(20),
    //marginTop: theme.spacing(8),
  },
}));



export default function Hero() {

  const { products } = useSelector(state => state.products);

  //filtros orden por rating (imperdibles) y discount(recomendados)
  const sortedProductsByRating=[...products].sort((a,b)=>b.rating - a.rating).slice(0,4)
  const sortedProductsBySale=[...products].sort((a,b)=>b.sale.discount - a.sale.discount).slice(1,5)
 

  return (
    <>
    <HeroContainer elevation={8} >
    <div className={styles.legendHero}>
      <HeroTitle >Mom Home & Baby</HeroTitle>     
        <HeroSubtitle>
          Asesoramos a mamitas primerizas en la elección de los mejores productos para su embarazo, lactancia y sus bebés. <br />
          ¡Ahorrándoles horas de investigación!
        </HeroSubtitle>
        <Button  sx={{
          ml:{sm:"25%"},
          mt:{sm:"2%"},
          width:{xs:"100%", sm:"50%"},
        // background:"#0d47a1",
        background:"#1976d2",
        '&:hover':{
          background:"#424242",          
        }}} 
          className={styles["vibrate-1"]}
          startIcon={<LocalMallIcon sx={{color:"white", mr:"12", }}/>}
        >
        <Link to={"/shop"}>
        <Typography variant="body1" color="secondary"sx={{fontSize:"14px" } }>  Ir a la Tienda</Typography>
          </Link>
        </Button>
      </div>      
    </HeroContainer>

    <Box>
    <div className={styles.contenedor}>
    <div className={styles.imperdibles}>
      <h2 className={styles.title}>PRODUCTOS IMPERDIBLES</h2> 
      <Grid container justifyContent={"center"}  > 
      {
        sortedProductsByRating.length?sortedProductsByRating.map((sortedProductsByRating, i) => (
          <CardInf
          key={`${sortedProductsByRating.id}+${i}`}
          id = {sortedProductsByRating.id}
          imageUrl={sortedProductsByRating.imageUrl[0]}
          title={sortedProductsByRating.name}
          price={sortedProductsByRating.price}
          sale={sortedProductsByRating.sale}
          rating={sortedProductsByRating.rating}    
          />
          )):(null) 
        } 
      </Grid>
    
      </div>
    </div>  

    <Paper >
    <Slider/>
    </Paper>
   <div className={styles.contenedor}>
    <div className={styles.imperdibles} >  
        <h2 className={styles.title}>
        NUESTROS RECOMENDADOS
        </h2> 
        <Grid container justifyContent={"center"}  > 
        {
          sortedProductsBySale.length?sortedProductsBySale.map((sortedProductsBySale, i) => (
            <CardInf
            key={`${sortedProductsBySale.id}+${i}`}
            id = {sortedProductsBySale.id}
            imageUrl={sortedProductsBySale.imageUrl[0]}
            title={sortedProductsBySale.name}
            price={sortedProductsBySale.price}
            sale={sortedProductsBySale.sale}
            rating={sortedProductsBySale.rating}    
            />
            )):(null) 
          } 
        </Grid>
        </div> 
      </div>
    </Box>

    </>
  );
}