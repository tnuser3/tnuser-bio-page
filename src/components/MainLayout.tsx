
import React, { useState } from 'react';
import SplashScreen from './SplashScreen';
import BioSection from './BioSection';

const MainLayout: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-neutral-900 text-foreground overflow-x-hidden">
      {showSplash ? (
        <SplashScreen onComplete={handleSplashComplete} />
      ) : (
        <BioSection />
      )}
      
      {/* Background decorations with enhanced animations */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[10%] left-[10%] w-80 h-80 bg-primary/5 rounded-full blur-[100px] opacity-60 animate-glow-pulse" />
        <div className="absolute bottom-[10%] right-[10%] w-96 h-96 bg-accent/5 rounded-full blur-[100px] opacity-60 animate-glow-pulse" />
        <div className="absolute top-[40%] right-[20%] w-64 h-64 bg-purple-500/5 rounded-full blur-[100px] opacity-40 animate-glow-pulse" 
          style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-[30%] left-[15%] w-72 h-72 bg-blue-500/5 rounded-full blur-[100px] opacity-40 animate-glow-pulse"
          style={{ animationDelay: "2s" }} />
      </div>
    </div>
  );
};

export default MainLayout;
