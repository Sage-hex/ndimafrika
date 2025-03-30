// export default function DashboardOverview({ setActiveTab }) {
//     return (
//       <div>
//         <h1 className="text-3xl font-bold mb-4">📌 Admin Dashboard</h1>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="p-6 bg-white rounded-lg shadow-lg">
//             <h2 className="text-lg font-semibold">👥 Total Users</h2>
//             <p className="text-3xl font-bold">256</p>
//           </div>
//           <div className="p-6 bg-white rounded-lg shadow-lg">
//             <h2 className="text-lg font-semibold">📖 Published Books</h2>
//             <p className="text-3xl font-bold">120</p>
//           </div>
//           <div className="p-6 bg-white rounded-lg shadow-lg">
//             <h2 className="text-lg font-semibold">📊 Reports Generated</h2>
//             <p className="text-3xl font-bold">45</p>
//           </div>
//         </div>
  
//         {/* Quick Links */}
//         <h3 className="text-xl font-bold mt-6">🚀 Quick Actions</h3>
//         <div className="flex space-x-4 mt-3">
//           <button
//             className="px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
//             onClick={() => setActiveTab("users")}
//           >
//             👥 Manage Users
//           </button>
//           <button
//             className="px-5 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
//             onClick={() => setActiveTab("books")}
//           >
//             📖 View Books
//           </button>
//           <button
//             className="px-5 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
//             onClick={() => setActiveTab("reports")}
//           >
//             📊 See Reports
//           </button>
//         </div>
  
//         {/* Recent Activities */}
//         <h3 className="text-xl font-bold mt-6">🔔 Recent Activities</h3>
//         <ul className="bg-white p-6 rounded-lg shadow-lg divide-y divide-gray-300">
//           <li className="p-3">📤 User John uploaded "The Lion's Journey".</li>
//           <li className="p-3">✅ Admin approved "African Wisdom Tales".</li>
//           <li className="p-3">⚠️ Report flagged for inappropriate content.</li>
//         </ul>
//       </div>
//     );
//   }
  


export default function DashboardOverview({ setActiveTab }) {
    return (
      <div className="md:p-6">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-4">📌 Admin Dashboard</h1>
  
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">👥 Total Users</h2>
            <p className="text-3xl font-bold">256</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">📖 Published Books</h2>
            <p className="text-3xl font-bold">120</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">📊 Reports Generated</h2>
            <p className="text-3xl font-bold">45</p>
          </div>
        </div>
  
        {/* Quick Links */}
        <h3 className="text-xl font-bold mt-6">🚀 Quick Actions</h3>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-3">
          <button
            className="px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition w-full md:w-auto"
            onClick={() => setActiveTab("users")}
          >
            👥 Manage Users
          </button>
          <button
            className="px-5 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition w-full md:w-auto"
            onClick={() => setActiveTab("books")}
          >
            📖 View Books
          </button>
          <button
            className="px-5 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition w-full md:w-auto"
            onClick={() => setActiveTab("reports")}
          >
            📊 See Reports
          </button>
        </div>
  
        {/* Recent Activities */}
        <h3 className="text-xl font-bold mt-6">🔔 Recent Activities</h3>
        <ul className="bg-white p-6 rounded-lg shadow-lg divide-y divide-gray-300">
          <li className="p-3">📤 User John uploaded "The Lion's Journey".</li>
          <li className="p-3">✅ Admin approved "African Wisdom Tales".</li>
          <li className="p-3">⚠️ Report flagged for inappropriate content.</li>
        </ul>
      </div>
    );
  }