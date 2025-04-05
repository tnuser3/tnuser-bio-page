
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code, Database, Layout, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import BentoGrid from './BentoGrid';
import MusicPlayer from './MusicPlayer';

// Skills with their respective icons
const skillsWithIcons = {
  'Programming Languages': [
    { name: 'JavaScript', icon: <Code className="h-4 w-4 mr-1" /> },
    { name: 'TypeScript', icon: <Code className="h-4 w-4 mr-1" /> }
  ],
  'Frameworks': [
    { name: 'React', icon: <Layout className="h-4 w-4 mr-1" /> },
    { name: 'Next.js', icon: <Layout className="h-4 w-4 mr-1" /> }
  ],
  'Other': [
    { name: 'Node.js', icon: <Database className="h-4 w-4 mr-1" /> },
    { name: 'Tailwind CSS', icon: <Layout className="h-4 w-4 mr-1" /> },
    { name: 'GraphQL', icon: <Database className="h-4 w-4 mr-1" /> },
    { name: 'UI/UX Design', icon: <Settings className="h-4 w-4 mr-1" /> },
    { name: 'AWS', icon: <Database className="h-4 w-4 mr-1" /> },
    { name: 'Docker', icon: <Settings className="h-4 w-4 mr-1" /> }
  ]
};

const BioSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen w-full py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row gap-8"
        >
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-8 lg:self-start flex flex-col items-center lg:items-start gap-6 glass p-6 rounded-xl lg:w-72"
          >
            <Avatar className="w-32 h-32 border-2 border-accent/30 glow">
              <AvatarImage src="" alt="Profile" />
              <AvatarFallback className="text-4xl bg-black text-primary">KM</AvatarFallback>
            </Avatar>
            
            <div className="text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gradient">kman</h1>
              <p className="text-lg text-muted-foreground mb-4">Software Developer & Designer</p>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <Button variant="outline" size="icon" className="rounded-full bg-secondary/30 hover:bg-secondary/50 border-white/10">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full bg-secondary/30 hover:bg-secondary/50 border-white/10">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full bg-secondary/30 hover:bg-secondary/50 border-white/10">
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Music Player moved to bottom of profile sidebar */}
            <div className="w-full mt-6">
              <MusicPlayer />
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="flex-1">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="space-y-8"
            >
              {/* About Me */}
              <motion.div variants={itemVariants}>
                <Card className="glass overflow-hidden">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold mb-4 text-gradient">About Me</h2>
                    <p className="text-muted-foreground mb-4">
                      I'm a passionate developer with 5+ years of experience building web and mobile applications.
                      I specialize in creating intuitive, responsive, and accessible user interfaces with modern
                      technologies like React, TypeScript, and Next.js.
                    </p>
                    <p className="text-muted-foreground">
                      When I'm not coding, you can find me exploring new hiking trails, experimenting with
                      photography, or diving into sci-fi novels. I believe in continuous learning and am
                      currently exploring machine learning and AI.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Skills */}
              <motion.div variants={itemVariants}>
                <Card className="glass overflow-hidden">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold mb-4 text-gradient">Skills</h2>
                    <div className="space-y-4">
                      {Object.entries(skillsWithIcons).map(([category, skills]) => (
                        <div key={category}>
                          <h3 className="font-medium text-sm mb-2">{category}</h3>
                          <div className="flex flex-wrap gap-2">
                            {skills.map((skill) => (
                              <Badge 
                                key={skill.name} 
                                variant="secondary" 
                                className="px-3 py-1 bg-black/60 hover:bg-black/40 border border-white/10 flex items-center"
                              >
                                {skill.icon}
                                {skill.name}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Portfolio / Current Projects */}
              <motion.div variants={itemVariants}>
                <h2 className="text-2xl font-semibold mb-4 text-gradient">Current Projects</h2>
                <BentoGrid />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BioSection;
