

// import React from "react";

// export default function Sidebar({ activeTab, setActiveTab, isLoggedIn, userName, onLogin, onLogout }) {
//   return (
//     <aside className="w-64 bg-[#2c3e50] text-white p-6 min-h-screen">
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
//             <span className="text-sm font-medium">{userName}</span>
//             <button
//               className="flex items-center text-red-500 hover:text-red-600"
//               onClick={onLogout}
//             >
//               <span className="mr-1">🔒</span> Logout
//             </button>
//           </div>
//         ) : (
//           <button
//             className="flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
//             onClick={onLogin}
//           >
//             <span className="mr-2">🔑</span> Login
//           </button>
//         )}
//       </div>
//     </aside>
//   );
// }




import React from "react";

export default function Sidebar({ activeTab, setActiveTab, isLoggedIn, userName, onLogout }) {
  return (
    <aside className="w-64 hidden md:block bg-[#2c3e50] text-white p-6 min-h-screen">
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
        {isLoggedIn ? (
          <div className="flex items-center justify-between bg-[#34495e] p-4 rounded">
            <div className="flex items-center">
              <img
                src="/images/admin.png" // Replace with actual admin avatar URL
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
        ) : null}
      </div>
    </aside>
  );
}