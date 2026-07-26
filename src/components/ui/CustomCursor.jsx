import React from 'react';
import { motion } from 'framer-motion';

const CustomCursor = ({ position }) => {
  return (
    <>
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-sci-cyan rounded-full pointer-events-none z-[10000] mix-blend-difference"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 250,
          mass: 0.5,
        }}
      />
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-sci-cyan rounded-full pointer-events-none z-[10000] mix-blend-difference"
        animate={{
          x: position.x - 0.5,
          y: position.y - 0.5,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 500,
        }}
      />
    </>
  );
};

export default CustomCursor;
