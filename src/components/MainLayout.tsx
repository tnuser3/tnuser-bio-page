
import React, { useState } from 'react';
import SplashScreen from './SplashScreen';
import BioSection from './BioSection';

const MainLayout: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background/95 text-foreground overflow-hidden">
      {showSplash ? (
        <SplashScreen onComplete={handleSplashComplete} />
      ) : (
        <BioSection />
      )}
      
      {/* Background decoration */}
      <div className="fixed top-20 left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl -z-10 animate-glow-pulse" />
      <div className="fixed bottom-10 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10 animate-glow-pulse" />
    </div>
  );
};

export default MainLayout;
