<<<<<<< HEAD
import Container from '@mui/material/Container'
import CardInf from "../../components/card/card"
import { Grid } from '@mui/material'
import { PaginationComponent } from '../../components/pagination/pagination'
import { useSelector } from 'react-redux'
=======
import { Routes, Route } from 'react-router-dom'

import Products from '../../components/products/products'
import Cart from '../cart/cart'
import Checkout from '../checkout/checkout'
import RequireAuth from '../../components/require-auth/require-auth'

>>>>>>> dev
const Shop = () => {
   return (
    <Routes>
      <Route index element={<Products />} />
      <Route path='cart' element = {<Cart />} />

      <Route path='checkout' element = {
      <RequireAuth >
        <Checkout />
      </RequireAuth>      
      } />
    </Routes>
  )
}

export default Shop

