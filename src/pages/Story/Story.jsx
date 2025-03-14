// import { useState, useEffect } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
// import { FaPlay, FaPause, FaExpand, FaTimes } from "react-icons/fa";

// // Dummy Story Data
// const dummyStory = {
//   id: 1,
//   title: "The Legend of Nyame",
//   content: "Long ago, in the heart of Africa, a wise king sought the wisdom of the sky god Nyame...",
//   image: "https://via.placeholder.com/600x400",
//   audio: "https://www.example.com/sample-audio.mp3",
//   vrModel: "https://www.example.com/sample-model.glb",
//   culturalContext: "This story originates from the Akan people of Ghana and is often told to teach wisdom and patience.",
// };

// // Story Detail Component
// const StoryDetail = ({ story = dummyStory, onClose }) => {
//   const [isVRMode, setIsVRMode] = useState(false);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const audio = new Audio(story.audio);

//   useEffect(() => {
//     return () => {
//       audio.pause();
//     };
//   }, []);

//   const toggleAudio = () => {
//     if (isPlaying) {
//       audio.pause();
//     } else {
//       audio.play();
//     }
//     setIsPlaying(!isPlaying);
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 p-4">
//       <div className="relative bg-white p-6 rounded-2xl shadow-lg w-full max-w-4xl">
//         {/* Close Button */}
//         <button className="absolute top-4 right-4 text-gray-600" onClick={onClose}>
//           <FaTimes size={20} />
//         </button>

//         {/* Story Title */}
//         <h2 className="text-3xl font-bold text-center">{story.title}</h2>

//         {/* Story Content */}
//         <p className="mt-4 text-lg text-gray-700 leading-relaxed">{story.content}</p>

//         {/* Story Image */}
//         {story.image && <img src={story.image} alt={story.title} className="rounded-lg shadow-md w-full mt-4" />}

//         {/* Audio Narration */}
//         {story.audio && (
//           <button onClick={toggleAudio} className="mt-4 flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded">
//             {isPlaying ? <FaPause /> : <FaPlay />} {isPlaying ? "Pause Narration" : "Listen to Story"}
//           </button>
//         )}

//         {/* VR Mode Button */}
//         {story.vrModel && (
//           <button onClick={() => setIsVRMode(true)} className="mt-4 flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded">
//             <FaExpand /> Enter VR Mode
//           </button>
//         )}

//         {/* Cultural Context Section */}
//         <div className="mt-6 p-4 bg-gray-100 rounded-lg">
//           <h3 className="text-xl font-semibold">Cultural Context</h3>
//           <p className="text-gray-600">{story.culturalContext}</p>
//         </div>

//         {/* User Comments */}
//         <CommentSection storyId={story.id} />
//       </div>

//       {/* VR Viewer */}
//       {isVRMode && <VRViewer modelUrl={story.vrModel} onClose={() => setIsVRMode(false)} />}
//     </div>
//   );
// };

// // VR Viewer Component
// const VRViewer = ({ modelUrl, onClose }) => {
//   const { scene } = useGLTF(modelUrl);

//   return (
//     <div className="fixed inset-0 bg-black flex items-center justify-center">
//       {/* Close VR Mode Button */}
//       <button className="absolute top-4 right-4 text-white" onClick={onClose}>
//         <FaTimes size={24} />
//       </button>

//       {/* 3D Scene */}
//       <Canvas camera={{ position: [0, 2, 5] }}>
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[2, 5, 2]} intensity={1} />
//         <primitive object={scene} scale={2} />
//         <OrbitControls />
//         <Environment preset="sunset" />
//       </Canvas>
//     </div>
//   );
// };

// // Dummy Comment Section
// const CommentSection = ({ storyId }) => {
//   return (
//     <div className="mt-6 p-4 border rounded-lg">
//       <h3 className="text-lg font-semibold">User Reactions & Comments</h3>
//       <p className="text-gray-500 italic">Comments will appear here...</p>
//     </div>
//   );
// };

// export default StoryDetail;




import { useState } from "react";
import ModeToggle from "../../hooks/VrHooks/ModeToggle";
import PDFViewer from "../../hooks/VrHooks/PDFVierwer";
import VRStoryEnvironment from "../../components/VR/VRStoryEnvironment";

const StoryDetailPage = () => {
  const [mode, setMode] = useState("read");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold">The Legend of Nyame</h1>

      {/* Mode Toggle Buttons */}
      <ModeToggle mode={mode} setMode={setMode} />

      {/* Render Based on Mode */}
      <div className="mt-6 w-full max-w-4xl">
        {mode === "pdf" && <PDFViewer pdfUrl="/path-to-story.pdf" />}
        {mode === "vr" && <VRStoryEnvironment />}
      </div>
    </div>
  );
};

export default StoryDetailPage;
