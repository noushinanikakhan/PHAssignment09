import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HowItWorks = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="w-11/12 mx-auto my-12 p-6 rounded-lg">
      <h2 data-aos="zoom-in" className="text-3xl font-bold text-center mb-10 text-[#1e3a8a]">
        How It Works
      </h2>

 <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
  SkillSwap makes learning a fun and social experience. 
  Join a vibrant network of learners, explore new skills, and share your own expertise — all in one place!
</p>


      <div className="grid md:grid-cols-4 gap-6 text-white font-semibold">
        <div className="bg-[#60a5fa] p-6 rounded-lg shadow-md text-center">
          <h3 data-aos="zoom-in" className="text-xl mb-2">
            1. Sign Up
          </h3>
          <p>Create your free account and join our learning community.</p>
        </div>

        <div className="bg-[#34d399] p-6 rounded-lg shadow-md text-center">
          <h3 data-aos="fade-up" data-aos-delay="200" className="text-xl mb-2">
            2. Browse Skills
          </h3>
          <p>
            Explore available skills such as music, language, or technology and
            choose what interests you.
          </p>
        </div>

        <div className="bg-[#fbbf24] p-6 rounded-lg shadow-md text-center">
          <h3 data-aos="flip-left" data-aos-delay="400" className="text-xl mb-2">
            3. Book a Session
          </h3>
          <p>Select a skill provider and reserve your time slot easily.</p>
        </div>

        <div className="bg-[#f87171] p-6 rounded-lg shadow-md text-center">
          <h3 data-aos="fade-down" data-aos-delay="600" className="text-xl mb-2">
            4. Learn & Share
          </h3>
          <p>
            Attend your session, gain new skills, and share your own expertise
            with others.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
