import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const SkillDetails = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);

  return (
   <>
    <Navbar></Navbar>
    <section className="w-11/12 mx-auto  bg-[#f8fafc] pt-5">
      <h2 className="text-4xl font-bold text-center mb-8 text-[#1e3a8a]">
        Our Courses for all Skills
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <div
            key={skill.skillId}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <img
              src={skill.image}
              alt={skill.skillName}
              className="w-full h-52 object-cover"
            />

            <div className="p-4 space-y-2">
              <h3 className="text-xl font-semibold text-[#1e3a8a] text-center">
                {skill.skillName}
              </h3>

              <p className="text-gray-600 text-center text-sm">
                {skill.description}
              </p>

              <div className="flex justify-between text-gray-700 text-sm mt-3">
                <p>💰 ${skill.price}</p>
                <p>⭐ {skill.rating}</p>
                <p>🎟️ {skill.slotsAvailable}</p>
              </div>

              <div className="bg-blue-50 p-3 rounded-md mt-3 text-center">
                <p className="font-medium text-[#1e3a8a]">
                  {skill.providerName}
                </p>
                <p className="text-gray-500 text-sm">{skill.providerEmail}</p>
              </div>
            </div>
          </div>
        ))}
      </div> 
    </section>
    <section>
        
    <div className="hero bg-base-200 ">
  <div className="hero-content flex-col space-y-5">
    <div className="text-center lg:text-left">
      <h1 className="text-3xl lg:text-5xl font-bold text-[#1e3a8a]">Book Session!</h1>

    </div>
    <div className="card bg-base-100 lg:w-[500px] max-w-lg shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset ">
         <label className="label ">Name</label>    
                <input type="name" className="input lg:w-[450px]" placeholder="Name" />
          <label className="label">Email</label>
          <input type="email" className="input lg:w-[450px]" placeholder="Email" />
         
  
          <button className="btn  mt-4 bg-[#1e3a8a] text-white">Submit </button>
        </fieldset>
      </div>
    </div>
  </div>
</div> 
    </section>
   

    <Footer></Footer>
   </>
  );
};

export default SkillDetails;
