import React, { useState, useEffect } from 'react';
import { 
  User, 
  LogOut, 
  ChevronDown, 
  Bot, 
  MapPin, 
  Calendar, 
  Clock, 
  CheckCircle,
  Mountain,
  Compass,
  Headphones,
  ArrowRight,
  Timer,
  Star,
  Users,
  Home,
  X,
  Phone,
  Mail,
  CreditCard,
  Clock4,
  UserCheck,
  Award
} from 'lucide-react';

const JharkhandDashboard = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userName] = useState("Pandu");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedBooking, setSelectedBooking] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Expanded bookings data
  const upcomingBookings = [
    {
      id: 1,
      service: "Waterfall Trek Guide",
      date: "2025-09-20",
      time: "09:00 AM",
      location: "Hundru Falls",
      type: "guide",
      bookingDateTime: new Date("2025-09-20T09:00:00"),
      vendor: "Jharkhand Adventure Tours",
      vendorContact: "+91 98765 43210",
      price: "₹2,500",
      duration: "6 hours",
      groupSize: "8 people",
      inclusions: ["Professional Guide", "Safety Equipment", "Refreshments", "Photography"],
      description: "Experience the breathtaking beauty of Hundru Falls with our expert guide.",
      bookingId: "JHT2025001"
    },
    {
      id: 2,
      service: "Traditional Homestay",
      date: "2025-09-22",
      time: "3:00 PM",
      location: "Betla National Park",
      type: "homestay",
      bookingDateTime: new Date("2025-09-22T15:00:00"),
      vendor: "Betla Heritage Homes",
      vendorContact: "+91 87654 32109",
      price: "₹3,200",
      duration: "2 nights, 3 days",
      roomType: "Traditional Tribal Hut",
      inclusions: ["All Meals", "Cultural Performance", "Nature Walks", "Bonfire Evening"],
      description: "Stay with a local tribal family and experience authentic Jharkhand culture.",
      bookingId: "JHT2025002"
    },
    {
      id: 3,
      service: "Jungle Safari Experience",
      date: "2025-09-25",
      time: "6:00 AM",
      location: "Palamau Tiger Reserve",
      type: "safari",
      bookingDateTime: new Date("2025-09-25T06:00:00"),
      vendor: "Wildlife Safari Co.",
      vendorContact: "+91 99887 76655",
      price: "₹4,800",
      duration: "8 hours",
      inclusions: ["Safari Vehicle", "Expert Naturalist", "Breakfast & Lunch", "Binoculars"],
      description: "Explore the magnificent wildlife of Palamau with professional naturalists.",
      bookingId: "JHT2025003"
    }
  ];

  const pastBookings = [
    {
      id: 4,
      service: "Cultural Event - Sarhul Festival",
      date: "2025-09-10",
      location: "Ranchi",
      status: "Completed Successfully",
      rating: 5,
      vendor: "Ranchi Cultural Society",
      vendorContact: "+91 76543 21098",
      price: "₹1,800",
      duration: "Full day",
      inclusions: ["Festival Entry", "Traditional Lunch", "Cultural Guide", "Souvenir"],
      description: "Celebrated the vibrant Sarhul festival with traditional dances and music.",
      bookingId: "JHT2025004",
      completedDate: "September 10, 2025"
    },
    {
      id: 5,
      service: "Local Artisan Workshop",
      date: "2025-09-08",
      location: "Khunti",
      status: "Completed Successfully", 
      rating: 4,
      vendor: "Khunti Craft Collective",
      vendorContact: "+91 65432 10987",
      price: "₹1,200",
      duration: "4 hours",
      inclusions: ["Materials", "Expert Instruction", "Take-home Craft", "Tea & Snacks"],
      description: "Learned traditional Jharkhand handicraft techniques from master artisans.",
      bookingId: "JHT2025005",
      completedDate: "September 8, 2025"
    },
    {
      id: 6,
      service: "Heritage Village Tour",
      date: "2025-09-05",
      location: "Dumka",
      status: "Completed Successfully",
      rating: 5,
      vendor: "Heritage Tours Jharkhand",
      vendorContact: "+91 54321 09876",
      price: "₹2,200",
      duration: "Full day",
      inclusions: ["Village Guide", "Traditional Meals", "Cultural Show", "Handicraft Demo"],
      description: "Immersive experience in traditional Santhal village life and customs.",
      bookingId: "JHT2025006",
      completedDate: "September 5, 2025"
    },
    {
      id: 7,
      service: "Rock Climbing Adventure",
      date: "2025-09-02",
      location: "Netarhat Hills",
      status: "Completed Successfully",
      rating: 4,
      vendor: "Adventure Sports Jharkhand",
      vendorContact: "+91 43210 98765",
      price: "₹3,500",
      duration: "6 hours",
      inclusions: ["Climbing Gear", "Professional Instructor", "Safety Equipment", "Lunch"],
      description: "Thrilling rock climbing experience in the scenic Netarhat Hills.",
      bookingId: "JHT2025007",
      completedDate: "September 2, 2025"
    },
    {
      id: 8,
      service: "Tribal Dance Workshop",
      date: "2025-08-28",
      location: "Chaibasa",
      status: "Completed Successfully",
      rating: 5,
      vendor: "Cultural Heritage Center",
      vendorContact: "+91 32109 87654",
      price: "₹1,500",
      duration: "3 hours",
      inclusions: ["Dance Instruction", "Traditional Costume", "Music Performance", "Certificates"],
      description: "Learn authentic tribal dance forms from experienced cultural performers.",
      bookingId: "JHT2025008",
      completedDate: "August 28, 2025"
    }
  ];

  const getCountdown = (bookingDateTime) => {
    const now = currentTime;
    const diff = bookingDateTime - now;
    
    if (diff <= 0) return "Starting soon!";
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    if (days > 0) return `${days}d ${hours}h`;
    if (hours > 0) return `${hours}h ${minutes}m`;
    return `${minutes}m`;
  };

  const featureCards = [
    {
      id: 1,
      title: "AI Tour Planner",
      description: "Intelligent itinerary generation with personalized recommendations",
      icon: Bot,
      route: "/trip",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      id: 2,
      title: "Services Marketplace",
      description: "Connect with verified guides, homestays, and cultural events",
      icon: Headphones,
      route: "/services", // This is the correct route
      gradient: "from-emerald-500 to-green-600",
    },
    {
      id: 3,
      title: "Immersive Destinations",
      description: "Explore hidden gems through AR/VR and interactive tours",
      icon: Mountain,
      route: "/places",
      gradient: "from-teal-500 to-cyan-600",
    },
    {
      id: 4,
      title: "Handicrafts Marketplace",
      description: "Order authentic tribal crafts directly from local artisans",
      icon: Compass,
      route: "/handicrafts",
      gradient: "from-purple-500 to-pink-600",
    }
  ];

  const handleNavigation = (route) => {
    console.log(`Navigating to: ${route}`);
    window.location.href = route; // Navigate to the specified route
  };

  const handleLogout = () => {
    window.location.href = '/mainauth';
  };

  const BookingModal = ({ booking, onClose }) => {
    if (!booking) return null;

    const Icon = booking.type === 'guide' ? UserCheck : booking.type === 'homestay' ? Home : Award;

    return (
      <div 
        className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 cursor-default"
        onClick={onClose}
      >
        <div 
          className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col cursor-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header - Fixed */}
          <div className="flex-shrink-0 bg-white border-b border-gray-200 px-4 py-3 flex justify-between items-center rounded-t-xl">
            <h3 className="text-lg font-semibold text-gray-800">
              Booking Details
            </h3>
            <button 
              onClick={onClose} 
              className="p-1.5 rounded-full text-gray-500 hover:bg-red-50 hover:text-red-600 transition-all duration-200 cursor-pointer"
              title="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          
          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto px-4 py-3">
            <div className="space-y-3">
              {/* Service Header */}
              <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200">
                <Icon className="w-6 h-6 text-blue-600" />
                <div>
                  <h4 className="font-semibold text-gray-800">{booking.service}</h4>
                  <p className="text-xs text-blue-600">ID: {booking.bookingId}</p>
                </div>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="flex items-center gap-2 p-2.5 bg-gray-50 rounded-lg">
                  <Calendar className="w-3.5 h-3.5 text-gray-500" />
                  <div>
                    <p className="text-gray-600 text-xs">Date</p>
                    <p className="font-medium text-gray-800 text-sm">{booking.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-2.5 bg-gray-50 rounded-lg">
                  <Clock className="w-3.5 h-3.5 text-gray-500" />
                  <div>
                    <p className="text-gray-600 text-xs">Time</p>
                    <p className="font-medium text-gray-800 text-sm">{booking.time || booking.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-2.5 bg-gray-50 rounded-lg">
                  <MapPin className="w-3.5 h-3.5 text-gray-500" />
                  <div>
                    <p className="text-gray-600 text-xs">Location</p>
                    <p className="font-medium text-gray-800 text-sm">{booking.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-2.5 bg-gray-50 rounded-lg">
                  <CreditCard className="w-3.5 h-3.5 text-gray-500" />
                  <div>
                    <p className="text-gray-600 text-xs">Price</p>
                    <p className="font-medium text-gray-800 text-sm">{booking.price}</p>
                  </div>
                </div>
              </div>

              {/* Service Provider */}
              <div className="p-3 rounded-lg bg-gray-50">
                <h5 className="font-medium text-gray-800 mb-2 text-sm">Service Provider</h5>
                <div className="flex items-center gap-2">
                  <UserCheck className="w-3.5 h-3.5 text-gray-500" />
                  <div>
                    <p className="font-medium text-gray-800 text-sm">{booking.vendor}</p>
                    <p className="text-xs text-gray-600 flex items-center gap-1.5 mt-0.5">
                      <Phone className="w-3 h-3" /> {booking.vendorContact}
                    </p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="p-3 rounded-lg bg-gray-50">
                <h5 className="font-medium text-gray-800 mb-1.5 text-sm">Description</h5>
                <p className="text-gray-600 text-sm leading-relaxed">{booking.description}</p>
              </div>

              {/* Inclusions */}
              {booking.inclusions && (
                <div className="p-3 rounded-lg bg-gray-50">
                  <h5 className="font-medium text-gray-800 mb-2 text-sm">Inclusions</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
                    {booking.inclusions.map((item, index) => (
                      <div key={index} className="flex items-start gap-1.5 text-xs text-gray-600">
                        <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Footer - Fixed */}
          <div className="flex-shrink-0 bg-gray-50 px-4 py-3 border-t border-gray-200 rounded-b-xl">
            <button 
              onClick={onClose}
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-2 px-4 rounded-lg font-medium hover:from-green-700 hover:to-emerald-700 transition-all duration-300 cursor-pointer text-sm"
            >
              Close Details
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 bg-white shadow-md border-b-2 border-green-600">
        <div className="w-full px-4 lg:px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-700 rounded-lg flex items-center justify-center shadow-md">
                <Mountain className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
                  Jharkhand Tourism
                </h1>
                <p className="text-xs text-green-600">Discover the Heart of India</p>
              </div>
            </div>

            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center space-x-2 bg-green-50 hover:bg-green-100 px-3 py-2 rounded-full transition-all duration-300 border border-green-200 hover:border-green-300 cursor-pointer"
              >
                <div className="w-7 h-7 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium text-green-800 text-sm">{userName}</span>
                <ChevronDown className={`w-4 h-4 text-green-600 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-green-100 py-2 z-50">
                  <div className="px-3 py-2 border-b border-green-100">
                    <p className="font-medium text-green-800">Hi, {userName} 👋</p>
                    <p className="text-xs text-green-600">Welcome back to your dashboard</p>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center space-x-2 px-3 py-2 hover:bg-red-50 transition-colors duration-200 text-red-600 cursor-pointer text-sm"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Dashboard Area */}
      <main className="w-full px-4 lg:px-6 py-6">
        {/* Hero Section */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-transparent bg-gradient-to-r from-green-700 via-emerald-600 to-teal-600 bg-clip-text leading-tight mb-4">
            Welcome to Jharkhand Tourism
          </h2>
          <p className="text-lg md:text-xl text-green-700 font-medium mb-1">
            Hello, {userName}! 
          </p>
          <p className="text-sm md:text-base text-green-600">
            Discover the pristine beauty and rich culture of the Heart of India
          </p>
          
          <div className="mt-8 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-2xl p-6 text-white shadow-xl">
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <div className="flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 backdrop-blur-sm hover:bg-white/20 transition-colors duration-300 cursor-default">
                <MapPin className="w-4 h-4" />
                <span className="font-medium text-sm">38 Tourist Destinations</span>
              </div>
              <div className="flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 backdrop-blur-sm hover:bg-white/20 transition-colors duration-300 cursor-default">
                <Users className="w-4 h-4" />
                <span className="font-medium text-sm">200+ Local Guides</span>
              </div>
              <div className="flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 backdrop-blur-sm hover:bg-white/20 transition-colors duration-300 cursor-default">
                <Home className="w-4 h-4" />
                <span className="font-medium text-sm">150+ Homestays</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="mb-10">
          <h3 className="text-2xl md:text-3xl font-serif text-center text-transparent bg-gradient-to-r from-green-800 to-emerald-700 bg-clip-text mb-8">
            Explore Jharkhand's Wonders
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {featureCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.id}
                  className="group cursor-pointer"
                  onClick={() => handleNavigation(card.route)}
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-5 border border-gray-200 group-hover:scale-105 group-hover:-translate-y-1 group-hover:border-transparent relative h-full flex flex-col">
                    <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
                    
                    <div className="relative z-10 flex flex-col h-full">
                      <div className={`w-12 h-12 bg-gradient-to-br ${card.gradient} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-all duration-500 shadow-md`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <h4 className="text-base font-bold text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-green-700 group-hover:to-emerald-600 transition-all duration-300">
                        {card.title}
                      </h4>
                      
                      <p className="text-gray-600 mb-3 leading-relaxed text-sm flex-grow">
                        {card.description}
                      </p>
                      
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center text-green-700 font-medium group-hover:text-emerald-600 transition-colors duration-300 text-sm">
                          <span>Explore Now</span>
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bookings Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Upcoming Bookings */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-md">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Upcoming Bookings</h3>
            </div>
            
            <div className="space-y-3">
              {upcomingBookings.map((booking) => (
                <div 
                  key={booking.id} 
                  className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-200 cursor-pointer hover:shadow-md hover:scale-[1.01] transition-all duration-300 group"
                  onClick={() => setSelectedBooking(booking)}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-bold text-gray-800 text-base group-hover:text-blue-700 transition-colors duration-300">{booking.service}</h4>
                      <p className="text-gray-600 flex items-center gap-1.5 mt-1 text-sm">
                        <MapPin className="w-3.5 h-3.5" />
                        {booking.location}
                      </p>
                      <p className="text-xs text-blue-600 mt-1 opacity-70 group-hover:opacity-100 transition-opacity duration-300">Click for details →</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-blue-700 text-sm">{booking.date}</p>
                      <p className="text-blue-600 text-sm">{booking.time}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between bg-white rounded-lg p-2.5 shadow-sm">
                    <div className="flex items-center gap-2">
                      <Timer className="w-3.5 h-3.5 text-orange-500" />
                      <span className="font-medium text-gray-800 text-sm">Countdown:</span>
                    </div>
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-2.5 py-1 rounded-full text-xs font-bold">
                      {getCountdown(booking.bookingDateTime)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Past Bookings */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-md">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Past Bookings</h3>
            </div>
            
            <div className="space-y-2.5 max-h-[400px] overflow-y-auto pr-1">
              {pastBookings.map((booking) => (
                <div 
                  key={booking.id} 
                  className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-3 border border-green-200 cursor-pointer hover:shadow-md hover:scale-[1.01] transition-all duration-300 group"
                  onClick={() => setSelectedBooking(booking)}
                >
                  <div className="flex justify-between items-start mb-2.5">
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-gray-800 text-sm group-hover:text-green-700 transition-colors duration-300 truncate">{booking.service}</h4>
                      <p className="text-gray-600 flex items-center gap-1.5 mt-0.5 text-xs">
                        <MapPin className="w-3 h-3 flex-shrink-0" />
                        <span className="truncate">{booking.location}</span>
                      </p>
                      <p className="text-xs text-green-600 mt-0.5 opacity-70 group-hover:opacity-100 transition-opacity duration-300">Click for details →</p>
                    </div>
                    <div className="text-right flex-shrink-0 ml-2">
                      <p className="font-semibold text-green-700 text-xs">{booking.date}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between bg-white rounded-md p-2 shadow-sm">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                      <span className="font-medium text-gray-800 text-xs">{booking.status}</span>
                    </div>
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-3 h-3 transition-colors duration-200 ${i < booking.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      {selectedBooking && <BookingModal booking={selectedBooking} onClose={() => setSelectedBooking(null)} />}
    </div>
  );
};

export default JharkhandDashboard;