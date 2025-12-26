import Home from "../Pages/Home/Home"
import Footer from "./Footer/Footer"
import NavBar from "./NavBar/NavBar"
import { Outlet } from 'react-router'
function Layout() {
  return (
    <div className="w-screen">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}
export default Layout