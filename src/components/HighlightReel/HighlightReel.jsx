// import { useRef, useState } from "react";
// import { motion } from "framer-motion";
// import Tilt from "react-parallax-tilt"; // Import Tilt

// const vrStories = [
//   {
//     id: 1,
//     title: "Kanem Borno Empire",
//     description: "A powerful kingdom in present-day Chad and northern Nigeria.",
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
//     description: "The Rise and Fall of the Oyo Empire.",
//     video: "https://www.youtube.com/embed/1NlMYfaccmE",
//   },
// ];

// export default function HighlightReel() {
//   const videoRefs = useRef([]); // Store video elements
//   const [playingIndex, setPlayingIndex] = useState(null);

//   const handlePlay = (index) => {
//     videoRefs.current.forEach((video, i) => {
//       if (video && i !== index) video.pause();
//     });

//     if (videoRefs.current[index]) {
//       videoRefs.current[index].play();
//       setPlayingIndex(index);
//     }
//   };

//   return (
//     <div className="w-full p-6 bg-gradient-to-b from-[#2a1a04] to-[#4d2e0e] text-white overflow-hidden shadow-2xl">
//         <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} glareEnable={true} glareMaxOpacity={0}>
//         <h2 className="text-3xl font-bold mb-4 text-center text-[#ffb74d]">Highlight Reel</h2>
//         <div className="flex flex-col md:flex-row justify-center gap-8 p-5 md:p-8 overflow-x-auto no-scrollbar">
//           {vrStories.map((story, index) => (
//             <motion.div
//               key={story.id}
//               className="relative md:w-96 h-72 w-full rounded-lg overflow-hidden shadow-xl transition-all duration-500 ease-in-out"
//               whileHover={{ scale: 1.05 }}
//               style={{ border: "2px solid #ffb74d" }}
//             >
//               {story.video.includes("youtube") ? (
//                 <iframe
//                   src={story.video}
//                   className="w-full h-full"
//                   allow="autoplay; encrypted-media"
//                   frameBorder="0"
//                   allowFullScreen
//                 ></iframe>
//               ) : (
//                 <div className="relative w-full h-full">
//                   <video
//                     ref={(el) => (videoRefs.current[index] = el)}
//                     src={story.video}
//                     className="w-full h-full object-cover"
//                     controls={false}
//                   />
//                   <button
//                     className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-bold"
//                     onClick={() => handlePlay(index)}
//                   >
//                     {playingIndex === index ? "Playing..." : "Play"}
//                   </button>
//                 </div>
//               )}
//               <div className="absolute bottom-0 p-4 bg-gradient-to-t from-[#2a1a04] to-transparent w-full">
//                 <h3 className="text-lg font-semibold text-[#ffcc80]">{story.title}</h3>
//                 <p className="text-sm opacity-90 text-[#ffe0b2]">{story.description}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//     </Tilt>
//       </div>
//   );
// }


// import { useRef, useState } from "react";
// import { motion } from "framer-motion";
// import Tilt from "react-parallax-tilt";


// const vrStories = [
//   {
//     id: 1,
//     title: "Kanem Borno Empire",
//     description: "A powerful kingdom in present-day Chad and northern Nigeria.",
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
//     description: "The Rise and Fall of the Oyo Empire.",
//     video: "https://www.youtube.com/embed/1NlMYfaccmE",
//   },
// ];

// export default function HighlightReel() {
//   const videoRefs = useRef([]);
//   const [playingIndex, setPlayingIndex] = useState(null);

//   const handlePlay = (index) => {
//     videoRefs.current.forEach((video, i) => {
//       if (video && i !== index) video.pause();
//     });

//     if (videoRefs.current[index]) {
//       videoRefs.current[index].play();
//       setPlayingIndex(index);
//     }
//   };

//   return (

