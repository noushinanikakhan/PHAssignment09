import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Link } from "react-router";

const Contact = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "General Question",
    message: ""
  });

  // State for toast notification
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      showToastMessage("Please fill in all required fields.", "error");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showToastMessage("Please enter a valid email address.", "error");
      return;
    }

    // Simulate form submission (replace with actual API call)
    console.log("Form submitted:", formData);
    
    // Show success toast
    showToastMessage("Message sent successfully! We'll get back to you soon.", "success");
    
    // Reset form immediately
    resetForm();
  };

  // Show toast message
  const showToastMessage = (message, type = "success") => {
    setToastMessage(message);
    setShowToast(true);
    
    // Auto-hide toast after 5 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  };

  // Reset form to initial state
  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      reason: "General Question",
      message: ""
    });
  };

  return (
    <>
      <Navbar />

      {/* Toast Notification */}
      {showToast && (
        <div className="toast toast-top toast-center z-50">
          <div className="alert alert-success shadow-lg">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{toastMessage}</span>
            </div>
          </div>
        </div>
      )}

      <section className="w-11/12 mx-auto py-12">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-3">
            Contact SkillSwap
          </h2>
          <p className="text-gray-600 lg:w-3/4 mx-auto leading-relaxed">
            Have a question, want to share feedback, or interested in joining our team?  
            We'd love to hear from you. Use the form below or reach out through the contact
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
                <span className="font-semibold">"Job / Career Opportunity"</span> in the contact form.
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
                <span className="font-semibold">"Partnership / Collaboration"</span> in the form.
              </p>
            </div>
          </div>

          {/* RIGHT: Contact form */}
          <div className="bg-white shadow-md rounded-lg p-6 lg:p-8">
            <h3 className="text-2xl font-semibold text-[#1e3a8a] mb-4 text-center lg:text-left">
              Send us a message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Reason */}
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Reason for Contact
                </label>
                <select
                  name="reason"
                  value={formData.reason}
                  onChange={handleInputChange}
                  className="select select-bordered w-full"
                >
                  <option value="General Question">General Question</option>
                  <option value="Issue with Booking / Account">Issue with Booking / Account</option>
                  <option value="Job / Career Opportunity">Job / Career Opportunity</option>
                  <option value="Partnership / Collaboration">Partnership / Collaboration</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="textarea textarea-bordered w-full"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>

              {/* Required fields note */}
              <p className="text-sm text-gray-500">
                * Required fields
              </p>

              {/* Submit button only */}
              <button
                type="submit"
                className="btn bg-[#1e3a8a] text-white font-semibold w-full hover:bg-[#1d4ed8]"
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