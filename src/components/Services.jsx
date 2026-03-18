import React from 'react';
import { motion } from 'framer-motion';
import ServiceBackground from './canvas/ServiceBackground';
import ServiceShape from './canvas/ServiceShapes';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Digital Presence",
    description: "Website automation, landing page systems, content pipelines, SEO automation, analytics integration.",
    shape: "sphere",
    deliverables: ["Responsive Dev", "CMS Automation", "SEO Systems", "Analytics"]
  },
  {
    title: "Marketing Automation",
    description: "Lead capture systems, CRM workflows, email marketing automation, WhatsApp automation, funnel tracking.",
    shape: "torus",
    deliverables: ["CRM Setup", "Email Workflows", "Chatbots", "Funnel Tracking"]
  },
  {
    title: "Business Process",
    description: "Internal workflows, invoicing automation, customer onboarding systems, ticket management.",
    shape: "box",
    deliverables: ["Invoice Auto", "Task Mgmt", "Onboarding", "Ticketing"]
  },
  {
    title: "E-commerce",
    description: "Online store building, Shopify development, conversion optimization, product branding solutions.",
    shape: "octahedron",
    deliverables: ["Store Build", "Conversion Opt", "Payments", "Inventory Sync"]
  }
];

const Services = () => {
  return (
    <section id="services" className="bg-deep-navy py-32 relative overflow-hidden min-h-screen flex items-center">
      <ServiceBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-deep-navy via-deep-navy/90 to-deep-navy pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
        >
            <h2 className="text-5xl md:text-6xl font-bold text-cream mb-6 tracking-tight">
                Our Automation <span className="text-tech-blue">Services</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                Laufrel delivers modular, scalable automation solutions that modernize your digital operations and unlock continuous growth.
            </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group hover:-translate-y-2 flex flex-col"
                >
                    {/* 3D Icon Container */}
                    <div className="w-20 h-20 rounded-xl bg-tech-blue/5 mb-6 relative overflow-visible group-hover:scale-110 transition-transform duration-300">
                        <ServiceShape type={service.shape} />
                    </div>

                    <h3 className="text-2xl font-bold text-cream mb-4">{service.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                        {service.description}
                    </p>
                    
                    <div className="space-y-2 mb-6 border-t border-white/5 pt-4">
                        {service.deliverables.map((item, i) => (
                            <div key={i} className="flex items-center text-xs text-gray-500">
                                <div className="w-1 h-1 bg-tech-blue rounded-full mr-2"></div>
                                {item}
                            </div>
                        ))}
                    </div>

                    <a href="#" className="inline-flex items-center text-tech-blue text-sm font-semibold hover:gap-2 transition-all mt-auto">
                        Learn more <ArrowRight size={16} className="ml-1" />
                    </a>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
