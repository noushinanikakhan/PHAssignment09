import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Link } from "react-router";

const Job = () => {
  return (
    <>
      <Navbar />

      <section className="w-11/12 mx-auto py-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] text-center mb-8">
          Career Opportunities at SkillSwap
        </h2>

        <p className="text-gray-700 text-lg lg:w-3/4 mx-auto text-center leading-relaxed mb-12">
          SkillSwap is growing, and we’re always excited to connect with people who care about
          learning, community, and technology. If you’re passionate about building tools that
          help others share skills and knowledge, explore the roles below and reach out to us.
        </p>

        {/* Job Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Frontend Developer */}
          <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition flex flex-col">
            <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">Frontend Developer</h3>
            <p className="text-gray-600 mb-4 flex-1">
              Build responsive and accessible user interfaces using React and Tailwind. 
              Help us deliver a fast, smooth experience for all learners.
            </p>
            <Link to="/contact" className="btn bg-[#1e3a8a] text-white font-semibold w-full mt-auto">
              Contact Now
            </Link>
          </div>

          {/* Backend Developer */}
          <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition flex flex-col">
            <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">Backend Developer</h3>
            <p className="text-gray-600 mb-4 flex-1">
              Work on APIs, authentication, and databases. Experience in Node.js or Firebase is preferred.
            </p>
            <Link to="/contact" className="btn bg-[#1e3a8a] text-white font-semibold w-full mt-auto">
              Contact Now
            </Link>
          </div>

          {/* UI/UX Designer */}
          <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition flex flex-col">
            <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">UI/UX Designer</h3>
            <p className="text-gray-600 mb-4 flex-1">
              Create intuitive and visually appealing experiences across pages and workflows.
            </p>
            <Link to="/contact" className="btn bg-[#1e3a8a] text-white font-semibold w-full mt-auto">
              Contact Now
            </Link>
          </div>

          {/* Skill Instructor */}
          <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition flex flex-col">
            <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">Skill Instructor / Trainer</h3>
            <p className="text-gray-600 mb-4 flex-1">
              Teach what you love—coding, music, fitness, languages, or any expertise you want to share.
            </p>
            <Link to="/contact" className="btn bg-[#1e3a8a] text-white font-semibold w-full mt-auto">
              Contact Now
            </Link>
          </div>

          {/* Content Writer */}
          <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition flex flex-col">
            <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">Content Writer</h3>
            <p className="text-gray-600 mb-4 flex-1">
              Write course descriptions, guides, FAQs, and platform content that helps users understand SkillSwap clearly.
            </p>
            <Link to="/contact" className="btn bg-[#1e3a8a] text-white font-semibold w-full mt-auto">
              Contact Now
            </Link>
          </div>

          {/* Community & Support Specialist */}
          <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition flex flex-col">
            <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">Community & Support Specialist</h3>
            <p className="text-gray-600 mb-4 flex-1">
              Assist users, handle feedback, and ensure a safe, respectful learning community.
            </p>
            <Link to="/contact" className="btn bg-[#1e3a8a] text-white font-semibold w-full mt-auto">
              Contact Now
            </Link>
          </div>

          {/* HR */}
          <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition flex flex-col">
            <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">HR & Talent Coordinator</h3>
            <p className="text-gray-600 mb-4 flex-1">
              Manage hiring, communicate with candidates, and build our growing SkillSwap team.
            </p>
            <Link to="/contact" className="btn bg-[#1e3a8a] text-white font-semibold w-full mt-auto">
              Contact Now
            </Link>
          </div>

          {/* Marketing */}
          <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition flex flex-col">
            <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">Marketing & Outreach Specialist</h3>
            <p className="text-gray-600 mb-4 flex-1">
              Lead digital campaigns, manage social media, and connect SkillSwap with new communities.
            </p>
            <Link to="/contact" className="btn bg-[#1e3a8a] text-white font-semibold w-full mt-auto">
              Contact Now
            </Link>
          </div>

          {/* QA Engineer */}
          <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition flex flex-col">
            <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">Quality Assurance (QA) Engineer</h3>
            <p className="text-gray-600 mb-4 flex-1">
              Test new features, catch issues, and ensure a smooth experience across devices.
            </p>
            <Link to="/contact" className="btn bg-[#1e3a8a] text-white font-semibold w-full mt-auto">
              Contact Now
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Job;
