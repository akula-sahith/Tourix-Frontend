import React from 'react';
import { Link } from 'react-router-dom';

const FeatureSections = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Section 1: Plan a Trip */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Text */}
            <div className="space-y-8">
              <h2 className="text-5xl font-bold italic text-blue-600 animate-[slideDown_1s_ease-out]">
                Plan Your Adventure
              </h2>
              <p className="text-gray-600 text-lg animate-[slideDown_1.2s_ease-out]">
                Discover amazing destinations and create unforgettable memories with our easy planning tools.
              </p>
              <Link 
                    to="/travelsp"
                 className="px-8 py-4 bg-gradient-to-r from-pink-400 to-pink-600 
                       hover:from-pink-500 hover:to-purple-600 text-white 
                        font-semibold rounded-full shadow-lg hover:shadow-xl 
                         transform hover:scale-105 transition-all duration-300 
                         animate-[slideDown_1.4s_ease-out]"
                          >
                   Start Planning Now
                     </Link>
            </div>
            
            {/* Right side - Image */}
            <div className="flex justify-center">
              <img 
                src="src\assets\planatrip.png" 
                alt="Plan a trip" 
                className="w-full max-w-lg rounded-lg hover:scale-110 hover:shadow-2xl hover:shadow-pink-200 transition-all duration-500 animate-[slideDown_0.8s_ease-out]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Sell a Product */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Image */}
            <div className="flex justify-center order-2 lg:order-1">
              <img 
                src="src\assets\sellaproduct.png" 
                alt="Sell a product" 
                className="w-full max-w-lg rounded-lg hover:scale-110 hover:shadow-2xl hover:shadow-green-200 transition-all duration-500 animate-[slideDown_0.8s_ease-out]"
              />
            </div>
            
            {/* Right side - Text */}
            <div className="space-y-8 order-1 lg:order-2">
              <h2 className="text-5xl font-bold italic text-green-600 animate-[slideDown_1s_ease-out]">
                Showcase Your Products
              </h2>
              <p className="text-gray-600 text-lg animate-[slideDown_1.2s_ease-out]">
                Transform your ideas into profitable ventures with our powerful selling platform.
              </p>
              <Link 
                 to="/vendorsp"
                    className="px-8 py-4 bg-gradient-to-r from-pink-400 to-pink-600 
                      hover:from-pink-500 hover:to-purple-600 text-white 
                    font-semibold rounded-full shadow-lg hover:shadow-xl 
                    transform hover:scale-105 transition-all duration-300 
                    animate-[slideDown_1.4s_ease-out]"
                    >
                 Begin Selling Today
                 </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default FeatureSections;