import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      toast.error("Please fill in all the fields.");
      return;
    }

    toast.success("Thank you! Your message has been sent.");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <Navbar />

      <section className="w-11/12 max-w-5xl mx-auto my-12 space-y-10">
        {/* Heading */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a]">
            Contact Us
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Have a question, found an issue, or want to share an idea?  
            Send us a message and we’ll get back to you as soon as possible.
          </p>
        </div>

        {/* Content grid */}
        <div className="grid gap-8 lg:grid-cols-2 items-start">
          {/* Left: contact info */}
          <div className="bg-[#f8fafc] rounded-lg shadow p-6 space-y-5">
            <h2 className="text-xl font-semibold text-[#1e3a8a]">
              Get in touch
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              SkillSwap is here to help with account issues, course questions,
              and general feedback. Your thoughts help us improve the learning
              experience for everyone.
            </p>

            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-[#1e3a8a]">Email</p>
                <p>support@skillswap.com</p>
              </div>

              <div>
                <p className="font-semibold text-[#1e3a8a]">Support Hours</p>
                <p>Saturday – Thursday: 10:00 AM – 8:00 PM</p>
                <p>Friday: Online support only</p>
              </div>

              <div>
                <p className="font-semibold text-[#1e3a8a]">Common topics</p>
                <ul className="list-disc list-inside mt-1 space-y-1">
                  <li>Login or password issues</li>
                  <li>Questions about skills and courses</li>
                  <li>Reporting a problem with a session</li>
                  <li>Feature requests and suggestions</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-[#1e3a8a] mb-4 text-center">
              Send us a message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="input input-bordered w-full"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="input input-bordered w-full"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  className="input input-bordered w-full"
                  placeholder="How can we help?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  className="textarea textarea-bordered w-full min-h-[120px]"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn bg-[#1e3a8a] text-white w-full mt-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <ToastContainer />
      </section>

      <Footer />
    </>
  );
};

export default Contact;
