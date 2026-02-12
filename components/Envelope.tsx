
import React from 'react';

interface EnvelopeProps {
  isOpen: boolean;
  onClick: () => void;
}

const Envelope: React.FC<EnvelopeProps> = ({ isOpen, onClick }) => {
  return (
    <div className="envelope-wrapper flex flex-col items-center">
      <div 
        className={`envelope ${isOpen ? 'open' : ''} group`}
        onClick={!isOpen ? onClick : undefined}
      >
        <div className="flap"></div>
        <div className="pocket"></div>
        <div className="letter-content flex flex-col items-center justify-center space-y-2 border border-pink-50">
           <div className="w-12 h-[2px] bg-pink-100 mb-2"></div>
           <p className="cursive text-pink-300 text-sm">For You...</p>
           <div className="w-8 h-[2px] bg-pink-100"></div>
        </div>
        {!isOpen && (
          <div className="seal">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.51 4.05 3 5.5l7 7Z" />
            </svg>
          </div>
        )}
      </div>
      {!isOpen && (
        <p className="mt-12 text-red-500 font-bold elegant text-2xl animate-bounce tracking-widest">
          Touch the seal to reveal
        </p>
      )}
    </div>
  );
};

export default Envelope;
