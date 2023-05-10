import { useDispatch, useSelector } from 'react-redux'
import styles from "./cart.module.css"
import CheckoutItem from '../../components/checkout-item/checkout-item';
import { numberFormat } from '../../helper/numberFormat';
import { useEffect, useState } from 'react';
import { setCartTotal } from '../../features/cartSlice/cartSlice';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography'
import Swal from 'sweetalert2';


const Cart = () => {

  const cartItems = useSelector(state => state.persistedReducer.carState.cartItems);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
   

  if(cartItems.length === 0) {
    Swal.fire(
      'No tienes productos en el carrito',
      'Quieres ir a comprar?',
      'info'
    ).then(()=> navigate("/shop"))  
  }

  useEffect(() => {
    const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
    setTotal(newCartTotal);
    dispatch(setCartTotal(newCartTotal));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems])

  const handleClick = () => {
    navigate("/shop/checkout");
  }

  return (

    <div className={styles.checkoutContainer}>
      <Typography variant="h3" color="primary">CART</Typography>
      <div className={styles.checkoutHeader}>
        <div className={styles.headerBlock}>
          <span>Producto</span>
        </div>
        <div className={styles.headerBlock}>
          <span>Descripcion</span>
        </div>
        <div className={styles.headerBlock}>
          <span>Cantidad</span>
        </div>
        <div className={styles.headerBlock}>
          <span>Precio</span>
        </div>
        <div className={styles.headerBlock}>
          <span>Eliminar</span>
        </div>
      </div>

      {cartItems.map((cartItem, index) => (
        <CheckoutItem key={cartItem.id + index} cartItem={cartItem} />
      ))}
      <div className={styles.total}>
        <button onClick={handleClick}>Checkout</button>Total: {numberFormat(total)}
      </div>
    </div>
  )
}

export default Cart;