import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Zap, Layers, Terminal, Brain, MessageSquare, Users, Palette } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants/data';
import HologramCard from './ui/HologramCard';

const SkillProgress = ({ name, level, color }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2 font-mono text-[10px] uppercase tracking-widest">
        <span className="text-gray-400">{name}</span>
        {level && <span className={color}>{level}%</span>}
      </div>
      {level && (
        <div className="h-1 w-full bg-sci-black/50 rounded-full overflow-hidden border border-sci-border">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className={`h-full ${color.replace('text', 'bg')}`}
          />
        </div>
      )}
    </div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      id: 'engineering',
      title: 'Developing Core',
      icon: <Code className="w-6 h-6" />,
      skills: PORTFOLIO_DATA.skills.engineering,
      color: 'text-sci-cyan',
      glow: 'shadow-cyan-500/20',
    },
    {
      id: 'neural',
      title: 'Neural Modules',
      icon: <Cpu className="w-6 h-6" />,
      skills: PORTFOLIO_DATA.skills.neural,
      color: 'text-sci-purple',
      glow: 'shadow-purple-500/20',
    },
    {
      id: 'cognitive',
      title: 'Cognitive Logic Thinking',
      icon: <Zap className="w-6 h-6" />,
      skills: PORTFOLIO_DATA.skills.cognitive,
      color: 'text-sci-green',
      glow: 'shadow-green-500/20',
    },
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 text-sci-cyan font-mono text-[10px] tracking-[0.4em] uppercase mb-6"
          >
            <div className="w-12 h-px bg-sci-cyan/50" />
            <span className="bg-sci-black px-2">Capability Matrix</span>
            <div className="w-12 h-px bg-sci-cyan/50" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter"
          >
            SKills <span className="text-transparent bg-clip-text bg-gradient-to-r from-sci-cyan via-sci-blue to-sci-purple">MODULES</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <HologramCard className={`p-8 rounded-sm relative group h-full ${category.glow}`}>
                <div className="absolute inset-x-0 top-0 h-1 bg-sci-cyan/60 shadow-[0_0_25px_#06b6d4] animate-scan pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(14,165,233,0.12),transparent_35%)] pointer-events-none" />
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity pointer-events-none">
                  {React.cloneElement(category.icon, { className: 'w-24 h-24' })}
                </div>

                <div className={`w-12 h-12 rounded-sm bg-sci-dark flex items-center justify-center mb-8 border border-sci-border ${category.color}`}>
                  {category.icon}
                </div>

                <h3 className="text-xl font-black text-white mb-8 uppercase tracking-wider">{category.title}</h3>

                <div className="space-y-4">
                  {category.skills.map((skill, j) => (
                    <SkillProgress
                      key={j}
                      name={skill.name}
                      level={skill.level}
                      color={category.color}
                    />
                  ))}
                </div>
              </HologramCard>
            </motion.div>
          ))}
        </div>

        {/* Language Chips */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          <span className="text-gray-500 text-[10px] uppercase font-black tracking-widest self-center mr-4">
            Core Languages:
          </span>
          {PORTFOLIO_DATA.skills.languages.map((lang, i) => (
            <span
              key={i}
              className="px-4 py-1 rounded-full bg-sci-dark/40 border border-sci-border text-sci-cyan text-xs font-mono hover:border-sci-cyan transition-all cursor-default"
            >
              {lang}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
