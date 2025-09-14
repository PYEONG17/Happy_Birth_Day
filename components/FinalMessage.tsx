import React from "react";
import MailboxIcon from "./icons/MailboxIcon";

interface FinalMessageProps {
  onOpenMailbox: () => void;
}

const FinalMessage: React.FC<FinalMessageProps> = ({ onOpenMailbox }) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center text-center">
      <div className="animate-fade-in-up">
        <h1 className="font-pacifico text-4xl md:text-6xl text-pink-600">
          The end !
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-900 max-w-md">
          Cảm ơn chị mình đã dành thời gian xem món quà nhỏ này
          <br />
          Em hy vọng là chị mình sẽ thích nó !😊
        </p>
      </div>

      <div
        className="absolute bottom-6 right-6 md:bottom-10 md:right-10 cursor-pointer transition-transform hover:scale-110 animate-fade-in"
        style={{ animationDelay: "1s" }}
        onClick={onOpenMailbox}
      >
        <MailboxIcon className="w-16 h-16 md:w-20 md:h-20 text-pink-400" />
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white font-bold animate-ping">
          !
        </div>
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
          !
        </div>
      </div>
    </div>
  );
};

export default FinalMessage;
