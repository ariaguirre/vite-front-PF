import { useDispatch, useSelector } from "react-redux";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import styles from './payment-form.module.css';
import { clearCart } from "../../../features/cartSlice/cartSlice";
import { numberFormat } from "../../../helper/numberFormat";
import { useNavigate } from "react-router-dom";
import setDataUser from "../../../helper/setDataUser";
import Cart from "../../../routes/cart/cart"
import CheckoutItem from "../../../components/payment-gateway/checkout-item/checkout-item"


const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {cartTotal, cartItems} = useSelector(state => state.persistedReducer.carState);
  const currentUser = useSelector(state => state.persistedReducer.userData.userInf)
  const uid = useSelector(state => state.currentUser.userCredentials.uid);

  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

  const cartItems = useSelector(state => state.persistedReducer.carState.cartItems);
  
  // const cartItems = {

  // }

    const response = await fetch('/.netlify/functions/create-payments-intent', {
      method: 'post',
      headers: {
        'content-Type': 'application/json'
      },
      body: JSON.stringify({ amount: cartTotal * 100 })
    }).then(res => res.json()).catch(error => alert(error));

    const { paymentIntent: { client_secret } } = response;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? `${currentUser.name} ${currentUser.lastName}` : "Guest",
        }
      }
    });

    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        
        const updateDataUser = async () => {
          if(!uid) alert("no hay un usuario");
          await setDataUser("onlinePurchases", cartItems, uid );
        }
        updateDataUser();
        alert("Pago exitoso gracias por su compra!");
        navigate("/");
        dispatch(clearCart());
      }
    }
  };


  return (
    <div>
        <h2>Datos de pago</h2>
    <div className={styles.PaymentFormContainer} >
      <div className={styles.cardContainer}>
      <div className={styles.paymentFormHeader}>
      </div>
      <form className={styles.FormContainer} onSubmit={paymentHandler} id="creditCardForm" >
        <h4>Card</h4>
        <div className={styles.creditCardContainer}>
          <CardElement />
        </div>
      </form>

        <br/>
      <button form="creditCardForm" type="submit" className={styles.btn}>Pagar</button>
        </div>
      <div className={styles.cartContainer}>
      {cartItems?.map((cartItem, index) => (
        <CheckoutItem key={cartItem.id + index} cartItem ={cartItem} />
        ))}
        <span className={styles.total}>Total a pagar <span> {numberFormat(cartTotal)}</span> USD</span>
        </div>
    </div>
    </div>
  )
}

export default PaymentForm