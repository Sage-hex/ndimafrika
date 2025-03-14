// const ModeToggle = ({ mode, setMode }) => {
//     return (
//       <div className="mode-toggle">
//         <button onClick={() => setMode("read")} className={mode === "read" ? "active" : ""}>Read</button>
//         <button onClick={() => setMode("listen")} className={mode === "listen" ? "active" : ""}>Listen</button>
//         <button onClick={() => setMode("pdf")} className={mode === "pdf" ? "active" : ""}>Open PDF</button>
//         <button onClick={() => setMode("vr")} className={mode === "vr" ? "active" : ""}>Enter VR</button>
//       </div>
//     );
//   };
  
//   export default ModeToggle;
  

const ModeToggle = ({ mode, setMode }) => {
  return (
    <div className="flex gap-4 mt-4">
      <button
        className={`px-4 py-2 rounded-lg font-semibold transition-all ${
          mode === "vr" ? "bg-yellow-500 text-white" : "bg-gray-300 text-black"
        }`}
        onClick={() => setMode("vr")}
      >
        Enter VR Mode
      </button>
      <button
        className={`px-4 py-2 rounded-lg font-semibold transition-all ${
          mode === "narration" ? "bg-yellow-500 text-white" : "bg-gray-300 text-black"
        }`}
        onClick={() => setMode("narration")}
      >
        Listen to Narration
      </button>
      <button
        className={`px-4 py-2 rounded-lg font-semibold transition-all ${
          mode === "pdf" ? "bg-yellow-500 text-white" : "bg-gray-300 text-black"
        }`}
        onClick={() => setMode("pdf")}
      >
        Open PDF
      </button>
    </div>
  );
};

export default ModeToggle;
