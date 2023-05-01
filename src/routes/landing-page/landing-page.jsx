import { Outlet } from "react-router-dom"
import Navigation from "../../components/navigation/navigation"

const LandingPage = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      {/* footer */}
    </>
  )
}

export default LandingPage