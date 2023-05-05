import { useSelector } from 'react-redux'

import styles from "./checkout.module.css"
import CheckoutItem from '../../components/checkout-item/checkout-item';


const Checkout = () => {

  const cartItems = useSelector(state => state.cart.cartItems);

  return (
    <div className={styles.checkoutContainer}>
      <div className={styles.checkoutHeader}>
        <div className={styles.headerBlock}>
          <span>Product</span>
        </div>
        <div className={styles.headerBlock}>
          <span>Description</span>
        </div>
        <div className={styles.headerBlock}>
          <span>Quantity</span>
        </div>
        <div className={styles.headerBlock}>
          <span>Price</span>
        </div>
        <div className={styles.headerBlock}>
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className={styles.total}>Total: 0</span>
    </div>

  )
}

export default Checkout;