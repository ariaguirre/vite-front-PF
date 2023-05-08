import { Routes, Route } from 'react-router-dom'

import Products from '../../components/products/products'
import Cart from '../cart/cart'

const Shop = () => {
   return (
    <Routes>
      <Route index element={<Products />} />
      <Route path='cart' element = {<Cart />} />
    </Routes>
  )
}

export default Shop
