














// import React, { useState, useEffect } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import logo from "../../assets/NdimAfrika.png";
// import UserDropdown from "../UserDropDown/UserDropDown"; 
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full h-[10vh] bg-red-600 z-50 transition-all duration-300 ${
//         isScrolled ? "bg-transparent shadow-md" : "bg-transparent"
//       }`}
//     >
//       <nav className="w-full lg:w-[90%] flex justify-between items-center h-[60px] py-2 px-6 lg:px-20 mx-auto">
//         {/* Logo Section */}
//         <div className="flex items-center bg-Earthy-Brown rounded-[50%] md:rounded-full md:px-4">
//           <img src={logo} alt="brandlogo" className="w-12 object-contain h-12 rounded-full" />
//           <h1 className="text-white hidden md:block text-lg font-bold">NdimAfrika</h1>
//         </div>

//         {/* Desktop Navigation */}
//         <ul className="hidden lg:flex items-center justify-center space-x-8 text-primary-black bg-white w-[50%] px-6 py-[16px] rounded-4xl font-medium shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.15)]">
//           <li className="hover:text-gray-200 transition font-notosans-semi-bold">How It Works</li>
//           <li className="hover:text-gray-200 transition font-notosans-semi-bold text-color-primary">Pricing</li>
//           <li className="hover:text-gray-200 transition font-notosans-semi-bold text-custom-font-size-xl">About Us</li>
//         </ul>

//         {/* User Icon & Mobile Menu */}
//         <div className="flex items-center space-x-6">
//           <UserDropdown />
//           <button className="lg:hidden right-6 rounded-full bg-Earthy-Brown p-4" onClick={() => setIsOpen(true)}>
//             <FaBars className="text-white text-2xl cursor-pointer" />
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Navigation Menu */}
//       <div
//         className={`fixed inset-0 bg-black bg-opacity-90 text-white flex flex-col items-center justify-center transition-transform duration-500 ease-in-out ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <button className="absolute top-6 right-6 text-4xl" onClick={() => setIsOpen(false)}>
//           <FaTimes />
//         </button>
//         <ul className="flex flex-col items-center space-y-8 text-2xl font-semibold">
//           <li className="hover:text-gray-300 transition" onClick={() => setIsOpen(false)}>
//             Explore Library
//           </li>
//           <li className="hover:text-gray-300 transition" onClick={() => setIsOpen(false)}>
//             How It Works
//           </li>
//           <li className="hover:text-gray-300 transition" onClick={() => setIsOpen(false)}>
//             Pricing
//           </li>
//           <li className="hover:text-gray-300 transition" onClick={() => setIsOpen(false)}>
//             About Us
//           </li>
//         </ul>
//       </div>
//     </header>
//   );
// };

// export default Navbar;


