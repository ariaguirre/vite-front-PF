import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import styles from './payment-form.module.css';
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../features/cartSlice/cartSlice";
const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const amount = useSelector(state => state.cart.cartTotal)
  const currentUser = useSelector(state => state.currentUser.userCredentials )
  const [isProcessingPayment, setIsProcessingPayment ] = useState(false);
  
  const paymentHandler = async (e) => {    
    e.preventDefault();
    if(!stripe || !elements){
      return;      
    }
    setIsProcessingPayment(true);
    
    const response = await fetch('/.netlify/functions/create-payments-intent', {
      method:'post',
      headers:{
        'content-Type': 'application/json'
      },
      body: JSON.stringify({ amount: amount * 100 })
    }).then(res => res.json()).catch(error => console.log(error));    
    const {paymentIntent: { client_secret }} = response;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement), 
        billing_details:{
          name: currentUser ? currentUser.displayName : "Guest", 
        }
      }
    });
    
    setIsProcessingPayment(false);

    if (paymentResult.error) {      
      alert(paymentResult.error.message);      
    }else{
      if(paymentResult.paymentIntent.status === "succeeded"){
        alert("paymet Succesfull");
        navigate("/");
        dispatch(clearCart());
      }
    }
  };

  return (
    <div className={styles.PaymentFormContainer} >
      <form className={styles.FormContainer} onSubmit={paymentHandler} id="creditCardForm" >
        <h4>Credit card</h4>
        <div className={styles.creditCardContainer}>
          <CardElement />
        </div>
      </form>
        <button disabled={isProcessingPayment} form="creditCardForm" type="submit">Pagar ahora</button>
    </div>
  )
}

export default PaymentForm