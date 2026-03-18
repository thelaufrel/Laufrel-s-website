import React from 'react';
import { Mail, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-deep-navy text-cream pt-20 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-bold mb-6 tracking-tight">LAUFREL<span className="text-tech-blue">.</span></h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Laufrel is a digital automation company focused on simplifying business complexity through intelligent systems.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-tech-blue transition-colors"><Github size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-tech-blue transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-tech-blue transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-tech-blue transition-colors"><Mail size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-white">Services</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-tech-blue transition-colors">Digital Presence</a></li>
              <li><a href="#" className="hover:text-tech-blue transition-colors">Marketing Automation</a></li>
              <li><a href="#" className="hover:text-tech-blue transition-colors">Business Process</a></li>
              <li><a href="#" className="hover:text-tech-blue transition-colors">E-commerce</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">Company</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#about" className="hover:text-tech-blue transition-colors">About Us</a></li>
              <li><a href="#why-laufrel" className="hover:text-tech-blue transition-colors">Why Laufrel</a></li>
              <li><a href="#" className="hover:text-tech-blue transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-tech-blue transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
             <h4 className="font-bold mb-6 text-white">Contact</h4>
             <p className="text-gray-400 text-sm mb-4">
                Ready to start?
             </p>
             <a href="mailto:hello@laufrel.com" className="inline-block px-6 py-2 rounded-full bg-tech-blue text-deep-navy font-bold hover:scale-105 transition-transform text-sm">
                Get in Touch
             </a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-gray-600 text-sm">
          © 2025 Laufrel. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
