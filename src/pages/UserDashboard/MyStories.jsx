import React from "react";

const MyStories = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-[#6B4226] mb-4">📖 My Saved Stories</h1>
      <p className="text-gray-700 mb-6">Here are the stories you’ve saved for later.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example Story Card */}
        <div className="bg-[#F5DEB3] p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">The Tale of Anansi</h3>
          <p className="text-gray-800">A legendary story of wisdom and trickery.</p>
        </div>

        <div className="bg-[#F5DEB3] p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">The Lion and the Clever Hare</h3>
          <p className="text-gray-800">A battle of wits in the African savannah.</p>
        </div>
      </div>
    </div>
  );
};

export default MyStories;
