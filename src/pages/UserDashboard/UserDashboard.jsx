// import React from "react";
// import { Link } from "react-router-dom";

// const UserDashboard = () => {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-1/4 bg-white shadow-lg p-6">
//         <h2 className="text-2xl font-bold mb-6">User Dashboard</h2>
//         <nav className="space-y-4">
//           <Link to="/dashboard" className="block p-2 rounded-lg hover:bg-gray-200">
//             Dashboard Overview
//           </Link>
//           <Link to="/my-stories" className="block p-2 rounded-lg hover:bg-gray-200">
//             My Stories
//           </Link>
//           <Link to="/achievements" className="block p-2 rounded-lg hover:bg-gray-200">
//             Achievements
//           </Link>
//           <Link to="/subscription" className="block p-2 rounded-lg hover:bg-gray-200">
//             Subscription & Payments
//           </Link>
//           <Link to="/settings" className="block p-2 rounded-lg hover:bg-gray-200">
//             Settings
//           </Link>
//         </nav>
//       </div>

//       {/* Main Dashboard Content */}
//       <div className="w-3/4 p-8">
//         <h1 className="text-3xl font-bold mb-6">Welcome, User!</h1>

//         {/* Quick Access Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           <div className="bg-white p-4 rounded-lg shadow-md">
//             <h3 className="text-xl font-semibold">Saved Stories</h3>
//             <p className="text-gray-600">View and continue your saved stories.</p>
//           </div>
//           <div className="bg-white p-4 rounded-lg shadow-md">
//             <h3 className="text-xl font-semibold">Recent Activity</h3>
//             <p className="text-gray-600">Check your recently explored stories.</p>
//           </div>
//           <div className="bg-white p-4 rounded-lg shadow-md">
//             <h3 className="text-xl font-semibold">Subscription Status</h3>
//             <p className="text-gray-600">Manage your subscription and premium access.</p>
//           </div>
//         </div>

//         {/* Recommended Stories */}
//         <div className="mt-8">
//           <h2 className="text-2xl font-bold mb-4">Recommended Stories</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             <div className="bg-white p-4 rounded-lg shadow-md">
//               <h3 className="text-xl font-semibold">Story 1</h3>
//               <p className="text-gray-600">Discover an amazing cultural tale.</p>
//             </div>
//             <div className="bg-white p-4 rounded-lg shadow-md">
//               <h3 className="text-xl font-semibold">Story 2</h3>
//               <p className="text-gray-600">Explore the depth of African history.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;


// import React from "react";
// import { Link, Outlet } from "react-router-dom";
// import { FaBook, FaTrophy, FaCrown, FaCog, FaHome } from "react-icons/fa";

// const Dashboard = () => {
//   return (
//     <div className="flex h-screen bg-[#F3E9DC] pt[15vh]">
//       {/* Sidebar */}
//       <div className="w-1/4 bg-[#6B4226] text-white shadow-lg p-6">
//         <h2 className="text-3xl font-bold mb-6 font-serif">🌍 African Tales</h2>
//         <nav className="space-y-4">
//           <Link to="/userdashboard" className="block flex items-center gap-2 p-2 rounded-lg hover:bg-[#9C6A44]">
//             <FaHome /> Dashboard Overview
//           </Link>
//           <Link to="/userdashboard/my-stories" className="block flex items-center gap-2 p-2 rounded-lg hover:bg-[#9C6A44]">
//             <FaBook /> My Stories
//           </Link>
//           <Link to="/userdashboard/achievements" className="block flex items-center gap-2 p-2 rounded-lg hover:bg-[#9C6A44]">
//             <FaTrophy /> Achievements
//           </Link>
//           <Link to="/userdashboard/subscription" className="block flex items-center gap-2 p-2 rounded-lg hover:bg-[#9C6A44]">
//             <FaCrown /> Subscription & Payments
//           </Link>
//           <Link to="/userdashboard/settings" className="block flex items-center gap-2 p-2 rounded-lg hover:bg-[#9C6A44]">
//             <FaCog /> Settings
//           </Link>
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="w-3/4 p-8">
//         <Outlet />
//       </div>
//     </div>

//   );
// };

// export default Dashboard;


import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import UserDashboardNavbar from "./UserDashboardNavbar ";
import UserDashboardSidebar from "./UserDashboardSidebar";

const Dashboard = () => {
  const navigate = useNavigate();

  // Mock user authentication (Replace with Firebase or API later)
  const [user, setUser] = useState({
    name: "Kofi Mensah",
    email: "kofi@example.com",
  });

  const handleLogout = () => {
    setUser(null);
    navigate("/userLogin"); // Redirect to login page
  };

  if (!user) {
    return <p className="text-center text-red-500 text-2xl">Access Denied. Please Login.</p>;
  }

  return (
    <div className="flex h-screen">
      <UserDashboardSidebar/>
      <div className="w-full">
        <UserDashboardNavbar user={user} onLogout={handleLogout} />
        <div className="p-6">
          <Outlet /> {/* This loads the correct dashboard section */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
