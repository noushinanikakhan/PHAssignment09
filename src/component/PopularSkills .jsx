// import React, { useEffect, useState } from "react";
// import { Link } from "react-router";

// const PopularSkills = () => {
//   const [skills, setSkills] = useState([]);

//   useEffect(() => {
//     fetch("/skills.json")
//       .then((res) => res.json())
//       .then((data) => {
//         // Sort by rating (highest first) and take top 6
//         const topSkills = data
//           .sort((a, b) => b.rating - a.rating)
//           .slice(0, 6);
//         setSkills(topSkills);
//       });
//   }, []);

//   return (
//     <section className="w-11/12 mx-auto my-12">
//       <h2 className="text-3xl font-bold text-center mb-8 text-[#1e3a8a]">
//         🌟 Popular Skills
//       </h2>

//       <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//         {skills.map((skill) => (
//           <div
//             key={skill.skillId}
//             className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-300"
//           >
//             <img
//               src={skill.image}
//               alt={skill.skillName}
//               className="w-full h-48 object-cover"
//             />

//             <div className="p-4 text-center">
//               <h3 className="font-semibold text-lg text-[#1e3a8a] mb-1">
//                 {skill.skillName}
//               </h3>
//               <p className="text-gray-500 text-sm mb-2">
//                 Rating: ⭐ {skill.rating}
//               </p>
//               <p className="font-medium mb-3 text-gray-700">
//                 Price: ${skill.price}
//               </p>

//               <Link
//                 to={`/skill/${skill.skillId}`}
//                 className="inline-block bg-[#2563eb] text-white px-4 py-2 rounded-md hover:bg-[#1d4ed8] transition"
//               >
//                 View Details
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default PopularSkills;
