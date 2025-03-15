import React from "react";
import { Link, useNavigate } from "react-router-dom";

const UserDashboardNavbar = ({ user, onLogout }) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center bg-[#6B4226] p-4 text-white shadow-md">
      {/* Logo */}
      <h1 className="text-2xl font-bold">📚 Story Dashboard</h1>

      {/* User Info & Logout */}
      {user ? (
        <div className="flex items-center gap-4">
          <span className="text-lg">👤 {user.name}</span>
          <button
            onClick={() => {
              onLogout();
              navigate("/UserLogin"); // Redirect after logout
            }}
            className="bg-red-500 px-4 py-2 rounded-md"
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
