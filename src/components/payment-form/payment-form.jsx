import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import styles from './payment-form.module.css';
const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (e) => {    
    e.preventDefault();
    if(!stripe || !elements){
      return;      
    }

    const response = await fetch('/.netlify/functions-serve/create-payments-intent', {
      method:'post',
      headers:{
        'content-Type': 'application/json'
      },
      body: JSON.stringify({ amount: 10000})
    }).then(res => res.json());

    console.log(response);

  }


  return (
    <div className={styles.PaymentFormContainer} >
      <form className={styles.FormContainer} onSubmit={paymentHandler} >
        <h2>Credit card</h2>
        <CardElement />
        <button type="submit">Pagar ahora</button>
      </form>
    </div>
  )
}

export default PaymentForm