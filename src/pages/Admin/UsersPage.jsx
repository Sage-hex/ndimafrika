import { useState } from "react";

export default function UsersPage() {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", subscription: "Premium" },
    { id: 2, name: "Jane Smith", subscription: "Basic" },
  ]);

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">👥 Manage Users</h2>
      <ul className="bg-white p-6 rounded-lg shadow-lg divide-y divide-gray-300">
        {users.map((user) => (
          <li key={user.id} className="p-3 flex justify-between items-center">
            {user.name} - {user.subscription}
            <button
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              onClick={() => deleteUser(user.id)}
            >
              ❌ Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
