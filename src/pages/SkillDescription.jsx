import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { ToastContainer, toast } from 'react-toastify';
import { useParams, Link } from "react-router";
import { FaStar, FaUsers, FaTag, FaMusic, FaLanguage, FaCode, FaHeartbeat, FaCamera, FaUtensils, FaPaintBrush, FaGlobe, FaChartLine, FaClock, FaCalendarAlt, FaMapMarkerAlt, FaPhone, FaCheckCircle, FaArrowLeft } from "react-icons/fa";

const SkillDescription = () => {
  const { id } = useParams();
  const [skill, setSkill] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  useEffect(() => {
    // Fetch the specific skill data
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => {
        const foundSkill = data.find(s => s.skillId === parseInt(id));
        setSkill(foundSkill);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const notify = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please fill all required fields");
      return;
    }
    
    toast.success(`Successfully booked ${skill?.skillName} session! We'll contact you soon.`);
 
    setFormData({
      name: "",
      email: "",
      phone: ""
    });
  };

  const categoryIcons = {
    "Music": <FaMusic className="text-blue-500 text-xl" />,
    "Language": <FaLanguage className="text-green-500 text-xl" />,
    "Technology": <FaCode className="text-purple-500 text-xl" />,
    "Health & Wellness": <FaHeartbeat className="text-red-500 text-xl" />,
    "Art & Creativity": <FaPaintBrush className="text-yellow-500 text-xl" />,
    "Lifestyle": <FaUtensils className="text-orange-500 text-xl" />,
    "Design": <FaPaintBrush className="text-pink-500 text-xl" />,
    "Business & Marketing": <FaChartLine className="text-teal-500 text-xl" />
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#1e3a8a] mx-auto mb-4"></div>
            <p className="text-gray-600">Loading course details...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (!skill) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
          <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4">Course Not Found</h2>
          <p className="text-gray-600 mb-6">The course you're looking for doesn't exist or has been removed.</p>
          <Link to="/allcourses" className="btn bg-[#1e3a8a] text-white hover:bg-blue-800">
            <FaArrowLeft className="mr-2" />
            Back to All Courses
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <ToastContainer />
      
      {/* Breadcrumb Navigation */}
      <div className="w-11/12 mx-auto py-4">
        <div className="flex items-center text-sm text-gray-600">
          <Link to="/" className="hover:text-[#1e3a8a]">Home</Link>
          <span className="mx-2">›</span>
          <Link to="/allcourses" className="hover:text-[#1e3a8a]">All Courses</Link>
          <span className="mx-2">›</span>
          <span className="text-[#1e3a8a] font-medium truncate">{skill.skillName}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 via-white to-indigo-50 py-8 border-b">
        <div className="w-11/12 mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Course Image */}
            <div className="lg:w-2/5">
              <div className="relative">
                <img 
                  src={skill.image} 
                  alt={skill.skillName}
                  className="w-full h-auto rounded-2xl shadow-lg border border-gray-200"
                />
                <div className="absolute top-4 left-4">
                  <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                    {categoryIcons[skill.category]}
                    <span className="font-semibold text-gray-800">{skill.category}</span>
                  </div>
                </div>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-3 mt-6">
                <div className="bg-white p-4 rounded-xl text-center border border-gray-100 shadow-sm">
                  <div className="flex items-center justify-center gap-1 text-yellow-500 mb-1">
                    <FaStar />
                    <span className="font-bold text-lg">{skill.rating}</span>
                  </div>
                  <p className="text-xs text-gray-600">Rating</p>
                </div>
                <div className="bg-white p-4 rounded-xl text-center border border-gray-100 shadow-sm">
                  <div className="text-[#1e3a8a] font-bold text-lg mb-1">${skill.price}</div>
                  <p className="text-xs text-gray-600">Per Session</p>
                </div>
                <div className="bg-white p-4 rounded-xl text-center border border-gray-100 shadow-sm">
                  <div className="text-[#1e3a8a] font-bold text-lg mb-1">{skill.slotsAvailable}</div>
                  <p className="text-xs text-gray-600">Slots Left</p>
                </div>
              </div>
            </div>
            
            {/* Course Info */}
            <div className="lg:w-3/5">
              <h1 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-4">
                {skill.skillName}
              </h1>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 flex items-center justify-center">
                    <FaClock className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Duration</p>
                    <p className="font-semibold">{skill.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 flex items-center justify-center">
                    <FaCalendarAlt className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Schedule</p>
                    <p className="font-semibold">{skill.schedule}</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Course Description</h3>
                <p className="text-gray-700 leading-relaxed">{skill.detailedDescription}</p>
              </div>
              
              {/* Instructor Info */}
              <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                <h3 className="font-bold text-lg text-gray-800 mb-3">About the Instructor</h3>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#1e3a8a] to-blue-600 flex items-center justify-center text-white font-bold text-xl">
                    {skill.providerName.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{skill.providerName}</h4>
                    <p className="text-gray-600 text-sm mb-2">{skill.providerBio}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1 text-gray-700">
                        <FaPhone className="text-green-500" />
                        {skill.providerPhone}
                      </span>
                      <span className="flex items-center gap-1 text-gray-700">
                        <span className="text-blue-500">✉</span>
                        {skill.providerEmail}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-11/12 mx-auto py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Course Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Learning Outcomes */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <h3 className="text-2xl font-bold text-[#1e3a8a] mb-6 pb-3 border-b">What You'll Learn</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {skill.learningOutcomes?.map((outcome, index) => (
                  <div key={index} className="flex items-start gap-3 bg-blue-50/50 p-4 rounded-xl hover:bg-blue-50 transition-colors">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <FaCheckCircle className="text-green-600 text-sm" />
                    </div>
                    <span className="text-gray-700">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Details */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <h3 className="text-2xl font-bold text-[#1e3a8a] mb-6 pb-3 border-b">Course Details</h3>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-gray-100">
                  <span className="font-medium text-gray-700 mb-1 sm:mb-0">Location</span>
                  <span className="font-semibold flex items-center gap-2 text-gray-800">
                    <FaMapMarkerAlt className="text-red-500" />
                    {skill.location}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-gray-100">
                  <span className="font-medium text-gray-700 mb-1 sm:mb-0">Prerequisites</span>
                  <span className="font-semibold text-gray-800">{skill.prerequisites}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-gray-100">
                  <span className="font-medium text-gray-700 mb-1 sm:mb-0">Session Length</span>
                  <span className="font-semibold text-gray-800">{skill.sessionLength}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between py-3">
                  <span className="font-medium text-gray-700 mb-1 sm:mb-0">Total Students</span>
                  <span className="font-bold text-lg text-[#1e3a8a]">{skill.totalStudents || 100}+ enrolled</span>
                </div>
              </div>
            </div>

            {/* Included Materials */}
            {skill.materialsIncluded && (
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                <h3 className="text-2xl font-bold text-[#1e3a8a] mb-6 pb-3 border-b">What's Included</h3>
                <div className="flex flex-wrap gap-3">
                  {skill.materialsIncluded.map((material, index) => (
                    <div key={index} className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-3 rounded-lg border border-blue-100">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 text-sm">✓</span>
                      </div>
                      <span className="text-blue-800 font-medium">{material}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Booking Form (Lighter Design) */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-b from-white to-blue-50 rounded-2xl border border-blue-100 shadow-lg p-6 sticky top-24">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-[#1e3a8a] mb-2">Book This Course</h3>
                <div className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-800 px-4 py-2 rounded-full mb-4">
                  <FaStar className="text-yellow-500" />
                  <span className="font-semibold">{skill.rating} rating • {skill.totalStudents || 100}+ students</span>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">Price per session</span>
                    <span className="text-3xl font-bold text-[#1e3a8a]">${skill.price}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Available slots</span>
                    <span className={`font-bold ${skill.slotsAvailable < 3 ? 'text-red-600' : 'text-green-600'}`}>
                      {skill.slotsAvailable} remaining
                    </span>
                  </div>
                </div>
              </div>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-400 outline-none transition bg-white"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-400 outline-none transition bg-white"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+880 1XXX XXXXXX"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-400 outline-none transition bg-white"
                    required
                  />
                </div>
                
                <button
                  type="button"
                  onClick={notify}
                  className="w-full py-4 bg-gradient-to-r from-[#1e3a8a] to-blue-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-[#1e3a8a] transition-all duration-300 shadow-md hover:shadow-lg text-lg"
                >
                  Book Now - ${skill.price}
                </button>
                
                <div className="text-center mt-4">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Secure booking</span> • 24/7 support • Free trial session available
                  </p>
                </div>
              </form>
              
              {/* Course Highlights */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-bold text-gray-800 mb-3">Course Highlights</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-700">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaCheckCircle className="text-green-600 text-xs" />
                    </div>
                    <span>Personalized feedback</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaCheckCircle className="text-green-600 text-xs" />
                    </div>
                    <span>Flexible scheduling</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaCheckCircle className="text-green-600 text-xs" />
                    </div>
                    <span>Certificate of completion</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaCheckCircle className="text-green-600 text-xs" />
                    </div>
                    <span>Lifetime access to materials</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12 border-t">
        <div className="w-11/12 mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">Ready to Start Learning?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join {skill.totalStudents || 100}+ students who have already transformed their skills with this course.
          </p>
          <Link 
            to="/allcourses" 
            className="inline-flex items-center gap-2 bg-white text-[#1e3a8a] font-semibold px-8 py-3 rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors duration-300 shadow-sm"
          >
            <FaArrowLeft className="mr-2" />
            Browse More Courses
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default SkillDescription;