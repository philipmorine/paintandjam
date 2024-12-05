import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Mail } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          <div className="prose prose-invert">
            <p className="text-xl leading-relaxed mb-8">
              I'm a digital artist and developer passionate about creating immersive digital experiences. 
              My work explores the intersection of technology and creativity, pushing the boundaries of what's possible in the digital realm.
            </p>
            
            <h3 className="text-2xl font-bold mb-4">Skills</h3>
            <ul className="grid grid-cols-2 gap-4 mb-8">
              <li>Digital Art</li>
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>Creative Coding</li>
              <li>3D Modeling</li>
              <li>Motion Graphics</li>
            </ul>

            <div className="flex space-x-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="mailto:hello@example.com" className="hover:text-gray-300">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}