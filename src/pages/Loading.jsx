import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";




const Loading = () => {
  return (
    <>
      <Navbar></Navbar>
           <div className="flex justify-center items-center min-h-screen">
     <span className="loading loading-dots loading-xl"></span>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Loading;