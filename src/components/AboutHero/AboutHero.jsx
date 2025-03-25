import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const africanWords = [
  { word: "Ndini", meaning: "I am (Shona)" },
  { word: "NdimAfrica", meaning: "I am Africa (Shona)" },
  { word: "Ubuntu", meaning: "I am because we are (Zulu)" },
  { word: "Abibiman", meaning: "Land of the Black People (Akan)" },
  { word: "Uhuru", meaning: "Freedom (Swahili)" },
  { word: "Bantaba", meaning: "Gathering Place (Mandinka)" },
  { word: "Amandla", meaning: "Power (Zulu)" },
  { word: "Nyame", meaning: "God (Akan)" },
  { word: "Sawubona", meaning: "I see you (Zulu)" },
  { word: "Ewé", meaning: "Life (Ewe)" }
];

const images = [
  "/images/african-culture1.jpg",
  "/images/african-culture2.jpg",
  "/images/african-culture3.jpg"
];

const AboutHero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % africanWords.length);
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#0F172A] text-white min-h-screen flex items-center justify-center px-6 lg:px-24">
      <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl w-full">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <motion.h1
            key={currentWordIndex}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5 }}
            className="text-4xl lg:text-6xl font-bold text-[#EAB308]"
          >
            {africanWords[currentWordIndex].word}
          </motion.h1>
          <motion.p
            key={`meaning-${currentWordIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-4 text-lg text-gray-300"
          >
            {africanWords[currentWordIndex].meaning}
          </motion.p>

          {/* Buttons */}
          <div className="mt-6 flex gap-4 justify-center lg:justify-start">
            <button className="bg-[#EAB308] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#D97706]">
              Learn More
            </button>
            <button className="border border-[#EAB308] text-[#EAB308] px-6 py-3 rounded-lg font-semibold hover:bg-[#EAB308] hover:text-black">
              Get Involved
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <motion.img
            key={currentImageIndex}
            src={images[currentImageIndex]}
            alt="African Heritage"
            className="rounded-3xl w-full max-w-md lg:max-w-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;