// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const africanWords = [
//   { word: "Ndini", meaning: "I am (Shona)" },
//   { word: "NdimAfrica", meaning: "I am Africa (Shona)" },
//   { word: "Ubuntu", meaning: "I am because we are (Zulu)" },
//   { word: "Abibiman", meaning: "Land of the Black People (Akan)" },
//   { word: "Uhuru", meaning: "Freedom (Swahili)" },
//   { word: "Bantaba", meaning: "Gathering Place (Mandinka)" },
//   { word: "Amandla", meaning: "Power (Zulu)" },
//   { word: "Nyame", meaning: "God (Akan)" },
//   { word: "Sawubona", meaning: "I see you (Zulu)" },
//   { word: "Ewé", meaning: "Life (Ewe)" }
// ];

// const images = [
//   "/images/african-culture1.jpg",
//   "/images/african-culture2.jpg",
//   "/images/african-culture3.jpg"
// ];

// const AboutHero = () => {
//   const [currentWordIndex, setCurrentWordIndex] = useState(0);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentWordIndex((prev) => (prev + 1) % africanWords.length);
//       setCurrentImageIndex((prev) => (prev + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="bg-[#0F172A] text-white min-h-screen flex items-center justify-center px-6 lg:px-24">
//       <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl w-full">
//         {/* Text Content */}
//         <div className="w-full lg:w-1/2 text-center lg:text-left">
//           <motion.h1
//             key={currentWordIndex}
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 10 }}
//             transition={{ duration: 0.5 }}
//             className="text-4xl lg:text-6xl font-bold text-[#EAB308]"
//           >
//             {africanWords[currentWordIndex].word}
//           </motion.h1>
//           <motion.p
//             key={`meaning-${currentWordIndex}`}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.5 }}
//             className="mt-4 text-lg text-gray-300"
//           >
//             {africanWords[currentWordIndex].meaning}
//           </motion.p>

//           {/* Buttons */}
//           <div className="mt-6 flex gap-4 justify-center lg:justify-start">
//             <button className="bg-[#EAB308] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#D97706]">
//               Learn More
//             </button>
//             <button className="border border-[#EAB308] text-[#EAB308] px-6 py-3 rounded-lg font-semibold hover:bg-[#EAB308] hover:text-black">
//               Get Involved
//             </button>
//           </div>
//         </div>

//         {/* Image Section */}
//         <div className="w-full lg:w-1/2 flex justify-center">
//           <motion.img
//             key={currentImageIndex}
//             src={images[currentImageIndex]}
//             alt="African Heritage"
//             className="rounded-3xl w-full max-w-md lg:max-w-lg shadow-lg"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.9 }}
//             transition={{ duration: 0.5 }}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutHero;



import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const africanWords = [
  { word: "Ndini", meaning: "I am (Shona)" },
  { word: "NdimAfrica", meaning: "I am Africa (Shona)" },
  { word: "Ubuntu", meaning: "I am because we are (Zulu)" },
  { word: "Abibiman", meaning: "Land of the Black People (Akan)" },
  { word: "Uhuru", meaning: "Freedom & Liberation (Swahili)" },
  { word: "Bantaba", meaning: "A sacred gathering place (Mandinka)" },
  { word: "Amandla", meaning: "Power & Strength (Zulu)" },
  { word: "Nyame", meaning: "God, the Supreme Creator (Akan)" },
  { word: "Sawubona", meaning: "I see you, I acknowledge you (Zulu)" },
  { word: "Ewé", meaning: "Life and existence (Ewe)" },
  { word: "Jom", meaning: "Honor, dignity, and self-respect (Wolof)" },
  { word: "Harambee", meaning: "Let’s pull together (Swahili)" },
  { word: "Isokan", meaning: "Unity and togetherness (Yoruba)" },
  { word: "Zamani", meaning: "The past that guides the present (Kiswahili)" }
];

const images = [
  "/images/african-culture1.jpg",
  "/images/african-culture2.jpg",
  "/images/african-culture3.jpg",
  "/images/african-culture17.jpg",
  "/images/african-culture5.jpg",
  "/images/african-culture6.jpg",
  "/images/african-culture7.jpg",
  "/images/african-culture8.jpg",
  "/images/african-culture9.jpg",
  "/images/african-culture10.jpg",
  "/images/african-culture11.jpg",
  "/images/african-culture12.jpg",
  "/images/african-culture13.jpg",
  "/images/african-culture14.jpg",
  "/images/african-culture15.jpg",
  "/images/african-culture16.jpg"
];

const AboutHero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % africanWords.length);
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#1B1B1B] bg-[#121926] text-white min-h-screen flex items-center justify-center px-6 lg:px-24 py-16">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12 max-w-6xl w-full">
        
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <motion.h1
            key={currentWordIndex}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5 }}
            className="text-5xl lg:text-7xl font-extrabold text-[#FACC15]"
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
            <button className="bg-[#FACC15] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#D97706] transition">
              Learn More
            </button>
            <button className="border border-[#FACC15] text-[#FACC15] px-6 py-3 rounded-lg font-semibold hover:bg-[#FACC15] hover:text-black transition">
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
