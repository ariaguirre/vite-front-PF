import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home";
import Authentication from "./routes/authentication/authentication";
import Shop from "./routes/shop/shop";
import RequireAuth from "./components/require-auth/require-auth";
import DetailProduct from "./routes/detail/ProductDetail";
import Error from "./routes/404/404";
import Carritow from "./routes/carrito/CarritoCompras";

const App = () => {
  return (
    <Routes>    
      <Route path="/" element={
        //Protected routes
        <RequireAuth>
          <Home/>          
        </RequireAuth>
      }/>
      <Route path="/auth" element={<Authentication/>}/>
      <Route path="/store" element={<Shop/>}/>
      <Route path="/detail/:id" element={<DetailProduct />} />
      <Route path="/carrito/:compra" element={<Carritow />} />

      <Route path="*" element={<Error />} />
    </Routes>
      
    
  )
}

export default App

