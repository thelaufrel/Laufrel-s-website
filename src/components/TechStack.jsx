import React from 'react';

const technologies = [
  "React", "Next.js", "Node.js", "Python", "AWS", "Docker", 
  "Kubernetes", "PostgreSQL", "MongoDB", "TensorFlow", "TypeScript", "GraphQL"
];

const TechStack = () => {
  return (
    <section id="technology" className="bg-white py-28 overflow-hidden border-t border-gray-100 relative">
      <div className="absolute inset-0 bg-cream/50 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-4 tracking-tight">
            Powered by <span className="text-transparent bg-clip-text bg-gradient-to-r from-deep-navy to-text-gray">Modern Tech</span>
        </h2>
        <p className="text-text-gray text-lg">We use the latest tools to build scalable solutions.</p>
      </div>
      
      <div className="relative w-full overflow-hidden py-10 z-10">
        {/* Gradients to fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-20"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-20"></div>

        <div className="flex animate-scroll whitespace-nowrap">
          {/* First Loop */}
          <div className="flex space-x-8 mx-4">
            {technologies.map((tech, index) => (
              <div 
                key={`tech-1-${index}`} 
                className="flex items-center justify-center w-48 h-24 bg-white rounded-xl shadow-sm border border-gray-200/50 hover:shadow-lg hover:border-tech-blue/30 transition-all duration-300 group cursor-default"
              >
                <span className="text-lg font-bold text-gray-400 group-hover:text-deep-navy transition-colors duration-300 transform group-hover:scale-105 inline-block">{tech}</span>
              </div>
            ))}
          </div>
          
          {/* Second Loop for Infinite Effect */}
          <div className="flex space-x-8 mx-4">
            {technologies.map((tech, index) => (
              <div 
                key={`tech-2-${index}`} 
                className="flex items-center justify-center w-48 h-24 bg-white rounded-xl shadow-sm border border-gray-200/50 hover:shadow-lg hover:border-tech-blue/30 transition-all duration-300 group cursor-default"
              >
                <span className="text-lg font-bold text-gray-400 group-hover:text-deep-navy transition-colors duration-300 transform group-hover:scale-105 inline-block">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
