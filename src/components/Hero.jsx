import React from 'react';
import { motion } from 'framer-motion';
import HeroBackground from './canvas/HeroBackground';

const Hero = () => {
  return (
    <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden bg-cream pt-16">
      <HeroBackground />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-deep-navy tracking-tighter leading-[0.9] mb-4">
            Innovate. Elevate.
          </h1>
          <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-deep-navy via-text-gray to-deep-navy bg-300% animate-gradient tracking-tighter leading-[0.9]">
            Dominate
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-base md:text-lg text-text-gray max-w-2xl mx-auto leading-relaxed font-medium"
        >
          Laufrel helps startups, SMEs, and growing enterprises automate their digital presence,
          marketing workflows, customer engagement, and operational systems — enabling faster
          growth, higher efficiency, and smarter decision-making.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
