import { Outlet } from "react-router-dom"
import Navigation from "../../components/navigation/navigation"
import Footer from "../../components/footer/footer"

const LandingPage = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  )
}

export default LandingPage