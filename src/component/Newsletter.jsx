import React, { useState } from "react";
import { FaPaperPlane, FaEnvelope, FaCheck, FaUsers, FaStar, FaBook, FaHeadset } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      toast.success("🎉 Successfully subscribed to our newsletter!");
      setEmail("");
      
      // Reset after 5 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 5000);
    }, 1000);
  };

  const benefits = [
    "Weekly skill tips and tutorials",
    "Exclusive discount codes",
    "New course announcements",
    "Success stories from learners",
    "Free learning resources",
    "Early access to workshops"
  ];

  return (
    <section className="w-11/12 mx-auto my-16">
      <ToastContainer position="top-center" />
      <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl border border-blue-100 overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Left Content */}
          <div className="lg:w-3/5 p-8 md:p-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#1e3a8a] to-blue-600 rounded-full flex items-center justify-center">
                <FaEnvelope className="text-white text-xl" />
              </div>
              <div>
                <span className="bg-gradient-to-r from-[#1e3a8a] to-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                  Stay Updated
                </span>
              </div>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-4">
              Never Miss a Learning Opportunity
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              Join our community of 10,000+ learners and get the latest updates on courses, 
              special offers, and learning tips delivered directly to your inbox.
            </p>
            
            <div className="mb-8 bg-white p-5 rounded-xl border border-blue-100 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <FaUsers className="text-blue-500" />
                What You'll Get Every Week:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaCheck className="text-blue-600 text-xs" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Subscription Form */}
            {isSubscribed ? (
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCheck className="text-green-600 text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h3>
                <p className="text-green-700">
                  You're now subscribed to our newsletter. Check your email for a welcome message!
                </p>
              </div>
            ) : (
              <div className="bg-white p-6 rounded-xl border border-blue-200 shadow-sm">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn bg-gradient-to-r from-[#1e3a8a] to-blue-600 text-white font-bold px-8 py-4 rounded-xl hover:from-blue-700 hover:to-[#1e3a8a] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 justify-center"
                    >
                      <FaPaperPlane />
                      <span>Subscribe Now</span>
                    </button>
                  </div>
                  <p className="text-sm text-gray-500">
                    By subscribing, you agree to our Privacy Policy. We never spam.
                  </p>
                </form>
              </div>
            )}
          </div>
          
          {/* Right Stats - Lightened */}
          <div className="lg:w-2/5 bg-gradient-to-b from-blue-50 to-white p-8 md:p-10 border-l border-blue-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-[#1e3a8a] mb-2">Our Learning Community</h3>
              <p className="text-gray-600">Join thousands of successful learners</p>
            </div>
            
            <div className="space-y-6">
              {/* <div className="bg-white border border-blue-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <FaUsers className="text-blue-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">10,000+</div>
                    <p className="text-gray-600 text-sm">Active Subscribers</p>
                  </div>
                </div>
              </div> */}
              
              <div className="bg-white border border-green-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <FaStar className="text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">95%</div>
                    <p className="text-gray-600 text-sm">Satisfaction Rate</p>
                  </div>
                </div>
              </div>
              
              {/* <div className="bg-white border border-purple-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <FaBook className="text-purple-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">50+</div>
                    <p className="text-gray-600 text-sm">New Courses Monthly</p>
                  </div>
                </div>
              </div> */}
              
              <div className="bg-white border border-orange-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <FaHeadset className="text-orange-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">24/7</div>
                    <p className="text-gray-600 text-sm">Support Available</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-blue-200">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-100">
                <p className="text-center text-gray-700 text-sm">
                  <span className="font-semibold text-[#1e3a8a]">"The best investment you can make is in yourself."</span> 
                  <br />
                  <span className="text-gray-600">- Warren Buffett</span>
                </p>
              </div>
              
              <div className="mt-4 text-center">
                <p className="text-xs text-gray-500">
                  📧 We send 1-2 emails per week. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Trust Badges */}
        <div className="border-t border-blue-100 p-6 bg-white/50">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold">✓</span>
              </div>
              <span>100% Privacy Protected</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold">✓</span>
              </div>
              <span>No Spam Ever</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold">✓</span>
              </div>
              <span>Unsubscribe Anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;