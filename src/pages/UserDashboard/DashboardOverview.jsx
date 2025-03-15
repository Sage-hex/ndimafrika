import React from "react";

const DashboardOverview = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-[#6B4226] mb-4">👋 Welcome to Your Dashboard!</h1>
      <p className="text-gray-700 mb-6">Here’s a quick overview of your activity.</p>

      {/* Quick Links & Status */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-[#F5DEB3] p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">📖 Recently Read</h3>
          <p className="text-gray-800">You last read "The Tale of Anansi" yesterday.</p>
        </div>
        <div className="bg-[#F5DEB3] p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">🏆 Achievements</h3>
          <p className="text-gray-800">You unlocked "Story Explorer" this week.</p>
        </div>
        <div className="bg-[#F5DEB3] p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">💳 Subscription</h3>
          <p className="text-gray-800">Your Premium membership is active.</p>
        </div>
      </div>

      {/* Recommended Stories */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4 text-[#6B4226]">🌟 Recommended Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-[#F5DEB3] p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">🦁 The Lion and the Clever Hare</h3>
            <p className="text-gray-800">A battle of wits in the African savannah.</p>
          </div>
          <div className="bg-[#F5DEB3] p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">🌿 The River Goddess</h3>
            <p className="text-gray-800">A mystical story of love and magic.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
