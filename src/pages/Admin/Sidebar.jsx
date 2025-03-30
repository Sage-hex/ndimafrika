


// import React from "react";

// export default function Sidebar({ activeTab, setActiveTab, isLoggedIn, userName, onLogout }) {
//   return (
//     <aside className="w-64 hidden md:block bg-[#2c3e50] text-white p-6 min-h-screen">
//       <h2 className="text-2xl font-bold mb-6">📚 African Library Admin</h2>
//       <nav>
//         <ul className="space-y-4">
//           <li
//             className={`hover:bg-[#34495e] p-2 rounded cursor-pointer ${
//               activeTab === "dashboard" ? "bg-[#34495e]" : ""
//             }`}
//             onClick={() => setActiveTab("dashboard")}
//           >
//             🏠 Dashboard
//           </li>
//           <li
//             className={`hover:bg-[#34495e] p-2 rounded cursor-pointer ${
//               activeTab === "users" ? "bg-[#34495e]" : ""
//             }`}
//             onClick={() => setActiveTab("users")}
//           >
//             👥 Users
//           </li>
//           <li
//             className={`hover:bg-[#34495e] p-2 rounded cursor-pointer ${
//               activeTab === "books" ? "bg-[#34495e]" : ""
//             }`}
//             onClick={() => setActiveTab("books")}
//           >
//             📖 Books
//           </li>
//           <li
//             className={`hover:bg-[#34495e] p-2 rounded cursor-pointer ${
//               activeTab === "reports" ? "bg-[#34495e]" : ""
//             }`}
//             onClick={() => setActiveTab("reports")}
//           >
//             📊 Reports
//           </li>
//           <li
//             className={`hover:bg-[#34495e] p-2 rounded cursor-pointer ${
//               activeTab === "publish" ? "bg-[#34495e]" : ""
//             }`}
//             onClick={() => setActiveTab("publish")}
//           >
//             ✍️ Publish New Book
//           </li>
//         </ul>
//       </nav>

//       {/* Dynamic Login/Logout Section */}
//       <div className="mt-auto space-y-4">
//         {isLoggedIn ? (
//           <div className="flex items-center justify-between bg-[#34495e] p-4 rounded">
//             <div className="flex items-center">
//               <img
//                 src="/images/admin.png" // Replace with actual admin avatar URL
//                 alt="Admin Avatar"
//                 className="w-10 h-10 rounded-full mr-2"
//               />
//               <span className="text-sm font-medium">{userName}</span>
//             </div>
//             <button
//               className="flex items-center text-red-500 hover:text-red-600"
//               onClick={onLogout}
//             >
//               <span className="mr-1">🔒</span> Logout
//             </button>
//           </div>
//         ) : null}
//       </div>
//     </aside>
//   );
// }



import React, { useState } from "react";

