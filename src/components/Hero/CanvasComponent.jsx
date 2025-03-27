import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import CameraControlHook from "../../hooks/CameraControlHook/CameraControlHook";

const CanvasComponent = () => {
  return (
    <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
      <Suspense fallback={<mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="gray" />
      </mesh>}>
        <Environment files="/textures/heroBackground.exr" background />
      </Suspense>
      <CameraControlHook autoRotate={true} />
    </Canvas>
  );
};

export default CanvasComponent;
