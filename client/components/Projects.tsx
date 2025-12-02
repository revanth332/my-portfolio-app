import React from 'react';
import { motion } from 'framer-motion';
import { RESUME_DATA } from '../constants';
import { MessageSquare, Code2, Mic, Database, Star } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'MessageSquare': <MessageSquare className="w-6 h-6" />,
  'Code2': <Code2 className="w-6 h-6" />,
  'Mic': <Mic className="w-6 h-6" />,
  'Database': <Database className="w-6 h-6" />,
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-darker/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Key deliverables and innovations from my professional experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {RESUME_DATA.extractedProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-slate-800/30 p-8 rounded-3xl border border-white/5 hover:bg-slate-800/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 text-primary rounded-xl group-hover:scale-110 transition-transform duration-300">
                  {iconMap[project.icon] || <Star />}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </div>
              
              <p className="text-slate-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-white/5 text-xs text-slate-400 rounded-lg border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;