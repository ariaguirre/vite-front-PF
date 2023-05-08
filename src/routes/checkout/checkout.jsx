import { Container, Typography } from "@mui/material"
import styles from "./checkout.module.css";
import CheckoutForm from "../../components/checkout-form/checkout-form";



const Checkout = () => {

  return (    
    <Container maxWidth="md" sx={{mt:"1rem"}}>
      <Typography variant="h3" color="primary" align="center">Checkout</Typography>
      <div className={styles.containerFormCheckout}>
        <CheckoutForm />
      </div>
    </Container>
  )
}

export default Checkout