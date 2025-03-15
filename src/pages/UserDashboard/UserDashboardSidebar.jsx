import React from "react";
import { Link } from "react-router-dom";

const UserDashboardSidebar = () => {
  return (
    <div className="hidden md:block w-1/4 bg-[#8B5A2B] text-white p-6">
      <h2 className="text-2xl font-bold mb-6">📖 Dashboard Menu</h2>
      <nav className="space-y-4">
        <Link to="/userdashboard" className="block p-2 rounded-lg hover:bg-[#A67B5B]">
          📊 Overview
        </Link>
        <Link to="/userdashboard/my-stories" className="block p-2 rounded-lg hover:bg-[#A67B5B]">
          📚 My Stories
        </Link>
        <Link to="/userdashboard/achievements" className="block p-2 rounded-lg hover:bg-[#A67B5B]">
          🏆 Achievements
        </Link>
        <Link to="/userdashboard/subscription" className="block p-2 rounded-lg hover:bg-[#A67B5B]">
          💳 Subscription
        </Link>
        <Link to="/userdashboard/settings" className="block p-2 rounded-lg hover:bg-[#A67B5B]">
          ⚙️ Settings
        </Link>
      </nav>

      {/* Mobile Nav */}

    </div>
  );
};

export default UserDashboardSidebar;
