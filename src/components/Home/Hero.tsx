import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
import { RetroText } from './RetroText';
import '../../styles/retro-effects.css';

export function Hero() {
  const [text, setText] = useState('');
  const fullText = '> DIGITAL ARTIST & DEVELOPER_';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        index = fullText.length;
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen bg-black text-[#00ff00] overflow-hidden crt">
      <div className="absolute inset-0 scanline"></div>
      
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <RetroText 
            text="CREATE" 
            className="text-7xl md:text-9xl font-bold mb-8 tracking-wider"
          />
          
          <div className="inline-flex items-center space-x-2 px-4 py-2 border-2 border-[#00ff00] bg-black">
            <Terminal className="w-5 h-5" />
            <code className="font-mono text-xl">{text}</code>
          </div>

          <motion.div 
            className="mt-16 grid grid-cols-2 gap-4 max-w-xs mx-auto text-sm"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="border border-[#00ff00] p-2">
              <div className="font-mono">SYSTEM STATUS</div>
              <div className="text-xs opacity-70">ONLINE</div>
            </div>
            <div className="border border-[#00ff00] p-2">
              <div className="font-mono">ACCESS LEVEL</div>
              <div className="text-xs opacity-70">UNLIMITED</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}