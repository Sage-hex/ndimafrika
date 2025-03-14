// import React from "react";

// const LibraryHero = () => {
//   return (
//     <div className="relative w-full h-[400px] bg-yellow-200 flex flex-col items-center justify-center text-center px-4">
//       {/* Background Elements */}
//       <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
//         <h1 className="text-5xl font-bold text-black">Delivering Happiness</h1>
//       </div>

//       {/* Road and Bike */}
//       <div className="absolute bottom-0 left-0 w-full flex items-end">
//         <div className="relative w-full h-20 bg-green-800 flex items-center overflow-hidden">
//           {/* Animated Bike */}
//           <div className="absolute left-[-100px] animate-bikeMove flex items-center">
//             <img src="/images/boy-on-bike22.png" alt="Delivery Bike" className="w-24 h-auto" />
//           </div>
//         </div>
//       </div>

//       {/* Trees */}
//       <div className="absolute bottom-20 left-1/4 flex space-x-6">
//         <img src="/images/small-tree.png" alt="Tree" className="w-16 h-auto" />
//         <img src="/images/small-tree.png" alt="Tree" className="w-20 h-auto" />
//         <img src="/images/small-tree.png" alt="Tree" className="w-18 h-auto" />
//       </div>

//       <style>
//         {`
//           @keyframes bikeMove {
//             0% { transform: translateX(0); }
//             100% { transform: translateX(100vw); }
//           }
//           .animate-bikeMove {
//             animation: bikeMove 5s linear infinite;
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default LibraryHero;


import React from "react";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[450px] bg-yellow-200 flex flex-col items-center justify-center text-center  px-4">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <h1 className="text-5xl md:text-7xl font-bold text-black">Discovering Knowledge</h1>
      </div>

      {/* Road and Lecturer */}
      <div className="absolute bottom-0 left-0 w-full flex items-end">
        <div className="relative w-full h-20 bg-gray-900 flex items-center overflow-hidden border-t-4 border-gray-700">
          {/* Road Markings */}
          <div className="absolute w-full h-1/5 bg-gray-600 flex justify-around">
            <div className="w-10 h-full bg-yellow-400"></div>
            <div className="w-10 h-full bg-yellow-400"></div>
            <div className="w-10 h-full bg-yellow-400"></div>
            <div className="w-10 h-full bg-yellow-400"></div>
          </div>
          {/* Animated Lecturer */}
          <div className="absolute left-[-100px] animate-bikeMove flex items-center">
            <img src="/images/school33.avif" alt="Lecturer Walking with Books" className="w-23 h-auto" />
            <img src="/images/boy-on-bike22.png" alt="Lecturer Walking with Books" className="w-23 h-auto" />
          </div>
        </div>
      </div>

      {/* Trees */}
      <div className="absolute bottom-20 left-0.5 md:left-1/4 flex space-x-6">
        <img src="/images/school2.png" alt="Tree" className="w-25 h-auto" />
        <img src="/images/small-tree.png" alt="Tree" className="w-20 h-auto" />
        <img src="/images/small-tree.png" alt="Tree" className="w-18 h-auto" />
      </div>

      <style>
        {`
          @keyframes bikeMove {
            0% { transform: translateX(0); }
            100% { transform: translateX(100vw); }
          }
          .animate-bikeMove {
            animation: bikeMove 5s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default HeroSection;