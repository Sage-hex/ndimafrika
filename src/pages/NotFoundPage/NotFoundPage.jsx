import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useNavigate } from "react-router-dom";
// import CameraController from "../../hooks/CameraControlHook/CameraControlHook";

const LostExplorer = () => {
  const { scene } = useGLTF("/models/stylized_desert_skybox.glb");
  return <primitive object={scene} scale={2} position={[0, -1, 0]} />;
};

const CameraController = () => {
  const orbitRef = useRef();
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (orbitRef.current) {
        const { innerWidth, innerHeight } = window;
        mouse.current.x = (event.clientX / innerWidth) * 2 - 1;
        mouse.current.y = (event.clientY / innerHeight) * 2 - 1;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    if (orbitRef.current) {
      orbitRef.current.setAzimuthalAngle(mouse.current.x * 0.5);
      orbitRef.current.setPolarAngle(Math.PI / 2 + mouse.current.y * 0.1);
      orbitRef.current.update();
    }
  });

  return <OrbitControls ref={orbitRef} enableZoom={false} enableRotate={true} />;
};


// const CameraController = () => {

//   const orbitRef = useRef();
//   const mouse = useRef({x:0,y:0});

//   useEffect (() =>{

//     const handleMouseMove = (event) =>{
//       if (orbitRef.current){
//         const {innerWidth, innerHeight} = window;
//         mouse.current.x = (event.clientX / innerWidth) * 2 - 1;
//         mouse.current.y = (event.clientY / innerHeight) * 2 - 1;

//       }
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);

//   }, []);

//   useFrame(() =>{
//     if(orbitRef.current){
//       orbitRef.current.setAzimuthalAngle(mouse.current.x * 0.5);
//       orbitRef.current.setPolarAngle(Math.PI / 2 + mouse.current.y * 0.1);
  
//       orbitRef.current.update();
//     }
//   })
//   return <OrbitControls ref={orbitRef} enableZoom={false} enableRotate={true}/>;
// };

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Hide x and y scrollbars
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto"; // Restore scroll on unmount
    };
  }, []);

  return (
    <div className="h-screen w-screen relative">
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <LostExplorer />
        <Environment preset="forest" background />
        <EffectComposer>
          <Bloom intensity={0.2} luminanceThreshold={0.3} />
        </EffectComposer>
        <CameraController />
      </Canvas>

      {/* 404 Text and Home Button */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 text-white text-center">
        <h1 className="md:text-4xl text-3xl font-bold w-full">404 - Lost in the Forest</h1>
        <p className="text-lg mt-2">Looks like you're as lost as our explorer!</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-6 py-2 bg-green-600 cursor-pointer hover:bg-green-700 text-white font-bold rounded-lg shadow-md transition"
        >
          Go Home
        </button>
      </div>



      
      {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 text-white text-center">
  <h1 className="text-3xl md:text-4xl font-extrabold w-full break-words">
    404 - Lost in the Forest
  </h1>
  <p className="text-lg mt-2">Looks like you're as lost as our explorer!</p>
  <button
    onClick={() => navigate("/")}
    className="mt-4 px-6 py-2 bg-green-600 cursor-pointer hover:bg-green-700 text-white font-bold rounded-lg shadow-md transition"
  >
    Go Home
  </button>
</div> */}
    </div>
  );
};

export default NotFound;
