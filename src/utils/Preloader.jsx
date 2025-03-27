// import React from "react";

// const Preloader = () => {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
//       <div className="w-16 h-16 border-4 border-blue-500 border-dotted rounded-full animate-spin"></div>
//     </div>
//   );
// };

// export default Preloader;


// import React from "react";

// const Preloader = () => {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-[#f4a261] z-50">
//       <svg
//         className="animate-spin w-24 h-24"
//         viewBox="0 0 100 100"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <circle cx="50" cy="50" r="45" stroke="#6a4c93" strokeWidth="10" fill="none" />
//         <path
//           d="M50 5 L58 30 H42 Z"
//           fill="#2a9d8f"
//           transform="rotate(45 50 50)"
//         />
//         <path
//           d="M50 5 L58 30 H42 Z"
//           fill="#e76f51"
//           transform="rotate(90 50 50)"
//         />
//         <path
//           d="M50 5 L58 30 H42 Z"
//           fill="#264653"
//           transform="rotate(135 50 50)"
//         />
//       </svg>
//     </div>
//   );
// };

// export default Preloader;


// import React from "react";

// const Preloader = () => {
//   return (
//     <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#f4a261] z-50">
//       {/* Rotating African-Inspired Symbol */}
//       <div className="relative w-24 h-24">
//         <svg
//           className="animate-[spin_3s_linear_infinite] w-full h-full"
//           viewBox="0 0 100 100"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           {/* Outer Circle with Tribal Pattern */}
//           <circle cx="50" cy="50" r="40" stroke="#6a4c93" strokeWidth="6" fill="none" strokeDasharray="10,10" />

//           {/* Rotating Tribal Patterns */}
//           <path
//             d="M50 10 L60 30 H40 Z"
//             fill="#2a9d8f"
//             transform="rotate(45 50 50)"
//           />
//           <path
//             d="M50 10 L60 30 H40 Z"
//             fill="#e76f51"
//             transform="rotate(90 50 50)"
//           />
//           <path
//             d="M50 10 L60 30 H40 Z"
//             fill="#264653"
//             transform="rotate(135 50 50)"
//           />
//           <path
//             d="M50 10 L60 30 H40 Z"
//             fill="#f4a261"
//             transform="rotate(180 50 50)"
//           />
//         </svg>
//       </div>

//       {/* African Proverb Below the Loader */}
//       <p className="mt-4 text-lg text-black italic font-bold text-center">
//         "Wisdom is like a baobab tree; no one person can embrace it alone."
//       </p>
//     </div>
//   );
// };

// export default Preloader;


import React from "react";

const Preloader = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[#f4a261] to-[#e76f51] z-50">

      {/* SVG of African People Holding Hands */}
      <div className="relative w-40 h-40">
        <svg
          className="animate-[spin_4s_linear_infinite] w-full h-full"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Circle for Layout */}
          <circle cx="100" cy="100" r="80" stroke="none" fill="none" />

          {/* African People Holding Hands */}
          {Array.from({ length: 6 }).map((_, i) => {
            const angle = (i * 360) / 6;
            const x = 100 + 65 * Math.cos((angle * Math.PI) / 180);
            const y = 100 + 65 * Math.sin((angle * Math.PI) / 180);
            const rotate = angle + 90; // Rotate figures to face outward

            return (
              <g key={i} transform={`translate(${x - 20}, ${y - 20}) rotate(${rotate} 20 20)`}>
                {/* Head */}
                <circle cx="20" cy="12" r="10" fill="#6a4c93" stroke="#3d2458" strokeWidth="3" />

                {/* Body */}
                <path
                  d="M 20 22 L 10 45 L 30 45 Z"
                  fill="#264653"
                  stroke="#1b2d2a"
                  strokeWidth="3"
                />

                {/* Arms (Connecting Hands) */}
                <path
                  d="M 2 30 Q 20 15 38 30"
                  stroke="#e76f51"
                  strokeWidth="6"
                  fill="none"
                />
              </g>
            );
          })}
        </svg>
      </div>

      {/* African Proverb Below the Loader */}
      <p className="mt-4 text-lg text-black italic font-bold text-center">
        "Ubuntu – I am because we are."
      </p>
    </div>
  );
};

export default Preloader;
