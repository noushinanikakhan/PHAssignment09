import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router";
import { FaStar, FaFilter, FaSort, FaSearch, FaFire, FaClock, FaUsers, FaTag } from "react-icons/fa";

const SkillDetails = () => {
  const [skills, setSkills] = useState([]);
  const [filteredSkills, setFilteredSkills] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("popular"); // popular, ratingDesc, ratingAsc, priceDesc, priceAsc
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => {
        setSkills(data);
        setFilteredSkills(data);
        
        // Extract unique categories
        const uniqueCategories = ["All", ...new Set(data.map(skill => skill.category))];
        setCategories(uniqueCategories);
        setLoading(false);
      });
  }, []);

  // Apply filters, search and sorting
  useEffect(() => {
    let result = [...skills];
    
    // Apply search filter
    if (searchTerm) {
      result = result.filter(skill => 
        skill.skillName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        skill.providerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        skill.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply category filter
    if (selectedCategory !== "All") {
      result = result.filter(skill => skill.category === selectedCategory);
    }
    
    // Apply sorting
    result.sort((a, b) => {
      switch(sortOrder) {
        case "popular":
          return (b.totalStudents || 0) - (a.totalStudents || 0);
        case "ratingDesc":
          return b.rating - a.rating;
        case "ratingAsc":
          return a.rating - b.rating;
        case "priceDesc":
          return b.price - a.price;
        case "priceAsc":
          return a.price - b.price;
        default:
          return 0;
      }
    });
    
    setFilteredSkills(result);
  }, [selectedCategory, sortOrder, searchTerm, skills]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const getSortLabel = () => {
    switch(sortOrder) {
      case "popular": return "Most Popular";
      case "ratingDesc": return "Highest Rated";
      case "ratingAsc": return "Lowest Rated";
      case "priceDesc": return "Price: High to Low";
      case "priceAsc": return "Price: Low to High";
      default: return "Sort By";
    }
  };

  const clearFilters = () => {
    setSelectedCategory("All");
    setSortOrder("popular");
    setSearchTerm("");
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#1e3a8a] mx-auto mb-4"></div>
            <p className="text-gray-600">Loading amazing courses...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <ToastContainer />
      
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-r from-[#1e3a8a] via-blue-700 to-[#1e3a8a] text-white py-12">
        <div className="w-11/12 mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Discover Your Next Skill</h1>
            <p className="text-xl text-blue-100 mb-8">
              Learn from expert instructors with hands-on courses designed for your success.
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <section className="w-11/12 mx-auto -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 mb-8">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses, instructors, or categories..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Category Filter */}
            <div className="w-full lg:w-auto">
              <div className="flex items-center gap-3 mb-3">
                <FaFilter className="text-[#1e3a8a]" />
                <h3 className="font-semibold text-gray-800">Filter by Category</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-[#1e3a8a] to-blue-600 text-white shadow-md"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-sm"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort and Reset */}
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <div className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <FaSort className="text-[#1e3a8a]" />
                  <h3 className="font-semibold text-gray-800">Sort By</h3>
                </div>
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="btn bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 w-full sm:w-48 justify-between">
                    {getSortLabel()}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <ul tabIndex={0} className="dropdown-content menu bg-white p-2 shadow-xl rounded-box w-52 z-50 border border-gray-200 mt-2">
                    <li>
                      <button 
                        onClick={() => setSortOrder("popular")}
                        className={`flex items-center justify-between py-3 ${sortOrder === "popular" ? "bg-blue-50 text-[#1e3a8a]" : ""}`}
                      >
                        <div className="flex items-center gap-2">
                          <FaFire className="text-orange-500" />
                          <span>Most Popular</span>
                        </div>
                        {(sortOrder === "popular") && <span className="text-green-500">✓</span>}
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setSortOrder("ratingDesc")}
                        className={`flex items-center justify-between py-3 ${sortOrder === "ratingDesc" ? "bg-blue-50 text-[#1e3a8a]" : ""}`}
                      >
                        <div className="flex items-center gap-2">
                          <FaStar className="text-yellow-500" />
                          <span>Highest Rated</span>
                        </div>
                        {(sortOrder === "ratingDesc") && <span className="text-green-500">✓</span>}
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setSortOrder("ratingAsc")}
                        className={`flex items-center justify-between py-3 ${sortOrder === "ratingAsc" ? "bg-blue-50 text-[#1e3a8a]" : ""}`}
                      >
                        <div className="flex items-center gap-2">
                          <FaStar className="text-yellow-500" />
                          <span>Lowest Rated</span>
                        </div>
                        {(sortOrder === "ratingAsc") && <span className="text-green-500">✓</span>}
                      </button>
                    </li>
                    <li className="divider my-1"></li>
                    <li>
                      <button 
                        onClick={() => setSortOrder("priceDesc")}
                        className={`flex items-center justify-between py-3 ${sortOrder === "priceDesc" ? "bg-blue-50 text-[#1e3a8a]" : ""}`}
                      >
                        <div className="flex items-center gap-2">
                          <FaTag className="text-green-500" />
                          <span>Price: High to Low</span>
                        </div>
                        {(sortOrder === "priceDesc") && <span className="text-green-500">✓</span>}
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setSortOrder("priceAsc")}
                        className={`flex items-center justify-between py-3 ${sortOrder === "priceAsc" ? "bg-blue-50 text-[#1e3a8a]" : ""}`}
                      >
                        <div className="flex items-center gap-2">
                          <FaTag className="text-green-500" />
                          <span>Price: Low to High</span>
                        </div>
                        {(sortOrder === "priceAsc") && <span className="text-green-500">✓</span>}
                      </button>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-end">
                <button
                  onClick={clearFilters}
                  className="btn btn-outline border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 h-[42px]"
                >
                  Clear All
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-11/12 mx-auto pb-16">
        {/* Results Summary */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              {selectedCategory === "All" ? "All Courses" : `${selectedCategory} Courses`}
            </h2>
            <p className="text-gray-600 mt-1">
              {filteredSkills.length} {filteredSkills.length === 1 ? 'course' : 'courses'} found
              {searchTerm && ` for "${searchTerm}"`}
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
            </p>
          </div>
          
          {filteredSkills.length > 0 && (
            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Available</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span>Few Slots</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span>Limited</span>
              </div>
            </div>
          )}
        </div>

        {/* Skills Grid */}
        {filteredSkills.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl shadow-sm border border-gray-200">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <FaSearch className="text-3xl text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">No courses found</h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              We couldn't find any courses matching your search. Try different keywords or browse all categories.
            </p>
            <button 
              onClick={clearFilters}
              className="btn bg-gradient-to-r from-[#1e3a8a] to-blue-600 text-white hover:from-blue-700 hover:to-[#1e3a8a]"
            >
              Browse All Courses
            </button>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredSkills.map((skill) => (
              <div
                key={skill.skillId}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-blue-200"
              >
                {/* Course Image with Badges */}
                <div className="relative overflow-hidden">
                  <img
                    src={skill.image}
                    alt={skill.skillName}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/95 backdrop-blur-sm text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                      {skill.category}
                    </span>
                  </div>
                  
                  {/* Rating Badge */}
                  <div className="absolute top-3 right-3">
                    <div className="flex items-center gap-1 bg-black/70 backdrop-blur-sm text-white text-sm px-3 py-1.5 rounded-full">
                      <FaStar className="text-yellow-400" />
                      <span className="font-bold">{skill.rating}</span>
                    </div>
                  </div>
                  
                  {/* Slot Availability Indicator */}
                  <div className="absolute bottom-3 left-3">
                    <div className={`flex items-center gap-1.5 text-white text-xs px-3 py-1.5 rounded-full ${
                      skill.slotsAvailable >= 5 ? 'bg-green-600/90' : 
                      skill.slotsAvailable >= 3 ? 'bg-yellow-600/90' : 'bg-red-600/90'
                    }`}>
                      <FaUsers />
                      <span>{skill.slotsAvailable} slots left</span>
                    </div>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#1e3a8a] transition-colors line-clamp-1">
                    {skill.skillName}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {skill.description}
                  </p>
                  
                  {/* Instructor Info */}
                  <div className="flex items-center gap-3 mb-4 p-3 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold">
                      {skill.providerName.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{skill.providerName}</p>
                      <p className="text-xs text-gray-500 truncate">{skill.providerEmail}</p>
                    </div>
                  </div>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    <div className="text-center p-2.5 bg-blue-50 rounded-lg">
                      <div className="flex items-center justify-center gap-1 text-blue-600 mb-1">
                        <FaTag />
                        <span className="font-bold text-lg">${skill.price}</span>
                      </div>
                      <p className="text-xs text-gray-600">Per Session</p>
                    </div>
                    
                    <div className="text-center p-2.5 bg-green-50 rounded-lg">
                      <div className="flex items-center justify-center gap-1 text-green-600 mb-1">
                        <FaStar />
                        <span className="font-bold text-lg">{skill.rating}</span>
                      </div>
                      <p className="text-xs text-gray-600">Rating</p>
                    </div>
                    
                    <div className="text-center p-2.5 bg-purple-50 rounded-lg">
                      <div className="flex items-center justify-center gap-1 text-purple-600 mb-1">
                        <FaClock />
                        <span className="font-bold text-lg">{skill.duration?.split(' ')[0] || '8'}</span>
                        <span className="text-xs">wks</span>
                      </div>
                      <p className="text-xs text-gray-600">Duration</p>
                    </div>
                  </div>
                  
                  {/* View Details Button */}
                  <Link 
                    to={`/details/${skill.skillId}`} 
                    className="block w-full text-center py-3.5 bg-gradient-to-r from-[#1e3a8a] to-blue-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-[#1e3a8a] transition-all duration-300 group-hover:shadow-lg"
                  >
                    View Course Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Featured Categories */}
        {filteredSkills.length > 0 && (
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Explore by Category</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {categories.filter(cat => cat !== "All").map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`p-4 rounded-xl border transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-[#1e3a8a] to-blue-600 text-white border-transparent shadow-lg'
                      : 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-md'
                  }`}
                >
                  <span className="font-medium">{category}</span>
                  <span className="block text-sm opacity-80 mt-1">
                    {skills.filter(s => s.category === category).length} courses
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </section>

      <Footer />
    </>
  );
};

export default SkillDetails;