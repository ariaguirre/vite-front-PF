//import react y redux
import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Paper, Button, Typography, Box, Grid  } from '@mui/material';
import { styled } from '@mui/material/styles'
import bebe1 from '../../../documents/Image/bebe1.jpg'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { Link } from 'react-router-dom';
//import componentes
import Slider from "./slider/slider"
import CardInf from "../card/card"
//import Firebase
import { getProducts } from '../../utils/firebase/firebaseClient';
//import Redux
import { getProductsActions } from '../../features/products/productSlice'


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
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.products);
  
  useEffect(() => {
    const fetchData = async () => {
    const result = await getProducts()
    dispatch(getProductsActions(result))
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  //filtros orden por rating (imperdibles) y discount(recomendados)
  const sortedProductsByRating=[...products].sort((a,b)=>b.rating - a.rating).slice(0,3)
  const sortedProductsBySale=[...products].sort((a,b)=>b.sale.discount - a.sale.discount).slice(1,4)
 

  return (
    <>
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
    <Box elevetion={8} alignContent={"center"} justifyContent={"center"} textAlign={"center"}>
    <Typography textAlign={"center"} mt={3} variant='h5'>
    <span>PRODUCTOS IMPERDIBLES</span>
    </Typography> 
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
    <Paper >
    <Slider/>
    </Paper>
    <Typography textAlign={"center"} mt={3}  variant='h5'>
    NUESTROS RECOMENDADOS
    </Typography> 
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
    </Box>

    </>
  );
}