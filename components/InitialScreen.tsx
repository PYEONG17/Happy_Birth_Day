import React, { useState } from 'react';
import GiftIcon from './icons/GiftIcon';

interface InitialScreenProps {
  onOpenGift: () => void;
}

const InitialScreen: React.FC<InitialScreenProps> = ({ onOpenGift }) => {
  const [isGiftClicked, setIsGiftClicked] = useState(false);

  const handleGiftClick = () => {
    if (isGiftClicked) return;
    setIsGiftClicked(true);
    onOpenGift();
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center animate-fade-in">
      <div
        className="relative cursor-pointer transition-transform hover:scale-110 animate-heartbeat"
        onClick={handleGiftClick}
        style={{ animationDuration: '2s' }}
        aria-label="Open the gift"
        role="button"
      >
        <div className="transform scale-150 md:scale-200">
          <GiftIcon clicked={isGiftClicked} />
        </div>
      </div>
       <p className="mt-12 md:mt-16 text-xl md:text-3xl font-pacifico text-pink-500 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
        Click the gift!
      </p>
    </div>
  );
};

export default InitialScreen;