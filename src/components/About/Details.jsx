const NdimAfrikaDetails = () => {
    return (
      <section className="bg-[#1A1A1A] text-white py-16 px-6 lg:px-24">
        <div className="max-w-6xl mx-auto text-center lg:text-left">
          <h2 className="text-4xl font-bold text-[#EAB308]">About NdimAfrika</h2>
          <p className="mt-4 text-lg text-gray-300">
            NdimAfrika is a revolutionary digital library dedicated to preserving and sharing African stories,
            culture, and heritage. Our mission is to provide an immersive storytelling experience that connects users
            with the rich traditions and history of Africa.
          </p>
        </div>
  
        {/* Features Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <div className="bg-[#262626] p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-[#EAB308]">History of African Storytelling</h3>
            <p className="mt-3 text-gray-300">
              Explore the roots of African storytelling, from oral traditions to written literature, and learn how stories
              have shaped cultures across the continent.
            </p>
          </div>
  
          {/* Feature 2 */}
          <div className="bg-[#262626] p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-[#EAB308]">Meet the Team</h3>
            <p className="mt-3 text-gray-300">
              Get to know the passionate creators behind NdimAfrika, including writers, developers, and cultural
              historians who contribute to our growing library.
            </p>
          </div>
  
          {/* Feature 3 */}
          <div className="bg-[#262626] p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-[#EAB308]">Support & Contact</h3>
            <p className="mt-3 text-gray-300">
              Want to contribute or provide feedback? Learn how you can support our mission and connect with our team.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default NdimAfrikaDetails;
  