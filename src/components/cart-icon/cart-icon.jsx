import { Link } from "react-router-dom";
import styles from "./cart-icon.module.css";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

const CartIcon = () => {
  return (
    
    <Link>
      <ShoppingBagOutlinedIcon />
      <span className={styles.itemCount}>0</span>        
    </Link>
  )
}

export default CartIcon