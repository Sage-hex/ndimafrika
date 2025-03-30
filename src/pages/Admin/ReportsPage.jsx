export default function ReportsPage() {
    return (
      <div className="p-2 md:p-6">
        <h2 className="text-2xl font-bold mb-4">📊 Reports & Analytics</h2>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">📕 Total Books Published</h2>
            <p className="text-3xl font-bold">120</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">👀 User Engagement</h2>
            <p className="text-3xl font-bold">15,200 Views</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">⏳ Pending Approvals</h2>
            <p className="text-3xl font-bold">5</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">💾 Storage Usage</h2>
            <p className="text-3xl font-bold">75%</p>
          </div>
        </div>
  
        <h3 className="text-xl font-bold mt-6">🔔 Recent Activity</h3>
        <ul className="bg-white p-6 rounded-lg shadow-lg divide-y divide-gray-300">
          <li className="p-3">📤 User John uploaded a new African folktale.</li>
          <li className="p-3">✅ Admin approved "Legends of Africa".</li>
          <li className="p-3">⚠️ User report flagged inappropriate content.</li>
        </ul>
      </div>
    );
  }
  