import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Link } from "react-router";

const Register = () => {

  const handleRegister= (e)=>{
    e.preventDefault()
    const form= e.target;
    const name=form.name.value
    const email=form.email.value
    const photo=form.photo.value
    const password=form.password.value
    console.log(name)
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