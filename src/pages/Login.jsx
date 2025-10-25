import React, { useContext, useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Link, useLocation, useNavigate } from "react-router"; // Fixed import
import { AuthContext } from "../provider/AuthProvider";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const auth = getAuth();
const googleProvider = new GoogleAuthProvider()



const Login = () => {
  const [error, setError] = useState("")
  const {signIn} = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate();
  const [showPassword, setShowPassword] =useState(false)
  console.log(location)


  const handleGoogleLogIn = () => {
      signInWithPopup(auth, googleProvider)
      .then((result)=> {
        console.log(result)
        const user= result.user;
        setUser(user);
        navigate("/")
      })
      .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
    })}



  const handleLogIn=(e)=>{
    e.preventDefault()
    const form =e.target;
    const email = form.email.value
    const password = form.password.value
    console.log(email, password)
    signIn(email, password)
    .then((result)=> {
      const user = result.user;
      navigate(`${location.state? location.state: "/"}`)
    })
     .catch((error) => {
    const errorCode = error.code;
    // const errorMessage = error.message;
    // alert (errorCode,errorMessage )
    setError(errorCode)
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
              
       <div className="relative">
          <label className="label">Password</label>
          <input name="password" type={showPassword ? 'text':'password'} className="input lg:w-[460px]" placeholder="Password" required/>

    <button onClick={()=> setShowPassword(!showPassword)}  className="btn btn-xs absolute top-6.5 right-4"> 
 {showPassword? <FaEye></FaEye> : <FaEyeSlash /> }
     </button>
          </div>

  <div><a className="link link-hover">Forgot password?</a></div>
  {error &&  <p className="text-red-500">{error}</p>}

          <button type="submit" className="btn bg-[#1e3a8a] mt-4 text-white">Login</button>

                {/* Google Button - Placed after login button and before sign-up link */}
                <div className="flex flex-col items-center mt-4">
                  <div className="divider lg:w-[460px]">OR</div>
                  <button onClick={handleGoogleLogIn} className="btn btn-outline border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white lg:w-[460px]">
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