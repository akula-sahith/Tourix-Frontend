import { useState, useEffect } from 'react';
import  { useRef } from "react";
import AboutJharkhand from "./aboutjharkhand.jsx";
import Gallery from "./gallery.jsx";

const JharkhandTourismHero = () => {
      const aboutRef = useRef(null); 
      const galleryref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const navLinks = ['Home', 'About', 'Places', 'Culture', 'Plan Trip', 'Contact'];

  return (
    <div className="bg-white">
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <div className="text-emerald-600 font-bold text-xl lg:text-2xl tracking-wide">
                  <span className="text-emerald-600">Jharkhand</span>
                  <span className="ml-1 text-sm lg:text-base font-normal text-gray-600">Tourism</span>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                {navLinks.map((link) => (
                  <button
                    key={link}
                    onClick={() => setActiveLink(link)}
                    className={`relative px-3 py-2 text-sm lg:text-base font-medium transition-all duration-300 ${
                      activeLink === link
                        ? 'text-emerald-600'
                        : 'text-gray-700 hover:text-emerald-600'
                    }`}
                  >
                    {link}
                    {activeLink === link && (
                      <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-emerald-600 rounded-full"></span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Login, Register, and Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Login Button */}
              <button
                className="px-4 py-2 text-sm lg:text-base font-medium text-gray-700 hover:text-emerald-600 transition-all duration-300 rounded-full"
                onClick={() => console.log('Login clicked')}
              >
                Login
              </button>

              {/* Register Button with enhanced animation */}
              <button
                className="px-4 py-2 text-sm lg:text-base font-medium text-white bg-emerald-600 rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-emerald-700 shadow-lg"
                onClick={() => console.log('Register clicked')}
              >
                Register
              </button>
              
              <div className="md:hidden">
                <button className="text-gray-700 hover:text-emerald-600 transition-colors duration-300">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen mt-16 lg:mt-20 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23065f46;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23064e3b;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grad)'/%3E%3C/svg%3E"
          >
            <source src="src/components/landingpage/video.mp4" type="video/mp4" />
            {/* Fallback background for browsers that don't support video */}
            <div className="w-full h-full bg-gradient-to-br from-emerald-800 to-emerald-900"></div>
          </video>
          
          {/* Semi-transparent overlay */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content positioned higher */}
        <div className="absolute inset-0 left-0 right-0 z-10 flex items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex flex-col justify-center min-h-full py-20">
              
              {/* Main content - centered vertically */}
              <div className={`max-w-3xl transform transition-all duration-1000 delay-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}>
                {/* Welcome Text */}
                <p className="text-emerald-300 text-sm lg:text-base font-light tracking-widest uppercase mb-4">
                  Welcome to Jharkhand
                </p>

                {/* Main Title */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Discover
                  <span className="block text-emerald-400">Jharkhand</span>
                </h1>

                {/* Subtitle */}
                <p className="text-white/90 text-lg lg:text-xl font-light italic mb-8 max-w-xl leading-relaxed">
                  The Land of Forests, Waterfalls & Heritage
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl">
                    Explore Now
                  </button>
                  <button className="px-8 py-4 border-2 border-white/80 hover:border-white text-white hover:bg-white hover:text-gray-900 font-semibold text-lg rounded-full transition-all duration-300 backdrop-blur-sm">
                    Plan Your Trip
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* White Background Section for Page Continuity */}
      <div className="bg-white h-20"></div>

      <div ref={aboutRef}>
        <AboutJharkhand /> {/* ✅ Capitalized component */}
      </div>
      <div ref={galleryref}>
        <Gallery />
        </div>
    </div>

  );
};

export default JharkhandTourismHero;