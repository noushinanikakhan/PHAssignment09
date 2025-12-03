import React from "react";
import { FaGift, FaClock, FaTag, FaCheckCircle, FaUsers } from "react-icons/fa";
import { Link } from "react-router";

const PromotionalOffer = () => {
  // Get current date info
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth(); // 0-11
  const currentDay = currentDate.getDate();
  
  // Get current month name
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  const currentMonthName = monthNames[currentMonth];
  
  // Get next month name for expiration
  const nextMonthIndex = (currentMonth + 1) % 12;
  const nextMonthName = monthNames[nextMonthIndex];
  
  // Check if today is weekend (Saturday or Sunday)
  const isWeekend = currentDate.getDay() === 0 || currentDate.getDay() === 6;
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDayName = dayNames[currentDate.getDay()];

  // Monthly unique messages based on season
  const monthlyMessages = [
    "January: Start the year strong with New Year learning resolutions!",
    "February: Love learning this Valentine's season with special couples discounts!",
    "March: Spring into new skills with our fresh course offerings!",
    "April: April showers bring learning powers - explore indoor skills!",
    "May: Summer prep begins! Get ready for vacation learning adventures.",
    "June: Half-year skill boost - refresh your knowledge for the year ahead!",
    "July: Mid-year mastery - perfect time to learn that skill you've been wanting!",
    "August: Back-to-learning season! Prepare for fall with new certifications.",
    "September: Autumn skill harvest - reap the benefits of consistent learning!",
    "October: Spooktacular deals for Halloween! Learn something thrilling.",
    "November: Thanksgiving special - be thankful for new skills and knowledge!",
    "December: Year-end skill wrap-up - complete your learning goals before New Year!"
  ];

  const offers = [
    {
      title: "First Session Free",
      description: "Get your first session absolutely free! Try any course without any commitment.",
      icon: <FaGift className="text-3xl text-blue-500" />,
      color: "from-blue-50 to-cyan-50",
      border: "border-blue-200",
      expires: "Always Available",
      badge: "Permanent"
    },
    {
      title: `${currentMonthName} Group Special`,
      description: "Book with 2+ friends and get 25% off on all sessions this month. Learn together!",
      icon: <FaUsers className="text-3xl text-green-500" />,
      color: "from-green-50 to-emerald-50",
      border: "border-green-200",
      expires: `Until ${nextMonthName} 1st`,
      badge: "Monthly Deal"
    },
    {
      title: isWeekend ? "Weekend Flash Sale" : "Upcoming Weekend Deal",
      description: isWeekend 
        ? "Weekend sessions at 20% discount. Available today only!"
        : `${currentDayName} Special: Book now for 15% off upcoming weekend sessions.`,
      icon: <FaClock className="text-3xl text-purple-500" />,
      color: isWeekend ? "from-purple-50 to-pink-50" : "from-orange-50 to-yellow-50",
      border: isWeekend ? "border-purple-200" : "border-orange-200",
      expires: isWeekend ? "Today Only" : "This Weekend",
      badge: isWeekend ? "Active Now" : "Coming Soon"
    }
  ];

  return (
    <section className="w-11/12 mx-auto my-16">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-10 shadow-xl border border-blue-200">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1e3a8a] to-blue-600 text-white px-4 py-2 rounded-full mb-4">
              <span className="text-yellow-300">🎁</span>
              <span className="font-semibold">Exclusive Offers</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-4">
              Special Learning Deals Just For You!
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              Unlock exclusive discounts and offers to start your learning journey. 
              We update our promotions regularly to give you the best value.
            </p>
            
            <div className="bg-white p-4 rounded-xl mb-6 border border-blue-100 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <FaCheckCircle className="text-green-500" />
                <span className="font-semibold text-gray-800">What's included in all offers:</span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Free trial session</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Flexible scheduling</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Certificate of completion</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Money-back guarantee</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-100 p-4 rounded-xl mb-6 border border-blue-300">
              <p className="text-blue-800 text-sm">
                <span className="font-semibold">Note:</span> All offers are automatically applied at checkout. 
                No coupon codes required!
              </p>
            </div>
            
            {/* Updated Browse All Courses button to navigate to all courses page */}
            <Link 
              to="/allcourses"
              className="inline-block btn bg-gradient-to-r from-[#1e3a8a] to-blue-600 text-white hover:from-blue-700 hover:to-[#1e3a8a] font-bold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              Browse All Courses
            </Link>
          </div>
          
          {/* Right Offers Cards */}
          <div className="lg:w-1/2 grid gap-6">
            {offers.map((offer, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br ${offer.color} border ${offer.border} rounded-xl p-5 shadow-lg hover:shadow-xl transition-shadow duration-300`}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-xl shadow-sm">
                    {offer.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-800">{offer.title}</h3>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        offer.badge === "Permanent" 
                          ? "bg-blue-100 text-blue-700" 
                          : offer.badge === "Active Now"
                          ? "bg-green-100 text-green-700"
                          : "bg-orange-100 text-orange-700"
                      }`}>
                        {offer.badge}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{offer.description}</p>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1 text-gray-500">
                        <FaClock className="text-gray-500" />
                        <span className="font-medium">Valid: {offer.expires}</span>
                      </div>
                      {/* Updated Learn More button to navigate to all courses page */}
                      <Link 
                        to="/allcourses"
                        className="text-[#1e3a8a] font-semibold hover:text-blue-700 transition-colors flex items-center gap-1"
                      >
                        Learn More 
                        <span className="text-lg">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Current Date Info with Monthly Unique Message */}
        <div className="mt-8 pt-6 border-t border-blue-300/30">
          <div className="text-center">
            <p className="text-gray-600 mb-2">
              <span className="font-semibold text-[#1e3a8a]">Today is {currentDayName}, {currentMonthName} {currentDay}</span>
            </p>
            <p className="text-sm font-medium text-gray-700 bg-yellow-50 p-3 rounded-lg border border-yellow-200 max-w-2xl mx-auto">
              {monthlyMessages[currentMonth]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionalOffer;