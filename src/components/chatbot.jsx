import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Sparkles } from 'lucide-react';

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm your Multilingual Website Assistant. I can help you understand anything from this website in any language you prefer. How can I assist you today? 🌐", sender: 'bot' },
    { id: 2, text: "Hi! Can you explain the services in Spanish?", sender: 'user' },
    { id: 3, text: "¡Por supuesto! I can explain our services in Spanish or any other language. What specific information would you like to know about our website?", sender: 'bot' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const chatContainerRef = useRef(null);
  const messagesEndRef = useRef(null);

  // Close chat when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the chat panel AND outside the floating button
      if (
        chatContainerRef.current &&
        !chatContainerRef.current.contains(event.target) &&
        !event.target.closest('.floating-chat-button') &&
        isOpen
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Scroll to bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const userMessage = {
        id: Date.now(),
        text: inputMessage,
        sender: 'user'
      };
      
      setMessages(prev => [...prev, userMessage]);
      setInputMessage('');

      // TODO: Replace with actual API call
      // Placeholder for API integration
      setTimeout(() => {
        const botResponse = {
          id: Date.now() + 1,
          text: "I understand you're looking for information! I can explain any content from this website in your preferred language. Please let me know what you'd like to learn about and which language you prefer.",
          sender: 'bot'
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Conditionally render the floating button */}
      {!isOpen && (
        <div className="fixed bottom-8 right-8 z-50 floating-chat-button">
          <button
            onClick={toggleChat}
            className="relative w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full shadow-xl hover:shadow-emerald-500/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center group overflow-hidden cursor-pointer"
          >
            {/* Animated background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full opacity-80 group-hover:opacity-100 animate-pulse"></div>
            
            {/* Inner glow effect */}
            <div className="absolute inset-1 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full opacity-40 group-hover:opacity-60"></div>
            
            {/* Icon container */}
            <div className="relative z-10 flex items-center justify-center">
              <MessageCircle 
                className="w-7 h-7 text-white group-hover:rotate-6 transition-all duration-300 drop-shadow-md" 
              />
              <Sparkles 
                className="absolute -top-0.5 -right-0.5 w-3 h-3 text-yellow-300 group-hover:text-yellow-200 animate-bounce" 
              />
            </div>
            
            {/* Ripple effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-500 to-blue-600 opacity-0 group-hover:opacity-15 group-hover:scale-125 transition-all duration-400"></div>
          </button>
        </div>
      )}

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed inset-0 z-40 flex justify-end">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black bg-opacity-25 backdrop-blur-sm" onClick={toggleChat}></div>
          
          {/* Chat Container - Adjusted size for a more compact, professional feel */}
          <div
            ref={chatContainerRef}
            className={`fixed bottom-8 right-8 w-116 h-[600px] bg-white shadow-2xl rounded-2xl flex flex-col transform transition-all duration-300 ease-in-out z-40 border border-gray-200 ${
              isOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-4 opacity-0 scale-95 pointer-events-none'
            } sm:max-w-md lg:max-w-lg`}
          >
            {/* Header with enhanced gradient */}
            <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-600 p-4 flex justify-between items-center rounded-tl-2xl relative overflow-hidden">
              {/* Animated background pattern */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 via-teal-600/20 to-blue-700/20 animate-gradient-x"></div>
              
              <div className="flex items-center space-x-3 relative z-10">
                <div className="w-10 h-10 bg-white bg-opacity-25 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                  <Bot className="w-6 h-6 text-white drop-shadow-md" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base drop-shadow-md">Multilingual Assistant</h3>
                  <p className="text-white text-opacity-90 text-xs flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-300 rounded-full mr-2 animate-pulse"></div>
                    Online • Speaks all languages
                  </p>
                </div>
              </div>
              <button
                onClick={toggleChat}
                className="text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-full transition-all duration-200 backdrop-blur-sm relative z-10 cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Messages Area - Increased height */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-50 to-white">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}
                >
                  <div className={`flex items-end space-x-2 max-w-xs ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shadow-lg ${
                      message.sender === 'user' 
                        ? 'bg-gradient-to-br from-blue-500 to-cyan-600' 
                        : 'bg-gradient-to-br from-emerald-500 to-teal-600'
                    }`}>
                      {message.sender === 'user' ? (
                        <User className="w-4 h-4 text-white" />
                      ) : (
                        <Bot className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <div
                      className={`px-4 py-3 rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 ${
                        message.sender === 'user'
                          ? 'bg-gradient-to-br from-blue-500 to-cyan-600 text-white rounded-br-md'
                          : 'bg-white border border-gray-200 text-gray-800 rounded-bl-md'
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-gray-200 bg-white rounded-b-2xl">
              <div className="flex space-x-3">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything in any language..."
                  className="flex-1 px-4 py-3 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 shadow-sm"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim()}
                  className="bg-gradient-to-br from-emerald-500 to-blue-600 text-white px-4 py-3 rounded-full hover:from-emerald-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-200 flex items-center justify-center shadow-lg cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced custom styles for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes gradient-x {
          0%, 100% {
            transform: translateX(0%);
          }
          50% {
            transform: translateX(100%);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </>
  );
};

export default FloatingChatbot;