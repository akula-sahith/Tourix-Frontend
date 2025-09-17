import React, { useState, useEffect } from 'react';
import { X, MapPin, Home, Car, Palette, ChevronRight, Check } from 'lucide-react';

const VendorTypeSelection = ({ isOpen = true, onClose = () => {}, onVendorTypeSelect = () => {} }) => {

  const [selectedType, setSelectedType] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const vendorTypes = [
    {
      id: 'guide',
      title: 'Guide',
      description: 'Offer personalized tours and local experiences',
      icon: MapPin,
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:from-blue-600 hover:to-blue-700',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-700',
      iconColor: 'text-blue-600'
    },
    {
      id: 'homestay',
      title: 'HomeStay',
      description: 'Provide comfortable accommodation for travelers',
      icon: Home,
      color: 'from-green-500 to-green-600',
      hoverColor: 'hover:from-green-600 hover:to-green-700',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-700',
      iconColor: 'text-green-600'
    },
    {
      id: 'transportation',
      title: 'Transportation',
      description: 'Offer reliable transport services and rentals',
      icon: Car,
      color: 'from-purple-500 to-purple-600',
      hoverColor: 'hover:from-purple-600 hover:to-purple-700',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-700',
      iconColor: 'text-purple-600'
    },
    {
      id: 'handicraft',
      title: 'Handicraft',
      description: 'Showcase and sell authentic local handicrafts',
      icon: Palette,
      color: 'from-orange-500 to-orange-600',
      hoverColor: 'hover:from-orange-600 hover:to-orange-700',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      textColor: 'text-orange-700',
      iconColor: 'text-orange-600'
    }
  ];

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      setIsVisible(false);
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleTypeSelect = (typeId) => {
    setSelectedType(typeId);
  };

  const handleContinue = async () => {
    if (!selectedType) return;
    
    setIsLoading(true);
    
    try {
      // Simulate API call to save vendor type
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log(`Vendor type selected: ${selectedType}`);
      
      // You can save this to your database or context here
      const selectedVendorType = vendorTypes.find(type => type.id === selectedType);
      
      // Call the callback function to handle the vendor type selection
      onVendorTypeSelect(selectedType, selectedVendorType);
      
      alert(`Great! You've registered as a ${selectedVendorType?.title} vendor.`);
      onClose();
      
    } catch (error) {
      console.error('Error saving vendor type:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <style>{`
        @keyframes fadeInScale { 
          from { opacity: 0; transform: scale(0.9); } 
          to { opacity: 1; transform: scale(1); } 
        }
        .fade-in-scale { 
          animation: fadeInScale 0.3s ease-out; 
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(251, 191, 36, 0.4); }
          50% { box-shadow: 0 0 0 8px rgba(251, 191, 36, 0); }
        }
        .pulse-glow {
          animation: pulse-glow 2s infinite;
        }
        .spinner { 
          border: 2px solid rgba(255, 255, 255, 0.3); 
          border-top: 2px solid white; 
          border-radius: 50%; 
          width: 20px; 
          height: 20px; 
          animation: spin 1s linear infinite; 
        }
        @keyframes spin { 
          0% { transform: rotate(0deg); } 
          100% { transform: rotate(360deg); } 
        }
        @keyframes card-select {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1.02); }
        }
        .card-select {
          animation: card-select 0.3s ease-out;
        }
      `}</style>
      
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className={`bg-white rounded-2xl shadow-2xl p-6 w-full max-w-[600px] max-h-[90vh] overflow-y-auto transform transition-all duration-300 ${isVisible ? 'scale-100 opacity-100 fade-in-scale' : 'scale-90 opacity-0'}`}>
          
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-amber-600">
                Choose Your Vendor Type
              </h2>
              <p className="text-gray-600 text-sm mt-1">
                Select the category that best describes your business
              </p>
            </div>
            <button 
              onClick={onClose} 
              className="text-gray-400 hover:text-amber-600 transition-colors p-2 rounded-full hover:bg-amber-50" 
              aria-label="Close form"
              disabled={isLoading}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Vendor Type Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {vendorTypes.map((type) => {
              const IconComponent = type.icon;
              const isSelected = selectedType === type.id;
              
              return (
                <div
                  key={type.id}
                  onClick={() => handleTypeSelect(type.id)}
                  className={`
                    relative cursor-pointer rounded-xl border-2 p-5 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]
                    ${isSelected 
                      ? `${type.borderColor} ${type.bgColor} shadow-lg scale-[1.02] card-select` 
                      : 'border-gray-200 bg-gray-50 hover:border-amber-300 hover:bg-amber-50'
                    }
                    ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}
                  `}
                  disabled={isLoading}
                >
                  {/* Selection Indicator */}
                  {isSelected && (
                    <div className="absolute top-3 right-3 w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center pulse-glow">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  )}
                  
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-3 ${isSelected ? type.bgColor : 'bg-white'}`}>
                    <IconComponent className={`w-6 h-6 ${isSelected ? type.iconColor : 'text-gray-500'}`} />
                  </div>
                  
                  {/* Content */}
                  <h3 className={`text-lg font-semibold mb-2 ${isSelected ? type.textColor : 'text-gray-800'}`}>
                    {type.title}
                  </h3>
                  <p className={`text-sm ${isSelected ? type.textColor : 'text-gray-600'}`}>
                    {type.description}
                  </p>
                  
                  {/* Hover Arrow */}
                  <div className={`absolute bottom-3 right-3 opacity-0 transition-opacity duration-300 ${isSelected ? 'opacity-100' : 'group-hover:opacity-100'}`}>
                    <ChevronRight className={`w-5 h-5 ${isSelected ? type.iconColor : 'text-amber-600'}`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Continue Button */}
          <button
            onClick={handleContinue}
            disabled={!selectedType || isLoading}
            className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="spinner mr-2"></div>
                Setting up your account...
              </div>
            ) : (
              <div className="flex items-center justify-center">
                Continue
                <ChevronRight className="w-5 h-5 ml-2" />
              </div>
            )}
          </button>

          {/* Help Text */}
          {!selectedType && (
            <div className="text-center mt-4">
              <p className="text-gray-500 text-sm">
                Please select a vendor type to continue
              </p>
            </div>
          )}

          {/* Footer Note */}
          <div className="text-center mt-6 pt-4 border-t border-gray-200">
            <p className="text-gray-500 text-xs leading-relaxed">
              Don't worry, you can always change your vendor type later in your account settings.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VendorTypeSelection;