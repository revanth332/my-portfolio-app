import React from "react";
import { motion } from "framer-motion";
import { Download, Linkedin, Mail, Github } from "lucide-react";
import { RESUME_DATA } from "../constants";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Background Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-600/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-primary font-semibold tracking-wide uppercase mb-4">
            Hello, I'm
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-slate-400">
            {RESUME_DATA.name}
          </h1>
          <h3 className="text-xl md:text-3xl text-slate-400 mb-8 max-w-3xl mx-auto">
            {RESUME_DATA.role}
          </h3>
          <p className="text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed text-lg">
            {RESUME_DATA.summary}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="px-8 py-3 bg-primary hover:bg-blue-600 text-white rounded-full font-medium transition-all shadow-lg shadow-blue-500/25 flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </a>
            <a
              href={RESUME_DATA.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-medium transition-all backdrop-blur-sm flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            {/* Note: In a real app, href would point to actual resume file */}
            <a
              href={RESUME_DATA.resumeLink}
              className="px-8 py-3 bg-transparent text-slate-400 hover:text-white font-medium transition-all flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
