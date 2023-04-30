import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box } from '@mui/material'
import {fetchProducts} from "../../features/products/productActions"


const allProducts = () => {

const dispatch = useDispatch();
const {products} = useSelector(state=> state.products)

useEffect(()=>{
  dispatch(fetchProducts())
  
},[])

  return (
    
    <h1>
    ESTOS SON TUS PRODUCTOS !
    <br></br>
     {/*aca deberian renderizarse todos los productos-- HAY QUE MEJORAR LA VISTA*/}
     {products&&products.map((el, i)=>{
       return(
        <div key={i}>
          <p>PRODUCTO {i+1}- {el.name}</p>
         
        </div>
       )
     })}
    </h1>
    
  
    
  )
}

export default allProducts
