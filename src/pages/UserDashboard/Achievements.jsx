import React from "react";

const Achievements = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-[#6B4226] mb-4">🏆 Achievements</h1>
      <p className="text-gray-700 mb-6">Your milestones in cultural storytelling.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example Achievement Card */}
        <div className="bg-[#F5DEB3] p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Story Explorer</h3>
          <p className="text-gray-800">You’ve read 10 African folktales.</p>
        </div>

        <div className="bg-[#F5DEB3] p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Master Storyteller</h3>
          <p className="text-gray-800">You’ve narrated your first tale.</p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
