import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home";
import Authentication from "./routes/authentication/authentication";
import Shop from "./routes/shop/shop";
import Admin from "./routes/admin/admin";
import RequireAuth from "./components/require-auth/require-auth";

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
      <Route path="/admin" element={<Admin/>}/>
    </Routes>
      
    
  )
}

export default App

