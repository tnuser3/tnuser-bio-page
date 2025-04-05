
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
      setTimeout(onComplete, 1000); // Give exit animation time to complete
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isAnimating && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 flex items-center justify-center bg-background z-50"
        >
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="glow"
            >
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold"
                animate={{ 
                  backgroundPosition: ["200% 0%", "0% 0%"],
                }}
                transition={{ duration: 3, ease: "easeInOut" }}
              >
                My name is <span className="text-gradient animate-pulse">kman</span>
              </motion.h1>
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "60%" }}
              transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
              className="h-0.5 bg-gradient-to-r from-blue-600 via-primary to-purple-600 mt-6 rounded-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
