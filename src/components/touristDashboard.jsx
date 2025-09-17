import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
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
  const navigate = useNavigate(); // Initialize the hook here
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
    navigate(route); // This will correctly handle the '/services' route
  };

  const handleLogout = () => {
    window.location.href = '/mainauth';
  };

  const BookingModal = ({ booking, onClose }) => {
    if (!booking) return null;

    const Icon = booking.type === 'guide' ? UserCheck : booking.type === 'homestay' ? Home : Award;

    return (
      <div 
        className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 cursor-default"
        onClick={onClose}
      >
        <div 
          className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[85vh] flex flex-col cursor-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header - Fixed */}
          <div className="flex-shrink-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center rounded-t-2xl">
            <h3 className="text-xl font-bold text-gray-800 italic">
              Booking Details
            </h3>
            <button 
              onClick={onClose} 
              className="p-2 rounded-full text-gray-500 hover:bg-red-50 hover:text-red-600 transition-all duration-200 cursor-pointer flex items-center justify-center"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            <div className="space-y-4">
              {/* Service Header */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200">
                <Icon className="w-8 h-8 text-blue-600" />
                <div>
                  <h4 className="text-lg font-bold text-gray-800 italic">{booking.service}</h4>
                  <p className="text-sm text-blue-600">ID: {booking.bookingId}</p>
                </div>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <div>
                    <p className="text-gray-600 italic text-xs">Date</p>
                    <p className="font-semibold text-gray-800 text-sm">{booking.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <div>
                    <p className="text-gray-600 italic text-xs">Time</p>
                    <p className="font-semibold text-gray-800 text-sm">{booking.time || booking.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <div>
                    <p className="text-gray-600 italic text-xs">Location</p>
                    <p className="font-semibold text-gray-800 text-sm">{booking.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <CreditCard className="w-4 h-4 text-gray-500" />
                  <div>
                    <p className="text-gray-600 italic text-xs">Price</p>
                    <p className="font-semibold text-gray-800 text-sm">{booking.price}</p>
                  </div>
                </div>
              </div>

              {/* Service Provider */}
              <div className="p-4 rounded-xl bg-gray-50">
                <h5 className="font-bold text-gray-800 mb-3 italic text-sm">Service Provider</h5>
                <div className="flex items-center gap-3">
                  <UserCheck className="w-4 h-4 text-gray-500" />
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">{booking.vendor}</p>
                    <p className="text-xs text-gray-600 flex items-center gap-2 mt-1">
                      <Phone className="w-3 h-3" /> {booking.vendorContact}
                    </p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="p-4 rounded-xl bg-gray-50">
                <h5 className="font-bold text-gray-800 mb-2 italic text-sm">Description</h5>
                <p className="text-gray-600 leading-relaxed text-sm">{booking.description}</p>
              </div>

              {/* Inclusions */}
              {booking.inclusions && (
                <div className="p-4 rounded-xl bg-gray-50">
                  <h5 className="font-bold text-gray-800 mb-3 italic text-sm">Inclusions</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {booking.inclusions.map((item, index) => (
                      <div key={index} className="flex items-start gap-2 text-xs text-gray-600">
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
          <div className="flex-shrink-0 bg-gray-50 px-6 py-3 border-t border-gray-200 rounded-b-2xl">
            <button 
              onClick={onClose}
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-2 px-4 rounded-xl font-semibold italic hover:from-green-700 hover:to-emerald-700 transition-all duration-300 cursor-pointer text-sm"
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
      <header className="sticky top-0 z-50 bg-white shadow-lg border-b-4 border-green-600">
        <div className="w-full px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-700 rounded-xl flex items-center justify-center shadow-lg">
                <Mountain className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent italic">
                  Jharkhand Tourism
                </h1>
                <p className="text-sm text-green-600 italic">Discover the Heart of India</p>
              </div>
            </div>

            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center space-x-3 bg-green-50 hover:bg-green-100 px-4 py-2 rounded-full transition-all duration-300 border-2 border-green-200 hover:border-green-300 cursor-pointer hover:shadow-md"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <span className="font-medium text-green-800 italic">{userName}</span>
                <ChevronDown className={`w-4 h-4 text-green-600 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-green-100 py-2 z-50 animate-in slide-in-from-top-2 duration-200">
                  <div className="px-4 py-3 border-b border-green-100">
                    <p className="text-lg font-medium text-green-800 italic">Hi, {userName} 👋</p>
                    <p className="text-sm text-green-600">Welcome back to your dashboard</p>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-red-50 transition-colors duration-200 text-red-600 cursor-pointer"
                  >
                    <LogOut className="w-4 h-4" />
                    <span className="italic">Logout</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Dashboard Area */}
      <main className="w-full px-6 py-8">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h2 className="text-6xl md:text-7xl font-serif italic text-transparent bg-gradient-to-r from-green-700 via-emerald-600 to-teal-600 bg-clip-text leading-tight mb-6 hover:scale-105 transition-transform duration-500 cursor-default">
            Welcome to Jharkhand Tourism
          </h2>
          <p className="text-2xl md:text-3xl text-green-700 font-medium mb-2 italic">
            Hello, {userName}! 
          </p>
          <p className="text-lg text-green-600 italic">
            Discover the pristine beauty and rich culture of the Heart of India
          </p>
          
          <div className="mt-12 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-3xl p-8 text-white shadow-2xl">
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex items-center gap-3 bg-white/15 rounded-full px-6 py-3 backdrop-blur-sm hover:bg-white/20 transition-colors duration-300 cursor-default">
                <MapPin className="w-6 h-6" />
                <span className="font-semibold italic">38 Tourist Destinations</span>
              </div>
              <div className="flex items-center gap-3 bg-white/15 rounded-full px-6 py-3 backdrop-blur-sm hover:bg-white/20 transition-colors duration-300 cursor-default">
                <Users className="w-6 h-6" />
                <span className="font-semibold italic">200+ Local Guides</span>
              </div>
              <div className="flex items-center gap-3 bg-white/15 rounded-full px-6 py-3 backdrop-blur-sm hover:bg-white/20 transition-colors duration-300 cursor-default">
                <Home className="w-6 h-6" />
                <span className="font-semibold italic">150+ Homestays</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="mb-16">
          <h3 className="text-4xl font-serif italic text-center text-transparent bg-gradient-to-r from-green-800 to-emerald-700 bg-clip-text mb-12 hover:scale-105 transition-transform duration-300 cursor-default">
            Explore Jharkhand's Wonders
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {featureCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.id}
                  className="group cursor-pointer"
                  onClick={() => handleNavigation(card.route)}
                >
                  <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 border border-gray-200 overflow-hidden group-hover:scale-105 group-hover:-translate-y-2 group-hover:border-transparent relative h-full flex flex-col">
                    <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                    
                    <div className="relative z-10 flex flex-col h-full">
                      <div className={`w-16 h-16 bg-gradient-to-br ${card.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h4 className="text-lg font-bold text-gray-800 mb-3 italic group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-green-700 group-hover:to-emerald-600 transition-all duration-300">
                        {card.title}
                      </h4>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed italic text-sm flex-grow">
                        {card.description}
                      </p>
                      
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center text-green-700 font-semibold group-hover:text-emerald-600 transition-colors duration-300 italic text-sm">
                          <span>Explore Now</span>
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upcoming Bookings */}
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 italic">Upcoming Bookings</h3>
            </div>
            
            <div className="space-y-4">
              {upcomingBookings.map((booking) => (
                <div 
                  key={booking.id} 
                  className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200 cursor-pointer hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group"
                  onClick={() => setSelectedBooking(booking)}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-bold text-gray-800 text-lg italic group-hover:text-blue-700 transition-colors duration-300">{booking.service}</h4>
                      <p className="text-gray-600 flex items-center gap-2 mt-1 italic">
                        <MapPin className="w-4 h-4" />
                        {booking.location}
                      </p>
                      <p className="text-sm text-blue-600 mt-1 italic opacity-70 group-hover:opacity-100 transition-opacity duration-300">Click for details →</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-blue-700 italic">{booking.date}</p>
                      <p className="text-blue-600 italic">{booking.time}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between bg-white rounded-xl p-3 shadow-sm">
                    <div className="flex items-center gap-2">
                      <Timer className="w-4 h-4 text-orange-500" />
                      <span className="font-medium text-gray-800 italic">Countdown:</span>
                    </div>
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {getCountdown(booking.bookingDateTime)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Past Bookings */}
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 italic">Past Bookings</h3>
            </div>
            
            <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-green-300 scrollbar-track-green-50">
              {pastBookings.map((booking) => (
                <div 
                  key={booking.id} 
                  className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200 cursor-pointer hover:shadow-md hover:scale-[1.01] transition-all duration-300 group"
                  onClick={() => setSelectedBooking(booking)}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-gray-800 text-base italic group-hover:text-green-700 transition-colors duration-300 truncate">{booking.service}</h4>
                      <p className="text-gray-600 flex items-center gap-2 mt-1 italic text-sm">
                        <MapPin className="w-3 h-3 flex-shrink-0" />
                        <span className="truncate">{booking.location}</span>
                      </p>
                      <p className="text-xs text-green-600 mt-1 italic opacity-70 group-hover:opacity-100 transition-opacity duration-300">Click for details →</p>
                    </div>
                    <div className="text-right flex-shrink-0 ml-3">
                      <p className="font-semibold text-green-700 italic text-sm">{booking.date}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="font-medium text-gray-800 italic text-sm">{booking.status}</span>
                    </div>
                    <div className="flex items-center gap-1">
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