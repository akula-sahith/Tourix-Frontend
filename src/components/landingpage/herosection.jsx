import { useState, useEffect } from 'react';

const JharkhandTourismHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const navLinks = ['Home', 'About', 'Places', 'Culture', 'Plan Trip', 'Contact'];

  const slides = [
    {
      title: "Forests",
      description: "Discover the pristine wilderness of Jharkhand's dense forests, home to diverse flora and fauna that create a natural paradise."
    },
    {
      title: "Waterfalls",
      description: "Experience the thundering beauty of Jharkhand's magnificent waterfalls that cascade through rocky terrain and lush valleys."
    },
    {
      title: "Heritage",
      description: "Explore the rich cultural heritage and ancient traditions that have been preserved through generations in Jharkhand."
    },
    {
      title: "Wildlife",
      description: "Encounter exotic wildlife in their natural habitat across Jharkhand's numerous national parks and sanctuaries."
    }
  ];

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

            {/* Search and Mobile Menu */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-emerald-600 transition-colors duration-300">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
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

        {/* Content positioned like Kerala Tourism */}
        <div className="absolute bottom-0 left-0 right-0 z-10 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-end justify-between">
              
              {/* Left side - Main content */}
              <div className={`lg:w-1/2 mb-8 lg:mb-0 transform transition-all duration-1000 delay-500 ${
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

              {/* Right side - Slide content (like Kerala Tourism) */}
              <div className={`lg:w-1/2 lg:pl-12 transform transition-all duration-1000 delay-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}>
                <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-md ml-auto">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    {slides[currentSlide].title}
                  </h2>
                  <p className="text-white/90 text-base leading-relaxed mb-6">
                    {slides[currentSlide].description}
                  </p>
                  <button className="text-emerald-400 hover:text-emerald-300 font-medium text-sm uppercase tracking-wide transition-colors duration-300 flex items-center">
                    More 
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom navigation slider */}
            <div className={`flex items-center justify-center mt-12 space-x-8 transform transition-all duration-1000 delay-900 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <button 
                className="text-white/60 hover:text-white transition-colors duration-300"
                onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              {slides.map((slide, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? 'bg-white text-gray-900'
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  {slide.title}
                </button>
              ))}
              
              <button 
                className="text-white/60 hover:text-white transition-colors duration-300"
                onClick={() => setCurrentSlide(Math.min(slides.length - 1, currentSlide + 1))}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Video Controls */}
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <button className="w-12 h-12 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6l5-3-5-3z" />
                </svg>
              </button>
              <button className="w-12 h-12 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* White Background Section for Page Continuity */}
      <div className="bg-white h-20"></div>
    </div>
  );
};

export default JharkhandTourismHero;