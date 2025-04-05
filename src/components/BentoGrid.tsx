
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Layout, Settings, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import MusicPlayer from './MusicPlayer';

const gridItems = [
  {
    title: "Frontend",
    icon: <Layout className="h-5 w-5 text-primary" />,
    description: "Creating intuitive user interfaces with modern technologies.",
    size: "col-span-1 row-span-1"
  },
  {
    title: "Backend",
    icon: <Database className="h-5 w-5 text-primary" />,
    description: "Building robust APIs and server-side solutions.",
    size: "col-span-1 row-span-1"
  },
  {
    title: "Music",
    content: <MusicPlayer />,
    size: "col-span-2 row-span-1"
  },
  {
    title: "Development",
    icon: <Code className="h-5 w-5 text-primary" />,
    description: "Full-stack development with modern frameworks and tools.",
    size: "col-span-1 row-span-1"
  },
  {
    title: "DevOps",
    icon: <Settings className="h-5 w-5 text-primary" />,
    description: "Automating deployment and infrastructure management.",
    size: "col-span-1 row-span-1"
  },
  {
    title: "Featured Project",
    description: "E-commerce Platform",
    detail: "A fullstack e-commerce solution with payment processing and inventory management.",
    tech: "Next.js, Prisma, Stripe",
    link: true,
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
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-8"
    >
      {gridItems.map((item, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className={`${item.size} h-full`}
        >
          <Card className="glass h-full overflow-hidden hover:border-primary/30 transition-colors duration-300">
            <CardContent className="p-4 h-full flex flex-col">
              {item.content ? (
                item.content
              ) : (
                <>
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      {item.icon && <div>{item.icon}</div>}
                      <h3 className="font-medium text-md">{item.title}</h3>
                    </div>
                    {item.link && <ExternalLink className="h-4 w-4 text-muted-foreground" />}
                  </div>
                  
                  <p className="text-muted-foreground text-sm flex-grow">
                    {item.description || item.detail}
                  </p>
                  
                  {item.tech && (
                    <p className="text-xs text-primary/80 mt-2">{item.tech}</p>
                  )}
                </>
              )}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default BentoGrid;
