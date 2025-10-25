import React, { useContext } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { getAuth, updateProfile } from "firebase/auth";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router";



const UpdateProfile = () => {

  const auth = getAuth()
const {user, setUser} = useContext(AuthContext)
const navigate= useNavigate();

const handleUpdateProfile= (e) =>{
  e.preventDefault ();


 const form= e.target;
 const displayName=form.name.value
 const photo=form.photo.value

updateProfile(auth.currentUser, {
 displayName: name, photoURL: photo
})
.then(()=>{
setUser({...user, displayName: displayName, photoURL: photo })
 console.log("Profile updated successfully");
 navigate("/myprofile")
})
.catch((error) => {
  // An error occurred
  // ...
  // console.log(error)
});
}

  return (
    <>
      <Navbar></Navbar>
           <div className="mx-auto flex justify-center items-center w-11/12 bg-base-200 p-10 lg:h-full">
       <div className="hero bg-base-200 space-y-4">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-2xl lg:text-5xl font-bold text-[#1e3a8a]">Update now!</h1>

    </div>
    <div className="card bg-base-100 lg:w-[600px] max-w-lg shrink-0 shadow-2xl">
      <form   onSubmit={handleUpdateProfile}  className="card-body">
        <fieldset 
      
          className="fieldset">
      
          <label className="label">Name</label>
          <input name="name" type="text" className="input lg:w-[460px]" placeholder="Name" />


          <label className="label">Photo-URL</label>
                <input name="photo" type="text" className="input lg:w-[460px]" placeholder="Photo-URL"/>

      
        
          <button className="btn bg-[#1e3a8a] text-white mt-4">Update</button>
        </fieldset>
      </form>
    </div>
  </div>
</div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default UpdateProfile;