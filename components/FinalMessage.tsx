import React from 'react';
import MailboxIcon from './icons/MailboxIcon';

interface FinalMessageProps {
  onOpenMailbox: () => void;
}

const FinalMessage: React.FC<FinalMessageProps> = ({ onOpenMailbox }) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center text-center">
      <div className="animate-fade-in-up">
        <h1 className="font-pacifico text-4xl md:text-6xl text-pink-600">Cheers to You!</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-md">
          Hope this little journey brought a smile to your face. May your year be as wonderful as you are!
        </p>
      </div>

      <div
        className="absolute bottom-6 right-6 md:bottom-10 md:right-10 cursor-pointer transition-transform hover:scale-110 animate-fade-in"
        style={{ animationDelay: '1s' }}
        onClick={onOpenMailbox}
      >
        <MailboxIcon className="w-16 h-16 md:w-20 md:h-20 text-pink-400" />
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white font-bold animate-ping">!</div>
         <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">!</div>
      </div>
    </div>
  );
};

export default FinalMessage;