import React from "react";

const Subscription = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-[#6B4226] mb-4">💳 Subscription & Payments</h1>
      <p className="text-gray-700 mb-6">Manage your membership and payments.</p>

      <div className="bg-[#F5DEB3] p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold">Your Current Plan: <span className="text-green-700">Premium</span></h2>
        <p className="text-gray-800">Next payment due: 12th April 2025</p>
        <button className="mt-4 bg-[#6B4226] text-white px-4 py-2 rounded-lg">Manage Subscription</button>
      </div>
    </div>
  );
};

export default Subscription;
