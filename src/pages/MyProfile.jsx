import React, { useContext } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { AuthContext } from "../provider/AuthProvider"; 

const MyProfile = () => {
  const { user } = useContext(AuthContext); 

  return (
    <>
      <Navbar />

      <section className="w-11/12 mx-auto p-10 bg-[#f8fafc]">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#1e3a8a]">
          My Profile
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center bg-white shadow-lg rounded-lg p-6 gap-8 max-w-xl 
        h-[460px] mx-auto">
          <img
            src={user?.photoURL || "https://img.icons8.com/?size=100&id=u05i13Fgasru&format=gif&color=f7f7f7"}
            alt={user?.displayName || "User"}
            className="w-40 h-40 rounded-full border-4 border-blue-300 object-cover"
          />

          <div className="text-center md:text-left space-y-3">
            <h3 className="text-2xl font-semibold text-[#1e3a8a]">
              {user?.displayName || "No Name"}
            </h3>
            <p className="text-gray-600">{user?.email || "No Email"}</p>

            <button className="mt-4 bg-[#1e3a8a] hover:bg-[#1d4ed8] text-white px-6 py-2 rounded-md transition">
              Update Profile
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default MyProfile;