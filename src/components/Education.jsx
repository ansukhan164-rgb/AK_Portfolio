import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { GraduationCap, Award, FileText } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants/data';
import HologramCard from './ui/HologramCard';

const Education = () => {
  const items = PORTFOLIO_DATA.experience;

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 text-sci-cyan font-mono text-[10px] tracking-[0.4em] uppercase mb-6">
            <div className="w-12 h-px bg-sci-cyan/50" />
            <span className="bg-sci-black px-2">Mission History</span>
            <div className="w-12 h-px bg-sci-cyan/50" />
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">
            Training <span className="text-transparent bg-clip-text bg-gradient-to-r from-sci-cyan via-sci-blue to-sci-purple">Logs</span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Neural Connection Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-sci-border -translate-x-1/2">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-sci-cyan via-sci-blue to-sci-purple"
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{ boxShadow: '0 0 15px #06b6d4' }}
            />
          </div>

          <div className="space-y-16">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className={`relative flex items-center justify-between w-full ${i % 2 === 0 ? 'md:flex-row-reverse' : 'flex-row'}`}
              >
                {/* Empty spacer for grid layout */}
                <div className="hidden md:block w-1/2" />

                {/* Timeline Node */}
                <div className="absolute left-0 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="w-4 h-4 rounded-full bg-sci-black border-2 border-sci-cyan shadow-[0_0_10px_#06b6d4] relative">
                    <div className="absolute inset-0 rounded-full bg-sci-cyan animate-ping opacity-50" />
                  </div>
                </div>

                {/* Content Card */}
                <div className="w-full md:w-1/2 px-4 md:px-12">
                  <HologramCard className="p-6 rounded-sm group">
                    <div className="flex flex-col gap-4">
                      <div className="flex justify-between items-center gap-4">
                        <div className={`p-2 rounded-sm bg-sci-dark border border-sci-border text-sci-cyan`}>
                          {item.type === 'Education' ? <GraduationCap className="w-5 h-5" /> : <Award className="w-5 h-5" />}
                        </div>
                        <span className="text-[10px] font-mono text-sci-cyan bg-sci-cyan/10 px-3 py-1 rounded-sm border border-sci-border">
                          {item.year}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-white uppercase mb-1">{item.title}</h3>
                        <p className="text-sci-cyan font-bold text-sm mb-3">{item.organization}</p>
                        <p className="text-gray-500 text-xs font-mono leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </HologramCard>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <a
            href={PORTFOLIO_DATA.profile.resume}
            className="group relative inline-flex items-center gap-3 px-10 py-4 bg-sci-dark border border-sci-border rounded-full text-white font-black uppercase tracking-widest text-xs hover:border-sci-purple hover:text-sci-purple transition-all overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <FileText className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Extract Full Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
