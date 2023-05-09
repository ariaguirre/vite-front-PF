import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import styles from './payment-form.module.css';
import { clearCart } from "../../features/cartSlice/cartSlice";
import { numberFormat } from "../../helper/numberFormat";
import { Navigate, useNavigate } from "react-router-dom";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const amount = useSelector(state => state.cart.cartTotal)
  const currentUser = useSelector(state => state.currentUser.userCredentials)
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setIsProcessingPayment(true);

    const response = await fetch('/.netlify/functions/create-payments-intent', {
      method: 'post',
      headers: {
        'content-Type': 'application/json'
      },
      body: JSON.stringify({ amount: amount * 100 })
    }).then(res => res.json()).catch(error => alert(error));
    

    const { paymentIntent: { client_secret } } = response;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        }
      }
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Pago exitoso gracias por su compra!");
        navigate("/shop");
        dispatch(clearCart());
      }
    }
  };

  console.log(isProcessingPayment)

  return (
    <div className={styles.PaymentFormContainer} >

      <div className={styles.paymentFormHeader}>
        <h2>Ingrese sus datos de pago</h2>
        <span>Total a pagar <span> {numberFormat(amount)}</span> USD</span>
      </div>
      <form className={styles.FormContainer} onSubmit={paymentHandler} id="creditCardForm" >
        <h4>Credit card</h4>
        <div className={styles.creditCardContainer}>
          <CardElement />
        </div>
      </form>
      <button form="creditCardForm" type="submit" className={styles.btn}>Pagar ahora</button>
    </div>
  )
}

export default PaymentForm