import React, { useContext, useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router";

const Register = () => {
  const {createUser, setUser, updateUser} =useContext(AuthContext)
  const [passwordError, setPasswordError]=useState("")
  
  const navigate = useNavigate()

  const handleRegister= (e)=>{
    
    e.preventDefault()
    const form= e.target;
    const name=form.name.value
    const email=form.email.value
    const photo=form.photo.value
    const password=form.password.value
  
       // Password validation
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters!")
      return;
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      setPasswordError("Password must contain at least one uppercase letter!")
      return;
    }
    if (!/(?=.*[a-z])/.test(password)) {
      setPasswordError("Password must contain at least one lowercase letter!")
      return;
    }
    
    // Clear any previous errors
    setPasswordError("") 








    console.log(name)
    createUser(email, password)
     .then ((result)=>{
      const user = result.user;
      // console.log(user)
      updateUser({displayName: name, photoURL: photo}).then(()=>{
          setUser({...user, displayName: name, photoURL: photo})
      })
      navigate("/")
      .catch((error)=> {
        console.log(error);
        setUser(user)
      })
  
     })
       .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert (errorMessage)
    // ..
  });
  }
  return (
    <>
      <Navbar></Navbar>
      <div className="hero mx-auto w-11/12 bg-base-200 p-10 lg:h-full">
        <div className="hero-content flex-col space-y-4">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl lg:text-5xl font-bold text-[#1e3a8a]">Register now!</h1>
          </div>
          <div className="card bg-base-100 lg:w-[600px] max-w-lg shrink-0 shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input name="name" type="text" className="input lg:w-[460px]" placeholder="Name" required/>

                <label className="label">Email</label>
                <input name="email" type="email" className="input lg:w-[460px]" placeholder="Email" required/>

                <label className="label">Photo-URL</label>
                <input name="photo" type="text" className="input lg:w-[460px]" placeholder="Photo-URL" required/>

                <label className="label">Password</label>
                <input name="password" type="password" className="input lg:w-[460px]" placeholder="Password" required/>

                     
                {/* Add error message display */}
                {passwordError && <p className="text-red-500 text-sm mt-2">{passwordError}</p>}
             
                <button type="submit" className="btn bg-[#1e3a8a] mt-4 text-white">Register</button>
                <div className="lg:font-semibold text-center mt-2"> Already have an account?<Link to="/login"><span className="text-red-500 link link-hover ml-1">Login</span></Link></div>

                {/* Google Button - Moved inside fieldset */}
                <div className="flex flex-col items-center mt-4">
                  <div className="divider lg:w-[460px]">OR</div>
                  <button className="btn btn-outline border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white lg:w-[460px]">
                    Sign up with Google
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Register;