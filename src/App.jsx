import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home";
import Authentication from "./routes/authentication/authentication";
import Shop from "./routes/shop/shop";
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
    </Routes>
      
    
  )
}

export default App

