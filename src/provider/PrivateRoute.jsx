import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router";
import Login from "../pages/Login";
import Loading from "../pages/loading";
// import Navbar from "../component/Navbar";
// import Footer from "../component/Footer";
// import { Link } from "react-router"; // Fixed import
// import { AuthContext } from "../provider/AuthProvider";

const PrivateRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext)
//   console.log(user)

if (loading) {
    return <Loading></Loading>
}

  if (user && user.email) {
    return children;
  }
  return <Navigate to="/login"></Navigate>

  return (
    <>
   
     {children}
    </>
  );
};

export default PrivateRoute;