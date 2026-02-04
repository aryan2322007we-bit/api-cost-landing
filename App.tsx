import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import AdvancedTactics from './components/AdvancedTactics';
import PlugAndPlayToolkit from './components/PlugAndPlayToolkit';
import Results from './components/Results';
import CourseDetails from './components/CourseDetails';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-yellow-500/30 selection:text-yellow-200">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <AdvancedTactics />
        <PlugAndPlayToolkit />
        <Results />
        <CourseDetails />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
    </div>
  );
}

export default App;