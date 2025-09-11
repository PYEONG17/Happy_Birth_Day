import React from 'react';

interface GiftIconProps {
  clicked: boolean;
}

const GiftIcon: React.FC<GiftIconProps> = ({ clicked }) => {
  return (
    <div className="relative w-20 h-20">
      {/* Box Bottom */}
      <div className="absolute bottom-0 w-full h-16 bg-pink-400 rounded-md shadow-lg"></div>
      <div className="absolute bottom-0 w-full h-16 flex justify-center items-center">
        <div className="w-4 h-16 bg-rose-200"></div>
      </div>

      {/* Box Lid */}
      <div
        className={`absolute top-0 w-[88px] h-6 bg-pink-500 rounded-t-md shadow-md transition-transform duration-700 ease-in-out ${
          clicked ? 'animate-open-gift' : ''
        }`}
        style={{ left: '50%', transform: 'translateX(-50%)' }}
      >
        {/* Ribbon on lid */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-6 bg-rose-300"></div>
        {/* Ribbon bow */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8">
          <div className="absolute w-4 h-4 bg-rose-300 rounded-full top-0 left-0"></div>
          <div className="absolute w-4 h-4 bg-rose-300 rounded-full top-0 right-0"></div>
          <div className="absolute w-3 h-3 bg-rose-200 rounded-full top-2 left-1/2 -translate-x-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default GiftIcon;