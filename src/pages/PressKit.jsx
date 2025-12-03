import React from "react";
import { Link } from "react-router";
import Navbar from "../component/Navbar"; // ✅ Import your own Navbar
import Footer from "../component/Footer"; // ✅ Import your own Footer

const PressKit = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <>
      <Navbar /> {/* Use your own component */}
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-8">
            <h1 className="text-4xl font-bold mb-2">SkillSwap Press Kit</h1>
            <p className="text-blue-100">Resources for media, bloggers, and partners</p>
            <div className="mt-4 text-sm">
              Last Updated: {currentYear}-{String(new Date().getMonth() + 1).padStart(2, '0')}-{String(new Date().getDate()).padStart(2, '0')}
            </div>
          </div>

          <div className="p-8">
            {/* Quick Facts */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b">Quick Facts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800">What is SkillSwap?</h3>
                  <p className="text-gray-700 mt-2">
                    SkillSwap is a peer-to-peer platform where users exchange skills and knowledge 
                    without monetary transactions. Learn photography from an expert while teaching 
                    someone web development in return.
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800">Mission</h3>
                  <p className="text-gray-700 mt-2">
                    To democratize learning by creating a community where everyone can both teach 
                    and learn, making valuable skills accessible to all.
                  </p>
                </div>
              </div>
            </section>

            {/* Brand Assets */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b">Brand Assets</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-3">Logo</h3>
                <div className="flex flex-wrap gap-8 items-center justify-center p-6 bg-gray-100 rounded-lg">
                  <div className="text-center">
                    <div className="w-48 h-48 bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <span className="text-white text-2xl font-bold">SkillSwap</span>
                    </div>
                    <p className="text-sm text-gray-600">Primary Logo</p>
                    {/* <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">
                      Download PNG
                    </button> */}
                  </div>
                  <div className="text-center">
                    <div className="w-48 h-48 bg-white border-2 border-blue-900 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <span className="text-blue-900 text-2xl font-bold">SkillSwap</span>
                    </div>
                    <p className="text-sm text-gray-600">Light Version</p>
                    {/* <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">
                      Download SVG
                    </button> */}
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-3">Brand Colors</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="w-full h-20 bg-[#1e3a8a] rounded-lg mb-2"></div>
                    <p className="font-medium">Primary Blue</p>
                    <p className="text-sm text-gray-600">#1e3a8a</p>
                  </div>
                  <div className="text-center">
                    <div className="w-full h-20 bg-[#3b82f6] rounded-lg mb-2"></div>
                    <p className="font-medium">Secondary Blue</p>
                    <p className="text-sm text-gray-600">#3b82f6</p>
                  </div>
                  <div className="text-center">
                    <div className="w-full h-20 bg-[#10b981] rounded-lg mb-2"></div>
                    <p className="font-medium">Success Green</p>
                    <p className="text-sm text-gray-600">#10b981</p>
                  </div>
                  <div className="text-center">
                    <div className="w-full h-20 bg-[#f59e0b] rounded-lg mb-2"></div>
                    <p className="font-medium">Accent Orange</p>
                    <p className="text-sm text-gray-600">#f59e0b</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Key Statistics */}
            {/* <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b">Key Statistics</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                  <div className="text-3xl font-bold text-blue-900">10,000+</div>
                  <div className="text-gray-700">Active Users</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                  <div className="text-3xl font-bold text-blue-900">500+</div>
                  <div className="text-gray-700">Skills Offered</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                  <div className="text-3xl font-bold text-blue-900">95%</div>
                  <div className="text-gray-700">Success Rate</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                  <div className="text-3xl font-bold text-blue-900">50+</div>
                  <div className="text-gray-700">Countries</div>
                </div>
              </div>
            </section> */}

            {/* Media Contact */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b">Media Contact</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-700">For Press Inquiries:</h3>
                  <p className="text-gray-600">press@skillswap.com</p>
                </div>
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-700">Phone:</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">Response Time:</h3>
                  <p className="text-gray-600">Within 24-48 hours for media inquiries</p>
                </div>
              </div>
            </section>

            {/* Download Section */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b">Download Full Press Kit</h2>
              <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Complete Press Kit ZIP</h3>
                <p className="mb-4 text-blue-100">
                  Includes high-resolution logos, team photos, fact sheet, and press releases.
                </p>
                <button className="px-6 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition duration-300">
                  Download Full Package (ZIP, 45 MB)
                </button>
              </div>
            </section>

            {/* Back to Home */}
            <div className="text-center pt-6 border-t">
              <Link 
                to="/" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to SkillSwap Home
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer /> {/* Use your own component */}
    </>
  );
};

export default PressKit;