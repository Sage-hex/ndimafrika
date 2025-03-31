// const NdimAfrikaDetails = () => {
//     return (
//       <section className="bg-[#1A1A1A] text-white py-16 px-6 lg:px-24">
//         <div className="max-w-6xl mx-auto text-center lg:text-left">
//           <h2 className="text-4xl font-bold text-[#EAB308]">About NdimAfrika</h2>
//           <p className="mt-4 text-lg text-gray-300">
//             NdimAfrika is a revolutionary digital library dedicated to preserving and sharing African stories,
//             culture, and heritage. Our mission is to provide an immersive storytelling experience that connects users
//             with the rich traditions and history of Africa.
//           </p>
//         </div>
  
//         {/* Features Section */}
//         <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {/* Feature 1 */}
//           <div className="bg-[#262626] p-6 rounded-lg shadow-md hover:shadow-lg transition">
//             <h3 className="text-2xl font-semibold text-[#EAB308]">History of African Storytelling</h3>
//             <p className="mt-3 text-gray-300">
//               Explore the roots of African storytelling, from oral traditions to written literature, and learn how stories
//               have shaped cultures across the continent.
//             </p>
//           </div>
  
//           {/* Feature 2 */}
//           <div className="bg-[#262626] p-6 rounded-lg shadow-md hover:shadow-lg transition">
//             <h3 className="text-2xl font-semibold text-[#EAB308]">Meet the Team</h3>
//             <p className="mt-3 text-gray-300">
//               Get to know the passionate creators behind NdimAfrika, including writers, developers, and cultural
//               historians who contribute to our growing library.
//             </p>
//           </div>
  
//           {/* Feature 3 */}
//           <div className="bg-[#262626] p-6 rounded-lg shadow-md hover:shadow-lg transition">
//             <h3 className="text-2xl font-semibold text-[#EAB308]">Support & Contact</h3>
//             <p className="mt-3 text-gray-300">
//               Want to contribute or provide feedback? Learn how you can support our mission and connect with our team.
//             </p>
//           </div>
//         </div>
//       </section>
//     );
//   };
  
//   export default NdimAfrikaDetails;
  


const NdimAfrikaDetails = () => {
  return (
    <section className="bg-[#121926] text-white py-16 px-6 lg:px-24">
      <div className="max-w-6xl mx-auto text-left md:text-center lg:text-left">
        <h2 className="text-4xl font-bold text-[#FACC15]">About NdimAfrika</h2>
        <p className="mt-4 md:text-lg text-gray-200">
          NdimAfrika is a groundbreaking digital library committed to preserving and celebrating Africa’s diverse
          cultures, histories, and storytelling traditions. Through an immersive and interactive platform, we provide
          access to a vast collection of literature, oral traditions, historical texts, and modern African narratives.
        </p>
        <p className="mt-4 md:text-lg text-gray-200">
          Our mission is to bridge the gap between traditional storytelling and digital accessibility, ensuring that 
          African stories reach a global audience while keeping their authenticity and cultural significance intact.
        </p>
      </div>

      {/* Features Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Feature 1 */}
        <div className="bg-[#1E293B] p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105 duration-300">
          <h3 className="text-2xl font-semibold text-[#FACC15]">Preserving African Heritage</h3>
          <p className="mt-3 text-gray-200">
            Our platform safeguards the essence of African storytelling, offering a digital archive of folktales, myths,
            and literature from various regions and ethnic groups across the continent.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-[#1E293B] p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105 duration-300">
          <h3 className="text-2xl font-semibold text-[#FACC15]">Interactive Learning Experience</h3>
          <p className="mt-3 text-gray-200">
            Users can explore African narratives through text, audio, and visual formats, featuring synchronized text 
            highlighting with audio narration for an engaging reading experience.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-[#1E293B] p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105 duration-300">
          <h3 className="text-2xl font-semibold text-[#FACC15]">Community and Collaboration</h3>
          <p className="mt-3 text-gray-200">
            We collaborate with African writers, historians, and artists to continuously expand our library and ensure
            authentic representation of African cultures and histories.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NdimAfrikaDetails;
