import { FaBook, FaHeadphones, FaEye, FaFilePdf } from "react-icons/fa";
import { motion } from "framer-motion";

const HowItWorks = () => {
  return (
    <section className="bg-[#2E1A09] text-white min-h-screen flex flex-col items-center justify-center pt-30 p-6 lg:p-12">
      {/* Header */}
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl lg:text-6xl font-bold text-[#E76F51]">How It Works</h1>
        <p className="mt-4 text-lg lg:text-xl text-gray-300">
          Explore the VR library step by step and immerse yourself in Africa’s storytelling heritage.
        </p>
      </div>
      
      {/* Steps Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl">
        {/* Step 1 */}
        <motion.div className="bg-[#3A2005] p-6 rounded-lg shadow-lg text-center flex flex-col items-center" whileHover={{ scale: 1.05 }}>
          <FaBook size={40} className="text-[#F4A261] mb-4" />
          <h2 className="text-2xl font-semibold">Step 1: Browse the Library</h2>
          <p className="mt-2 text-gray-300">Discover a collection of rich African stories curated for immersive experiences.</p>
        </motion.div>
        
        {/* Step 2 */}
        <motion.div className="bg-[#3A2005] p-6 rounded-lg shadow-lg text-center flex flex-col items-center" whileHover={{ scale: 1.05 }}>
          <FaEye size={40} className="text-[#F4A261] mb-4" />
          <h2 className="text-2xl font-semibold">Step 2: Choose Your Experience</h2>
          <p className="mt-2 text-gray-300">Select whether you want to read, listen, or experience the story in VR.</p>
        </motion.div>
        
        {/* Step 3 */}
        <motion.div className="bg-[#3A2005] p-6 rounded-lg shadow-lg text-center flex flex-col items-center" whileHover={{ scale: 1.05 }}>
          <FaHeadphones size={40} className="text-[#F4A261] mb-4" />
          <h2 className="text-2xl font-semibold">Step 3: Listen & Follow Along</h2>
          <p className="mt-2 text-gray-300">Engage with synchronized text highlighting as the story is narrated.</p>
        </motion.div>
        
        {/* Step 4 */}
        <motion.div className="bg-[#3A2005] p-6 rounded-lg shadow-lg text-center flex flex-col items-center" whileHover={{ scale: 1.05 }}>
          <FaFilePdf size={40} className="text-[#F4A261] mb-4" />
          <h2 className="text-2xl font-semibold">Step 4: Access the PDF</h2>
          <p className="mt-2 text-gray-300">Download the story in PDF format for offline reading and preservation.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
