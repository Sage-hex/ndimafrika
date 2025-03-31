import React, { useState } from "react";

export default function HamburgerMenu({ activeTab, setActiveTab }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle mobile menu

  return (
    <>
      {/* Hamburger Menu Button (Mobile Only) */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-[#2c3e50] text-white p-2 rounded"
        onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle mobile menu
      >
        ☰
      </button>

      {/* Mobile Menu (Visible Only on Smaller Screens) */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed top-0 left-0 w-full h-full bg-[#2c3e50] text-white p-6 z-40 overflow-y-auto"
          onClick={(e) => e.stopPropagation()} // Prevent clicks inside the menu from closing it
        >
          {/* Close Button */}
          <button
            className="text-white hover:text-gray-300 mb-4"
            onClick={() => setIsMenuOpen(false)} // Close mobile menu
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
                onClick={() => {
                  setActiveTab("dashboard");
                  setIsMenuOpen(false); // Close mobile menu after selection
                }}
              >
                🏠 Dashboard
              </li>
              <li
                className={`hover:bg-[#34495e] p-2 rounded cursor-pointer ${
                  activeTab === "users" ? "bg-[#34495e]" : ""
                }`}
                onClick={() => {
                  setActiveTab("users");
                  setIsMenuOpen(false); // Close mobile menu after selection
                }}
              >
                👥 Users
              </li>
              <li
                className={`hover:bg-[#34495e] p-2 rounded cursor-pointer ${
                  activeTab === "books" ? "bg-[#34495e]" : ""
                }`}
                onClick={() => {
                  setActiveTab("books");
                  setIsMenuOpen(false); // Close mobile menu after selection
                }}
              >
                📖 Books
              </li>
              <li
                className={`hover:bg-[#34495e] p-2 rounded cursor-pointer ${
                  activeTab === "reports" ? "bg-[#34495e]" : ""
                }`}
                onClick={() => {
                  setActiveTab("reports");
                  setIsMenuOpen(false); // Close mobile menu after selection
                }}
              >
                📊 Reports
              </li>
              <li
                className={`hover:bg-[#34495e] p-2 rounded cursor-pointer ${
                  activeTab === "publish" ? "bg-[#34495e]" : ""
                }`}
                onClick={() => {
                  setActiveTab("publish");
                  setIsMenuOpen(false); // Close mobile menu after selection
                }}
              >
                ✍️ Publish New Book
              </li>
            </ul>
          </nav>
        </div>
      )}

      {/* Overlay for Mobile Menu */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsMenuOpen(false)} // Close mobile menu when clicking outside
        ></div>
      )}
    </>
  );
}