import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, BookOpen, GraduationCap, Terminal as TerminalIcon, ChevronRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants/data';
import HologramCard from './ui/HologramCard';
import profileImage from '../assets/ansuuu.jpeg';

const TerminalLine = ({ text, delay = 0, color = 'text-gray-400' }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!isVisible) return;

    let charIndex = 0;
    const typingInterval = setInterval(() => {
      setDisplayedText(text.slice(0, charIndex));
      charIndex++;
      if (charIndex > text.length) clearInterval(typingInterval);
    }, 30);

    return () => clearInterval(typingInterval);
  }, [isVisible, text]);

  if (!isVisible) return null;

  return (
    <div className="flex gap-3 font-mono text-sm md:text-base leading-relaxed mb-2">
      <span className="text-sci-cyan font-bold shrink-0">{'>'}</span>
      <span className={`${color} flex-1`}>
        {displayedText}
        <span className="animate-pulse ml-1">_</span>
      </span>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-sci-cyan/10 rounded-full blur-3xl animate-pulse-glow" />
            <HologramCard className="p-2 rounded-sm group">
              <div className="relative aspect-square w-full max-w-md mx-auto bg-sci-dark rounded-sm overflow-hidden flex items-center justify-center border border-sci-border group-hover:border-sci-cyan transition-colors">
                {/* Scanning Line Effect */}
                <div className="absolute top-0 left-0 w-full h-1 bg-sci-cyan/50 shadow-[0_0_15px_#06b6d4] animate-scan z-10 pointer-events-none" />

                <div className="relative z-20 w-full h-full group-hover:scale-110 transition-transform duration-500 overflow-hidden rounded-sm border border-sci-border bg-sci-dark">
                    <img src={profileImage} alt="Ansarul Profile" className="w-full h-full object-cover contrast-125 brightness-110 saturate-125" />
                    <div className="absolute inset-0 bg-sci-cyan/20 blur-3xl rounded-sm" />
                  
                </div>
              </div>
            </HologramCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4 text-sci-cyan font-mono text-[20px] tracking-[0.3em] uppercase">
              <TerminalIcon className="w-4 h-4" />
              <span className="border-b border-sci-cyan/30 pb-1">Identity_Database</span>
            </div>

            <div className="relative">
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-sci-cyan to-sci-blue"></span>
              </h2>
              <div className="absolute -left-4 top-0 w-1 h-full bg-sci-cyan/30 rounded-full" />
            </div>

            <div className="bg-sci-black/40 backdrop-blur-md border border-sci-border p-6 rounded-lg font-mono shadow-inner">
              <TerminalLine text="Initializing identity protocols..." delay={0} color="text-sci-cyan" />
              <TerminalLine text="Loading database: Ansarul_Khan_V1.0" delay={500} color="text-sci-cyan" />
              <div className="h-4" />
              <TerminalLine
                text={PORTFOLIO_DATA.profile.about}
                delay={1500}
                color="text-gray-300"
              />
              <div className="h-4" />
              <TerminalLine text="Status: Ready for deployment." delay={5000} color="text-sci-cyan" />
            </div>

            <div className="grid sm:grid-cols-2 gap-4 pt-8">
              {[
                { icon: <MapPin />, text: "Nepal / India", label: "Node_Location" },
                { icon: <GraduationCap />, text: "Chandigarh University", label: "Academic_Log" },
                { icon: <BookOpen />, text: "BCA Specialist", label: "Core_Degree" },
                { icon: <User />, text: "Web Designer", label: "Specialization" },
              ].map((item, i) => (
                <HologramCard key={i} className="p-4 rounded-sm group">
                  <div className="flex items-center gap-3 p-2">
                    <div className="text-sci-cyan group-hover:scale-110 transition-transform">{item.icon}</div>
                    <div>
                      <p className="text-[9px] text-gray-500 uppercase font-black tracking-tighter">{item.label}</p>
                      <p className="text-xs text-gray-300 font-mono">{item.text}</p>
                    </div>
                  </div>
                </HologramCard>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
