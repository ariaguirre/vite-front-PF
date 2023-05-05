import Container from '@mui/material/Container'
import CardInf from "../../components/card/card"
import { Grid } from '@mui/material'

import {Button} from '@mui/material'
import {Stack} from '@mui/material'
import { nextProducts, pagProducts, prevProducts } from '../../utils/firebase/firebaseClient'
import { useEffect, useState } from 'react'
import FiltersBar from '../../components/filters-bar/filtersBar'
const Shop = () => {
  const [Products , setProducts] = useState([])
  const [itemsSize, setItemSize] = useState(0)//tamaño de la collection
  const [itemsPerPage] = useState(8)// items por pagina -- modifica este numero si quieres ver mas o menos items
  const [count , setCount] = useState(0)// contador de items al darle clic a botones next y prev
  useEffect(()=>{
  start();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  const start=async () =>{
    await setCount(+itemsPerPage)
    await setItemSize((await pagProducts(itemsPerPage)).itemsColl)
    const {docs} = await pagProducts(itemsPerPage);
    await setProducts(docs) 
    }
  const pagNext = async () =>{
    setCount(count+itemsPerPage)
    if(count<itemsSize){
      const prods = await nextProducts();
      await setProducts(prods)
    }
   }
   const pagPrev = async () =>{
    setCount(count-itemsPerPage)
    if(count>itemsPerPage){
      const prods = await prevProducts();
      await setProducts(prods)
    }
    }
   return (
    <Container maxWidth="xl" sx={{minHeight:"100vh", pt:"2rem"}}>   
        <FiltersBar/> 
        <Grid container justifyContent={"center"} >        
        {
        Products.length?Products.map((products, i) => (
          <CardInf
            key={`${products.id}+${i}`}
            id = {products.id}
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
      {count>itemsPerPage?(<Button  onClick={pagPrev} variant="contained">Prev</Button>):(<Button  disabled={true} variant="contained">Prev</Button>)}
      {count<itemsSize?(<Button onClick={pagNext} variant="contained">Next</Button>):(<Button  disabled={true} variant="contained">Next</Button>)}
    </Stack>    
    </Container>
  )
}

export default Shop
