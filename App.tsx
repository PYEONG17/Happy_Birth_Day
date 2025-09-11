import React, { useState, useRef } from "react";
import { JourneyState } from "./types";
import InitialScreen from "./components/InitialScreen";
import BirthdayCard from "./components/BirthdayCard";
import PhotoAlbum from "./components/PhotoAlbum";
import FinalMessage from "./components/FinalMessage";
import SecretCard from "./components/SecretCard";

const App: React.FC = () => {
  const [journeyState, setJourneyState] = useState<JourneyState>(
    JourneyState.INITIAL
  );
  const audioRef = useRef<HTMLAudioElement>(null);

  const playMusic = () => {
    if (audioRef.current && audioRef.current.paused) {
      audioRef.current.play().catch((error) => {
        console.error("Audio playback failed:", error);
      });
    }
  };

  const handleOpenGift = () => {
    playMusic();
    setTimeout(() => setJourneyState(JourneyState.CARD), 800);
  };

  const handleNextFromCard = () => {
    setJourneyState(JourneyState.ALBUM);
  };

  const handleAlbumClose = () => {
    setJourneyState(JourneyState.FINAL);
  };

  const handleOpenMailbox = () => {
    setJourneyState(JourneyState.SECRET);
  };

  const handleCloseSecretCard = () => {
    setJourneyState(JourneyState.FINAL);
  };

  return (
    <main className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-pink-200 via-pink-100 to-rose-200 font-quicksand text-gray-700 flex items-center justify-center p-4">
      {/* You can replace the src with your own music link */}
      <audio ref={audioRef} src="./audio/sad-piano-love-story-71443.mp3" loop />
      {journeyState === JourneyState.INITIAL && (
        <InitialScreen onOpenGift={handleOpenGift} />
      )}
      {journeyState === JourneyState.CARD && (
        <BirthdayCard onNext={handleNextFromCard} />
      )}
      {journeyState === JourneyState.ALBUM && (
        <PhotoAlbum onClose={handleAlbumClose} />
      )}
      {journeyState === JourneyState.FINAL && (
        <FinalMessage onOpenMailbox={handleOpenMailbox} />
      )}
      {journeyState === JourneyState.SECRET && (
        <SecretCard onClose={handleCloseSecretCard} />
      )}
    </main>
  );
};

export default App;
