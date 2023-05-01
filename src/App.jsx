import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home";
import Authentication from "./routes/authentication/authentication";
import Shop from "./routes/shop/shop";
import Admin from "./routes/admin/admin";
import RequireAuth from "./components/require-auth/require-auth";
import LandingPage from "./routes/landing-page/landing-page";

const App = () => {
  return (
    <Routes>    
      <Route path="/" element={<LandingPage/>}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="shop" element={<Shop />} />
      </Route>
      <Route path="/admin" element={
          <RequireAuth>
            <Admin/>
          </RequireAuth>
        }/>
      <Route path="*" />
    </Routes>
      
    
  )
}

export default App


{/* <Route path="/" element={
  //Protected routes
  <RequireAuth>
    <Home/>          
  </RequireAuth>
}/> */}