import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import VisionMission from './sections/VisionMission';
import Procedure from './sections/Procedure';
import CoreValues from './sections/CoreValues';
import Packages from './sections/Packages';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <Hero />
        <VisionMission />
        <Procedure />
        <CoreValues />
        <Packages />
      </main>
      <Footer />
    </div>
  );
}

export default App;
