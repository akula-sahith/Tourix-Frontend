import React, { useState, useRef, useEffect } from 'react';
import { 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  DollarSign, 
  Send, 
  Bot,
  User,
  Sparkles,
  Mountain,
  ChevronDown
} from 'lucide-react';

const AITripPlanner = () => {
  const [formData, setFormData] = useState({
    startingPoint: '',
    destination: '',
    interestedPlaces: [],
    duration: '',
    priceRange: [5000, 50000]
  });

  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: 'Welcome, Pandu! I\'ll help plan your perfect Jharkhand trip 🌿',
      timestamp: new Date()
    }
  ]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPlacesDropdown, setShowPlacesDropdown] = useState(false);
  const messagesEndRef = useRef(null);

  const touristPlaces = [
    'Hundru Falls', 'Dassam Falls', 'Jonha Falls', 'Betla National Park',
    'Palamau Tiger Reserve', 'Netarhat Hills', 'Ranchi Hill Station',
    'Deoghar Temple', 'Baidyanath Dham', 'Rajrappa Temple', 
    'Hazaribagh Wildlife Sanctuary', 'Dhanbad Coal Mines', 
    'Jamshedpur Steel City', 'Khunti Tribal Villages'
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePlaceSelect = (place) => {
    if (!formData.interestedPlaces.includes(place)) {
      handleInputChange('interestedPlaces', [...formData.interestedPlaces, place]);
    }
  };

  const removePlaceFromSelection = (place) => {
    handleInputChange('interestedPlaces', 
      formData.interestedPlaces.filter(p => p !== place)
    );
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  // Combine form data into a single message
  const combinedMessage = `Plan my trip from ${formData.startingPoint} to ${formData.destination} for ${formData.duration} days. 
Interested in: ${formData.interestedPlaces.join(', ') || "Not specified"}. 
Budget: ₹${formData.priceRange[0]} - ₹${formData.priceRange[1]}`;

  // Add user message
  const userMessage = {
    id: messages.length + 1,
    type: 'user',
    content: combinedMessage,
    timestamp: new Date()
  };
  setMessages(prev => [...prev, userMessage]);

  try {
    const res = await fetch("http://localhost:5000/ai/plan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: combinedMessage })
    });

    const data = await res.json();

    // ✅ Format backend response into readable text
    let formattedReply = `🛫 **Trip to ${data.reply.destination}**\n\n`;
    formattedReply += `**Budget:** ₹${data.reply.budget}\n`;
    formattedReply += `**Duration:** ${data.reply.days} days\n\n`;

    data.reply.itinerary.forEach(dayPlan => {
      formattedReply += `📅 **Day ${dayPlan.day}:**\n`;
      dayPlan.activities.forEach(activity => {
        formattedReply += `• ${activity}\n`;
      });
      formattedReply += `\n`;
    });

    const aiResponse = {
      id: messages.length + 2,
      type: 'ai',
      content: formattedReply,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, aiResponse]);
  } catch (error) {
    console.error("Error fetching AI response:", error);
    const errorMessage = {
      id: messages.length + 2,
      type: 'ai',
      content: "❌ Failed to get itinerary. Please try again later.",
      timestamp: new Date()
    };
    setMessages(prev => [...prev, errorMessage]);
  }

  setIsSubmitting(false);
};

  const handleBackToDashboard = () => {
    window.location.href = '/touristDashboard';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Header */}
      <header className="bg-white shadow-md border-b-4 border-green-600">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={handleBackToDashboard}
              className="flex items-center gap-2 text-green-700 hover:text-green-900 transition-colors duration-200 cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Dashboard</span>
            </button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-700 rounded-xl flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-serif text-transparent bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text">AI Trip Planner</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[calc(100vh-200px)]">
          
          {/* Left Panel - Form */}
          <div className="bg-white rounded-2xl shadow-lg border border-green-100 p-8 overflow-y-auto">
            <div className="mb-6">
              <h2 className="text-2xl font-serif text-transparent bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text mb-2">Plan Your Journey</h2>
              <p className="text-green-600">Fill in your travel preferences and let AI create your perfect itinerary</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Starting Point */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-green-700 font-semibold">
                  <MapPin className="w-4 h-4" />
                  Starting Point
                </label>
                <input
                  type="text"
                  value={formData.startingPoint}
                  onChange={(e) => handleInputChange('startingPoint', e.target.value)}
                  placeholder="Enter your starting location"
                  className="w-full px-4 py-3 border-2 border-green-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200"
                  required
                />
              </div>

              {/* Destination */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-green-700 font-semibold">
                  <Mountain className="w-4 h-4" />
                  Destination in Jharkhand
                </label>
                <input
                  type="text"
                  value={formData.destination}
                  onChange={(e) => handleInputChange('destination', e.target.value)}
                  placeholder="Where would you like to visit?"
                  className="w-full px-4 py-3 border-2 border-green-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200"
                  required
                />
              </div>

              {/* Interested Places */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-green-700 font-semibold">
                  <Sparkles className="w-4 h-4" />
                  Places of Interest
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowPlacesDropdown(!showPlacesDropdown)}
                    className="w-full px-4 py-3 border-2 border-green-200 rounded-xl focus:border-green-500 text-left flex items-center justify-between hover:border-green-300 transition-all duration-200 cursor-pointer"
                  >
                    <span className="text-gray-600">
                      {formData.interestedPlaces.length === 0 
                        ? 'Select places you want to visit' 
                        : `${formData.interestedPlaces.length} places selected`
                      }
                    </span>
                    <ChevronDown className={`w-4 h-4 text-green-600 transition-transform duration-200 ${showPlacesDropdown ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {showPlacesDropdown && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-green-200 rounded-xl shadow-lg z-10 max-h-48 overflow-y-auto">
                      {touristPlaces.map((place, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => handlePlaceSelect(place)}
                          className={`w-full px-4 py-2 text-left hover:bg-green-50 transition-colors duration-200 cursor-pointer ${
                            formData.interestedPlaces.includes(place) ? 'bg-green-100 text-green-800' : 'text-gray-700'
                          }`}
                        >
                          {place}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Selected Places Tags */}
                {formData.interestedPlaces.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {formData.interestedPlaces.map((place, index) => (
                      <span
                        key={index}
                        className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm flex items-center gap-2 cursor-pointer hover:bg-green-200 transition-colors duration-200"
                        onClick={() => removePlaceFromSelection(place)}
                      >
                        {place}
                        <span className="text-green-600 hover:text-red-600">×</span>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Duration */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-green-700 font-semibold">
                  <Calendar className="w-4 h-4" />
                  Duration (Days)
                </label>
                <select
                  value={formData.duration}
                  onChange={(e) => handleInputChange('duration', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-green-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200 cursor-pointer"
                  required
                >
                  <option value="">Select duration</option>
                  <option value="1">1 Day</option>
                  <option value="2">2 Days</option>
                  <option value="3">3 Days</option>
                  <option value="4">4 Days</option>
                  <option value="5">5 Days</option>
                  <option value="7">1 Week</option>
                  <option value="14">2 Weeks</option>
                </select>
              </div>

              {/* Price Range */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-green-700 font-semibold">
                  <DollarSign className="w-4 h-4" />
                  Budget Range
                </label>
                <div className="px-4 py-3 border-2 border-green-200 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">₹{formData.priceRange[0].toLocaleString()}</span>
                    <span className="text-sm text-gray-600">₹{formData.priceRange[1].toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="100000"
                    step="1000"
                    value={formData.priceRange[0]}
                    onChange={(e) => handleInputChange('priceRange', [parseInt(e.target.value), formData.priceRange[1]])}
                    className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <input
                    type="range"
                    min="1000"
                    max="100000"
                    step="1000"
                    value={formData.priceRange[1]}
                    onChange={(e) => handleInputChange('priceRange', [formData.priceRange[0], parseInt(e.target.value)])}
                    className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer slider mt-2"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-green-700 hover:to-emerald-700 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Planning Your Trip...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    Create My Itinerary
                  </span>
                )}
              </button>

              <p className="text-center text-sm text-green-600">
                *API Integration Pending - This will generate your personalized itinerary*
              </p>
            </form>
          </div>

          {/* Right Panel - Chatbot */}
          <div className="bg-white rounded-2xl shadow-lg border border-green-100 flex flex-col overflow-hidden">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold">AI Travel Assistant</h3>
                <p className="text-sm opacity-90">Your personal Jharkhand guide</p>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[80%] ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                      <div className={`flex items-end gap-2 ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          message.type === 'user' 
                            ? 'bg-green-600' 
                            : 'bg-gradient-to-br from-emerald-500 to-green-600'
                        }`}>
                          {message.type === 'user' ? (
                            <User className="w-4 h-4 text-white" />
                          ) : (
                            <Bot className="w-4 h-4 text-white" />
                          )}
                        </div>
                        <div className={`rounded-2xl p-3 shadow-sm ${
                          message.type === 'user'
                            ? 'bg-green-600 text-white rounded-br-md'
                            : 'bg-white border border-green-100 rounded-bl-md'
                        }`}>
                          <p className={`text-sm leading-relaxed whitespace-pre-wrap ${
                            message.type === 'user' ? 'text-white' : 'text-gray-800'
                          }`}>
                            {message.content}
                          </p>
                        </div>
                      </div>
                      <p className={`text-xs text-gray-500 mt-1 ${message.type === 'user' ? 'text-right' : 'text-left'}`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Input Area (Disabled/Placeholder) */}
            <div className="p-4 border-t border-gray-200 bg-gray-50">
              <div className="flex items-center gap-2 opacity-50">
                <input
                  type="text"
                  placeholder="Chat feature coming soon... Use the form to plan your trip!"
                  className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-xl cursor-not-allowed"
                  disabled
                />
                <button
                  className="p-2 bg-gray-300 text-gray-500 rounded-xl cursor-not-allowed"
                  disabled
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-center text-gray-500 mt-2">
                Direct chat will be available after API integration
              </p>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, #059669, #10b981);
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, #059669, #10b981);
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
};

export default AITripPlanner;