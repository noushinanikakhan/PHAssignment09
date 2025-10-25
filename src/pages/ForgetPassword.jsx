import React, { useContext } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Link, useLocation } from "react-router";
import { AuthContext } from "../provider/AuthProvider"; 
import { useState } from "react";


const ForgetPassword = () => {
  const { resetPassword } = useContext(AuthContext);
    const location = useLocation();
    const [message, setMessage] = useState("");  
  const [email, setEmail] = useState(location.state?.email || "");
   const [error, setError] = useState("");



const handleForgetPassword=(e)=>{
       e.preventDefault();
           setMessage("");
    // console.log("foreget password")
     resetPassword(email)
      .then(() => {
        setMessage("Password reset email sent! Check your inbox.");
        // setLoading(false);
        window.open("https://mail.google.com", "_blank"); 
      })
      .catch((error) => {
        setError(error.message);
        // setLoading(false);
      });
}

  return (
    <>
      <Navbar />

<div className="hero mx-auto bg-base-200 w-11/12 p-10 lg:h-[600px]">
  <div className="hero-content flex-col space-y-4">
    <div className="text-center lg:text-left">
      <h1 className="text-2xl lg:text-4xl font-bold text-[#1e3a8a]">     Forget Password?</h1>
 
    </div>
    <div className="card bg-base-100 lg:w-[600px] max-w-lg shrink-0 shadow-2xl">
      <div className="card-body items-center">
        <fieldset className="fieldset">
          <label className="label">Email</label>

           <input 
                  type="email" 
                  className="input lg:w-[460px]" 
                  placeholder="Enter your email" 
                  value={email}  
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

     
                {message && <p className="text-green-500 text-sm">{message}</p>}
                {error && <p className="text-red-500 text-sm">{error}</p>}

   <button type="submit" className="btn bg-[#1e3a8a] text-white mt-4">
                  Reset Password
                </button>
        </fieldset>
      </div>
    </div>
  </div>
</div>


      <Footer />
    </>
  );
};

export default ForgetPassword;