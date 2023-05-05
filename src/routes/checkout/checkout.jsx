import { useSelector } from 'react-redux'

import styles from "./checkout.module.css"
import CheckoutItem from '../../components/checkout-item/checkout-item';
import { numberFormat } from '../../helper/numberFormat';


const Checkout = () => {

  const cartItems = useSelector(state => state.cart.cartItems);
  
  return (
    <div className={styles.checkoutContainer}>
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

      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className={styles.total}>Total: {numberFormat(1000000)}</span>
    </div>

  )
}

export default Checkout;