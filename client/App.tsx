import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AIChat from './components/AIChat';

function App() {
  return (
    <div className="bg-dark min-h-screen text-white selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <AIChat />

      <footer className="py-8 bg-darker text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Revathipathi Lanka. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;