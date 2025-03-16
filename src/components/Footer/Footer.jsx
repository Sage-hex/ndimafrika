// import React from "react";

// const Footer = () => {
//   return (
//     <div>
//       <footer className="bg-gray-900 text-white text-center py-4">
//         <p>&copy; {new Date().getFullYear()} My App</p>
//       </footer>
//     </div>
//   );
// };

// export default Footer;


import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiEarthFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-[#3A2005] text-white py-10 px-6 md:px-20 flex flex-col gap-8">
      {/* Top Section */}
      <div className="flex w-full  flex-col md:flex-row justify-between items-center border-b border-gray-500 pb-6">
        <h2 className="text-xl md:text-2xl font-bold text-[#F4A261] tracking-wide">
          Voices of the Ancestors
        </h2>
        <p className="text-sm max-w-lg text-center md:text-left text-gray-300">
          Exploring African heritage through immersive storytelling and VR.
        </p>
      </div>
      
      {/* Links Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
        <div>
          <h3 className="text-[#F4A261] font-semibold pb-2">Explore</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#F4A261] transition">Home</a></li>
            <li><a href="#" className="hover:text-[#F4A261] transition">Stories</a></li>
            <li><a href="#" className="hover:text-[#F4A261] transition">Library</a></li>
            <li><a href="#" className="hover:text-[#F4A261] transition">About Us</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-[#F4A261] font-semibold pb-2">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#F4A261] transition">Blog</a></li>
            <li><a href="#" className="hover:text-[#F4A261] transition">FAQs</a></li>
            <li><a href="#" className="hover:text-[#F4A261] transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#F4A261] transition">Terms & Conditions</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-[#F4A261] font-semibold pb-2">Stay Connected</h3>
          <div className="flex gap-4 mt-2">
            <a href="#" className="text-gray-300 hover:text-[#F4A261]"><FaFacebook size={20} /></a>
            <a href="#" className="text-gray-300 hover:text-[#F4A261]"><FaTwitter size={20} /></a>
            <a href="#" className="text-gray-300 hover:text-[#F4A261]"><FaInstagram size={20} /></a>
            <a href="#" className="text-gray-300 hover:text-[#F4A261]"><FaYoutube size={20} /></a>
          </div>
        </div>
        <div>
          <h3 className="text-[#F4A261] font-semibold pb-2">Newsletter</h3>
          <div className="flex items-center border border-gray-500 rounded-md overflow-hidden">
            <input type="email" placeholder="Enter email" className="w-full px-3 py-2 bg-transparent text-white focus:outline-none" />
            <button className="bg-[#F4A261] p-2"><MdEmail size={20} /></button>
          </div>
        </div>
      </div>
      
      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 border-t border-gray-500 pt-6">
        <p>© 2025 Voices of the Ancestors. All rights reserved.</p>
        <div className="flex items-center gap-2">
          <RiEarthFill size={18} className="text-[#F4A261]" />
          <select className="bg-transparent text-white border border-gray-500 rounded-md px-2 py-1 text-sm focus:outline-none">
            <option>English</option>
            <option>Swahili</option>
            <option>Igbo</option>
            <option>Yoruba</option>
            <option>Amharic</option>
          </select>
        </div>
      </div>
    </footer>
  );
};

export default Footer;