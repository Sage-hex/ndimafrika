import React from "react";

const Settings = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-[#6B4226] mb-4">⚙️ Settings</h1>
      <p className="text-gray-700 mb-6">Customize your experience.</p>

      <div className="bg-[#F5DEB3] p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold">Profile Information</h2>
        <p className="text-gray-800">Update your name, email, and profile picture.</p>
        <button className="mt-4 bg-[#6B4226] text-white px-4 py-2 rounded-lg">Edit Profile</button>
      </div>
    </div>
  );
};

export default Settings;
