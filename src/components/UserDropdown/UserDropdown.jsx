import React, { useState } from "react";
import { FaCircleUser } from "react-icons/fa6";

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >

      <FaCircleUser className="text-Forest-Green text-4xl cursor-pointer hover:text-gray-200 transition" />

      {isOpen && (
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-md w-40 py-2 text-gray-800 border border-gray-200">
          <ul className="flex flex-col space-y-2">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Login</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Signup</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