// import React, { useState, useEffect } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import logo from "../../assets/NdimAfrika.png";
// import UserDropdown from "../UserDropDown/UserDropDown"; 
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full p-8 z-50 transition-all duration-300 ${
//         isScrolled ? "bg-white shadow-md" : "bg-transparent"
//       }`}
//       // style={{ backdropFilter: "blur(10px)" }} // Optional: Adds a frosted glass effect
//     >
//       <nav className="w-full lg:w-[90%] flex justify-between items-center h-[60px] py-2 px-6 lg:px-20 mx-auto">
//         {/* Logo Section */}
//         <div className="flex items-center bg-Earthy-Brown rounded-[50%] md:rounded-full md:px-4">
//           <img src={logo} alt="brandlogo" className="w-12 object-contain h-12 rounded-full" />
//           <h1 className="text-white hidden md:block text-lg font-bold">NdimAfrika</h1>
//         </div>

//         {/* Desktop Navigation */}
//         <ul className="hidden lg:flex items-center justify-center space-x-8 text-primary-black bg-white w-[50%] px-6 py-[16px] rounded-4xl font-medium shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.15)]">
//           <li className="hover:text-gray-200 transition font-notosans-semi-bold">How It Works</li>
//           <li className="hover:text-gray-200 transition font-notosans-semi-bold text-color-primary">Pricing</li>
//           <li className="hover:text-gray-200 transition font-notosans-semi-bold text-custom-font-size-xl">About Us</li>
//         </ul>

//         {/* User Icon & Mobile Menu */}
//         <div className="flex items-center space-x-6">
//           <UserDropdown />
//           <button className="lg:hidden right-6 rounded-full bg-Earthy-Brown p-4" onClick={() => setIsOpen(true)}>
//             <FaBars className="text-white text-2xl cursor-pointer" />
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Navigation Menu */}
//       <div
//         className={`fixed inset-0 bg-black bg-opacity-90 text-white flex flex-col items-center justify-center transition-transform duration-500 ease-in-out ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <button className="absolute top-6 right-6 text-4xl" onClick={() => setIsOpen(false)}>
//           <FaTimes />
//         </button>
//         <ul className="flex flex-col items-center space-y-8 text-2xl font-semibold">
//           <li className="hover:text-gray-300 transition" onClick={() => setIsOpen(false)}>
//             Explore Library
//           </li>
//           <li className="hover:text-gray-300 transition" onClick={() => setIsOpen(false)}>
//             How It Works
//           </li>
//           <li className="hover:text-gray-300 transition" onClick={() => setIsOpen(false)}>
//             Pricing
//           </li>
//           <li className="hover:text-gray-300 transition" onClick={() => setIsOpen(false)}>
//             About Us
//           </li>
//         </ul>
//       </div>
//     </header>
//   );
// };

// export default Navbar;



// import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import logo from "../../assets/NdimAfrika.png";
// import UserDropdown from "../UserDropDown/UserDropDown"; 
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     // <header
//     //   className="fixed top-0 left-0 w-full h-[15vh] py-8  flex flex-col items-center justify-center z-50 "
//     //   style={{ backdropFilter: "blur(10px)" }} // Optional: Adds a frosted glass effect
//     // >
//     // <header className="fixed top-0 left-0 w-full h-[15vh] p-8 z-50 bg-gradient-to-r from-[#9C6A44] via-[#E09F3E] to-[#6B4226] shadow-lg backdrop-blur-md">
//     <header
//     className="fixed top-0 left-0 w-full h-[15vh] p-8 z-50 bg-transparent"
//     // style={{ backdropFilter: "blur(10px)" }} // Optional: Adds a frosted glass effect
//   >
//       <nav className="w-full lg:w-[90%] flex justify-between items-center h-[60px] py-2 md:px-6 lg:px-20 mx-auto">
//         {/* Logo Section */}
//         <div className="flex items-center bg-Earthy-Brown rounded-[50%] md:rounded-full md:px-4">
//           <img src={logo} alt="brandlogo" className="w-12 object-contain h-12 rounded-full" />
//           <h1 className="text-white hidden md:block text-lg font-bold">NdimAfrika</h1>
//         </div>

//         {/* Desktop Navigation */}
//         <ul className="hidden lg:flex items-center justify-center space-x-8 text-primary-black bg-white w-[50%] px-6 py-[16px] rounded-4xl font-medium shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.15)]">
//           <li className="hover:text-gray-200 transition font-notosans-semi-bold">How It Works</li>
//           <li className="hover:text-gray-200 transition font-notosans-semi-bold text-color-primary">Pricing</li>
//           <li className="hover:text-gray-200 transition font-notosans-semi-bold text-custom-font-size-xl">About Us</li>
//         </ul>

