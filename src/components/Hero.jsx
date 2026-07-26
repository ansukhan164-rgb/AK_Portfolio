import React, { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Activity } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants/data';

// Magnetic Button Component
const MagneticButton = ({ children, href, className = "" }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.3);
    y.set((e.clientY - centerY) * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={`relative group ${className}`}
    >
      {children}
    </motion.a>
  );
};

// Typing Role Component
const TypingRole = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const roles = PORTFOLIO_DATA.profile.roles;

  useEffect(() => {
    const currentRole = roles[index];
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      setText(currentRole.slice(0, charIndex));
      charIndex++;
      if (charIndex > currentRole.length) {
        clearInterval(typingInterval);
        setTimeout(() => {
          setText("");
          setIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [index]);

  return (
    <span className="text-sci-cyan font-mono inline-block min-w-[300px]">
      {text}
      <span className="animate-pulse ml-1">|</span>
    </span>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Ambient Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.08),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(139,92,246,0.14),_transparent_20%)]" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] rounded-full border border-sci-cyan/20 opacity-40 blur-xl" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-sci-cyan/30 opacity-30" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border border-sci-cyan/40 opacity-60 animate-pulse-slow" />
        <div className="absolute left-[14%] top-[18%] w-16 h-16 rounded-full border border-sci-cyan/40 opacity-70 mix-blend-screen animate-orbit" />
        <div className="absolute right-[12%] top-[22%] w-12 h-12 rounded-full border border-sci-purple/40 opacity-80 mix-blend-screen" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-sci-cyan/90 shadow-[0_0_30px_rgba(6,182,212,0.6)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 px-4 py-2 mb-8 rounded-full border border-sci-cyan/30 bg-sci-cyan/5 text-sci-cyan text-[10px] font-black uppercase tracking-[0.3em] backdrop-blur-md"
        >
          <Activity className="w-3 h-3 animate-pulse" />
          Operational
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="inline-flex items-center justify-center gap-3 px-4 py-2 mb-4 rounded-full border border-sci-cyan/30 bg-sci-black/50 text-sci-cyan text-[10px] font-black uppercase tracking-[0.3em] backdrop-blur-md mx-auto">
            Neural Interface Active
          </div>
          <span className="block opacity-40 text-xl md:text-2xl font-mono tracking-widest uppercase mb-4">Identity Initialized</span>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-white mb-8 leading-none relative">
            <span className="glitch-text text-transparent bg-clip-text bg-gradient-to-b from-white via-sci-cyan to-sci-blue">
              {PORTFOLIO_DATA.profile.name}
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 font-mono leading-relaxed h-20"
        >
          <span className="text-sci-cyan font-bold"> [ </span>
          <TypingRole />
          <span className="text-sci-cyan font-bold"> ] </span>
          <br />
          <span className="text-base md:text-lg opacity-70">
            Architecting the next generation of <span className="text-white underline decoration-sci-cyan underline-offset-4">Digital Intelligence</span>.
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-6 sm:mb-0">
            <div className="rounded-sm border border-sci-border bg-sci-black/40 p-4 text-left text-xs uppercase tracking-[0.4em] text-sci-cyan">
              <p className="text-gray-500 mb-2">Processing</p>
              <p className="text-lg font-black text-white">Accurate</p>
            </div>
            <div className="rounded-sm border border-sci-border bg-sci-black/40 p-4 text-left text-xs uppercase tracking-[0.4em] text-sci-purple">
              <p className="text-gray-500 mb-2">Quantum Flux</p>
              <p className="text-lg font-black text-white">Stable</p>
            </div>
          </div>

          <MagneticButton
            href="#projects"
            className="px-10 py-4 bg-sci-cyan text-sci-black font-black rounded-full flex items-center gap-3 group transition-all uppercase tracking-widest text-xs shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:bg-white hover:shadow-[0_0_30px_#fff]"
          >
            Enter Archive
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </MagneticButton>

          <div className="flex items-center gap-4">
            {[
              { icon: <Github />, href: PORTFOLIO_DATA.profile.github, color: 'hover:text-white' },
              { icon: <Linkedin />, href: PORTFOLIO_DATA.profile.linkedIn, color: 'hover:text-sci-cyan' },
              { icon: <Mail />, href: `mailto:${PORTFOLIO_DATA.profile.email}`, color: 'hover:text-sci-purple' },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                className={`p-4 rounded-full border border-sci-border bg-sci-dark/50 text-gray-400 transition-all ${social.color} backdrop-blur-md`}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
