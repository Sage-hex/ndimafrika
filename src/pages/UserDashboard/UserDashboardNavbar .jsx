import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const UserDashboardNavbar = ({ user, onLogout }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex justify-between items-center bg-[#6B4226] p-4 text-white shadow-md">
      {/* Logo */}
      <h1 className="hidden md:block text-2xl font-bold">📚 Story Dashboard</h1>
      <button className="md:hidden right-6 rounded-full bg-Earthy-Brown p-4" onClick={() => setIsOpen(true)}>
                  <FaBars className="text-white text-2xl cursor-pointer" />
                </button>


{/* Mobile Navigation Menu */}
{/* {isOpen && (
 

<div className={`md:hidden fixed left-0 top-0 h-full w-64 bg-[#8B5A2B] text-white p-6 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
  <button className="absolute top-4 right-4 text-white text-2xl" onClick={() => setIsOpen(false)}>✖</button>
  <h2 className="text-2xl font-bold mb-6">📖 Dashboard Menu</h2>
  <nav className="space-y-4">
    <Link to="/userdashboard" className="block p-2 rounded-lg hover:bg-[#A67B5B]">📊 Overview</Link>
    <Link to="/userdashboard/my-stories" className="block p-2 rounded-lg hover:bg-[#A67B5B]">📚 My Stories</Link>
    <Link to="/userdashboard/achievements" className="block p-2 rounded-lg hover:bg-[#A67B5B]">🏆 Achievements</Link>
    <Link to="/userdashboard/subscription" className="block p-2 rounded-lg hover:bg-[#A67B5B]">💳 Subscription</Link>
    <Link to="/userdashboard/settings" className="block p-2 rounded-lg hover:bg-[#A67B5B]">⚙️ Settings</Link>
  </nav>
</div>
)} */}


      {/* Mobile Navigation Menu */}
      <div 
  className={`fixed top-0 left-0 h-full w-full bg-[#8B5A2B] text-white p-6 z-50 
              transition-all duration-[1000ms] ease-in-out transform
              ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
>
        <button className="absolute top-4 right-4 text-white text-2xl" onClick={() => setIsOpen(false)}>✖</button>
        <h2 className="text-2xl font-bold mb-6">📖 Dashboard Menu</h2>
        <nav className="space-y-4">
          <Link to="/userdashboard" className="block p-2 rounded-lg hover:bg-[#A67B5B]" onClick={() => setIsOpen(false)}>📊 Overview</Link>
          <Link to="/userdashboard/my-stories" className="block p-2 rounded-lg hover:bg-[#A67B5B]" onClick={() => setIsOpen(false)}>📚 My Stories</Link>
          <Link to="/userdashboard/achievements" className="block p-2 rounded-lg hover:bg-[#A67B5B]" onClick={() => setIsOpen(false)}>🏆 Achievements</Link>
          <Link to="/userdashboard/subscription" className="block p-2 rounded-lg hover:bg-[#A67B5B]" onClick={() => setIsOpen(false)}>💳 Subscription</Link>
          <Link to="/userdashboard/settings" className="block p-2 rounded-lg hover:bg-[#A67B5B]" onClick={() => setIsOpen(false)}>⚙️ Settings</Link>
          <button
            onClick={() => {
              onLogout();
              navigate("/userLogin"); // Redirect after logout
            }}
            className="bg-red-500 text-sm px-4 py-2 rounded-md"
          >
            Logout
          </button>
        </nav>
      </div>


      {/* User Info & Logout */}
      {user ? (
        <div className="flex items-center gap-4">
          <span className="text-lg md:text-lg">👤 {user.name}</span>
          <button
            onClick={() => {
              onLogout();
              navigate("/userLogin"); // Redirect after logout
            }}
            className="hidden md:block bg-red-500 px-4 py-2 rounded-md"
          >
            Logout
          </button>
        </div>
      ) : (
        <Link to="/login" className="bg-green-500 px-4 py-2 rounded-md">
          Login
        </Link>
      )}
    </div>
  );
};

export default UserDashboardNavbar;
