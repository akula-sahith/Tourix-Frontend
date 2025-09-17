import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2, HelpCircle, Smile } from "lucide-react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, sender: "bot", text: "Hello there! 👋 I'm your AI assistant. How can I help you today?", timestamp: new Date() }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const [showPulse, setShowPulse] = useState(true);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom when new messages are added
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Pulse animation control
  useEffect(() => {
    const interval = setInterval(() => {
      setShowPulse(prev => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setError(null);
  };

  const sendMessageToAPI = async (message) => {
    try {
      const response = await fetch('http://localhost:5000/ai/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: message,
          conversation_id: `chat_${Date.now()}`
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.response || data.message || "I'm here to help! Could you please rephrase your question?";
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  };

  const handleSend = async () => {
    const trimmedInput = input.trim();
    if (!trimmedInput || isLoading) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: trimmedInput,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    setIsTyping(true);
    setError(null);

    try {
      const botResponse = await sendMessageToAPI(trimmedInput);
      
      // Simulate typing delay for better UX
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const botMessage = {
        id: Date.now() + 1,
        sender: "bot",
        text: botResponse,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage = {
        id: Date.now() + 1,
        sender: "bot",
        text: "Oops! I'm having trouble connecting right now. Please check your connection and try again! 🔄",
        timestamp: new Date(),
        isError: true
      };

      setMessages(prev => [...prev, errorMessage]);
      setError("Connection error. Please ensure your server is running on localhost:5000");
    } finally {
      setIsLoading(false);
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div>
      {/* Floating Button with Animations */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          {/* Pulsing Ring Animation */}
          <div className={`absolute inset-0 rounded-full bg-green-500 transition-all duration-1000 ${
            showPulse ? 'scale-150 opacity-0' : 'scale-100 opacity-30'
          }`}></div>
          
          {/* Question Mark Indicator */}
          <div className="absolute -top-2 -right-2 bg-green-400 text-white rounded-full p-1 animate-bounce">
            <HelpCircle size={16} />
          </div>
          
          {/* Smiley Indicator */}
          <div className="absolute -top-2 -left-2 bg-yellow-400 text-white rounded-full p-1 animate-pulse">
            <Smile size={16} />
          </div>
          
          {/* Main Button */}
          <button
            onClick={toggleChat}
            className="relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-green-500/50 group"
            aria-label="Open chat assistant"
          >
            <MessageCircle size={32} className="group-hover:animate-pulse" />
            
            {/* Floating Dots */}
            <div className="absolute top-1 right-1 w-2 h-2 bg-green-300 rounded-full animate-ping"></div>
            <div className="absolute bottom-1 left-1 w-1.5 h-1.5 bg-green-300 rounded-full animate-ping delay-700"></div>
          </button>
          
          {/* Welcome Tooltip */}
          <div className="absolute bottom-20 right-0 bg-green-600 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Hi! Need help? Click to chat! 💬
            <div className="absolute top-full right-4 border-4 border-transparent border-t-green-600"></div>
          </div>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className={`fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-3xl shadow-2xl flex flex-col z-50 border border-green-200 transform transition-all duration-500 ${
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'
        }`}>
          
          {/* Header with Gradient */}
          <div className="flex justify-between items-center bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 rounded-t-3xl relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center animate-pulse">
                  <Smile size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">AI Assistant</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                    <p className="text-sm opacity-90">Online & Ready!</p>
                  </div>
                </div>
              </div>
            </div>
            
            <button 
              onClick={toggleChat}
              className="relative z-10 hover:bg-green-700 p-2 rounded-full transition-all duration-200 hover:rotate-90"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Error Banner */}
          {error && (
            <div className="bg-red-50 text-red-700 text-sm px-6 py-3 border-b animate-slideDown">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span>{error}</span>
              </div>
            </div>
          )}

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gradient-to-b from-green-50/30 to-white">
            {messages.map((msg, index) => (
              <div key={msg.id} className={`flex animate-fadeInUp ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                   style={{ animationDelay: `${index * 0.1}s` }}>
                <div
                  className={`max-w-[85%] p-4 rounded-2xl relative transform transition-all duration-200 hover:scale-105 ${
                    msg.sender === "user"
                      ? "bg-gradient-to-r from-green-500 to-green-600 text-white rounded-br-md shadow-lg"
                      : msg.isError
                      ? "bg-gradient-to-r from-red-100 to-red-50 text-red-800 rounded-bl-md border border-red-200"
                      : "bg-gradient-to-r from-gray-50 to-white text-gray-800 rounded-bl-md shadow-md border border-green-100"
                  }`}
                >
                  {/* Message Avatar */}
                  {msg.sender === "bot" && (
                    <div className="absolute -left-2 top-3 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <Smile size={12} className="text-white" />
                    </div>
                  )}
                  
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                  <p className={`text-xs mt-2 opacity-70 ${
                    msg.sender === "user" ? "text-green-100" : "text-gray-500"
                  }`}>
                    {formatTime(msg.timestamp)}
                  </p>
                  
                  {/* Message Tail */}
                  <div className={`absolute top-4 ${
                    msg.sender === "user" 
                      ? "right-0 border-l-8 border-l-green-600 border-t-4 border-b-4 border-t-transparent border-b-transparent transform translate-x-2"
                      : "left-0 border-r-8 border-r-gray-50 border-t-4 border-b-4 border-t-transparent border-b-transparent transform -translate-x-2"
                  }`}></div>
                </div>
              </div>
            ))}
            
            {/* Enhanced Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start animate-fadeInUp">
                <div className="bg-gradient-to-r from-gray-50 to-white p-4 rounded-2xl rounded-bl-md max-w-[85%] border border-green-100 relative">
                  <div className="absolute -left-2 top-3 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                    <Smile size={12} className="text-white" />
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce delay-200"></div>
                    </div>
                    <span className="text-sm text-green-600 animate-pulse">AI is thinking...</span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Enhanced Input Section */}
          <div className="p-4 border-t border-green-100 bg-gradient-to-r from-green-50/50 to-white rounded-b-3xl">
            <div className="flex items-center gap-3 bg-white rounded-2xl border-2 border-green-200 focus-within:border-green-400 transition-colors duration-200 p-2">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 px-4 py-3 bg-transparent focus:outline-none text-gray-800 placeholder-gray-400"
                placeholder="Type your message here..."
                disabled={isLoading}
                maxLength={500}
              />
              
              {/* Character Counter */}
              <div className="text-xs text-gray-400 min-w-[3rem] text-right">
                {input.length}/500
              </div>
              
              {/* Send Button */}
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed text-white p-3 rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-green-500/30 group"
                aria-label="Send message"
              >
                {isLoading ? (
                  <Loader2 size={20} className="animate-spin" />
                ) : (
                  <Send size={20} className="group-hover:translate-x-0.5 transition-transform" />
                )}
              </button>
            </div>
            
            {/* Quick Actions */}
            <div className="flex justify-center mt-3 space-x-2">
              {['👋 Hello', '❓ Help', '💡 Suggest'].map((action, index) => (
                <button
                  key={index}
                  onClick={() => !isLoading && setInput(action.split(' ')[1])}
                  className="px-3 py-1 bg-green-100 hover:bg-green-200 text-green-700 text-xs rounded-full transition-colors duration-200"
                  disabled={isLoading}
                >
                  {action}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-slideDown {
          animation: slideDown 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Chatbot;