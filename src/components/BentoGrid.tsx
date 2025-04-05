
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Layout, Server, ExternalLink, Globe, Shield, Github, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Updated grid items to show actual projects
const currentProjects = [
  {
    title: "Portfolio Website",
    icon: <Globe className="h-5 w-5 text-primary" />,
    description: "My personal portfolio website built with React and Framer Motion.",
    tech: "React, TypeScript, Tailwind CSS",
    link: "https://example.com/portfolio",
    size: "col-span-1 row-span-1"
  },
  {
    title: "E-commerce Platform",
    icon: <Database className="h-5 w-5 text-primary" />,
    description: "A full-stack e-commerce solution with payment processing.",
    tech: "Next.js, Prisma, Stripe",
    link: "https://example.com/ecommerce",
    size: "col-span-1 row-span-1"
  },
  {
    title: "Task Management App",
    icon: <Layout className="h-5 w-5 text-primary" />,
    description: "A collaborative task management application for teams.",
    tech: "React, Redux, Firebase",
    link: "https://example.com/tasks",
    size: "col-span-2 row-span-1"
  },
  {
    title: "Weather API Integration",
    icon: <Code className="h-5 w-5 text-primary" />,
    description: "Weather forecast app that integrates multiple APIs.",
    tech: "JavaScript, Express, OpenWeather API",
    link: "https://example.com/weather",
    size: "col-span-1 row-span-1"
  },
  {
    title: "Authentication System",
    icon: <Shield className="h-5 w-5 text-primary" />,
    description: "Secure authentication system with OAuth integration.",
    tech: "Node.js, JWT, Passport",
    link: "https://example.com/auth",
    size: "col-span-1 row-span-1"
  },
  {
    title: "Real-time Chat Application",
    icon: <Server className="h-5 w-5 text-primary" />,
    description: "A real-time chat platform supporting multiple rooms and direct messaging.",
    tech: "React, Socket.IO, Express",
    link: "https://example.com/chat",
    githubLink: "https://github.com/username/chat-app",
    size: "col-span-2 row-span-1"
  }
];

const BentoGrid: React.FC = () => {
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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-4"
    >
      {currentProjects.map((project, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className={`${project.size} h-full`}
        >
          <Card className="glass h-full overflow-hidden hover:border-primary/30 transition-colors duration-300 group">
            <CardContent className="p-4 h-full flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  {project.icon && <div>{project.icon}</div>}
                  <h3 className="font-medium text-md">{project.title}</h3>
                </div>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
                  </a>
                )}
              </div>
              
              <p className="text-muted-foreground text-sm flex-grow">
                {project.description}
              </p>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech && project.tech.split(', ').map((tech, i) => (
                  <Badge 
                    key={i} 
                    variant="outline" 
                    className="text-xs bg-black/30 hover:bg-black/40 border-white/5"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <div className="mt-4 flex items-center justify-between">
                {project.githubLink && (
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                )}
                
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity ml-auto flex items-center gap-1 text-primary/70 hover:text-primary hover:bg-primary/10"
                  asChild
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project <ArrowRight className="h-3 w-3" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default BentoGrid;
