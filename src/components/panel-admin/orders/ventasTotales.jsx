
import styles from "../orders/ventasTotales.module.css"
import { getOrdersAdmin } from "../../../utils/firebase/firebaseClient"


const ventasTotales = () => {


  const allOrders = getOrdersAdmin()

  console.log(allOrders)
  return (
    <div >
    <h1 className={styles.title}>Ventas</h1>

    <div>
      
    </div>


    </div>
  )
}

export default ventasTotales