export default function Sidebar({ activeTab, setActiveTab, isLoggedIn, userName, onLogout }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle mobile menu

  return (
    <>
      {/* Desktop Sidebar (Visible Only on Larger Screens) */}
      <aside className="hidden md:block w-64 bg-[#2c3e50] text-white p-6 min-h-screen">
        <h2 className="text-2xl font-bold mb-6">📚 African Library Admin</h2>
        <nav>
          <ul className="space-y-4">
            <li
              className={`hover:bg-[#34495e] p-2 rounded cursor-pointer ${
                activeTab === "dashboard" ? "bg-[#34495e]" : ""
              }`}
              onClick={() => setActiveTab("dashboard")}
            >
              🏠 Dashboard
            </li>
            <li
              className={`hover:bg-[#34495e] p-2 rounded cursor-pointer ${
                activeTab === "users" ? "bg-[#34495e]" : ""
              }`}
              onClick={() => setActiveTab("users")}
            >
              👥 Users
            </li>
            <li
              className={`hover:bg-[#34495e] p-2 rounded cursor-pointer ${
                activeTab === "books" ? "bg-[#34495e]" : ""
              }`}
              onClick={() => setActiveTab("books")}
            >
              📖 Books
            </li>
            <li
              className={`hover:bg-[#34495e] p-2 rounded cursor-pointer ${
                activeTab === "reports" ? "bg-[#34495e]" : ""
              }`}
              onClick={() => setActiveTab("reports")}
            >
              📊 Reports
            </li>
            <li
              className={`hover:bg-[#34495e] p-2 rounded cursor-pointer ${
                activeTab === "publish" ? "bg-[#34495e]" : ""
              }`}
              onClick={() => setActiveTab("publish")}
            >
              ✍️ Publish New Book
            </li>
          </ul>
        </nav>

        {/* Dynamic Login/Logout Section */}
        <div className="mt-auto space-y-4">
          {isLoggedIn && (
            <div className="flex items-center justify-between bg-[#34495e] p-4 rounded">
              <div className="flex items-center">
                <img
                  src="https://via.placeholder.com/40" // Replace with actual admin avatar URL
                  alt="Admin Avatar"
                  className="w-10 h-10 rounded-full mr-2"
                />
                <span className="text-sm font-medium">{userName}</span>
              </div>
              <button
                className="flex items-center text-red-500 hover:text-red-600"
                onClick={onLogout}
              >
                <span className="mr-1">🔒</span> Logout
              </button>
            </div>
          )}
        </div>
      </aside>

      {/* Mobile Menu Button (Visible Only on Smaller Screens) */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-[#2c3e50] text-white p-2 rounded"
        onClick={(e) => {
          e.stopPropagation(); // Prevent the click from propagating to the overlay
          setIsMenuOpen((prev) => !prev); // Toggle menu state
        }}
      >
        ☰
      </button>

      {/* Overlay for Mobile Menu */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={(e) => {
            e.stopPropagation(); // Ensure overlay doesn't interfere with menu clicks
            setIsMenuOpen(false); // Close menu when clicking outside
          }}
        ></div>
      )}

      {/* Mobile Menu (Visible Only on Smaller Screens) */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed top-0 left-0 w-full h-full bg-[#2c3e50] text-white p-6 z-40 overflow-y-auto"
          onClick={(e) => e.stopPropagation()} // Prevent clicks inside the menu from closing it
        >
          {/* Close Button */}
          <button
            className="text-white hover:text-gray-300 mb-4"
            onClick={(e) => {
              e.stopPropagation(); // Stop event propagation
              setIsMenuOpen(false); // Close the menu
            }}
          >
            ✖️ Close
          </button>

          <h2 className="text-2xl font-bold mb-6">📚 African Library Admin</h2>
          <nav>
            <ul className="space-y-4">
              <li
                className={`hover:bg-[#34495e] p-2 rounded cursor-pointer ${
                  activeTab === "dashboard" ? "bg-[#34495e]" : ""
                }`}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent event propagation
                  setActiveTab("dashboard");
                  setIsMenuOpen(false);
                }}
              >
                🏠 Dashboard
              </li>
              <li
                className={`hover:bg-[#34495e] p-2 rounded cursor-pointer ${
                  activeTab === "users" ? "bg-[#34495e]" : ""
                }`}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent event propagation
                  setActiveTab("users");
                  setIsMenuOpen(false);
                }}
              >
                👥 Users
              </li>
              <li
                className={`hover:bg-[#34495e] p-2 rounded cursor-pointer ${
                  activeTab === "books" ? "bg-[#34495e]" : ""
                }`}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent event propagation
                  setActiveTab("books");
                  setIsMenuOpen(false);
                }}
              >
                📖 Books
              </li>
              <li
                className={`hover:bg-[#34495e] p-2 rounded cursor-pointer ${
                  activeTab === "reports" ? "bg-[#34495e]" : ""
                }`}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent event propagation
                  setActiveTab("reports");
                  setIsMenuOpen(false);
                }}
              >
                📊 Reports
              </li>
              <li
                className={`hover:bg-[#34495e] p-2 rounded cursor-pointer ${
                  activeTab === "publish" ? "bg-[#34495e]" : ""
                }`}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent event propagation
                  setActiveTab("publish");
                  setIsMenuOpen(false);
                }}
              >
                ✍️ Publish New Book
              </li>
            </ul>
          </nav>

          {/* Dynamic Login/Logout Section */}
          <div className="mt-auto space-y-4">
            {isLoggedIn && (
              <div className="flex items-center justify-between bg-[#34495e] p-4 rounded">
                <div className="flex items-center">
                  <img
                    src="https://via.placeholder.com/40" // Replace with actual admin avatar URL
                    alt="Admin Avatar"
                    className="w-10 h-10 rounded-full mr-2"
                  />
                  <span className="text-sm font-medium">{userName}</span>
                </div>
                <button
                  className="flex items-center text-red-500 hover:text-red-600"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent event propagation
                    onLogout();
                  }}
                >
                  <span className="mr-1">🔒</span> Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}