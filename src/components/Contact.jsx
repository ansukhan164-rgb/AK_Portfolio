import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, MessageSquare, Terminal, CheckCircle2, ChevronRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants/data';
import HologramCard from './ui/HologramCard';

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Simulate network transmission
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setTimeout(() => setIsSent(false), 5000);
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4 text-sci-cyan font-mono text-[10px] tracking-[0.4em] uppercase">
              <Terminal className="w-4 h-4" />
              <span className="border-b border-sci-cyan/30 pb-1">Command Center</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter">
              Open <span className="text-transparent bg-clip-text bg-gradient-to-r from-sci-cyan via-sci-blue to-sci-purple">SERVICES</span>
            </h2>
            <p className="text-lg text-gray-400 font-mono leading-relaxed">
             Aspiring Web Designer with a passion for turning ideas into engaging digital experiences. Actively looking for internships and hands-on learning opportunities.
            </p>

            <div className="space-y-4 pt-8">
              {[
                { icon: <Mail />, label: 'ENCRYPTED_MAIL', value: PORTFOLIO_DATA.profile.email, href: `mailto:${PORTFOLIO_DATA.profile.email}` },
                { icon: <MessageSquare />, label: 'LINKEDIN_NODE', value: 'linkedin.com/in/ansarul-rain-7a325b34b', href: PORTFOLIO_DATA.profile.linkedIn },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-sm bg-sci-dark/40 border border-sci-border hover:border-sci-cyan transition-all cursor-pointer group"
                >
                  <div className="text-sci-cyan group-hover:scale-110 transition-transform">{item.icon}</div>
                  <div className="flex-grow">
                    <p className="text-[9px] text-gray-500 uppercase font-black tracking-tighter">{item.label}</p>
                    <p className="text-xs text-gray-300 font-mono">{item.value}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-sci-cyan transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <HologramCard className="p-8 rounded-sm relative overflow-hidden">
              <form className="space-y-6" onSubmit={handleSend}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[9px] font-black text-gray-500 uppercase tracking-widest flex items-center gap-2">
                      <span className="text-sci-cyan font-mono">#</span> Sender_ID
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter Name"
                      className="w-full px-4 py-3 rounded-sm bg-sci-black border border-sci-border text-white outline-none focus:border-sci-cyan transition-all font-mono text-xs"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-black text-gray-500 uppercase tracking-widest flex items-center gap-2">
                      <span className="text-sci-cyan font-mono">#</span> Return_Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="email@domain.com"
                      className="w-full px-4 py-3 rounded-sm bg-sci-black border border-sci-border text-white outline-none focus:border-sci-cyan transition-all font-mono text-xs"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] font-black text-gray-500 uppercase tracking-widest flex items-center gap-2">
                    <span className="text-sci-cyan font-mono">#</span> Message_Payload
                  </label>
                  <textarea
                    rows="5"
                    required
                    placeholder="Enter transmission details..."
                    className="w-full px-4 py-3 rounded-sm bg-sci-black border border-sci-border text-white outline-none focus:border-sci-cyan transition-all resize-none font-mono text-xs"
                  ></textarea>
                </div>

                <div className="relative">
                  <motion.button
                    disabled={isSending || isSent}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`
                      w-full py-4 font-black rounded-sm flex items-center justify-center gap-3 transition-all uppercase tracking-widest text-xs
                      ${isSending ? 'bg-sci-dark text-gray-500 cursor-not-allowed' : 'bg-sci-cyan text-sci-black hover:bg-white hover:shadow-[0_0_20px_#fff]'}
                      ${isSent ? 'bg-green-500 text-white' : ''}
                    `}
                  >
                    {isSending ? (
                      <>
                        <div className="w-4 h-4 border-2 border-sci-black border-t-transparent rounded-full animate-spin" />
                        Transmitting Packet...
                      </>
                    ) : isSent ? (
                      <>
                        <CheckCircle2 className="w-4 h-4" />
                        Packet Delivered
                      </>
                    ) : (
                      <>
                        Transmit Packet
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>

                  {/* Progress Bar when sending */}
                  <AnimatePresence>
                    {isSending && (
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 3, ease: "linear" }}
                        className="absolute bottom-0 left-0 h-1 bg-sci-cyan shadow-[0_0_10px_#06b6d4]"
                      />
                    )}
                  </AnimatePresence>
                </div>
              </form>
            </HologramCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
