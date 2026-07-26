import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Cpu, Terminal, Shield, Database, Radio, Zap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
      const current = sections.find(id => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', name: 'HOME', href: '#home', icon: <Cpu className="w-4 h-4" /> },
    { id: 'about', name: 'Identity', href: '#about', icon: <Shield className="w-4 h-4" /> },
    { id: 'skills', name: 'SKILLS', href: '#skills', icon: <Database className="w-4 h-4" /> },
    { id: 'projects', name: 'PROJECTS', href: '#projects', icon: <Radio className="w-4 h-4" /> },
    { id: 'education', name: 'EDUCATION', href: '#education', icon: <Terminal className="w-4 h-4" /> },
    { id: 'contact', name: 'CONTACT', href: '#contact', icon: <Zap className="w-4 h-4" /> },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[1000] flex justify-center p-6 pointer-events-none">
      <nav
        className={`
          pointer-events-auto transition-all duration-500 ease-in-out
          ${scrolled
            ? 'py-2 px-6 rounded-full bg-sci-black/60 backdrop-blur-2xl border border-sci-cyan/30 shadow-[0_0_30px_rgba(6,182,212,0.2)] w-auto max-w-4xl'
            : 'py-4 px-8 rounded-2xl bg-transparent w-full max-w-7xl'}
        `}
      >
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="p-2 bg-sci-cyan rounded-lg rotate-45 group-hover:rotate-180 transition-all duration-500 shadow-[0_0_15px_#06b6d4]">
              <Cpu className="text-sci-black w-5 h-5 -rotate-45 group-hover:rotate-0 transition-all" />
            </div>
            <span className="text-xl font-black tracking-tighter text-white font-mono hidden sm:block">
              ANSARUL<span className="text-sci-cyan">_OS</span>
            </span>
          </motion.div>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.id}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`
                  relative px-4 py-2 flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest transition-all duration-300
                  ${activeSection === link.id
                    ? 'text-sci-cyan'
                    : 'text-gray-400 hover:text-white'}
                `}
              >
                <span className={`transition-transform duration-300 ${activeSection === link.id ? 'scale-125 text-sci-cyan' : 'group-hover:scale-110'}`}>
                  {link.icon}
                </span>
                {link.name}

                {activeSection === link.id && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 bg-sci-cyan/10 rounded-lg -z-10 border border-sci-cyan/20"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.a>
            ))}

            <div className="ml-4 pl-4 border-l border-sci-cyan/20">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2 bg-sci-cyan text-sci-black font-black rounded-full text-[10px] uppercase tracking-widest hover:bg-white hover:shadow-[0_0_20px_#fff] transition-all block"
              >
                Initialize
              </motion.a>
            </div>
          </div>

          <div className="md:hidden pointer-events-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 hover:text-sci-cyan transition-colors"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="md:hidden absolute top-full left-0 w-full mt-4 bg-sci-black/90 backdrop-blur-2xl border border-sci-cyan/30 rounded-2xl p-6 flex flex-col gap-4"
            >
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`
                    flex items-center gap-4 p-3 rounded-lg transition-all uppercase tracking-wider text-sm font-medium
                    ${activeSection === link.id ? 'bg-sci-cyan/10 text-sci-cyan' : 'text-gray-400 hover:bg-sci-cyan/5 hover:text-white'}
                  `}
                >
                  <span className="text-sci-cyan">{link.icon}</span>
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
