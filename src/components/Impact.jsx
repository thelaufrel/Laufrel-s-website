import React from 'react';
import { motion } from 'framer-motion';
import ImpactBackground from './canvas/ImpactBackground';
import { CheckCircle, Shield, Zap, TrendingUp, Layers, DollarSign } from 'lucide-react';

const reasons = [
  { icon: <Layers />, text: "End-to-end digital automation", desc: "Seamless integration across all business functions." },
  { icon: <Zap />, text: "AI-powered workflow optimization", desc: "Smart algorithms that learn and improve efficiency." },
  { icon: <TrendingUp />, text: "Scalable cloud infrastructure", desc: "Grow without limits using AWS & Azure solutions." },
  { icon: <CheckCircle />, text: "Data-driven marketing systems", desc: "Decisions backed by real-time analytics." },
  { icon: <Shield />, text: "Secure and compliant architecture", desc: "Enterprise-grade security for peace of mind." },
  { icon: <DollarSign />, text: "Affordable automation for SMEs", desc: "Premium tech made accessible for growth." },
];

const Impact = () => {
  return (
    <section id="why-laufrel" className="py-32 relative overflow-hidden bg-deep-navy">
      {/* 3D Background - Fully Visible */}
      <div className="absolute inset-0 z-0">
        <ImpactBackground />
      </div>
      
      {/* Subtle Gradient Overlay to ensure text readability without hiding 3D */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-deep-navy/80 via-deep-navy/40 to-deep-navy/90 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-cream mb-6"
            >
              Why <span className="text-tech-blue">Laufrel?</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-300 text-lg font-medium"
            >
              We bridge creativity with engineering excellence to empower your business with autonomous technology.
            </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((item, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-deep-navy/40 backdrop-blur-md p-8 rounded-2xl shadow-xl hover:scale-105 transition-all duration-300 group border border-white/10 hover:border-tech-blue/50 relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-24 h-24 bg-tech-blue/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 duration-500"></div>
                
                <div className="w-14 h-14 bg-white/5 text-tech-blue rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:bg-tech-blue group-hover:text-deep-navy transition-colors duration-300 relative z-10 border border-white/10">
                    {React.cloneElement(item.icon, { size: 28 })}
                </div>
                <h3 className="text-xl font-bold text-cream mb-3 tracking-wide relative z-10">{item.text}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-medium relative z-10">
                    {item.desc}
                </p>
            </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
