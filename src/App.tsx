import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import HowItWorks from './components/HowItWorks/HowItWorks';
import ParallaxWrapper from './components/ParallaxWrapper/ParallaxWrapper';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <ParallaxWrapper>
        <HeroSection />
        <HowItWorks />
      </ParallaxWrapper>
    </div>
  );
}

export default App;
