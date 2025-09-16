import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from "./components/landingpage/herosection.jsx";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Home Route - Hero Section */}
          <Route path="/" element={<HeroSection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;