import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Lightbulb, ShieldCheck, TrendingUp, Users } from 'lucide-react';

const values = [
  { name: "Innovation", icon: <Lightbulb />, desc: "Constantly pushing boundaries." },
  { name: "Transparency", icon: <Eye />, desc: "Clear communication always." },
  { name: "Reliability", icon: <ShieldCheck />, desc: "Systems you can trust." },
  { name: "Scalability", icon: <TrendingUp />, desc: "Built to grow with you." },
  { name: "Security", icon: <Users />, desc: "Protecting your digital assets." },
  { name: "Sustainability", icon: <Target />, desc: "Long-term thinking." }
];

const About = () => {
  return (
    <section id="about" className="py-32 bg-cream relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-tech-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-tech-blue/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-deep-navy mb-6 tracking-tight"
          >
            Who We Are
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-gray leading-relaxed"
          >
            Laufrel is a digital automation company focused on simplifying business complexity through
            intelligent systems, scalable architecture, and automation-first design.
          </motion.p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-12 rounded-[2rem] shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-2xl transition-all duration-500"
          >
            <div className="absolute -right-10 -top-10 text-deep-navy/5 group-hover:scale-110 transition-transform duration-700">
              <Target size={200} />
            </div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center text-deep-navy mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <Target size={32} />
              </div>
              <h3 className="text-3xl font-bold text-deep-navy mb-4">Our Mission</h3>
              <p className="text-text-gray text-lg leading-relaxed">
                To empower businesses with automation systems that drive efficiency, scalability, and sustainable growth.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-deep-navy p-12 rounded-[2rem] border border-gray-800 relative overflow-hidden group hover:shadow-2xl transition-all duration-500"
          >
             <div className="absolute -right-10 -top-10 text-white/5 group-hover:scale-110 transition-transform duration-700">
              <Eye size={200} />
            </div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-tech-blue mb-8 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                <Eye size={32} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                To become a global leader in autonomous business technology for SMEs and enterprises.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-deep-navy mb-4">Our Core Values</h3>
            <div className="h-1 w-20 bg-tech-blue mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm hover:border-tech-blue/50 hover:shadow-xl transition-all duration-300 group cursor-default text-left relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-tech-blue/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 duration-500"></div>
                
                <div className="mb-6 text-deep-navy group-hover:text-tech-blue transition-colors relative z-10 bg-cream w-14 h-14 rounded-xl flex items-center justify-center shadow-sm">
                    {React.cloneElement(value.icon, { size: 28 })}
                </div>
                <h4 className="text-xl font-bold text-deep-navy mb-2 relative z-10">{value.name}</h4>
                <p className="text-text-gray text-sm leading-relaxed relative z-10">{value.desc}</p>
              </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default About;
