import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ErImage from "./../assets/error-404.png"



const Error = () => {
  return (
    <>
      <Navbar></Navbar>
           <div className="flex justify-center items-center min-h-screen">
        <img src={ErImage} alt="404 Error - Page Not Found" />
      </div>
      <Footer></Footer>
    </>
  );
};

export default Error;