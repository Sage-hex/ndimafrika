import { useState, useEffect } from "react";

const TTSNarration = ({ textContent, autoPlay }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  useEffect(() => {
    if (isPlaying) {
      let utterance = new SpeechSynthesisUtterance(textContent[currentIndex]);
      utterance.onend = () => {
        if (currentIndex < textContent.length - 1) {
          setCurrentIndex((prev) => prev + 1);
        } else {
          setIsPlaying(false);
        }
      };
      speechSynthesis.speak(utterance);
    } else {
      speechSynthesis.cancel();
    }
  }, [isPlaying, currentIndex]);

  return (
    <div className="narration-container">
      {textContent.map((sentence, index) => (
        <p key={index} className={index === currentIndex ? "highlighted" : ""}>{sentence}</p>
      ))}
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "Stop Narration" : "Start Narration"}
      </button>
    </div>
  );
};

export default TTSNarration;
