
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

const tracks = [
  {
    title: "Ambient Loop",
    artist: "Unknown Artist",
    src: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3?filename=ambient-piano-logo-165092.mp3"
  },
  {
    title: "Lofi Beat",
    artist: "Unknown Artist",
    src: "https://cdn.pixabay.com/download/audio/2022/05/09/audio_7703d25dfd.mp3?filename=lofi-study-112191.mp3"
  }
];

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [volume, setVolume] = useState(70);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const prevTrack = () => {
    setCurrentTrack(current => (current === 0 ? tracks.length - 1 : current - 1));
    if (isPlaying && audioRef.current) {
      setTimeout(() => {
        audioRef.current?.play();
      }, 100);
    }
  };
  
  const nextTrack = () => {
    setCurrentTrack(current => (current === tracks.length - 1 ? 0 : current + 1));
    if (isPlaying && audioRef.current) {
      setTimeout(() => {
        audioRef.current?.play();
      }, 100);
    }
  };

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0];
    setVolume(newVolume);
    
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
    }
    
    if (newVolume === 0) {
      setIsMuted(true);
    } else if (isMuted) {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.volume = volume / 100;
      } else {
        audioRef.current.volume = 0;
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass p-4 rounded-xl w-full"
    >
      <audio 
        ref={audioRef} 
        src={tracks[currentTrack].src}
        onEnded={nextTrack}
      />
      
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-sm font-medium">{tracks[currentTrack].title}</h3>
            <p className="text-xs text-muted-foreground">{tracks[currentTrack].artist}</p>
          </div>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" onClick={toggleMute} className="text-muted-foreground hover:text-white">
              {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </Button>
            <div className="w-20">
              <Slider
                value={[isMuted ? 0 : volume]}
                min={0}
                max={100}
                step={1}
                onValueChange={handleVolumeChange}
                className="h-1"
              />
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-center gap-2 mt-2">
          <Button variant="ghost" size="icon" onClick={prevTrack} className="text-primary/80 hover:text-primary">
            <SkipBack className="h-4 w-4" />
          </Button>
          <Button onClick={togglePlay} variant="outline" size="icon" className="rounded-full h-8 w-8 bg-primary/10 border-primary/20 hover:bg-primary/20">
            {isPlaying ? <Pause className="h-4 w-4 text-primary" /> : <Play className="h-4 w-4 text-primary" />}
          </Button>
          <Button variant="ghost" size="icon" onClick={nextTrack} className="text-primary/80 hover:text-primary">
            <SkipForward className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default MusicPlayer;
