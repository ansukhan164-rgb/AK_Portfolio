import React from 'react';
import { useScroll, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { useMousePosition } from './hooks/useMousePosition';
import NeuralBackground from './components/ui/NeuralBackground';
import CustomCursor from './components/ui/CustomCursor';

function App() {
  const { x, y } = useMousePosition();
  const { scrollYProgress } = useScroll();

  return (
    <div className="min-h-screen bg-sci-black text-gray-200 selection:bg-sci-cyan selection:text-sci-black font-mono overflow-x-hidden relative">
      {/* Global Interaction Layer */}
      <NeuralBackground />
      <CustomCursor position={{ x, y }} />

      {/* Mouse-Follow Spotlight Effect */}
      <div
        className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 400px at ${x}px ${y}px, rgba(6, 182, 212, 0.15), transparent 80%)`
        }}
      />

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-sci-cyan z-[101] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* HUD Frame Overlay */}
      <div className="hud-frame hidden md:block">
        <div className="hud-corner top-left" />
        <div className="hud-corner top-right" />
        <div className="hud-corner bottom-left" />
        <div className="hud-corner bottom-right" />
      </div>

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
