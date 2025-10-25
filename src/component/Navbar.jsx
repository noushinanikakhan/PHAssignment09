import React, { useContext } from "react";
import skilLogo from "./../assets/Skill-Logo.png"
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {

  const {user, logOut}= useContext(AuthContext)
    
  const handleLogOut = ()=> {
  console.log("triyng to out")
  logOut().then(() => {
  alert("Sign-out successful.")
}).catch((error) => {
//  console.log(error)
});
  }
      return (
      <div className="navbar shadow-sm w-11/12 mx-auto 
      bg-primary text-[#1e3a8a] relative">

  <div className="navbar-start">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="0"
        className="menu menu-sm dropdown-content bg-primary rounded-box z-50 mt-3 w-52 p-2 shadow text-[#1e3a8a]">
     <li className="text-[#1e3a8a]"><Link to="/" className="text-[#1e3a8a]"> Home</Link></li>
     <li className="text-[#1e3a8a]"><Link to="/details" className="text-[#1e3a8a]">Our Courses</Link></li>
      <li className="text-[#1e3a8a]"><Link to="/myprofile" className="text-[#1e3a8a]">
           My Profile </Link></li>
      </ul>
    </div>
    <a className="flex items-center space-x-1.5">
        <img className="h-5 w-5 lg:h-[60px] lg:w-[60px]" src={skilLogo} alt="" />
        <h1 className="font-semibold text-xl lg:text-2xl text-[#1e3a8a]">Skill<span className="font-bold">Swap</span>
        </h1>
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-medium">
      <li><Link to="/"> Home</Link></li>
     <li><Link to="/details">Our Courses</Link></li>
      <li><Link to="/myprofile" className="relative group">
            <img
            src={user?.photoURL || "https://img.icons8.com/?size=100&id=u05i13Fgasru&format=gif&color=f7f7f7"}
            alt={user?.displayName || "User"}
            className="w-5 h-5 rounded-full  object-cover"
          />
           <span className="group-hover:hidden">My Profile</span>
              <span className="hidden group-hover:inline">{user?.displayName}</span>

         </Link></li>
    </ul>
  </div>
  <div className="navbar-end">

  {user ? (   <Link to="" onClick={handleLogOut} className="btn bg-[#1e3a8a] text-white font-semibold">LogOut</Link>): 
  <div className="flex gap-2">
            <Link to="/register" className="btn btn-xs lg:btn-md rounded-full  bg-[#ffc6a3] text-red-600 font-semibold">
              Sign-up
            </Link>
            <Link to="/login" className="btn btn-xs lg:btn-md rounded-full bg-[#1e3a8a] text-white font-semibold">
              LogIn
            </Link>
          </div>
  }

 
  </div>
</div>
    )
}

export default Navbar;