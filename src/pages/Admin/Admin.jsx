

// import { useState } from "react";
// import UsersPage from "./UsersPage";
// import BooksPage from "./BooksPage";
// import ReportsPage from "./ReportsPage";
// import PublishNewBook from "./PublishNewBook";
// import DashboardOverview from "./DashboardOverview";

// export default function AdminDashboard() {
//   const [activeTab, setActiveTab] = useState("dashboard");

//   return (
//     <div className="flex min-h-screen bg-[#f4f1ea]">
//       {/* Sidebar */}
//       <aside className="w-64 bg-[#2c3e50] text-white p-6 min-h-screen">
//         <h2 className="text-2xl font-bold mb-6">📚 African Library Admin</h2>
//         <nav>
//           <ul className="space-y-4">
//             <li
//               className={`hover:bg-[#34495e] p-2 rounded cursor-pointer ${
//                 activeTab === "dashboard" ? "bg-[#34495e]" : ""
//               }`}
//               onClick={() => setActiveTab("dashboard")}
//             >
//               🏠 Dashboard
//             </li>
//             <li
//               className={`hover:bg-[#34495e] p-2 rounded cursor-pointer ${
//                 activeTab === "users" ? "bg-[#34495e]" : ""
//               }`}
//               onClick={() => setActiveTab("users")}
//             >
//               👥 Users
//             </li>
//             <li
//               className={`hover:bg-[#34495e] p-2 rounded cursor-pointer ${
//                 activeTab === "books" ? "bg-[#34495e]" : ""
//               }`}
//               onClick={() => setActiveTab("books")}
//             >
//               📖 Books
//             </li>
//             <li
//               className={`hover:bg-[#34495e] p-2 rounded cursor-pointer ${
//                 activeTab === "reports" ? "bg-[#34495e]" : ""
//               }`}
//               onClick={() => setActiveTab("reports")}
//             >
//               📊 Reports
//             </li>
//           </ul>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6">
//         {activeTab === "dashboard" && <DashboardOverview onNavigate={setActiveTab} />}
//         {activeTab === "users" && <UsersPage />}
//         {activeTab === "books" && <BooksPage onNavigate={setActiveTab} />}
//         {activeTab === "reports" && <ReportsPage />}
//         {activeTab === "publish" && <PublishNewBook />}
//       </main>
//     </div>
//   );
// }


// import { useState } from "react";
// import Sidebar from "./Sidebar"; // Import the Sidebar component
// import UsersPage from "./UsersPage";
// import BooksPage from "./BooksPage";
// import ReportsPage from "./ReportsPage";
// import PublishNewBook from "./PublishNewBook";
// import DashboardOverview from "./DashboardOverview";

// export default function AdminDashboard() {
//   const [activeTab, setActiveTab] = useState("dashboard");

//   return (
//     <div className="flex min-h-screen bg-[#f4f1ea]">
//       {/* Sidebar */}
//       <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

//       {/* Main Content */}
//       <main className="flex-1 p-6">
//         {activeTab === "dashboard" && <DashboardOverview onNavigate={setActiveTab} />}
//         {activeTab === "users" && <UsersPage />}
//         {activeTab === "books" && <BooksPage onNavigate={setActiveTab} />}
//         {activeTab === "reports" && <ReportsPage />}
//         {activeTab === "publish" && <PublishNewBook />}
//       </main>
//     </div>
//   );
// }






// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Sidebar from "./Sidebar";
// import UsersPage from "./UsersPage";
// import BooksPage from "./BooksPage";
// import ReportsPage from "./ReportsPage";
// import PublishNewBook from "./PublishNewBook";
// import DashboardOverview from "./DashboardOverview";

// export default function AdminDashboard() {
//   const [activeTab, setActiveTab] = useState("dashboard");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userName, setUserName] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Check if admin is logged in
//     const loggedIn = localStorage.getItem("isLoggedIn");
//     if (loggedIn === "true") {
//       setIsLoggedIn(true);
//       setUserName(localStorage.getItem("userName"));
//     } else {
//       navigate("/adminLogin"); // Redirect to login page if not logged in
//     }
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem("isLoggedIn");
//     localStorage.removeItem("userName");
//     setIsLoggedIn(false);
//     navigate("/adminLogin");
//   };

//   return (
//     <div className="flex min-h-screen bg-[#f4f1ea]">
//       {/* Sidebar */}
//       <Sidebar
//         activeTab={activeTab}
//         setActiveTab={setActiveTab}
//         isLoggedIn={isLoggedIn}
//         userName={userName}
//         onLogout={handleLogout}
        
//       />

//       {/* Main Content */}
//       <main className="flex-1 p-6">
//         {activeTab === "dashboard" && <DashboardOverview onNavigate={setActiveTab} />}
//         {activeTab === "users" && <UsersPage />}
//         {activeTab === "books" && <BooksPage onNavigate={setActiveTab} />}
//         {activeTab === "reports" && <ReportsPage />}
//         {activeTab === "publish" && <PublishNewBook />}
//       </main>
//     </div>
//   );
// }



import { useState } from "react";
import Sidebar from "./Sidebar"; // Import the Sidebar component
import UsersPage from "./UsersPage";
import BooksPage from "./BooksPage";
import ReportsPage from "./ReportsPage";
import PublishNewBook from "./PublishNewBook";
import DashboardOverview from "./DashboardOverview";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Assume admin is logged in
  const [userName, setUserName] = useState("John Doe");

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Add logout logic here (e.g., clear local storage, redirect to login page)
  };

  return (
    <div className="flex min-h-screen bg-[#f4f1ea]">
      {/* Sidebar */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isLoggedIn={isLoggedIn}
        userName={userName}
        onLogout={handleLogout}
      />

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-hidden">
        {activeTab === "dashboard" && <DashboardOverview onNavigate={setActiveTab} />}
        {activeTab === "users" && <UsersPage />}
        {activeTab === "books" && <BooksPage onNavigate={setActiveTab} />}
        {activeTab === "reports" && <ReportsPage />}
        {activeTab === "publish" && <PublishNewBook />}
      </main>
    </div>
  );
}