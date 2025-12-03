import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Link } from "react-router";

const Contact = () => {
  return (
    <>
      <Navbar />

      <section className="w-11/12 mx-auto py-12">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-3">
            Contact SkillSwap
          </h2>
          <p className="text-gray-600 lg:w-3/4 mx-auto leading-relaxed">
            Have a question, want to share feedback, or interested in joining our team?  
            We’d love to hear from you. Use the form below or reach out through the contact
            details provided for general support, partnerships, or job-related queries.
          </p>
        </div>

        {/* Layout */}
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          {/* LEFT: Info / Quick links */}
          <div className="space-y-6">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#1e3a8a] mb-2">
                General Support
              </h3>
              <p className="text-gray-600 mb-3">
                For help with your account, booking sessions, or using SkillSwap features,
                you can contact our support team using the form or email below.
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Email:</span> support@skillswap.com
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Phone:</span> +880-1234-567890
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Hours:</span> Sat–Thu, 10:00 AM – 6:00 PM (GMT+6)
              </p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#1e3a8a] mb-2">
                Careers & Job Opportunities
              </h3>
              <p className="text-gray-600 mb-3">
                Interested in working with SkillSwap as a developer, designer, instructor,
                or support member? Visit our Jobs page or select{" "}
                <span className="font-semibold">“Job / Career Opportunity”</span> in the contact form.
              </p>
              <Link
                to="/jobs"
                className="inline-block mt-2 text-sm font-semibold text-[#1e3a8a] underline"
              >
                View current roles on Jobs page
              </Link>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#1e3a8a] mb-2">
                Partnerships & Collaborations
              </h3>
              <p className="text-gray-600">
                If you represent an organization, community group, or institute and want to 
                collaborate with SkillSwap, choose{" "}
                <span className="font-semibold">“Partnership / Collaboration”</span> in the form.
              </p>
            </div>
          </div>

          {/* RIGHT: Contact form */}
          <div className="bg-white shadow-md rounded-lg p-6 lg:p-8">
            <h3 className="text-2xl font-semibold text-[#1e3a8a] mb-4 text-center lg:text-left">
              Send us a message
            </h3>

            <form className="space-y-4">
              {/* Name */}
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Reason */}
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Reason for Contact
                </label>
                <select className="select select-bordered w-full">
                  <option>General Question</option>
                  <option>Issue with Booking / Account</option>
                  <option>Job / Career Opportunity</option>
                  <option>Partnership / Collaboration</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="textarea textarea-bordered w-full"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="button"
                className="btn bg-[#1e3a8a] text-white font-semibold w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
