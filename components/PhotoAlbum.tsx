import React, { useState } from 'react';
import { ALBUM_IMAGES } from '../constants';
import ArrowLeftIcon from './icons/ArrowLeftIcon';
import ArrowRightIcon from './icons/ArrowRightIcon';

interface PhotoAlbumProps {
  onClose: () => void;
}

const PhotoAlbum: React.FC<PhotoAlbumProps> = ({ onClose }) => {
  const [currentSpread, setCurrentSpread] = useState(-1); // -1 represents the cover
  const numSpreads = Math.ceil(ALBUM_IMAGES.length / 2);

  const handleNext = () => {
    if (currentSpread < numSpreads - 1) {
      setCurrentSpread(currentSpread + 1);
    } else {
      // Add a small delay before closing to show the last page
      setTimeout(() => onClose(), 800);
    }
  };

  const handlePrev = () => {
    if (currentSpread > -1) {
      setCurrentSpread(currentSpread - 1);
    }
  };
  
  const leftImageIndex = currentSpread * 2;
  const rightImageIndex = currentSpread * 2 + 1;

  const leftImage = ALBUM_IMAGES[leftImageIndex];
  const rightImage = ALBUM_IMAGES[rightImageIndex];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center animate-fade-in gap-4 md:gap-8">
      {/* The Book */}
      <div className="relative w-[95vw] max-w-4xl aspect-[2/1.4] md:aspect-[2/1.2] bg-stone-200 shadow-2xl rounded-lg flex p-2 md:p-3">
        {/* Book Spine */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-4 h-full bg-stone-300 shadow-inner z-10"></div>
        
        {/* Left Page */}
        <div className="w-1/2 p-2 md:p-4 bg-stone-50 rounded-l-md">
          {currentSpread === -1 ? (
            <div className="w-full h-full bg-rose-50 rounded-l-md flex items-center justify-center">
              {/* Inside of front cover, can be blank or have a small design */}
            </div>
          ) : (
            leftImage && (
              <div key={leftImageIndex} className="w-full h-full animate-fade-in">
                <img src={leftImage} alt={`Memory ${leftImageIndex + 1}`} className="w-full h-full object-cover rounded-md shadow-inner" />
              </div>
            )
          )}
        </div>

        {/* Right Page */}
        <div className="w-1/2 p-2 md:p-4 bg-stone-50 rounded-r-md">
          {currentSpread === -1 ? (
             <div className="w-full h-full bg-rose-800 flex flex-col items-center justify-center text-white p-4 rounded-r-md text-center">
                <h2 className="font-pacifico text-3xl sm:text-4xl md:text-5xl">Our Memories</h2>
                <p className="mt-4 text-xs md:text-sm font-quicksand">A look back at our journey</p>
            </div>
          ) : (
            <div key={rightImageIndex} className="w-full h-full animate-fade-in">
              {rightImage ? (
                  <img src={rightImage} alt={`Memory ${rightImageIndex + 1}`} className="w-full h-full object-cover rounded-md shadow-inner" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-center">
                  <div>
                    <h2 className="font-pacifico text-2xl md:text-3xl text-rose-800">The End</h2>
                    <p className="mt-2 text-xs md:text-sm text-stone-500">...for now!</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      
      {/* Navigation */}
      <div className="flex space-x-8 items-center">
          <button 
              onClick={handlePrev} 
              disabled={currentSpread === -1} 
              className="p-3 bg-white/70 rounded-full shadow-lg disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:bg-white hover:scale-110"
              aria-label="Previous Page"
          >
              <ArrowLeftIcon className="w-6 h-6 text-rose-600" />
          </button>
          <span className="text-lg font-bold text-gray-600 w-20 text-center font-quicksand">
            {currentSpread > -1 ? `Page ${currentSpread + 1}` : 'Cover'}
          </span>
          <button 
              onClick={handleNext} 
              className="p-3 bg-white/70 rounded-full shadow-lg transition-all hover:bg-white hover:scale-110"
              aria-label="Next Page"
          >
              <ArrowRightIcon className="w-6 h-6 text-rose-600" />
          </button>
      </div>
    </div>
  );
};

export default PhotoAlbum;
