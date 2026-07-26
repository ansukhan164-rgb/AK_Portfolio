import React, { useRef } from 'react';
import { motion, useSpring, useTransform, useMotionValue } from 'framer-motion';

const HologramCard = ({ children, className = "", tiltIntensity = 10 }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-100, 100], [tiltIntensity, -tiltIntensity]);
  const rotateY = useTransform(mouseXSpring, [-100, 100], [-tiltIntensity, tiltIntensity]);

  function handleMouseMove(event) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;

    x.set(xPct * 200);
    y.set(yPct * 200);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={`hologram-card relative overflow-hidden ${className}`}
    >
      {/* Dynamic Shine Overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: 'radial-gradient(circle at var(--mouseX, 50%) var(--mouseY, 50%), rgba(255,255,255,0.1) 0%, transparent 50%)'
        }}
      />
      <div className="relative z-20 h-full w-full">
        {children}
      </div>
    </motion.div>
  );
};

export default HologramCard;
