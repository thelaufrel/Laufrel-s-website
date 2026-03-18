import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Impact from './components/Impact';
import About from './components/About';
import WhoWeServe from './components/WhoWeServe';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-cream min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhoWeServe />
        <Impact />
        <About />
        <TechStack />
      </main>
      <Footer />
    </div>
  );
}

export default App;
