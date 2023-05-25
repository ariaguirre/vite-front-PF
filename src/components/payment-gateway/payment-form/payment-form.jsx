import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from './payment-form.module.css';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import { clearCart } from "../../../features/cartSlice/cartSlice";
import { numberFormat } from "../../../helper/numberFormat";
import CheckoutItem from "../../../components/payment-gateway/checkout-item/checkout-item"
import { setCartTotal, updateInitialState } from '../../../features/cartSlice/cartSlice'
import { useEffect, useState } from 'react';
import Swal from "sweetalert2";
import formatOnlinePurcase from "../../../helper/formatOnlinePurchase";
import { ordersGlobal, updateDataDelivery, updatePurchases } from "../../../utils/firebase/firebaseClient";
import { v4 } from "uuid";
import emailjs from '@emailjs/browser';
import Typography from '@mui/material/Typography'


const PaymentForm = () => {

  const navigate = useNavigate();
  const cartItems = useSelector(state => state.persistedReducer.carState.cartItems);

  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
    setTotal(newCartTotal);
    dispatch(setCartTotal(newCartTotal));
    dispatch(updateInitialState(cartItems))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems])

  const stripe = useStripe();
  const elements = useElements();
  const currentUser = useSelector(state => state.persistedReducer.userData)
  const uid = useSelector(state => state.currentUser?.userCredentials?.uid);
  const onlinePurchase = formatOnlinePurcase(cartItems, total);
  //emailJs
  const USER_ID = "service_8duinll";
  const API_KEY = "template_g954u96";
  const TEMPLATE_ID = "lp4j5eTKXZNYsZ4jM";

  var templateParams = {
    email: currentUser.orderInf?.email,
    name: currentUser.orderInf?.name,
  };

  const sendEmail = () => {

    emailjs.send(USER_ID, API_KEY, templateParams, TEMPLATE_ID).then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text)
    });
  };

  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const response = await fetch('/.netlify/functions/create-payments-intent', {
      method: 'post',
      headers: {
        'content-Type': 'application/json'
      },
      body: JSON.stringify({ amount: total * 100 })
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
      Swal.fire({
        title: 'Ocurrió un error!',
        text: paymentResult.error.message,
        icon: 'warning',
      })
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        if (!uid) return alert("no hay un usuario");
        Swal.fire({
          title: 'Pago exitoso!',
          icon: 'success',
          showCancelButton: true,
        })
        sendEmail();
        ordersGlobal(onlinePurchase[0], uid);
        updateDataDelivery(currentUser.orderInf, uid)
        updatePurchases(onlinePurchase, uid);
        navigate("/");
        dispatch(clearCart());

      }
    }
  };

  return (
    <main className={styles.paymentFormContainer}>
      <Typography variant="h3" color="primary">Realizar el pago</Typography>
      <section className={styles.itemsFormContainer} >
        <section className={styles.cardSection}>
          <span className={styles.cardSectionTotal}>Total a pagar: <span>{numberFormat(total)}</span> </span>
          <div className={styles.cardContainer}>
            <span style={{ fontWeight: "800", color: "rgba(0, 0, 0, 0.6)", textTransform: "capitalize" }}>
              Credit Card
            </span>
            <span>{`  
              ${currentUser.orderInf?.name || "name"} 
              ${currentUser.orderInf?.lastName || "lastName"} 
            `
            }</span>
            <section className={styles.dataContainer}>
              <div className={styles.cardInf}>
                <form onSubmit={paymentHandler} id="creditCardForm" >
                  <CardElement />
                </form>
              </div>
            </section>
          </div>
          <span className={styles.cardSectionBtn}>
            <button type="submit" form="creditCardForm">Pagar ahora</button>
          </span>
        </section>
        <section className={styles.listSection}>
          <div>
            {
              cartItems.map((cartItem) => (<CheckoutItem key={v4()} cartItem={cartItem} />))
            }
          </div>
        </section>
      </section>
    </main>
  )
}

export default PaymentForm


//#1ac8db
//#1AD8CF
//#52E5BA


//       <CardElement />

/*
    <main className={styles.paymentFormContainer} >
      <section >
        <Typography variant="h3" color="primary">Pagar Ahora</Typography>
      </section>
      <section className={styles.allItemsFormContainer}>
        <article className={styles.creditCardContainer}>
          <fieldset className={styles.formContainer}>
            <section className={styles.cardInfContainer} >hola</section>
            <form onSubmit={paymentHandler} id="creditCardForm" >

            </form>
          </fieldset>
          <section className={styles.btnPaymentForm}>
            <button type="submit" form="creditCardForm">Pagar Ahora &#128179;</button>
          </section>
        </article>
        <article className={styles.itemsContainer}>
          <div className={styles.itemsCont}>
            {
              cartItems.map((cartItem) => (<CheckoutItem key={v4()} cartItem={cartItem} />))
            }
          </div>
          <h2>Total: {numberFormat(total)}</h2>

        </article>
      </section>

    </main >

*/