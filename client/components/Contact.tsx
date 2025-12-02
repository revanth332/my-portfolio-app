import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { RESUME_DATA } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-dark to-darker">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold mb-6">Let's connect</h3>
            <p className="text-slate-400 mb-8">
              I'm always open to discussing new opportunities, creative ideas, or innovative AI projects.
            </p>
            
            <div className="space-y-6">
              <a href={`mailto:${RESUME_DATA.contact.email}`} className="flex items-center gap-4 text-slate-300 hover:text-primary transition-colors group">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="font-medium">{RESUME_DATA.contact.email}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Phone</p>
                  <p className="font-medium">{RESUME_DATA.contact.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Location</p>
                  <p className="font-medium">{RESUME_DATA.contact.location}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social / Form Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800/30 p-8 rounded-3xl border border-white/5"
          >
            <h3 className="text-xl font-semibold mb-6">Social Profiles</h3>
            <div className="flex gap-4 mb-8">
              <a 
                href={RESUME_DATA.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-4 bg-[#0077b5]/10 border border-[#0077b5]/20 hover:bg-[#0077b5]/20 text-white rounded-xl flex flex-col items-center justify-center gap-2 transition-all group"
              >
                <Linkedin className="w-6 h-6 text-[#0077b5] group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              {/* GitHub placeholder if available in future */}
              <div className="flex-1 py-4 bg-slate-700/10 border border-slate-600/20 text-slate-500 rounded-xl flex flex-col items-center justify-center gap-2 cursor-not-allowed">
                <Github className="w-6 h-6" />
                <span className="text-sm font-medium">GitHub</span>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/5">
                <h4 className="font-semibold mb-2 text-primary">Education</h4>
                <ul className="space-y-4">
                  {RESUME_DATA.education.map((edu, i) => (
                    <li key={i}>
                      <p className="text-white font-medium">{edu.institution}</p>
                      <p className="text-sm text-slate-400">{edu.degree}</p>
                      <p className="text-xs text-slate-500 mt-1">{edu.period} • {edu.gpa}</p>
                    </li>
                  ))}
                </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;