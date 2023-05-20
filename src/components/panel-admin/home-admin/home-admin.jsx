import styles from "../home-admin/home-admin.module.css"
import { useSelector } from "react-redux"


const HomeAdmin = () => {

  const selector = useSelector(state => state.cart)
  const { orders } = useSelector(state => state.orders)
  
  const currentDate = new Date();
  const todaysDate = currentDate.getFullYear()+'/' +(currentDate.getMonth()+1)+'/'+currentDate.getDate();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    const formattedDate = `${year}/${month}/${day}`;
    return formattedDate;
  };
  
//Ordenes del dia
  // const ordersDate = orders.map((order) => {
  //   const orderDate = order.date
  //   const firebaseTime = new Date(orderDate.seconds * 1000 + orderDate.nanoseconds / 1000000)
  //   const fecha = firebaseTime.toDateString();
  //   const formattedDate = formatDate(fecha);
  //   return formattedDate
  // })
  const ordersDate = orders.map((order) => {
    const orderDate = order.date
    const firebaseTime = new Date(orderDate.seconds * 1000 + orderDate.nanoseconds / 1000000)
    const fecha = firebaseTime.toDateString();
    const formattedDate = formatDate(fecha);
    const orderPrice = order.totalPrice;
    const both = {formattedDate,orderPrice}
    return both;
  })
  console.log("ordersDate:", ordersDate)



  const todayOrder = () => {
    const todaysOrders = ordersDate.filter((o) => o.includes(todaysDate));
  if(todaysOrders.length > 0) return todaysOrders.length;
  else return "0 orders";
  }
  const allTodayOrders = todayOrder();


  
// Ordenes de la semana
const weeksOrders = () => {
  const todayW = new Date()
  todayW.setDate(todayW.getDate() - 7);
  const currentWeekString = formatDate(todayW);
  const lastWeeksOrders = ordersDate.filter((date) => date >= currentWeekString && date <= todaysDate).length;
  return lastWeeksOrders;
}
const allWeeksOrders = weeksOrders();

// Ordenes del mes

const monthOrders = () => {
  const todayM = new Date()
  todayM.setDate(todayM.getDate() - 30);
  const currentMonthString = formatDate(todayM);
  const lastMonthOrders = ordersDate.filter((date) => date >= currentMonthString && date <= todaysDate);
  console.log("lastMonthOrders:", lastMonthOrders )
  return lastMonthOrders;
}
const allMonthOrders = monthOrders();

//Ganancias del mes
// const todayPW = new Date();
// const currentDateString = todayPW.toISOString().split('T')[0];

// const weeksEarnings = () => {
//   const sevenDaysAgo = new Date();
//   sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
//   const sevenDaysAgoString = sevenDaysAgo.toISOString().split('T')[0];

//   const ordersDuringLastWeek = orders.filter((order) => {
//   const orderDate = new Date(order.date.seconds * 1000); 
//   const orderDateString = orderDate.toISOString().split('T')[0];
//   // console.log("orderDateString:", orderDateString)
//   const earnings =  orders.filter((date) => orderDateString >= sevenDaysAgoString && orderDateString <= currentDateString)
//   console.log("orders: ", orders)
//   return earnings;
// });
// }  
// const allWeeksEarnings = weeksEarnings();
// console.log("allWeeksEarnings:", allWeeksEarnings)

// const totalPrice = orders.reduce((accumulator, order) => accumulator + order.totalPrice, 0);
// console.log(`Total price of orders: ${totalPrice}`);


  return (
<div className={styles.base}>

    <h1>Panel Principal</h1>
    <div className={styles.container}>
      <p className={styles.item}>Ordenes</p>
      <div className={styles.flex}>
        <div className={styles.areaPanel}>
          <p className={styles.title}>Hoy</p>
          <div className={styles.orders}>
          {allTodayOrders > 0 ? allTodayOrders : 0}
          </div>
          <p className={styles.vExtra}>Ordenes del día</p>
        </div>

        <div className={styles.areaPanel}>
          <p className={styles.title}>Esta semana</p>
          <div className={styles.orders}>
          {allWeeksOrders > 0 ? allWeeksOrders : 0}
          </div>
          <p className={styles.vExtra}>Ordenes esta semana</p>
        </div>

        <div className={styles.areaPanel}>
          <p className={styles.title}>Este mes</p>
          <div className={styles.orders}>
          {allMonthOrders > 0 ? allMonthOrders : 0}
          </div>
          <p className={styles.vExtra}>Ordenes en el mes</p>
        </div>
      </div>

      <p className={styles.item}>Ingresos</p>
      
      <div className={styles.flex}>
        <div className={styles.areaPanel}>
          <p className={styles.title}>Hoy</p>
          <p className={styles.value}>2</p>
          <p className={styles.vExtra}>Ordenes del día</p>
        </div>

        <div className={styles.areaPanel}>
          <p className={styles.title}>Esta semana</p>
          <p className={styles.value}>25</p>
          <p className={styles.vExtra}>Ordenes esta semana</p>
        </div>

        <div className={styles.areaPanel}>
          <p className={styles.title}>Este mes</p>
          <p className={styles.value}>32</p>
          <p className={styles.vExtra}>Ordenes en el mes</p>
        </div>
      </div>
    </div>
   
    </div>
  )
}

export default HomeAdmin