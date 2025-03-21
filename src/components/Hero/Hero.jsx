// import React, { Suspense, useEffect, useRef } from "react";
// import { Canvas } from "@react-three/fiber";
// import { Environment, OrbitControls } from "@react-three/drei";
// import { useNavigate } from "react-router-dom";
// import CameraControlHook from "../../hooks/CameraControlHook/CameraControlHook";



// // const CameraController = ({ 
// //   azimuthalFactor = 0.5,
// //   polarFactor = 0.1,
// //   polarAngleOffset = Math.PI / 2,
// //   enableZoom = false,
// //   enableRotate = true,
// //   orbitControlsProps = {}}) => {


// //   const orbitRef = useRef();
// //   const mouse = useRef({x:0, y:0});

// //   useEffect(() => {

// //     const handleMouseMove (event) => {

// //     }

// //   }, [])
// // }

// const Hero = () => {
//   const navigate = useNavigate();

//   return (
//     <section className="w-full h-screen relative">
//       <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
//         <Suspense fallback={null}>
//           {/* Load Panorama EXR Environment */}
//           <Environment files="/textures/heroBackground.exr" background />
//         </Suspense>
//         {/* <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} /> */}
//         <CameraControlHook autoRotate={true}/>
//       </Canvas>
      
//       {/* CTA Buttons */}
//       <div className="absolute w-full p-5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
//         <h1 className="text-white text-4xl md:text-6xl font-bold mb-6">Discover the Stories of Africa</h1>
//         <div className="flex flex-col md:flex-row gap-4 justify-center">
//           <button 
//             className="px-6 py-2 md:px-14 md:py-4  bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition"
//             onClick={() => navigate("/story")}
//           >Explore Story</button>
//           <button 
//             className="px-6 py-2 md:px-14 md:py-4  bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
//             onClick={() => navigate("/library")}
//           >Enter Library</button>
//         </div>
//       </div>

//        {/* Cloud Divider */}
//        {/* <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
//         <svg
//           viewBox="0 0 1200 120"
//           preserveAspectRatio="none"
//           className="relative block w-[calc(100%+1.3px)] h-[70px]"
//         >
//           <path
//             d="M0,40 C150,90 350,-30 600,40 C850,110 1050,-20 1200,40 L1200,120 L0,120 Z"
//             fill="red"
//           ></path>
//         </svg>
//       </div> */}

//       {/* Small Cloud Pieces */}
//       {/* <div className="absolute bottom-0 left-0 w-full overflow-hidden">
//         <svg
//           viewBox="0 0 1200 100"
//           preserveAspectRatio="none"
//           className="relative block w-full h-[90px]"
//         >
//           <path
//             d="M0,60 C100,80 150,40 250,60 C350,80 400,30 500,50 C600,70 650,20 750,50 C850,80 900,40 1000,60 C1100,80 1150,50 1200,70 L1200,100 L0,100 Z"
//             fill="white"
//           ></path>
//         </svg>
//       </div> */}
//     </section>
//   );
// };

// export default Hero;


import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import CameraControlHook from "../../hooks/CameraControlHook/CameraControlHook";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full h-screen relative">
      <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
        <Suspense fallback={null}>
          <Environment files="/textures/heroBackground.exr" background />
        </Suspense>
        <CameraControlHook autoRotate={true} />
      </Canvas>
      
      <div className="absolute w-full p-5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">Discover the Stories of Africa</h1>
        <p className="text-white text-sm md:text-xl mb-6 max-w-2xl mx-auto">
          Immerse yourself in the rich cultural heritage of Africa through interactive storytelling. Explore, learn, and experience narratives passed down through generations.
        </p>
        <div className="flex justify-center mb-6">
          <input 
            type="text" 
            placeholder="Search stories..." 
            className="px-4 py-2 w-80 md:w-96 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          {/* <button 
            className="px-6 py-2 md:px-14 md:py-4 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition"
            onClick={() => navigate("/story")}
          >Explore Story</button> */}
          <button 
            className="px-6 py-2 md:px-14 md:py-4 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition"
            onClick={() => navigate("/story")}
          >Scan Artefact</button>
          <button 
            className="px-6 py-2 md:px-14 md:py-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
            onClick={() => navigate("/library")}
          >Enter Library</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;