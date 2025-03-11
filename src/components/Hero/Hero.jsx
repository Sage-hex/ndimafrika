// import React from 'react'

// const Hero = () => {
//   return (
//     <section className='bg-red-500 w-full h-[100vh] border-4 border-b-Indigo-Blue'>
//       <div>

//       </div>
      
//     </section>
//   )
// }

// export default Hero



import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import CameraControlHook from "../../hooks/CameraControlHook/CameraControlHook";



// const CameraController = ({ 
//   azimuthalFactor = 0.5,
//   polarFactor = 0.1,
//   polarAngleOffset = Math.PI / 2,
//   enableZoom = false,
//   enableRotate = true,
//   orbitControlsProps = {}}) => {


//   const orbitRef = useRef();
//   const mouse = useRef({x:0, y:0});

//   useEffect(() => {

//     const handleMouseMove (event) => {

//     }

//   }, [])
// }

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full h-screen relative">
      <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
        <Suspense fallback={null}>
          {/* Load Panorama EXR Environment */}
          <Environment files="/textures/heroBackground.exr" background />
        </Suspense>
        {/* <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} /> */}
        <CameraControlHook autoRotate={false}/>
      </Canvas>
      
      {/* CTA Buttons */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-white text-4xl font-bold mb-4">Discover the Stories of Africa</h1>
        <div className="flex gap-4 justify-center">
          <button 
            className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition"
            onClick={() => navigate("/story")}
          >Explore Story</button>
          <button 
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
            onClick={() => navigate("/library")}
          >Enter Library</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
