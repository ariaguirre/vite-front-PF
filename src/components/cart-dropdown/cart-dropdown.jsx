import styles from "./cart-dropdown.module.css";
import Button from '@mui/material/Button'

import CardItem from "../card-item/card-item";
import { useSelector } from "react-redux";



const CartDropdown = ({isToggleCartOn}) => {
  
  const cartItems  = useSelector(state=> state.addItem.cartItems);
  
  return (
    <div className={`${isToggleCartOn ? styles.cartDropdownContainer : styles.isClose}`}>
      <div className={styles.cartItems}>
        {cartItems.map((item) => (                           
            <CardItem key={item.id} cardItem={item}/>
        ))}
      </div>
      <Button variant="contained">proceder al pago</Button>
    </div>
  )
}

export default CartDropdown