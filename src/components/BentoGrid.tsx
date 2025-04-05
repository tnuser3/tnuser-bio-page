
import React from 'react';
import { Code, Database, Layout, Server, Globe, Shield, Github } from 'lucide-react';
import { BentoCard, BentoGrid as BentoGridComponent } from '@/components/ui/bento-grid';

// Updated grid items to show actual projects with images
const currentProjects = [
  {
    title: "Portfolio Website",
    icon: Globe,
    description: "My personal portfolio website built with React and Framer Motion.",
    tech: "React, TypeScript, Tailwind CSS",
    link: "https://example.com/portfolio",
    imageSrc: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    cta: "View Project"
  },
  {
    title: "E-commerce Platform",
    icon: Database,
    description: "A full-stack e-commerce solution with payment processing.",
    tech: "Next.js, Prisma, Stripe",
    link: "https://example.com/ecommerce",
    imageSrc: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    cta: "See Demo"
  },
  {
    title: "Task Management App",
    icon: Layout,
    description: "A collaborative task management application for teams.",
    tech: "React, Redux, Firebase",
    link: "https://example.com/tasks",
    imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    cta: "Try It Out"
  },
  {
    title: "Weather API Integration",
    icon: Code,
    description: "Weather forecast app that integrates multiple APIs.",
    tech: "JavaScript, Express, OpenWeather API",
    link: "https://example.com/weather",
    imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    cta: "Check Weather"
  },
  {
    title: "Authentication System",
    icon: Shield,
    description: "Secure authentication system with OAuth integration.",
    tech: "Node.js, JWT, Passport",
    link: "https://example.com/auth",
    imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    cta: "View Demo"
  },
  {
    title: "Real-time Chat Application",
    icon: Server,
    description: "A real-time chat platform supporting multiple rooms and direct messaging.",
    tech: "React, Socket.IO, Express",
    link: "https://example.com/chat",
    githubLink: "https://github.com/username/chat-app",
    imageSrc: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    cta: "Start Chatting"
  }
];

const BentoGrid: React.FC = () => {
  return (
    <BentoGridComponent>
      {currentProjects.map((project, index) => (
        <BentoCard
          key={index}
          name={project.title}
          className={index === 2 || index === 5 ? "md:col-span-2" : ""}
          Icon={project.icon}
          description={project.description}
          href={project.link}
          cta={project.cta}
          background={
            <img
              src={project.imageSrc}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          }
        />
      ))}
    </BentoGridComponent>
  );
};

export default BentoGrid;
