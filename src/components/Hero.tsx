import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Sparkles, Code2, Palette } from 'lucide-react';

const Hero = () => {
  useGSAP(() => {
    gsap.from('.hero-text', {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power4.out'
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-20 bg-cover bg-center" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4"
      >
        <h1 className="hero-text text-6xl md:text-8xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
          CJR CODER
        </h1>
        <p className="hero-text text-xl md:text-2xl text-purple-200 mb-8 max-w-2xl mx-auto">
          Crafting digital experiences that inspire, engage, and transform
        </p>
        
        <div className="hero-text flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex items-center space-x-2 text-white">
            <Sparkles className="w-6 h-6" />
            <span>Innovation</span>
          </div>
          <div className="flex items-center space-x-2 text-white">
            <Code2 className="w-6 h-6" />
            <span>Technology</span>
          </div>
          <div className="flex items-center space-x-2 text-white">
            <Palette className="w-6 h-6" />
            <span>Design</span>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hero-text px-8 py-4 bg-white text-purple-900 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Explore Our Work
        </motion.button>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
    </div>
  );
};

export default Hero;
