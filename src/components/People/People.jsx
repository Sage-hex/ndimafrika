export default function PeopleComponent() {
    return (
      <div className="flex flex-col md:flex-row items-start gap-8 p-6 bg-red-500">
        {/* Left Section - Image */}
        <div className="w-full md:w-1/3">
          <img
            src="/profile-image.jpg"
            alt="Profile"
            className="w-full rounded-lg border border-gray-300"
          />
        </div>
  
        {/* Right Section - People List */}
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl font-bold mb-4">People</h2>
          <div className="divide-y divide-gray-200">
            {[
              { name: "Femi", role: "ANYWORK", highlight: false },
              { name: "Olumide", role: "ENGINEERING", highlight: false },
              { name: "Lanre", role: "OPERATIONS", highlight: true },
              { name: "Tomilola", role: "BUSINESS", highlight: false },
              { name: "Amaka", role: "GROWTH", highlight: false },
              { name: "Damian", role: "GROWTH", highlight: false },
            ].map((person, index) => (
              <div
                key={index}
                className={`flex justify-between items-center py-3 ${
                  person.highlight ? "text-yellow-500 font-semibold" : ""
                }`}
              >
                <span className="text-lg">{person.name}</span>
                <div className="flex items-center gap-2">
                  <span
                    className={`text-sm uppercase ${
                      person.highlight ? "text-yellow-500 font-bold" : "text-gray-500"
                    }`}
                  >
                    {person.role}
                  </span>
                  <button className="p-1 bg-gray-200 rounded">
                    📁
                  </button>
                  {person.highlight && (
                    <button className="p-1 bg-yellow-500 rounded text-white">
                      🔗
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  