//         {/* User Icon & Mobile Menu */}
//         <div className="flex items-center space-x-6">
//           <UserDropdown />
//           <button className="lg:hidden right-6 rounded-full bg-Earthy-Brown p-4" onClick={() => setIsOpen(true)}>
//             <FaBars className="text-white text-2xl cursor-pointer" />
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Navigation Menu */}
//       <div
//         className={`fixed inset-0 h-[100vh] bg-black text-white flex flex-col items-start justify-start transition-transform duration-500 ease-in-out ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <button className="absolute top-6 right-6 text-4xl" onClick={() => setIsOpen(false)}>
//           <FaTimes />
//         </button>
//         <ul className="flex flex-col w-full mt-20 pl-6 space-y-8 text-2xl font-semibold">
//           <li
//             className="border-b border-gray-700 pb-2 hover:text-gray-300 transition"
//             onClick={() => setIsOpen(false)}
//           >
//             Explore Library
//           </li>
//           <li
//             className="border-b border-gray-700 pb-2 hover:text-gray-300 transition"
//             onClick={() => setIsOpen(false)}
//           >
//             How It Works
//           </li>
//           <li
//             className="border-b border-gray-700 pb-2 hover:text-gray-300 transition"
//             onClick={() => setIsOpen(false)}
//           >
//             Pricing
//           </li>
//           <li
//             className="border-b border-gray-700 pb-2 hover:text-gray-300 transition"
//             onClick={() => setIsOpen(false)}
//           >
//             About Us
//           </li>
//         </ul>
//       </div>
//     </header>
//   );
// };

// export default Navbar;




import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/NdimAfrika.png";
import UserDropdown from "../UserDropDown/UserDropDown"; 
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);

  }

  return (
    <header
      className="fixed top-0 left-0 w-full h-[15vh] p-8 z-50 bg-transparent"
      // style={{ backdropFilter: "blur(10px)" }} // Optional: Adds a frosted glass effect
    >
      <nav className="w-full lg:w-[90%] flex justify-between items-center h-[60px] py-2 md:px-6 lg:px-20 mx-auto">
        {/* Logo Section */}
        <div className="flex items-center bg-Earthy-Brown rounded-[50%] md:rounded-full md:px-4">
          <img src={logo} alt="brandlogo" className="w-12 object-contain h-12 rounded-full" />
          <h1 className="text-white hidden md:block text-lg font-bold">NdimAfrika</h1>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center justify-center space-x-8 text-primary-black bg-white w-[50%] px-6 py-[16px] cursor-pointer rounded-4xl font-medium shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.15)]">
          <li className="hover:text-gray-200 transition font-notosans-semi-bold" onClick={()=> handleNavigate('/howitworks')}>How It Works</li>
          <li className="hover:text-gray-200 transition font-notosans-semi-bold text-color-primary" onClick={()=> handleNavigate('/pricing')}>Pricing</li>
          <li className="hover:text-gray-200 transition font-notosans-semi-bold text-custom-font-size-xl" onClick={()=> handleNavigate('/about')}>About Us</li>
        </ul>

        {/* User Icon & Mobile Menu */}
        <div className="flex items-center space-x-6">
          <UserDropdown />
          <button className="lg:hidden right-6 rounded-full bg-Earthy-Brown p-4" onClick={() => setIsOpen(true)}>
            <FaBars className="text-white text-2xl cursor-pointer" />
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 h-[100vh] bg-black text-white flex flex-col items-start justify-start transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button className="absolute top-6 right-6 text-4xl" onClick={() => setIsOpen(false)}>
          <FaTimes />
        </button>
        <ul className="flex flex-col w-full mt-20 pl-6 space-y-8 text-2xl font-semibold">
          <li
            className="border-b border-gray-700 pb-2 hover:text-gray-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Explore Library
          </li>
          <li
            className="border-b border-gray-700 pb-2 hover:text-gray-300 transition"
            onClick={() => setIsOpen(false)}
          >
            How It Works
          </li>
          <li
            className="border-b border-gray-700 pb-2 hover:text-gray-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </li>
          <li
            className="border-b border-gray-700 pb-2 hover:text-gray-300 transition"
            onClick={() => setIsOpen(false)} 
            >
            About Us
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;