import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants/data';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-sci-cyan/20 bg-sci-black/80 backdrop-blur-md relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
        <div className="text-center md:text-left">
          <p className="text-white font-black tracking-tighter font-mono text-lg">
            ANSARUL<span className="text-sci-cyan">_OS</span>
          </p>
          <p className="text-gray-600 text-[10px] mt-1 uppercase tracking-widest font-mono">
            © {new Date().getFullYear()} // System_Version_3.0 // All Rights Reserved
          </p>
        </div>

        <div className="flex items-center gap-4">
          {[
            { icon: <Github />, href: PORTFOLIO_DATA.profile.github },
            { icon: <Linkedin />, href: PORTFOLIO_DATA.profile.linkedIn },
            { icon: <Mail />, href: `mailto:${PORTFOLIO_DATA.profile.email}` },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-sci-dark text-gray-500 hover:text-sci-cyan hover:border-sci-cyan border border-sci-border transition-all duration-300 group"
            >
              <div className="group-hover:scale-110 transition-transform">
                {social.icon}
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Background decorative element */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-sci-cyan to-transparent opacity-30" />
    </footer>
  );
};

export default Footer;
