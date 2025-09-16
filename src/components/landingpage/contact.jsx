import React, { useState } from 'react';
import { ChevronDown, Phone, Mail, Send, CheckCircle, HelpCircle } from 'lucide-react';

const FAQContactSection = () => {
  const [openQuestions, setOpenQuestions] = useState(new Set());
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const faqData = [
    {
      id: 1,
      question: "How do I plan a trip using this website?",
      answer: "You can explore destinations, select activities, and click on 'Plan Your Trip'. Our platform will guide you through creating an itinerary."
    },
    {
      id: 2,
      question: "Do I need to create an account to book events or trips?",
      answer: "Yes, an account is required for booking so you can track your reservations, payments, and updates."
    },
    {
      id: 3,
      question: "Can I cancel or modify my bookings later?",
      answer: "Yes, you can manage cancellations and modifications from your profile dashboard. Cancellation policies may apply."
    },
    {
      id: 4,
      question: "What payment methods are accepted?",
      answer: "We accept UPI, credit/debit cards, net banking, and digital wallets for secure payments."
    },
    {
      id: 5,
      question: "Is my personal information safe on this platform?",
      answer: "Absolutely. We use end-to-end encryption and secure servers to protect your data."
    },
    {
      id: 6,
      question: "Are there any hidden charges or extra fees?",
      answer: "No, all charges are displayed clearly before you confirm your booking."
    },
    {
      id: 7,
      question: "How can I contact customer support if I face issues?",
      answer: "You can reach out via our Contact Us section, email the admin, or use the live chat feature for quick help."
    },
    {
      id: 8,
      question: "Can I get discounts for group bookings?",
      answer: "Yes, special offers and discounts are available for group and bulk bookings."
    }
  ];

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const toggleQuestion = (id) => {
    const newOpenQuestions = new Set(openQuestions);
    if (newOpenQuestions.has(id)) {
      newOpenQuestions.delete(id);
    } else {
      newOpenQuestions.add(id);
    }
    setOpenQuestions(newOpenQuestions);
  };

  const renderFAQItem = (faq) => {
    const isOpen = openQuestions.has(faq.id);
    
    return (
      <div 
        key={faq.id} 
        className={`border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'border-l-4 border-l-blue-600 bg-gradient-to-r from-green-500 via-yellow-400 to-blue-500 bg-clip-text' 
            : 'border-gray-300'
        }`}
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <button
          onClick={() => toggleQuestion(faq.id)}
          className="w-full py-3 px-4 text-left flex justify-between items-center cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 group"
          style={{ fontFamily: 'Aptos, sans-serif' }}
        >
          <span className={`font-medium transition-all duration-300 ease-in-out ${
            isOpen 
              ? 'bg-gradient-to-r from-green-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent' 
              : 'text-gray-800 group-hover:bg-gradient-to-r group-hover:from-green-500 group-hover:via-yellow-400 group-hover:to-blue-500 group-hover:bg-clip-text group-hover:text-transparent'
          }`}>
            {faq.question}
          </span>
          <ChevronDown 
            className={`w-5 h-5 text-gray-500 transition-all duration-300 ease-in-out group-hover:text-blue-600 ${isOpen ? 'transform rotate-180' : ''}`} 
          />
        </button>
        
        <div 
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-3 px-4 border-t border-gray-200" style={{ backgroundColor: '#F9FAFB' }}>
            <p 
              className="text-gray-600 leading-relaxed"
              style={{ fontFamily: 'Aptos, sans-serif' }}
            >
              {faq.answer}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div 
      className="min-h-screen py-16 px-6 relative overflow-hidden"
      style={{ backgroundColor: '#F9FAFB' }}
    >
      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-12 h-12 bg-gradient-to-br from-blue-400 to-green-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-8 h-8 bg-gradient-to-br from-yellow-400 to-blue-500 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-32 left-20 w-10 h-10 bg-gradient-to-br from-green-400 to-yellow-500 rounded-full opacity-25 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-6 h-6 bg-gradient-to-br from-blue-400 to-green-500 rounded-full opacity-20 animate-bounce"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-5xl font-serif italic transform -rotate-1 mb-6 leading-tight"
            style={{ color: '#111827' }}
          >
            Frequently Asked Questions
          </h2>
          <p 
            className="text-lg max-w-2xl mx-auto text-gray-600"
            style={{ fontFamily: 'Aptos, sans-serif' }}
          >
            Find answers to common questions about our platform and services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* FAQ Section - Left Side */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              {/* FAQ Illustration */}
              <div className="flex items-center justify-center mb-8">
                <div className="relative">
                  {/* Person at desk illustration */}
                  <div className="w-24 h-24 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full flex items-center justify-center mb-4">
                    <HelpCircle className="w-12 h-12 text-emerald-600" />
                  </div>
                  {/* Question mark bubble */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">?</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {faqData.map(renderFAQItem)}
              </div>
            </div>
          </div>

          {/* Contact Admin Section - Right Side */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-8 h-fit">
              <h3 
                className="text-2xl font-semibold mb-8 text-center"
                style={{ color: '#111827', fontFamily: 'Aptos, sans-serif' }}
              >
                Contact Admin
              </h3>

              {/* Contact Information */}
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 transition-all duration-300">
                  <div className="flex-shrink-0">
                    <Mail className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p 
                      className="font-medium text-sm mb-1 text-gray-800"
                      style={{ fontFamily: 'Aptos, sans-serif' }}
                    >
                      Email the Admin
                    </p>
                    <p 
                      className="text-sm text-gray-600"
                      style={{ fontFamily: 'Aptos, sans-serif' }}
                    >
                      admin@travelplatform.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 transition-all duration-300">
                  <div className="flex-shrink-0">
                    <Phone className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p 
                      className="font-medium text-sm mb-1 text-gray-800"
                      style={{ fontFamily: 'Aptos, sans-serif' }}
                    >
                      Call the Admin
                    </p>
                    <p 
                      className="text-sm text-gray-600"
                      style={{ fontFamily: 'Aptos, sans-serif' }}
                    >
                      +91 98765 43210
                    </p>
                  </div>
                </div>
              </div>

              {/* Success Message */}
              {isSubmitted && (
                <div 
                  className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3"
                  style={{ animation: 'fadeIn 0.5s ease-out' }}
                >
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <p className="text-emerald-700 font-medium text-sm" style={{ fontFamily: 'Aptos, sans-serif' }}>
                    Message sent successfully!
                  </p>
                </div>
              )}

              {/* Contact Form */}
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Name"
                    className={`w-full rounded-xl shadow-inner p-3 border transition-all duration-300 focus:ring-2 focus:outline-none text-sm ${
                      errors.name 
                        ? 'border-red-300 focus:ring-red-500' 
                        : 'border-gray-300 focus:ring-emerald-500'
                    }`}
                    style={{ fontFamily: 'Aptos, sans-serif' }}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500" style={{ fontFamily: 'Aptos, sans-serif' }}>
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className={`w-full rounded-xl shadow-inner p-3 border transition-all duration-300 focus:ring-2 focus:outline-none text-sm ${
                      errors.email 
                        ? 'border-red-300 focus:ring-red-500' 
                        : 'border-gray-300 focus:ring-emerald-500'
                    }`}
                    style={{ fontFamily: 'Aptos, sans-serif' }}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500" style={{ fontFamily: 'Aptos, sans-serif' }}>
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Message"
                    className={`w-full rounded-xl shadow-inner p-3 border transition-all duration-300 focus:ring-2 focus:outline-none resize-none text-sm ${
                      errors.message 
                        ? 'border-red-300 focus:ring-red-500' 
                        : 'border-gray-300 focus:ring-emerald-500'
                    }`}
                    style={{ fontFamily: 'Aptos, sans-serif' }}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500" style={{ fontFamily: 'Aptos, sans-serif' }}>
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`w-full rounded-xl font-semibold py-3 px-6 text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-opacity-50 flex items-center justify-center gap-2 text-sm ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-emerald-600 hover:bg-gradient-to-r hover:from-emerald-500 hover:via-teal-500 hover:to-green-500 focus:ring-emerald-500'
                  }`}
                  style={{ fontFamily: 'Aptos, sans-serif' }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p 
                  className="text-xs text-center text-gray-500"
                  style={{ fontFamily: 'Aptos, sans-serif' }}
                >
                  We typically respond within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQContactSection;