import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../utils/firebase/firebaseClient'
import { getProductsActions } from '../../features/products/productSlice'


const allProducts = () => {

const dispatch = useDispatch();
const {products} = useSelector(state=> state.products)

useEffect(()=>{
  const fetchData = async() =>{
    const result = await getProducts()
    dispatch(getProductsActions(result))
  }
  fetchData()
},[])


  return (
    <div>
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
 </div>
  
    
  )
}

export default allProducts
