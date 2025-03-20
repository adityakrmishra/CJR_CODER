import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './components/Hero';
import Services from './components/Services';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Initialize any global animations here
    gsap.to('.scroll-indicator', {
      y: 20,
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: 'power1.inOut'
    });
  }, []);

  return (
    <div className="bg-gray-900">
      <Hero />
      <Services />
      {/* More sections will be added here */}
    </div>
  );
}

export default App;
