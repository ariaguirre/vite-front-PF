import { v4 } from "uuid";
const formatOnlinePurcase = (cartItems, total) => {
  const onlinePurchases = [];
  const newPruchase = {
    date : new Date(),
    order_id: v4(),
    products: cartItems,
    status:"pendiente",
    totalPrice: total,
    totalItems: cartItems.length
  }
  
  onlinePurchases.push(newPruchase);

  return onlinePurchases;
}

export default formatOnlinePurcase;


const user = {
  active: true,
  admin: false,
  createdAt: "date",
  displayName: "name",
  email: "",
  onlinePurchases: [
    {
      date: "",
      id_order: "",
      products: [
        {
          id: "",
          imageURl: "",
          title: "",
          price: 123132,
          quantity: 1,
          dateOrder: "date",
        },
        {
          id: "",
          imageURl: "",
          title: "",
          price: 123132,
          quantity: 1,
          dateOrder: "date",
        },
      ],
      status: "Pending",
      totalPrice: 0,
      totalProducts: 0
    },
  ],
  userData: {
    name: "",
    lastName: "",
    city: "",
    address: "",
    zipCode: "",
    PhoneN: "",
    Email:"",
  },
};

user