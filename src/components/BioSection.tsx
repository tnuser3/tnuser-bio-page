
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const BioSection: React.FC = () => {
  return (
    <div className="min-h-screen w-full py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
          {/* Profile Sidebar - Fixed on the left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center md:items-start gap-6 sticky top-8 self-start"
          >
            <Avatar className="w-32 h-32 border-2 border-accent/30 glow">
              <AvatarImage src="" alt="Profile" />
              <AvatarFallback className="text-4xl bg-secondary text-primary">KM</AvatarFallback>
            </Avatar>
            
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gradient">kman</h1>
              <p className="text-xl text-muted-foreground mb-4">Software Developer & Designer</p>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Content Grid - Dynamic grid on the right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* About Me */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-2"
            >
              <Card className="glass h-full">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">About Me</h2>
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Card className="glass h-full">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">Skills</h2>
                  <div className="flex flex-wrap gap-2">
                    {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Tailwind CSS', 'Next.js', 'UI/UX Design', 'GraphQL', 'AWS', 'Docker'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-secondary rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Card className="glass h-full">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                  <p className="text-muted-foreground mb-4">Interested in working together or have a question?</p>
                  <Button className="glow w-full">
                    Contact Me
                    <Mail className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Projects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="lg:col-span-2"
            >
              <Card className="glass">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      {
                        title: 'E-commerce Platform',
                        description: 'A fullstack e-commerce solution with payment processing and inventory management.',
                        tech: 'Next.js, Prisma, Stripe'
                      },
                      {
                        title: 'Health & Fitness App',
                        description: 'Mobile application for tracking workouts, nutrition, and wellness goals.',
                        tech: 'React Native, Firebase, Redux'
                      },
                      {
                        title: 'Data Visualization Dashboard',
                        description: 'Interactive dashboard displaying complex datasets with filterable charts.',
                        tech: 'React, D3.js, Material UI'
                      }
                    ].map((project, index) => (
                      <div key={index} className="p-4 border border-border rounded-lg hover:bg-secondary/50 transition-colors">
                        <div className="flex justify-between items-start">
                          <h3 className="font-medium text-lg">{project.title}</h3>
                          <ExternalLink className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <p className="text-muted-foreground text-sm mt-2">{project.description}</p>
                        <p className="text-xs text-primary mt-2">{project.tech}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BioSection;
