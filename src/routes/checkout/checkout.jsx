import { useSelector } from 'react-redux'
import styles from "./checkout.module.css"
import CheckoutItem from '../../components/checkout-item/checkout-item';
import { numberFormat } from '../../helper/numberFormat';
import { useEffect, useState } from 'react';

const Checkout = () => {

  const cartItems = useSelector(state => state.cart.cartItems);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
    setTotal(newCartTotal);
  }, [cartItems])



  return (
    <div>
        <div className={styles.cartLength}>
     {cartItems ? `Tu carrito (${cartItems.length})`  : 
     <p>Tu carrito esta vacío.</p>
    }   
    </div>
    <br/>
    <div className={styles.fullCont}>
    <div className={styles.checkoutContainer}>
      {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          ))}
          <hr/>
          <br/>
          <br/>
          {cartItems.length > 0 ? 
          <div className={styles.cart}>
              <span className={styles.ship}>Subtotal: {numberFormat(total)}</span>
      <span className={styles.total}>Total: {numberFormat(total)}</span>
      <br/>
      <button className={styles.button}>Continuar compra</button>
    </div>
        : <h3>Tu carrito esta vacio</h3>
          
        }
          </div>
          </div>
          </div>
  )
}

export default Checkout;