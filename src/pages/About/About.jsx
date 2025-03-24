// import { motion } from "framer-motion";
// import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

// const AboutPage = () => {
//   return (
//     <section className="relative bg-[#3A2005] text-white min-h-screen flex flex-col items-center justify-center p-6 lg:p-12">
//       {/* Flying Birds Animation */}
//       <motion.div
//         className="absolute top-0 left-0 w-full h-full pointer-events-none"
//         animate={{ x: [0, -100, 100, 0], y: [0, -50, 50, 0] }}
//         transition={{ repeat: Infinity, duration: 20 }}
//       >
//         <img
//           src="/assets/flying-birds.png"
//           alt="Flying birds"
//           className="w-full opacity-30"
//         />
//       </motion.div>

//       {/* Hero Section */}
//       <div className="relative max-w-5xl text-center">
//         <h1 className="text-4xl lg:text-6xl font-bold text-[#E76F51]">Our Story</h1>
//         <p className="mt-4 text-lg lg:text-xl text-gray-300">
//           We celebrate Africa’s rich storytelling heritage, preserving cultural narratives through immersive VR experiences.
//         </p>
//       </div>

//       {/* Content Section */}
//       <div className="relative max-w-4xl mt-12 space-y-10">
//         <div className="flex flex-col lg:flex-row gap-10 items-center">
//           <img src="/assets/african-storytelling.jpg" alt="Storytelling" className="w-full lg:w-1/2 rounded-lg shadow-lg" />
//           <div className="lg:w-1/2 text-gray-200">
//             <h2 className="text-3xl font-semibold text-[#F4A261]">The Heartbeat of Africa</h2>
//             <p className="mt-3">
//               Storytelling is the soul of African culture, passed down through generations. Our platform bridges tradition and technology, bringing ancient stories to life in a digital age.
//             </p>
//           </div>
//         </div>

//         <div className="flex flex-col lg:flex-row-reverse gap-10 items-center">
//           <img src="/assets/african-griot.jpg" alt="African Griot" className="w-full lg:w-1/2 rounded-lg shadow-lg" />
//           <div className="lg:w-1/2 text-gray-200">
//             <h2 className="text-3xl font-semibold text-[#F4A261]">The Griot’s Legacy</h2>
//             <p className="mt-3">
//               The Griots—guardians of history and oral tradition—have kept Africa’s stories alive for centuries. We honor their legacy by ensuring these tales remain accessible to future generations.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Quote Section */}
//       <div className="mt-16 p-6 bg-[#E76F51] rounded-lg text-center max-w-3xl shadow-lg">
//         <FaQuoteLeft className="text-2xl text-white inline-block mb-2" />
//         <p className="text-lg italic">
//           "Until the lion learns to write, every story will glorify the hunter."
//         </p>
//         <FaQuoteRight className="text-2xl text-white inline-block mt-2" />
//       </div>
//     </section>
//   );
// };

// export default AboutPage;


import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const AboutPage = () => {
  return (
    <section className="bg-[#3A2005] text-white min-h-screen flex flex-col items-center p-6 lg:p-12">
      {/* Hero Section */}
      <div className="max-w-5xl text-center">
        <h1 className="text-4xl lg:text-6xl font-bold text-[#E76F51]">About Us</h1>
        <p className="mt-4 text-lg lg:text-xl text-gray-300">
          Preserving Africa’s storytelling heritage through immersive digital experiences.
        </p>
      </div>

      {/* History of African Storytelling */}
      <div className="max-w-4xl mt-12 space-y-10">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <img src="/images/hidden-history.jpg" alt="Storytelling" className="w-full lg:w-1/2 rounded-lg shadow-lg" />
          <div className="lg:w-1/2 text-gray-200">
            <h2 className="text-3xl font-semibold text-[#F4A261]">History of African Storytelling</h2>
            <p className="mt-3">
              African storytelling is an ancient art passed down through generations. From folktales to griots, these stories preserve our values, history, and wisdom.
            </p>
          </div>
        </div>
      </div>

      {/* Meet the Team */}
      <div className="max-w-4xl mt-16 text-center">
        <h2 className="text-3xl font-semibold text-[#F4A261]">Meet the Team</h2>
        <p className="mt-3 text-gray-300">
          Our passionate team is dedicated to preserving African heritage through technology.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          <div className="bg-[#5A3825] p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-gray-300">Founder & Visionary</p>
          </div>
          <div className="bg-[#5A3825] p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Jane Smith</h3>
            <p className="text-gray-300">Lead Developer</p>
          </div>
          <div className="bg-[#5A3825] p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Ahmed Yusuf</h3>
            <p className="text-gray-300">Cultural Consultant</p>
          </div>
        </div>
      </div>

      {/* Support & Contact */}
      <div className="max-w-3xl mt-16 text-center">
        <h2 className="text-3xl font-semibold text-[#E76F51]">Support & Contact</h2>
        <p className="mt-3 text-gray-300">
          Want to contribute or provide feedback? Contact us at <span className="text-[#F4A261]">support@africanlibrary.com</span>.
        </p>
      </div>

      {/* Quote Section */}
      <div className="mt-16 p-6 bg-[#E76F51] rounded-lg text-center max-w-3xl shadow-lg">
        <FaQuoteLeft className="text-2xl text-white inline-block mb-2" />
        <p className="text-lg italic">
          "Until the lion learns to write, every story will glorify the hunter."
        </p>
        <FaQuoteRight className="text-2xl text-white inline-block mt-2" />
      </div>
    </section>
  );
};

export default AboutPage;
