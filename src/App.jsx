import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from "./components/landingpage/herosection.jsx";
import AboutJharkhand from "./components/landingpage/aboutjharkhand.jsx";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Home Route - Hero Section */}
          <Route path="/" element={<HeroSection />} />
          <Route path="/" element={<AboutJharkhand />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;