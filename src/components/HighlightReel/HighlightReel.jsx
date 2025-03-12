import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";

const vrStories = [
  {
    id: 1,
    title: "Ancient Egypt Experience",
    description: "Explore the pyramids in full VR.",
    video: "https://example.com/egypt-preview.mp4",
  },
  {
    id: 2,
    title: "The Nigerian Civil War",
    description: "Get to Discoverhe Struggles of a nation.",
    video: "https://www.youtube.com/embed/hcrWQZx_gb0",
  },
  {
    id: 3,
    title: "Space Exploration",
    description: "Travel to Mars and beyond.",
    video: "https://example.com/space-preview.mp4",
  },
];

export default function HighlightReel() {
  const [playing, setPlaying] = useState(null);

  useEffect(() => {
    const autoPlay = setInterval(() => {
      setPlaying((prev) => (prev === null ? 0 : (prev + 1) % vrStories.length));
    }, 5000);

    return () => clearInterval(autoPlay);
  }, []);

  return (
    <div className="w-full p-6 bg-black text-white overflow-hidden">
      <h2 className="text-3xl font-bold mb-4">Highlight Reel</h2>
      <div className="flex gap-4 overflow-x-auto no-scrollbar">
        {vrStories.map((story, index) => (
          <motion.div
            key={story.id}
            className="relative w-80 h-48 rounded-lg overflow-hidden shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <iframe
    src={`${story.video}?autoplay=1&mute=0&loop=1&playlist=${story.video.split("/embed/")[1]}`}
    className="w-full h-full"
    allow="autoplay; encrypted-media"
    frameBorder="0"
    allowFullScreen
  ></iframe>
            <div className="absolute bottom-0 p-3 bg-black bg-opacity-60 w-full">
              <h3 className="text-lg font-semibold">{story.title}</h3>
              <p className="text-sm">{story.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
