import React from "react";

interface SecretCardProps {
  onClose: () => void;
}

const SecretCard: React.FC<SecretCardProps> = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fade-in p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-gradient-to-br from-rose-100 to-pink-200 rounded-lg shadow-2xl p-8 transform transition-all duration-500 animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl font-bold"
        >
          &times;
        </button>
        <h2 className="font-pacifico text-3xl text-pink-700 mb-4 text-center">
          A Secret Note...
        </h2>
        <p className="text-gray-600 text-center">
          Just one more thing... You're not just a year older, you're a year
          better, stronger, and more amazing. Never forget how special you are!
          <br />
          <br />
          With all the love,
          <br />
          Nguyen Tien Binh
        </p>
      </div>
    </div>
  );
};

export default SecretCard;
