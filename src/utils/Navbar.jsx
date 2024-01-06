import { NavLink, Outlet } from "react-router-dom"

function Navbar() {
  return (
    <>
    <div className="w-full mx-auto font-lato flex justify-center items-center px-3 py-5">
      <div className="w-[40%] flex justify-evenly items-center">
        <NavLink to={'/products'}>Products</NavLink>
        <NavLink to={'/services'}>Services</NavLink>
        <NavLink to={'/about'}>About Us</NavLink>
        <NavLink to={'/blogs'}>Blogs</NavLink>
      </div>

      <div className="w-[20%] flex justify-center items-center">
        <NavLink to={'/'}>Logo</NavLink>
      </div>

      <div className="w-[40%] flex justify-center items-center">
        <NavLink to={'/'} className={"bg-[#CB2027] text-white px-10 py-2 rounded"}>Contact Now</NavLink>
      </div>
    </div>
    
    <Outlet />
    </>
  )
}

export default Navbar
