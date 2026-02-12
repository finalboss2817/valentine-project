
import React, { useState, useEffect } from 'react';
import FloatingHearts from './components/FloatingHearts.tsx';
import Envelope from './components/Envelope.tsx';
import FloatingMessage from './components/FloatingMessage.tsx';

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleBack = () => {
    setShowContent(false);
    setIsOpen(false);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative px-4 overflow-hidden bg-[#ffe4e6]">
      {/* Background Interactive Hearts */}
      <FloatingHearts />

      {/* Main Content Area */}
      {!showContent ? (
        <div className="animate-in fade-in duration-1000 z-10 flex items-center justify-center w-full">
          <Envelope 
            isOpen={isOpen} 
            onClick={() => setIsOpen(true)} 
          />
        </div>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <div 
            className="fixed inset-0 bg-red-900/10 backdrop-blur-[4px] z-40 transition-opacity duration-700" 
            onClick={handleBack}
          ></div>
          <FloatingMessage onBack={handleBack} />
        </div>
      )}

      {/* Corner Floating Decorations */}
      <div className="fixed top-12 left-12 text-pink-300 opacity-20 pointer-events-none select-none animate-bounce duration-[3000ms] hidden sm:block">
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>
      <div className="fixed bottom-12 right-12 text-pink-300 opacity-20 pointer-events-none select-none scale-x-[-1] animate-bounce duration-[4000ms] hidden sm:block">
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>
    </div>
  );
};

export default App;
