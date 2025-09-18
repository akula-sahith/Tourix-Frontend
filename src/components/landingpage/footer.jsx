import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const quickLinks = {
    'Quick Links': ['Home', 'About', 'Places', 'Culture', 'Plan Trip', 'Contact'],
    'Support': ['FAQs', 'Help Center', 'Terms & Conditions', 'Privacy Policy']
  };

  const contactInfo = [
    {
      icon: Mail,
      text: 'admin@tourix.com',
      href: 'mailto:admin@tourix.com'
    },
    {
      icon: Phone,
      text: '+91 98765 43210',
      href: 'tel:+919876543210'
    },
    {
      icon: MapPin,
      text: 'V.R. Siddhartha Engineering College, Vijayawada',
      href: 'https://maps.google.com'
    }
  ];

  const socialIcons = [
    {
      name: 'Google',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      name: 'Twitter',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: 'YouTube',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    {
      name: 'Facebook',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.1)_0%,transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.1)_0%,transparent_50%)] pointer-events-none"></div>
      
      <div className="relative w-full py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block">
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-tight mb-4">
                <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Jharkhand
                </span>
                <span className="text-white ml-3 font-serif italic">Tourism</span>
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto mb-6 rounded-full"></div>
            </div>
            <p className="text-xl text-gray-300 font-light max-w-md mx-auto leading-relaxed">
              Discover the untamed beauty of Nature, rich Culture & timeless Heritage
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Quick Links */}
            <div className="space-y-6">
              <div>
                <h3 className="text-white font-bold text-lg mb-6 relative">
                  Quick Links
                  <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full"></div>
                </h3>
                <ul className="space-y-3">
                  {quickLinks['Quick Links'].map((link, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="group flex items-center text-gray-300 hover:text-white transition-all duration-300 ease-out"
                      >
                        <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-emerald-400" />
                        <span className="relative">
                          {link}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-blue-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Support */}
            <div className="space-y-6">
              <div>
                <h3 className="text-white font-bold text-lg mb-6 relative">
                  Support
                  <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full"></div>
                </h3>
                <ul className="space-y-3">
                  {quickLinks['Support'].map((link, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="group flex items-center text-gray-300 hover:text-white transition-all duration-300 ease-out"
                      >
                        <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-emerald-400" />
                        <span className="relative">
                          {link}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-blue-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-white font-bold text-lg mb-6 relative">
                  Get In Touch
                  <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full"></div>
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <a
                        key={index}
                        href={info.href}
                        className="group flex items-start gap-4 p-4 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 border border-slate-700/50 hover:border-emerald-400/30"
                      >
                        <div className="flex-shrink-0 p-2 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm leading-relaxed">
                            {info.text}
                          </span>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h3 className="text-white font-bold text-lg mb-4">Follow Our Journey</h3>
              <p className="text-gray-400 text-sm">Stay connected for the latest updates and travel inspiration</p>
            </div>
            <div className="flex justify-center">
              <div className="flex space-x-4">
                {socialIcons.map((social, index) => (
                  <div
                    key={index}
                    className="group relative p-3 bg-slate-800/60 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-blue-500 rounded-xl border border-slate-700/50 hover:border-transparent transition-all duration-500 cursor-pointer transform hover:scale-110 hover:-translate-y-1"
                  >
                    <div className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {social.icon}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="mb-12 text-center">
            <div className="max-w-md mx-auto p-8 bg-gradient-to-r from-slate-800/80 to-slate-700/80 rounded-2xl border border-slate-600/30 backdrop-blur-sm">
              <h3 className="text-white font-bold text-lg mb-4">Stay Updated</h3>
              <p className="text-gray-300 text-sm mb-6">Get the latest travel tips and destination highlights</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-800">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-slate-700/50">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-sm text-gray-400 mb-1">
                  © 2025 Tourix. All rights reserved.
                </p>
                <p className="text-xs text-gray-500">
                  Crafted with ❤️ for travelers and explorers
                </p>
              </div>
              <div className="flex items-center space-x-6 text-xs text-gray-400">
                <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
                <span className="text-slate-600">•</span>
                <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
                <span className="text-slate-600">•</span>
                <a href="#" className="hover:text-white transition-colors duration-300">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;