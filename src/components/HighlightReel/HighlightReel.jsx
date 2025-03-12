// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Play, Pause } from "lucide-react";

// const vrStories = [
//   {
//     id: 1,
//     title: "Ancient Egypt Experience",
//     description: "Explore the pyramids in full VR.",
//     video: "https://example.com/egypt-preview.mp4",
//   },
//   {
//     id: 2,
//     title: "The Nigerian Civil War",
//     description: "Get to Discover the Struggles of a nation.",
//     video: "https://www.youtube.com/embed/hcrWQZx_gb0",
//   },
//   {
//     id: 3,
//     title: "Space Exploration",
//     description: "Travel to Mars and beyond.",
//     video: "https://example.com/space-preview.mp4",
//   },
// ];

// export default function HighlightReel() {
//   const [playing, setPlaying] = useState(null);

//   useEffect(() => {
//     const autoPlay = setInterval(() => {
//       setPlaying((prev) => (prev === null ? 0 : (prev + 1) % vrStories.length));
//     }, 5000);

//     return () => clearInterval(autoPlay);
//   }, []);

//   return (
//     <div className="w-full p-6 bg-black text-white overflow-hidden">
//       <h2 className="text-3xl font-bold mb-4">Highlight Reel</h2>
//       <div className="flex gap-4 overflow-x-auto no-scrollbar">
//         {vrStories.map((story, index) => (
//           <motion.div
//             key={story.id}
//             className="relative w-80 h-48 rounded-lg overflow-hidden shadow-lg"
//             whileHover={{ scale: 1.05 }}
//           >
//             <iframe
//     src={`${story.video}?autoplay=1&mute=0&loop=1&playlist=${story.video.split("/embed/")[1]}`}
//     className="w-full h-full"
//     allow="autoplay; encrypted-media"
//     frameBorder="0"
//     allowFullScreen
//   ></iframe>
//             <div className="absolute bottom-0 p-3 bg-black bg-opacity-60 w-full">
//               <h3 className="text-lg font-semibold">{story.title}</h3>
//               <p className="text-sm">{story.description}</p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }


// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const vrStories = [
//   {
//     id: 1,
//     title: "Kanem Borno Empire",
//     description: "A powerful kingdom in the region of present-day Chad and northern Nigeria,",
//     video: "https://www.youtube.com/embed/jyNQylsOyMM",
//   },
//   {
//     id: 2,
//     title: "The Nigerian Civil War",
//     description: "Discover the struggles of a nation.",
//     video: "https://www.youtube.com/embed/hcrWQZx_gb0",
//   },
//   {
//     id: 3,
//     title: "Aare Ona Kakanfo Afonja",
//     description: "The Rise and Fall of the Oyo Empire",
//     video: "https://www.youtube.com/embed/1NlMYfaccmE",
//   },
// ];

// export default function HighlightReel() {
//   const [playing, setPlaying] = useState(0);

//   useEffect(() => {
//     const autoPlay = setInterval(() => {
//       setPlaying((prev) => (prev + 1) % vrStories.length);
//     }, 5000);

//     return () => clearInterval(autoPlay);
//   }, []);

//   return (
//     <div className="w-full p-6 bg-gradient-to-b from-[#2a1a04] to-[#4d2e0e] text-white overflow-hidden">
//       <h2 className="text-3xl font-bold mb-4 text-center text-[#ffb74d]">Highlight Reel</h2>
//       <div className="flex flex-col md:flex-row justify-center gap-8 p-5 md:p-8 overflow-x-auto no-scrollbar">
//         {vrStories.map((story, index) => (
//           <motion.div
//             key={story.id}
//             className={`relative md:w-96 h-72 w-full rounded-lg overflow-hidden shadow-xl transition-all duration-500 ease-in-out ${playing === index ? 'scale-105' : 'scale-95'}`}
//             whileHover={{ scale: 1.1 }}
//             style={{ border: "2px solid #ffb74d" }}
//           >
//             {story.video.includes("youtube") ? (
//               <iframe
//                 src={`${story.video}?autoplay=1&mute=0&loop=1&playlist=${story.video.split("/embed/")[1]}`}
//                 className="w-full h-full"
//                 allow="autoplay; encrypted-media"
//                 frameBorder="0"
//                 allowFullScreen
//               ></iframe>
//             ) : (
//               <video
//                 src={story.video}
//                 className="w-full h-full object-cover"
//                 autoPlay={playing === index}
//                 muted
//                 loop
//               />
//             )}
//             <div className="absolute bottom-0 p-4 bg-gradient-to-t from-[#2a1a04] to-transparent w-full">
//               <h3 className="text-lg font-semibold text-[#ffcc80]">{story.title}</h3>
//               <p className="text-sm opacity-90 text-[#ffe0b2]">{story.description}</p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }


import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const vrStories = [
  {
    id: 1,
    title: "Kanem Borno Empire",
    description: "A powerful kingdom in the region of present-day Chad and northern Nigeria,",
    video: "https://www.youtube.com/embed/jyNQylsOyMM",
  },
  {
    id: 2,
    title: "The Nigerian Civil War",
    description: "Discover the struggles of a nation.",
    video: "https://www.youtube.com/embed/hcrWQZx_gb0",
  },
  {
    id: 3,
    title: "Aare Ona Kakanfo Afonja",
    description: "The Rise and Fall of the Oyo Empire",
    video: "https://www.youtube.com/embed/1NlMYfaccmE",
  },
];

export default function HighlightReel() {
  const [playing, setPlaying] = useState(0);

  useEffect(() => {
    const autoPlay = setInterval(() => {
      setPlaying((prev) => (prev + 1) % vrStories.length);
    }, 5000);

    return () => clearInterval(autoPlay);
  }, []);

  return (
    <div className="w-full md:p-6 p-2 bg-Charcoal-Black text-white overflow-hidden">
      <h2 className="text-3xl font-bold mb-4 text-center text-[#ffb74d]">Highlight Reel</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8 p-5 md:p-8 overflow-x-auto no-scrollbar">
        {vrStories.map((story, index) => (
          <motion.div
            key={story.id}
            className={`relative md:w-96 h-72 w-full rounded-lg overflow-hidden shadow-xl transition-all duration-500 ease-in-out ${playing === index ? 'scale-105' : 'scale-95'}`}
            whileHover={{ scale: 1.1 }}
            style={{ border: "2px solid #ffb74d" }}
          >
            {story.video.includes("youtube") ? (
              <iframe
                src={`${story.video}?autoplay=1&mute=1&loop=1&playlist=${story.video.split("/embed/")[1]}`}
                className="w-full h-full object-fill"
                allow="autoplay; encrypted-media"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            ) : (
              <video
                src={story.video}
                className="w-full h-full object-cover"
                autoPlay={playing === index}
                muted
                loop
              />
            )}
            <div className="absolute bottom-0 p-4 bg-gradient-to-t from-[#2a1a04] to-transparent w-full">
              <h3 className="text-lg font-semibold text-[#ffcc80]">{story.title}</h3>
              <p className="text-sm opacity-90 text-[#ffe0b2]">{story.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}