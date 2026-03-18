import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, Building2, ShoppingCart, GraduationCap, 
  Briefcase, Stethoscope, Factory, PenTool
} from 'lucide-react';
import IndustryGlobe from './canvas/IndustryGlobe';

const industries = [
  { name: "Startups & Entrepreneurs", icon: <Rocket /> },
  { name: "Small & Medium Businesses", icon: <Building2 /> },
  { name: "E-commerce Brands", icon: <ShoppingCart /> },
  { name: "Educational Institutions", icon: <GraduationCap /> },
  { name: "Service Providers", icon: <Briefcase /> },
  { name: "Real Estate & Healthcare", icon: <Stethoscope /> },
  { name: "Manufacturing & Logistics", icon: <Factory /> },
  { name: "Digital Creators & Agencies", icon: <PenTool /> }
];

const WhoWeServe = () => {
  return (
    <section className="bg-cream py-32 relative overflow-hidden">
      {/* 3D Background */}
      <IndustryGlobe />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-deep-navy mb-6 tracking-tight"
            >
              Who We Serve
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-text-gray text-lg font-medium"
            >
              Empowering diverse sectors with tailored automation solutions.
            </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex flex-col items-center justify-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group text-center cursor-default"
                >
                    <div className="w-14 h-14 bg-tech-blue/20 rounded-2xl flex items-center justify-center text-deep-navy mb-5 group-hover:bg-tech-blue group-hover:text-deep-navy transition-all duration-300 group-hover:rotate-6">
                        {React.cloneElement(item.icon, { size: 26 })}
                    </div>
                    <span className="font-bold text-deep-navy text-sm md:text-base leading-tight">{item.name}</span>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
