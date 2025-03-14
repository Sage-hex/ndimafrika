import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text, Environment } from "@react-three/drei";
import { useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";

const storyText = [
  "Long ago, in the heart of Africa...",
  "A wise king sought the wisdom of Nyame...",
  "Nyame granted him a riddle...",
];

const FloatingText = ({ text }) => (
  <Text position={[0, 2, -3]} fontSize={0.5} color="white">
    {text}
  </Text>
);

const TTSNarration = ({ textArray, setTextIndex, textIndex }) => {
  useEffect(() => {
    if (textIndex < textArray.length) {
      const utterance = new SpeechSynthesisUtterance(textArray[textIndex]);
      utterance.onend = () => setTextIndex((prev) => prev + 1);
      speechSynthesis.speak(utterance);
    }
  }, [textIndex]);

  return null;
};

const VRStoryEnvironment = () => {
  const [textIndex, setTextIndex] = useState(0);
  const { scene } = useGLTF("/path-to-3d-scene.glb");

  return (
    <div className="h-screen w-full bg-black">
      <Canvas camera={{ position: [0, 1.6, 3] }}>
        <ambientLight intensity={0.5} />
        <Environment preset="forest" />
        <OrbitControls enablePan={false} enableZoom={false} />

        {/* Dynamic Story Text in 3D */}
        {textIndex < storyText.length && <FloatingText text={storyText[textIndex]} />}

        {/* 3D Scene Model */}
        <primitive object={scene} scale={1.5} />

        {/* Narration Sync */}
        <TTSNarration textArray={storyText} textIndex={textIndex} setTextIndex={setTextIndex} />
      </Canvas>
    </div>
  );
};

export default VRStoryEnvironment;
