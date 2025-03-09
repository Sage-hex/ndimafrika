import React, { useState } from 'react';
import { FaCircleUser } from 'react-icons/fa6';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/NdimAfrika.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full border-2 border-red-500  md:py-8 flex justify-center items-center">
      <nav className="w-full md:w-[90%] flex justify-between items-center bg-green-500 h-[60%] py-2 px-6 md:px-20  shadow-md">
        {/* Logo Section */}
        <div className="flex items-center  bg-Earthy-Brown rounded-[50%] md:rounded-full md:px-4">
          <img src={logo} alt="brandlogo" className="w-12 object-contain h-12 rounded-full" />
          <h1 className="text-white hidden md:block text-lg font-bold">NdimAfrika</h1>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center justify-center space-x-8 text-primary-black bg-white w-[50%] px-6 py-[16px] rounded-4xl font-medium">
          <li className="hover:text-gray-200 transition font-notosans-semi-bold">Explore Library</li>
          <li className="hover:text-gray-200 transition font-notosans-semi-bold">How It Works</li>
          <li className="hover:text-gray-200 transition font-notosans-semi-bold text-color-primary">Pricing</li>
          <li className="hover:text-gray-200 transition font-notosans-semi-bold text-custom-font-size-xl">About Us</li>
        </ul>

        {/* User Icon (Always Visible) + Mobile Menu */}
        <div className="flex items-center space-x-6">
          {/* User Icon (Visible on Both Desktop & Mobile) */}
          <FaCircleUser className="text-Forest-Green text-4xl cursor-pointer hover:text-gray-200 transition" />

          {/* Mobile Menu Icon (Hidden on Desktop) */}
          <button className="md:hidden right-6 rounded-full bg-Earthy-Brown p-4" onClick={() => setIsOpen(true)}>
            <FaBars className="text-white text-2xl cursor-pointer" />
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-90 text-white flex flex-col items-center justify-center transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Close Button */}
        <button className="absolute top-6 right-6 text-4xl" onClick={() => setIsOpen(false)}>
          <FaTimes />
        </button>

        {/* Mobile Nav Links */}
        <ul className="flex flex-col items-center space-y-8 text-2xl font-semibold">
          <li className="hover:text-gray-300 transition" onClick={() => setIsOpen(false)}>Explore Library</li>
          <li className="hover:text-gray-300 transition" onClick={() => setIsOpen(false)}>How It Works</li>
          <li className="hover:text-gray-300 transition" onClick={() => setIsOpen(false)}>Pricing</li>
          <li className="hover:text-gray-300 transition" onClick={() => setIsOpen(false)}>About Us</li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
