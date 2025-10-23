import React from "react";

const TopRatedProviders = () => {
  return (
    <section className="w-11/12 mx-auto my-10 bg-[#f8fafc] p-6 rounded-lg shadow">
      <h2 className="text-3xl font-bold text-center mb-6 text-[#1e3a8a]">
        🌟 Top Rated Providers
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Provider 1 */}
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <img
            src="https://i.postimg.cc/VLp3SLfC/javascript.jpg"
            alt="Rafiul Islam"
            className="w-full h-48 object-cover rounded-md"
          />
          <h3 className="mt-3 font-semibold text-lg">Rafiul Islam</h3>
          <p className="text-gray-600 text-sm">Basic Coding with JavaScript</p>
          <p className="text-yellow-500 mt-1 font-medium">⭐ 4.9</p>
        </div>

        {/* Provider 2 */}
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <img
            src="https://i.postimg.cc/KjC07vCp/graphic-design.jpg"
            alt="Michael Torres"
            className="w-full h-48 object-cover rounded-md"
          />
          <h3 className="mt-3 font-semibold text-lg">Michael Torres</h3>
          <p className="text-gray-600 text-sm">Graphic Design Essentials</p>
          <p className="text-yellow-500 mt-1 font-medium">⭐ 4.9</p>
        </div>

        {/* Provider 3 */}
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <img
            src="https://i.postimg.cc/Zn5t1G1W/yoga.jpg"
            alt="Priya Sharma"
            className="w-full h-48 object-cover rounded-md"
          />
          <h3 className="mt-3 font-semibold text-lg">Priya Sharma</h3>
          <p className="text-gray-600 text-sm">Yoga for Beginners</p>
          <p className="text-yellow-500 mt-1 font-medium">⭐ 4.7</p>
        </div>
      </div>
    </section>
  );
};

export default TopRatedProviders;
