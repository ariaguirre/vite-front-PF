import Container from '@mui/material/Container'
import CardInf from "../../components/card/card"
import { Grid } from '@mui/material'
import { PaginationComponent } from '../../components/pagination/pagination'
import {Button} from '@mui/material'
import {Stack} from '@mui/material'
import { ProductsActions } from '../../features/productsPagination/productsPaginationSlice'
//import { nextProducts, pagProducts, prevProducts } from '../../utils/firebase/firebaseClient'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
const Shop = () => {

  const Products =  useSelector((state) =>state.productPag.products)

   return (
    <Container maxWidth="xl" sx={{minHeight:"100vh", pt:"2rem"}}>    
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
      <Grid  > 
      <PaginationComponent/>  
      </Grid>
     
    </Container>
  )
}

export default Shop
