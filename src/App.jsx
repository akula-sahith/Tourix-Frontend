import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from "./components/landingpage/herosection.jsx";
import MainAuth from "./components/mainauth.jsx";
import TravelSignup from "./components/travelsignup.jsx";
import VendorSignup from "./components/vendorsignup.jsx";
import AdminSignup from "./components/adminsignup.jsx";

// You can create a combined component for the home page if needed.
const HomePage = () => (
  <>
    <HeroSection />
  </>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mainauth" element={<MainAuth />} />
          <Route path="/travelsp" element={<TravelSignup />} />
          <Route path="/vendorsp" element={<VendorSignup />} />
          <Route path="/adminsp" element={<AdminSignup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;