//       <div className="parallax-bg w-full p-6 text-white overflow-hidden rounded-lg shadow-2xl min-h-screen  flex flex-col items-center justify-center">
//         <h2 className="text-7xl font-bold mb-6 text-center text-white">Highlight Reel</h2>
//         <div className="flex w-full flex-col md:flex-row justify-center gap-8 p-5 md:p-8 overflow-x-auto no-scrollbar">
//           {vrStories.map((story, index) => (
//             <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} glareEnable={true} glareMaxOpacity={0.2}>
//               <motion.div
//                 key={story.id}
//                 className="relative md:w-96 h-72 w-full rounded-lg overflow-hidden shadow-xl transition-all duration-500 ease-in-out"
//                 whileHover={{ scale: 1.05 }}
//                 style={{ border: "2px solid #ffb74d" }}
//               >
//                 {story.video.includes("youtube") ? (
//                   <iframe
//                     src={story.video}
//                     className="w-full h-full"
//                     allow="autoplay; encrypted-media"
//                     frameBorder="0"
//                     allowFullScreen
//                   ></iframe>
//                 ) : (
//                   <div className="relative w-full h-full">
//                     <video
//                       ref={(el) => (videoRefs.current[index] = el)}
//                       src={story.video}
//                       className="w-full h-full object-cover"
//                       controls={false}
//                     />
//                     <button
//                       className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-bold"
//                       onClick={() => handlePlay(index)}
//                     >
//                       {playingIndex === index ? "Playing..." : "Play"}
//                     </button>
//                   </div>
//                 )}
//                 <div className="absolute bottom-0 p-4 bg-gradient-to-t from-[#2a1a04] to-transparent w-full">
//                   <h3 className="text-lg font-semibold text-[#ffcc80]">{story.title}</h3>
//                   <p className="text-sm opacity-90 text-[#ffe0b2]">{story.description}</p>
//                 </div>
//               </motion.div>
//             </Tilt>
//           ))}
//         </div>
//       </div>

//   );
// }


import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const vrStories = [
  {
    id: 1,
    title: "Kanem Borno Empire",
    description: "A powerful kingdom in present-day Chad and northern Nigeria.",
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
    description: "The Rise and Fall of the Oyo Empire.",
    video: "https://www.youtube.com/embed/1NlMYfaccmE",
  },
];


export default function HighlightReel() {
  const videoRefs = useRef([]);
  const [playingIndex, setPlayingIndex] = useState(null);

  const handlePlay = (index) => {
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) video.pause();
    });

    if (videoRefs.current[index]) {
      videoRefs.current[index].play();
      setPlayingIndex(index);
    }
  };

  return (
    <div className="parallax-bg w-full flex flex-col items-center justify-center  p-4">
      <h2 className="text-4xl md:text-6xl font-bold p-4 mb-6 text-center text-[#FACC15]">
        Highlight Reel
      </h2>

      {/* Responsive container */}
      <div className="flex flex-col md:flex-row md:overflow-x-auto  lg:flex-row gap-6 lg:gap-12 p-4 no-scrollbar">
        {vrStories.map((story, index) => (
          <Tilt
            key={story.id}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            glareEnable={true} glareMaxOpacity={0.2}
            className="w-full max-w-[500px] md:max-w-[350px] lg:max-w-[400px] h-72 rounded-xl overflow-hidden shadow-lg"
          >

          {/* // <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} glareEnable={true} glareMaxOpacity={0.2}> */}
            <motion.div
              className="relative w-full h-full bg-gray-900 rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              style={{ border: "2px solid #ffb74d" }}
            >
              {story.video.includes("youtube") ? (
                <iframe
                  src={story.video}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  frameBorder="0"
                  title={story.title}
                />
              ) : (
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={story.video}
                  className="w-full h-full object-cover"
                  controls={false}
                  onClick={() => handlePlay(index)}
                />
              )}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-transparent p-4">
                <h3 className="text-lg font-semibold text-[#ffcc80]">
                  {story.title}
                </h3>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </div>
  );
}
