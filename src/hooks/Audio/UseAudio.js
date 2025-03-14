import { useState, useEffect } from "react";

export const useAudio = (audioUrl) => {
  const [audio] = useState(new Audio(audioUrl));
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = () => {
    audio.play();
    setIsPlaying(true);
  };

  const stopAudio = () => {
    audio.pause();
    audio.currentTime = 0;
    setIsPlaying(false);
  };

  useEffect(() => {
    audio.addEventListener("ended", () => setIsPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setIsPlaying(false));
    };
  }, [audio]);

  return { playAudio, stopAudio, isPlaying };
};
