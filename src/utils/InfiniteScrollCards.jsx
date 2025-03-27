import { motion, useMotionValue, useTransform, useAnimationFrame } from "framer-motion";
import { useRef } from "react";


const images = [
  "/images/african-mythology.jpg",
  "/images/afro_okechukwu-ofili.jpg",
  "/images/americanah.jpeg",
  "/images/hidden-history.jpg",
  "/images/image.jpg",
  "/images/lusaka.jpg",
  "/images/oil.jpg",
  "/images/udala.jpg",
  "/images/WEST_AFRICAN_HISTORY_BY_ELIZABETH_ISICHEI.jpg",
];

// export default function InfiniteScrollCards() {
//     return (
//       <div className="overflow-hidden w-full bg-green-900 py-10 mt-26">
//         <motion.div
//           className="flex gap-6"
//           initial={{ x: 0 }}
//           animate={{ x: ["0%", "-100%"] }}
//           transition={{
//             repeat: Infinity,
//             duration: 10,
//             ease: "linear",
//           }}
//         >
//           {[...images, ...images].map((src, index) => (
//             <div key={index} className="w-64 flex-shrink-0">
//               <img src={src} alt={`Slide ${index}`} className="rounded-xl w-full h-auto" />
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     );
//   }

function InfiniteScrollCards() {
    const x = useMotionValue(0);
    const baseVelocity = -2; // Speed of movement
    const containerRef = useRef(null);
    const width = 300; // Width of each image (adjust if needed)
    const totalWidth = width * images.length; // Total width of all images
  
    useAnimationFrame((t, delta) => {
      let moveBy = baseVelocity * (delta / 16); // Normalize speed
  
      // Keep the scroll moving infinitely
      x.set((x.get() + moveBy) % -totalWidth);
    });
  
    return (
      <div ref={containerRef} className="overflow-hidden w-full bg-Earthy-Brown bg-[#121926]  py-20 cursor-grab active:cursor-grabbing">
        
        <motion.div
          className="flex gap-6 min-w-max"
          style={{ x }}
          drag="x"
          dragConstraints={{ left: -Infinity, right: Infinity }}
          dragElastic={0.2} // Adds smooth resistance when dragging
        >
          {[...images, ...images].map((src, index) => (
            <div key={index} className="w-[300px] flex-shrink-0">
              <img src={src} alt={`Slide ${index}`} className="rounded-xl w-full h-auto" />
            </div>
          ))}

          
        </motion.div>

        
      </div>
    );
  }
  
  export default InfiniteScrollCards;