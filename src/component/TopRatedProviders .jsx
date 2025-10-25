import React from "react";

const TopRatedProviders = () => {
  return (
    <section className="w-11/12 mx-auto my-10 bg-[#f8fafc] p-6 rounded-lg shadow">
      <h2 className="text-2xl lg:text-3xl font-bold text-center mb-6 text-[#1e3a8a]">
         Top Rated Providers
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Provider 1 */}
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <img
            src="https://images.unsplash.com/photo-1605711285791-0219e80e43a3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169"
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
            src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1921"
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
            src="https://images.unsplash.com/photo-1758599881359-a3f089f33502?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332"
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
