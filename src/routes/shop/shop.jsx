import Container from '@mui/material/Container'
import CardInf from "../../components/card/card"
import {products} from '../../utils/data/data'
import { Grid } from '@mui/material'

import {Button} from '@mui/material'
import {Stack} from '@mui/material'
import { nextProducts, pagProducts, prevProducts } from '../../utils/firebase/firebaseClient'
import { useEffect, useState } from 'react'
 


const Shop = () => {
  const [Products , setProducts] = useState([])
  //let Products = [];
  useEffect(()=>{
  start();
  },[])
  const start=async () =>{
    const prods = await pagProducts();
    await setProducts(prods) 
    }
  const pagNext = async () =>{
  const prods = await nextProducts();
  await setProducts(prods)
   }
   const pagPrev = async () =>{
    const prods = await prevProducts();
    await setProducts(prods)
    }
   return (
    <Container maxWidth="xl" sx={{minHeight:"100vh"}}   >    
        <Grid container justifyContent={"center"}>        
        {
        Products.length?Products.map((products) => (
          <CardInf
            key={products.name}
            id={products.id}
            imageUrl={products.imageUrl[0]}
            categories={products.categories}
            title={products.name}
            price={products.price}
            sale={products.sale}
            rating={products.rating}
            reviews={products.reviews}
            stock={products.stock}
          />
        )):(null)
      } 
      </Grid>
      <Stack justifyContent={'center'} spacing={2} direction="row">
      <Button onClick={pagPrev} variant="contained">Prev</Button>
      <Button onClick={pagNext} variant="contained">Next</Button>
    </Stack>    
    </Container>
  )
}

export default Shop
