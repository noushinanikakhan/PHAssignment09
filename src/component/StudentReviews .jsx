import React from "react";

const StudentReviews = () => {
  return (
    <section className="w-11/12 mx-auto my-16 bg-[#f8fafc] p-8 rounded-lg shadow">
      <h2 className="text-3xl font-bold text-center mb-10 text-[#1e3a8a]">
        What Our Learners Say 🌟
      </h2>

      <div className="grid md:grid-cols-3 gap-6 text-gray-700">
        {/* Review 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-all duration-300 hover:scale-105 hover:bg-[#dbeafe] hover:shadow-xl">
          <p className="italic mb-4">
            “The coding sessions were amazing! The mentor explained every
            concept clearly and encouraged hands-on practice.”
          </p>
          <h3 className="font-semibold text-lg text-[#1e3a8a]">
            Rafiul Karim
          </h3>
          <p className="text-sm text-gray-500">Course: Basic Coding with JavaScript</p>
          <p className="text-yellow-500 mt-1 font-medium">⭐⭐⭐⭐⭐  5</p>
        </div>

        {/* Review 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-all duration-300 hover:scale-105 hover:bg-[#dcfce7] hover:shadow-xl">
          <p className="italic mb-4">
            “Yoga sessions helped me relax and focus better every day. Priya
            made it so easy for beginners like me.”
          </p>
          <h3 className="font-semibold text-lg text-[#1e3a8a]">
            Tamanna Rahman
          </h3>
          <p className="text-sm text-gray-500">Course: Yoga for Beginners</p>
          <p className="text-yellow-500 mt-1 font-medium">⭐⭐⭐⭐⭐  5</p>
        </div>

        {/* Review 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-all duration-300 hover:scale-105 hover:bg-[#fef3c7] hover:shadow-xl">
          <p className="italic mb-4">
            “The photography workshop was super engaging! I learned how to
            capture great lighting and composition.”
          </p>
          <h3 className="font-semibold text-lg text-[#1e3a8a]">
            Ahsan Chowdhury
          </h3>
          <p className="text-sm text-gray-500">Course: Photography Basics</p>
          <p className="text-yellow-500 mt-1 font-medium">⭐⭐⭐⭐⭐  5</p>
        </div>

      </div>
    </section>
  );
};

export default StudentReviews;
