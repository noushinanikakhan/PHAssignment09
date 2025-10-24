import React, { useContext } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Link } from "react-router"; // Fixed import
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const {signIn} = useContext(AuthContext)
  const handleLogIn=(e)=>{
    e.preventDefault()
    const form =e.target;
    const email = form.email.value
    const password = form.password.value
    console.log(email, password)
    signIn(email, password)
    .then((result)=> {
      const user = result.user;
    })
     .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert (errorCode,errorMessage )
  });
  }

  return (
    <>
      <Navbar></Navbar>
      <div className="hero mx-auto bg-base-200 w-11/12 p-10 lg:h-[600px]">
        <div className="hero-content flex-col space-y-4">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl lg:text-5xl font-bold text-[#1e3a8a]">Login now!</h1>
          </div>
          <div className="card bg-base-100 lg:w-[600px] max-w-lg shrink-0 shadow-2xl">
            <form onSubmit={handleLogIn}  className="card-body">
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input name="email" type="email" className="input lg:w-[460px]" placeholder="Email" required/>
                <label className="label">Password</label>
                <input name="password" type="password" className="input lg:w-[460px]" placeholder="Password" required/>
                <div><a className="link link-hover">Forgot password?</a></div>
                <button type="submit" className="btn bg-[#1e3a8a] mt-4 text-white">Login</button>

                {/* Google Button - Placed after login button and before sign-up link */}
                <div className="flex flex-col items-center mt-4">
                  <div className="divider lg:w-[460px]">OR</div>
                  <button className="btn btn-outline border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white lg:w-[460px]">
                    Continue with Google
                  </button>
                </div>

                <div className="lg:font-semibold text-center mt-2">
                  Don't have an account?  
                  <Link to="/register"><span className="text-red-500 link link-hover ml-1">Sign-up</span></Link> 
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

export default Login;