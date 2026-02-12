
import React from 'react';
import { FloatingMessageProps } from '../types';

const FloatingMessage: React.FC<FloatingMessageProps> = ({ onBack }) => {
  return (
    <div className="letter-fullscreen flex flex-col items-center border-t-[8px] sm:border-t-[12px] border-red-500">
      {/* Decorative inner border */}
      <div className="absolute inset-2 sm:inset-4 border border-pink-100 pointer-events-none opacity-40"></div>
      
      {/* Floating small hearts inside the letter for interactivity */}
      <div className="absolute top-4 left-4 sm:top-8 sm:left-8 text-pink-200 animate-pulse">
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
         </svg>
      </div>

      <div className="space-y-6 sm:space-y-10 text-center py-4 sm:py-6 z-10 w-full px-2 sm:px-4">
        <h1 className="elegant text-4xl sm:text-6xl md:text-7xl text-red-600 drop-shadow-sm tracking-tight px-2">
          Happy Valentine's Day
        </h1>
        
        <div className="cursive text-xl sm:text-3xl md:text-4xl text-gray-800 leading-snug sm:leading-relaxed space-y-4 sm:space-y-8 font-medium px-2">
          <p className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            I am so happy to have you in my life.
          </p>
          <p className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
            You're the best thing that ever happened to me.
          </p>
          <p className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700">
            You're the most beautiful gift I've ever received!
          </p>
          <p className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-900 text-lg sm:text-3xl">
            My life is grateful with the kind of support and the strength you share.
          </p>
          <p className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-1100">
            Thank you for being there.
          </p>
        </div>

        <div className="pt-6 sm:pt-12">
          <h2 className="elegant text-3xl sm:text-5xl text-red-500 hover:scale-105 transition-transform duration-500 cursor-default">
            With All My Love
          </h2>
        </div>
      </div>

      <button 
        onClick={onBack}
        className="mt-6 sm:mt-12 px-8 sm:px-10 py-2 sm:py-3 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white rounded-full transition-all duration-300 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] shadow-sm z-20 border border-red-100"
      >
        Close Letter
      </button>

      {/* Interactive Watermark-like heart */}
      <div className="absolute -bottom-10 -right-10 text-pink-100 opacity-20 rotate-12 pointer-events-none">
         <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
         </svg>
      </div>
    </div>
  );
};

export default FloatingMessage;
