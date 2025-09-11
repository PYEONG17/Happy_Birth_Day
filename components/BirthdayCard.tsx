import React from 'react';
import HeartIcon from './icons/HeartIcon';

interface BirthdayCardProps {
  onNext: () => void;
}

const BirthdayCard: React.FC<BirthdayCardProps> = ({ onNext }) => {
  return (
    <div className="relative w-full max-w-lg bg-white rounded-lg shadow-2xl p-8 transform transition-all duration-500 animate-fade-in-up">
       <div className="absolute top-4 right-4">
            <HeartIcon className="w-8 h-8 text-pink-300"/>
       </div>
      <h1 className="font-pacifico text-4xl text-pink-500 mb-4 text-center">Happy Birthday!</h1>
      <p className="text-gray-600 text-center mb-8">
        Wishing you a day filled with love, joy, and wonderful surprises. Here's to another amazing year of your life!
      </p>
      <button
        onClick={onNext}
        className="block mx-auto bg-pink-500 text-white font-bold py-2 px-6 rounded-full hover:bg-pink-600 transition-colors duration-300 shadow-md"
      >
        Next
      </button>
    </div>
  );
};

export default BirthdayCard;