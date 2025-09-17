import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Luggage, Store, BarChart3 } from 'lucide-react';

const AuthenticationPage = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Trigger animation after component mounts with delay for dramatic effect
    setTimeout(() => setIsVisible(true), 300);
  }, []);

  const handleLogin = (role) => {
    setSelectedRole(role);
    // Show the loading overlay and then navigate after a 2-second delay
    setTimeout(() => {
      if (role === 'tourist') {
        navigate('/travelsp');
      } else if (role === 'vendor') {
        navigate('/vendorsp');
      } else if (role === 'admin') {
        navigate('/adminsp');
      }
    }, 2000); // 2000ms delay for the animation
  };

  const roles = [
    {
      id: 'tourist',
      title: 'Tourist',
      tag: 'EXPLORE',
      description: 'Discover amazing destinations, book unique experiences, and create unforgettable memories on your journey.',
      color: '#059669',
      hoverColor: '#047857',
      bgColor: '#059669',
      icon: Luggage
    },
    {
      id: 'vendor',
      title: 'Vendor',
      tag: 'SHARE',
      description: 'Showcase your services, connect with travelers, and grow your tourism business with our platform.',
      color: '#D97706',
      hoverColor: '#B45309',
      bgColor: '#D97706',
      icon: Store
    },
    {
      id: 'admin',
      title: 'Administrator',
      tag: 'MANAGE',
      description: 'Control platform operations, oversee users, and analyze performance metrics to optimize the experience.',
      color: '#2563EB',
      hoverColor: '#1D4ED8',
      bgColor: '#2563EB',
      icon: BarChart3
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden flex flex-col items-center justify-center">
      
      {/* Centered Welcome Header */}
      <div className="text-center pt-12 pb-6">
        <h1 
          className={`text-2xl md:text-3xl font-bold italic text-gray-900 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-20 opacity-0 scale-75'
          }`}
          style={{ 
            fontFamily: 'Aptos, sans-serif',
            background: 'linear-gradient(45deg, #059669, #2563EB, #D97706)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          Welcome to the Tourism Platform
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 relative items-center">
          
          {/* Tourist Section */}
          <div 
            className={`text-center space-y-6 transition-all duration-1000 transform ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="inline-block">
              <span className="text-white px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider"
                    style={{ backgroundColor: roles[0].color }}>
                {roles[0].tag}
              </span>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900" style={{ fontFamily: 'Aptos, sans-serif' }}>
                For a <span className="italic" style={{ color: roles[0].color }}>{roles[0].title}</span>
              </h2>
              
              <p className="text-base text-gray-600 max-w-sm mx-auto leading-relaxed" style={{ fontFamily: 'Times New Roman, serif' }}>
                {roles[0].description}
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <button
                onClick={() => handleLogin('tourist')}
                className="w-full max-w-xs text-white px-6 py-3 rounded-md font-medium text-sm hover:shadow-md hover:scale-105 transition-all duration-300"
                style={{ 
                  backgroundColor: roles[0].color,
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = roles[0].hoverColor}
                onMouseLeave={(e) => e.target.style.backgroundColor = roles[0].color}
              >
                Login as Tourist
              </button>
              
              
            </div>

            {/* Tourist Icon */}
            <div className="flex justify-center pt-6">
              <div className="p-3 rounded-full" style={{ backgroundColor: `${roles[0].color}20` }}>
                <Luggage className="w-6 h-6" style={{ color: roles[0].color }} />
              </div>
            </div>
            
            {/* Separator Line */}
            <div className="pt-8">
              <div className="w-24 h-0.5 mx-auto lg:hidden" style={{ backgroundColor: roles[0].color, opacity: 0.3 }}></div>
            </div>
          </div>
          
          {/* Vertical Separator Line */}
          <div className="hidden lg:flex items-center justify-center mx-12">
            <div className="w-px h-full bg-gray-300 opacity-50"></div>
          </div>

          {/* Vendor Section */}
          <div 
            className={`text-center space-y-6 transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <div className="inline-block">
              <span className="text-white px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider"
                    style={{ backgroundColor: roles[1].color }}>
                {roles[1].tag}
              </span>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900" style={{ fontFamily: 'Aptos, sans-serif' }}>
                For a <span className="italic" style={{ color: roles[1].color }}>{roles[1].title}</span>
              </h2>
              
              <p className="text-base text-gray-600 max-w-sm mx-auto leading-relaxed" style={{ fontFamily: 'Times New Roman, serif' }}>
                {roles[1].description}
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <button
                onClick={() => handleLogin('vendor')}
                className="w-full max-w-xs text-white px-6 py-3 rounded-md font-medium text-sm hover:shadow-md hover:scale-105 transition-all duration-300"
                style={{ 
                  backgroundColor: roles[1].color,
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = roles[1].hoverColor}
                onMouseLeave={(e) => e.target.style.backgroundColor = roles[1].color}
              >
                Join as Vendor
              </button>
              
              
            </div>

            {/* Vendor Icon */}
            <div className="flex justify-center pt-6">
              <div className="p-3 rounded-full" style={{ backgroundColor: `${roles[1].color}20` }}>
                <Store className="w-6 h-6" style={{ color: roles[1].color }} />
              </div>
            </div>
            
            {/* Separator Line */}
            <div className="pt-8">
              <div className="w-24 h-0.5 mx-auto lg:hidden" style={{ backgroundColor: roles[1].color, opacity: 0.3 }}></div>
            </div>
          </div>

          {/* Vertical Separator Line */}
          <div className="hidden lg:flex items-center justify-center mx-12">
            <div className="w-px h-full bg-gray-300 opacity-50"></div>
          </div>

          {/* Admin Section */}
          <div 
            className={`text-center space-y-6 transition-all duration-1000 transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            <div className="inline-block">
              <span className="text-white px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider"
                    style={{ backgroundColor: roles[2].color }}>
                {roles[2].tag}
              </span>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900" style={{ fontFamily: 'Aptos, sans-serif' }}>
                For an <span className="italic" style={{ color: roles[2].color }}>{roles[2].title}</span>
              </h2>
              
              <p className="text-base text-gray-600 max-w-sm mx-auto leading-relaxed" style={{ fontFamily: 'Times New Roman, serif' }}>
                {roles[2].description}
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <button
                onClick={() => handleLogin('admin')}
                className="w-full max-w-xs text-white px-6 py-3 rounded-md font-medium text-sm hover:shadow-md hover:scale-105 transition-all duration-300"
                style={{ 
                  backgroundColor: roles[2].color,
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = roles[2].hoverColor}
                onMouseLeave={(e) => e.target.style.backgroundColor = roles[2].color}
              >
                Login  as Admin
              </button>
              
            
            </div>

            {/* Admin Icon */}
            <div className="flex justify-center pt-6">
              <div className="p-3 rounded-full" style={{ backgroundColor: `${roles[2].color}20` }}>
                <BarChart3 className="w-6 h-6" style={{ color: roles[2].color }} />
              </div>
            </div>
            
            {/* Separator Line */}
            <div className="pt-8">
              <div className="w-24 h-0.5 mx-auto lg:hidden" style={{ backgroundColor: roles[2].color, opacity: 0.3 }}></div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div 
          className={`mt-12 text-center transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          style={{ transitionDelay: '1000ms' }}
        >
          <p className="text-gray-500 text-sm" style={{ fontFamily: 'Times New Roman, serif' }}>
            Trusted by travelers and vendors worldwide
          </p>
        </div>
      </div>

      {/* Loading/Redirect Overlay */}
      {selectedRole && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-md mx-4 transform animate-zoom-in">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center"
                   style={{ backgroundColor: roles.find(r => r.id === selectedRole)?.color }}>
                {selectedRole === 'tourist' && <Luggage className="w-6 h-6 text-white" />}
                {selectedRole === 'vendor' && <Store className="w-6 h-6 text-white" />}
                {selectedRole === 'admin' && <BarChart3 className="w-6 h-6 text-white" />}
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                Redirecting to the {
                  selectedRole === 'tourist' ? 'Tourist' : 
                  selectedRole === 'vendor' ? 'Vendor' : 
                  'Administrator'
                } Portal...
              </h3>
              <div className="animate-spin w-5 h-5 border-2 border-t-transparent rounded-full mx-auto"
                   style={{ borderColor: roles.find(r => r.id === selectedRole)?.color }}>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Local styles for animations */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes zoom-in {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        
        .animate-fade-in { animation: fade-in 0.3s ease-out; }
        .animate-zoom-in { animation: zoom-in 0.4s ease-out; }
      `}</style>
    </div>
  );
};

export default AuthenticationPage;