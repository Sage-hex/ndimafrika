// import { useEffect } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
// import { Button } from "@/components/ui/button";

// const Model = ({ modelUrl }) => {
//   const { scene } = useGLTF(modelUrl);
//   return <primitive object={scene} scale={1.5} />;
// };

// const VRViewer = ({ modelUrl, onClose }) => {
//   useEffect(() => {
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, []);

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50">
//       <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[10, 10, 5]} intensity={1} />
//         <Model modelUrl={modelUrl} />
//         <OrbitControls enableZoom={true} />
//         <Environment preset="sunset" />
//       </Canvas>
//       <Button onClick={onClose} className="mt-4 bg-red-500 text-white">
//         Exit VR Mode
//       </Button>
//     </div>
//   );
// };

// export default VRViewer;


import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";

const Model = ({ url }) => {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={1.5} />;
};

const VRViewer = ({ modelUrl }) => {
  return (
    <div className="vr-viewer">
      <Canvas>
        <ambientLight intensity={0.5} />
        <Environment preset="sunset" />
        <OrbitControls enableZoom={false} />
        <Model url={modelUrl} />
      </Canvas>
    </div>
  );
};

export default VRViewer;
