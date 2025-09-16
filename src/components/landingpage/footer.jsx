import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const quickLinks = {
    'Quick Links': ['Home', 'About', 'Places', 'Culture', 'Plan Trip', 'Contact'],
    'Support': ['FAQs', 'Help Center', 'Terms & Conditions', 'Privacy Policy']
  };

  const contactInfo = [
    {
      icon: Mail,
      text: 'admin@tourix.com'
    },
    {
      icon: Phone,
      text: '+91 98765 43210'
    },
    {
      icon: MapPin,
      text: 'V.R. Siddhartha Engineering College, Vijayawada'
    }
  ];

  return (
    <footer className="bg-gray-800" style={{ backgroundColor: '#1f2937', height: '500px' }}>
      <div className="w-full py-12 px-4 sm:px-6 lg:px-12 h-full flex flex-col justify-between">
        {/* Main Footer Content */}
        <div className="flex-1">
          {/* Branding Section */}
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl text-white font-serif italic transform -rotate-1 mb-6 leading-tight">
              Jharkhand Tourism
            </h1>
            <p className="text-gray-400 italic font-serif">
              Discover Nature • Culture • Heritage
            </p>
          </div>

          {/* Navigation Links and Contact Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Quick Links Column */}
            <div className="text-center sm:text-left">
              <h3 className="text-white font-semibold text-lg mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {quickLinks['Quick Links'].map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white hover:scale-105 transition-all duration-300 ease-in-out inline-block cursor-pointer hover:bg-gradient-to-r hover:from-green-500 hover:via-yellow-500 hover:to-blue-500 hover:bg-clip-text hover:text-transparent"
                      style={{ fontFamily: 'Aptos, sans-serif' }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Column */}
            <div className="text-center sm:text-left">
              <h3 className="text-white font-semibold text-lg mb-4">
                Support
              </h3>
              <ul className="space-y-2">
                {quickLinks['Support'].map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white hover:scale-105 transition-all duration-300 ease-in-out inline-block cursor-pointer hover:bg-gradient-to-r hover:from-green-500 hover:via-yellow-500 hover:to-blue-500 hover:bg-clip-text hover:text-transparent"
                      style={{ fontFamily: 'Aptos, sans-serif' }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information Column */}
            <div className="text-center sm:text-left">
              <h3 className="text-white font-semibold text-lg mb-4">
                Contact Information
              </h3>
              <div className="space-y-3">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start gap-3 justify-center sm:justify-start">
                      <div className="flex-shrink-0 mt-0.5">
                        <Icon className="w-5 h-5 text-gray-400 hover:text-emerald-500 transition-all duration-300" />
                      </div>
                      <span 
                        className="text-gray-300 hover:text-white transition-all duration-300 text-sm leading-relaxed"
                        style={{ fontFamily: 'Aptos, sans-serif' }}
                      >
                        {info.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Social Media Icons Section */}
          <div className="flex justify-center mb-8">
            <div className="flex space-x-6">
              {/* Google */}
              <div className="text-white hover:text-emerald-500 transition-all duration-300 hover:scale-110 cursor-pointer hover:rotate-12">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </div>

              {/* Instagram */}
              <div className="text-white hover:text-emerald-500 transition-all duration-300 hover:scale-110 cursor-pointer hover:rotate-12">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>

              {/* Twitter/X */}
              <div className="text-white hover:text-emerald-500 transition-all duration-300 hover:scale-110 cursor-pointer hover:rotate-12">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>

              {/* YouTube */}
              <div className="text-white hover:text-emerald-500 transition-all duration-300 hover:scale-110 cursor-pointer hover:rotate-12">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>

              {/* Facebook */}
              <div className="text-white hover:text-emerald-500 transition-all duration-300 hover:scale-110 cursor-pointer hover:rotate-12">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-sm text-gray-500 text-center" style={{ fontFamily: 'Aptos, sans-serif' }}>
            © 2025 Tourix. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;