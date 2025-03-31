// import React, { useState } from "react";
// import { FaCircleUser } from "react-icons/fa6";

// const UserDropdown = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div 
//       className="relative"
//       onMouseEnter={() => setIsOpen(true)}
//       onMouseLeave={() => setIsOpen(false)}
//     >

//       <FaCircleUser className="text-[#FACC15]  text-4xl cursor-pointer hover:text-gray-200 transition" />

//       {isOpen && (
//         <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-md w-40 py-2 text-gray-800 border border-gray-200">
//           <ul className="flex flex-col space-y-2">
//             <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Login</li>
//             <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Signup</li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserDropdownn;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <FaCircleUser className="text-[#FACC15] text-4xl cursor-pointer hover:text-gray-200 transition" />

      {isOpen && (
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-md w-40 py-2 text-gray-800 border border-gray-200">
          <ul className="flex flex-col space-y-2">
            <li>
              <NavLink 
                to="/userLogin" 
                className={({ isActive }) => isActive ? "block px-4 py-2 text-yellow-500 font-bold" : "block px-4 py-2 hover:bg-gray-100"}
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/userSignup" 
                className={({ isActive }) => isActive ? "block px-4 py-2 text-yellow-500 font-bold" : "block px-4 py-2 hover:bg-gray-100"}
              >
                Signup
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
