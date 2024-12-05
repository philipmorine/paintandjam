import React from 'react';
import { motion } from 'framer-motion';

interface RetroTextProps {
  text: string;
  className?: string;
}

export function RetroText({ text, className = '' }: RetroTextProps) {
  return (
    <div className="relative">
      <motion.h1 
        className={`relative z-10 ${className}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {text}
      </motion.h1>
      <motion.h1 
        className={`absolute top-0 left-0 text-[#ff00ff] ${className}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        style={{ clipPath: 'inset(0 0 0 0)', transform: 'translate(-2px, 2px)' }}
      >
        {text}
      </motion.h1>
      <motion.h1 
        className={`absolute top-0 left-0 text-[#00ffff] ${className}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        style={{ clipPath: 'inset(0 0 0 0)', transform: 'translate(2px, -2px)' }}
      >
        {text}
      </motion.h1>
    </div>
  );
}