import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Home, 
  FileText, 
  MapPin, 
  BarChart3, 
  Settings, 
  User,
  Bell,
  Search,
  Check,
  Eye,
  Edit,
  Trash2,
  Plus,
  Upload,
  TrendingUp,
  Users,
  DollarSign,
  Calendar
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const TourixAdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [loading, setLoading] = useState(false);
  const [animationsLoaded, setAnimationsLoaded] = useState(false);

  useEffect(() => {
    // Trigger entrance animations
    setTimeout(() => setAnimationsLoaded(true), 100);
  }, []);

  const [serviceRequests, setServiceRequests] = useState([
    {
      id: 1,
      vendorName: 'Rajesh Kumar',
      vendorEmail: 'rajesh@example.com',
      vendorPhone: '+91 9876543210',
      serviceName: 'Mountain View Homestay',
      type: 'Homestay',
      price: 2500,
      location: 'Manali, Himachal Pradesh',
      status: 'pending',
      requestDate: '2024-09-15'
    },
    {
      id: 2,
      vendorName: 'Priya Sharma',
      vendorEmail: 'priya@example.com',
      vendorPhone: '+91 9876543211',
      serviceName: 'Local Guide Services',
      type: 'Guide',
      price: 1200,
      location: 'Goa',
      status: 'pending',
      requestDate: '2024-09-16'
    },
    {
      id: 3,
      vendorName: 'Ahmed Ali',
      vendorEmail: 'ahmed@example.com',
      vendorPhone: '+91 9876543212',
      serviceName: 'Airport Transfer Service',
      type: 'Transportation',
      price: 800,
      location: 'Mumbai',
      status: 'pending',
      requestDate: '2024-09-17'
    }
  ]);

  const [destinations, setDestinations] = useState([
    {
      id: 1,
      title: 'Kerala Backwaters',
      description: 'Experience the serene backwaters of Kerala',
      location: 'Alleppey, Kerala',
      coordinates: { lat: 9.4981, lng: 76.3388 },
      pricePerPerson: 3500,
      duration: '3 Days',
      category: 'Nature',
      rating: 4.8,
      images: ['https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400']
    },
    {
      id: 2,
      title: 'Rajasthan Desert Safari',
      description: 'Explore the golden dunes of Thar Desert',
      location: 'Jaisalmer, Rajasthan',
      coordinates: { lat: 26.9124, lng: 70.9124 },
      pricePerPerson: 4200,
      duration: '2 Days',
      category: 'Adventure',
      rating: 4.6,
      images: ['https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400']
    }
  ]);

  const [newDestination, setNewDestination] = useState({
    title: '',
    description: '',
    location: '',
    coordinates: { lat: '', lng: '' },
    pricePerPerson: '',
    duration: '',
    category: '',
    rating: '',
    images: []
  });

  const [analytics] = useState({
    totalTourists: 1247,
    totalIncome: 2456780,
    monthlyTourists: [
      { month: 'Jan', tourists: 145 },
      { month: 'Feb', tourists: 182 },
      { month: 'Mar', tourists: 234 },
      { month: 'Apr', tourists: 198 },
      { month: 'May', tourists: 276 },
      { month: 'Jun', tourists: 212 }
    ],
    incomeData: [
      { month: 'Jan', income: 145000 },
      { month: 'Feb', income: 182000 },
      { month: 'Mar', income: 234000 },
      { month: 'Apr', income: 198000 },
      { month: 'May', income: 276000 },
      { month: 'Jun', income: 312000 }
    ]
  });

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'requests', label: 'Service Requests', icon: FileText },
    { id: 'destinations', label: 'Destinations', icon: MapPin },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const handleRequestAction = (requestId, action) => {
    setLoading(true);
    setTimeout(() => {
      setServiceRequests(prev => 
        prev.map(req => 
          req.id === requestId 
            ? { ...req, status: action === 'accept' ? 'approved' : 'rejected' }
            : req
        )
      );
      setLoading(false);
    }, 1000);
  };

  const handleAddDestination = (e) => {
    e.preventDefault();
    const newDest = {
      id: destinations.length + 1,
      ...newDestination,
      pricePerPerson: parseInt(newDestination.pricePerPerson),
      rating: parseFloat(newDestination.rating),
      coordinates: {
        lat: parseFloat(newDestination.coordinates.lat),
        lng: parseFloat(newDestination.coordinates.lng)
      },
      images: ['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400']
    };
    setDestinations([...destinations, newDest]);
    setNewDestination({
      title: '',
      description: '',
      location: '',
      coordinates: { lat: '', lng: '' },
      pricePerPerson: '',
      duration: '',
      category: '',
      rating: '',
      images: []
    });
  };

  const Sidebar = () => (
    <div className={`bg-white border-r border-gray-200 text-gray-800 h-screen fixed left-0 top-0 z-50 transition-all duration-300 shadow-lg ${sidebarOpen ? 'w-64' : 'w-16'}`}>
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          {sidebarOpen && <h1 className="text-xl font-bold text-[#001F4D]">Tourix Admin</h1>}
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-600"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      
      <nav className="mt-6">
        {sidebarItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center px-4 py-3 text-left hover:bg-blue-50 transition-all duration-200 transform hover:translate-x-1 ${
                activeSection === item.id ? 'bg-blue-50 border-r-4 border-[#001F4D] text-[#001F4D] font-medium' : 'text-gray-700'
              } ${animationsLoaded ? `animate-fade-in-left` : 'opacity-0'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Icon size={20} />
              {sidebarOpen && <span className="ml-3">{item.label}</span>}
            </button>
          );
        })}
      </nav>
    </div>
  );

  const Topbar = () => (
    <div className="bg-white shadow-sm border-b px-6 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <h2 className="text-2xl font-semibold text-gray-800 capitalize">{activeSection}</h2>
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <Bell size={20} className="text-gray-600" />
        </button>
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-[#001F4D] rounded-full flex items-center justify-center">
            <User size={16} className="text-white" />
          </div>
          <span className="text-sm font-medium text-gray-700">Admin User</span>
        </div>
      </div>
    </div>
  );

  const ServiceRequestCard = ({ request, index }) => (
    <div className={`bg-white rounded-lg shadow-sm border p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
      animationsLoaded ? 'animate-slide-up' : 'opacity-0 translate-y-10'
    }`}
    style={{ animationDelay: `${index * 150}ms` }}>
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-500">Pending Review</span>
        </div>
        <span className="text-xs text-gray-400">{request.requestDate}</span>
      </div>
      
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{request.serviceName}</h3>
      <div className="space-y-2 mb-4">
        <p className="text-sm text-gray-600"><strong>Vendor:</strong> {request.vendorName}</p>
        <p className="text-sm text-gray-600"><strong>Email:</strong> {request.vendorEmail}</p>
        <p className="text-sm text-gray-600"><strong>Phone:</strong> {request.vendorPhone}</p>
        <p className="text-sm text-gray-600"><strong>Type:</strong> {request.type}</p>
        <p className="text-sm text-gray-600"><strong>Location:</strong> {request.location}</p>
        <p className="text-sm text-gray-600"><strong>Price:</strong> ₹{request.price}</p>
      </div>
      
      {request.status === 'pending' && (
        <div className="flex space-x-3">
          <button
            onClick={() => handleRequestAction(request.id, 'accept')}
            disabled={loading}
            className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2 disabled:opacity-50"
          >
            <Check size={16} />
            <span>Accept</span>
          </button>
          <button
            onClick={() => handleRequestAction(request.id, 'reject')}
            disabled={loading}
            className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2 disabled:opacity-50"
          >
            <X size={16} />
            <span>Reject</span>
          </button>
        </div>
      )}
      
      {request.status !== 'pending' && (
        <div className={`text-center py-2 rounded-lg animate-fade-in ${
          request.status === 'approved' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          {request.status === 'approved' ? 'Approved' : 'Rejected'}
        </div>
      )}
    </div>
  );

  const DestinationCard = ({ destination, index }) => (
    <div className={`bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 ${
      animationsLoaded ? 'animate-fade-in' : 'opacity-0'
    }`}
    style={{ animationDelay: `${index * 200}ms` }}>
      <div className="relative overflow-hidden">
        <img 
          src={destination.images[0]} 
          alt={destination.title}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{destination.title}</h3>
        <p className="text-sm text-gray-600 mb-3">{destination.description}</p>
        <div className="space-y-1 mb-4">
          <p className="text-sm text-gray-600"><strong>Location:</strong> {destination.location}</p>
          <p className="text-sm text-gray-600"><strong>Price:</strong> ₹{destination.pricePerPerson}/person</p>
          <p className="text-sm text-gray-600"><strong>Duration:</strong> {destination.duration}</p>
          <p className="text-sm text-gray-600"><strong>Category:</strong> {destination.category}</p>
          <p className="text-sm text-gray-600"><strong>Rating:</strong> ⭐ {destination.rating}</p>
        </div>
        <div className="flex space-x-2">
          <button className="flex-1 bg-[#001F4D] text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2">
            <Edit size={16} />
            <span>Edit</span>
          </button>
          <button className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2">
            <Trash2 size={16} />
            <span>Delete</span>
          </button>
        </div>
      </div>
    </div>
  );

  const StatCard = ({ title, value, icon: Icon, color, index }) => (
    <div className={`bg-white rounded-lg shadow-sm border p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
      animationsLoaded ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
    }`}
    style={{ animationDelay: `${index * 100}ms` }}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-2 counter">{value}</p>
        </div>
        <div className={`p-3 rounded-lg ${color} transform hover:scale-110 transition-transform duration-200`}>
          <Icon size={24} className="text-white" />
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return (
          <div className={`space-y-6 ${animationsLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <StatCard
                title="Total Tourists"
                value={analytics.totalTourists.toLocaleString()}
                icon={Users}
                color="bg-blue-500"
                index={0}
              />
              <StatCard
                title="Total Income"
                value={`₹${(analytics.totalIncome / 1000000).toFixed(1)}M`}
                icon={DollarSign}
                color="bg-green-500"
                index={1}
              />
              <StatCard
                title="Pending Requests"
                value={serviceRequests.filter(r => r.status === 'pending').length}
                icon={FileText}
                color="bg-orange-500"
                index={2}
              />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className={`bg-white rounded-lg shadow-sm border p-6 hover:shadow-lg transition-all duration-300 ${
                animationsLoaded ? 'animate-slide-in-left' : 'opacity-0 -translate-x-10'
              }`}
              style={{ animationDelay: '400ms' }}>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Monthly Tourists</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={analytics.monthlyTourists}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="tourists" fill="#001F4D" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <div className={`bg-white rounded-lg shadow-sm border p-6 hover:shadow-lg transition-all duration-300 ${
                animationsLoaded ? 'animate-slide-in-right' : 'opacity-0 translate-x-10'
              }`}
              style={{ animationDelay: '600ms' }}>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Income Trends</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={analytics.incomeData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="income" stroke="#001F4D" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        );

      case 'requests':
        return (
          <div className={`${animationsLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800">Pending Service Requests</h3>
              <p className="text-sm text-gray-600">Review and manage vendor service requests</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {serviceRequests.map((request, index) => (
                <ServiceRequestCard key={request.id} request={request} index={index} />
              ))}
            </div>
          </div>
        );

      case 'destinations':
        return (
          <div className={`space-y-8 ${animationsLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
            {/* Add Destination Form */}
            <div className={`bg-white rounded-lg shadow-sm border p-6 hover:shadow-lg transition-all duration-300 ${
              animationsLoaded ? 'animate-slide-down' : 'opacity-0 -translate-y-10'
            }`}>
              <h3 className="text-lg font-semibold text-gray-800 mb-6">Add New Destination</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Destination Title"
                    value={newDestination.title}
                    onChange={(e) => setNewDestination({...newDestination, title: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001F4D] focus:border-transparent transition-all duration-200"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Location"
                    value={newDestination.location}
                    onChange={(e) => setNewDestination({...newDestination, location: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001F4D] focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
                
                <textarea
                  placeholder="Description"
                  value={newDestination.description}
                  onChange={(e) => setNewDestination({...newDestination, description: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001F4D] focus:border-transparent transition-all duration-200"
                  rows={3}
                  required
                />
                
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                  <input
                    type="number"
                    placeholder="Price per Person"
                    value={newDestination.pricePerPerson}
                    onChange={(e) => setNewDestination({...newDestination, pricePerPerson: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001F4D] focus:border-transparent transition-all duration-200"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Duration"
                    value={newDestination.duration}
                    onChange={(e) => setNewDestination({...newDestination, duration: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001F4D] focus:border-transparent transition-all duration-200"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Category"
                    value={newDestination.category}
                    onChange={(e) => setNewDestination({...newDestination, category: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001F4D] focus:border-transparent transition-all duration-200"
                    required
                  />
                  <input
                    type="number"
                    step="0.1"
                    placeholder="Rating"
                    value={newDestination.rating}
                    onChange={(e) => setNewDestination({...newDestination, rating: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001F4D] focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <input
                    type="number"
                    step="any"
                    placeholder="Latitude"
                    value={newDestination.coordinates.lat}
                    onChange={(e) => setNewDestination({
                      ...newDestination, 
                      coordinates: {...newDestination.coordinates, lat: e.target.value}
                    })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001F4D] focus:border-transparent transition-all duration-200"
                    required
                  />
                  <input
                    type="number"
                    step="any"
                    placeholder="Longitude"
                    value={newDestination.coordinates.lng}
                    onChange={(e) => setNewDestination({
                      ...newDestination, 
                      coordinates: {...newDestination.coordinates, lng: e.target.value}
                    })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001F4D] focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
                
                <button
                  onClick={handleAddDestination}
                  className="bg-[#001F4D] text-white py-2 px-6 rounded-lg hover:bg-blue-800 transition-all duration-200 transform hover:scale-105 flex items-center space-x-2"
                >
                  <Plus size={16} />
                  <span>Add Destination</span>
                </button>
              </div>
            </div>

            {/* Existing Destinations */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-6">Existing Destinations</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {destinations.map((destination, index) => (
                  <DestinationCard key={destination.id} destination={destination} index={index} />
                ))}
              </div>
            </div>
          </div>
        );

      case 'analytics':
        return (
          <div className={`space-y-6 ${animationsLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                title="Total Tourists"
                value={analytics.totalTourists.toLocaleString()}
                icon={Users}
                color="bg-blue-500"
                index={0}
              />
              <StatCard
                title="Total Income"
                value={`₹${(analytics.totalIncome / 1000000).toFixed(1)}M`}
                icon={DollarSign}
                color="bg-green-500"
                index={1}
              />
              <StatCard
                title="Avg. Monthly Growth"
                value="12.5%"
                icon={TrendingUp}
                color="bg-purple-500"
                index={2}
              />
              <StatCard
                title="Active Destinations"
                value={destinations.length}
                icon={MapPin}
                color="bg-orange-500"
                index={3}
              />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className={`bg-white rounded-lg shadow-sm border p-6 hover:shadow-lg transition-all duration-300 ${
                animationsLoaded ? 'animate-slide-in-left' : 'opacity-0 -translate-x-10'
              }`}
              style={{ animationDelay: '500ms' }}>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Monthly Tourist Arrivals</h3>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={analytics.monthlyTourists}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="tourists" fill="#001F4D" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <div className={`bg-white rounded-lg shadow-sm border p-6 hover:shadow-lg transition-all duration-300 ${
                animationsLoaded ? 'animate-slide-in-right' : 'opacity-0 translate-x-10'
              }`}
              style={{ animationDelay: '700ms' }}>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Revenue Trends</h3>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={analytics.incomeData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip 
                      formatter={(value) => [`₹${(value / 1000).toFixed(0)}K`, 'Revenue']}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="income" 
                      stroke="#001F4D" 
                      strokeWidth={3}
                      dot={{ fill: '#001F4D', strokeWidth: 2, r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        );

      case 'settings':
        return (
          <div className={`bg-white rounded-lg shadow-sm border p-6 hover:shadow-lg transition-all duration-300 ${
            animationsLoaded ? 'animate-fade-in' : 'opacity-0'
          }`}>
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Settings</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-800">Email Notifications</h4>
                  <p className="text-sm text-gray-600">Receive email alerts for new service requests</p>
                </div>
                <button className="w-12 h-6 bg-[#001F4D] rounded-full relative transition-colors">
                  <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1 transition-transform"></div>
                </button>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-800">Auto-approve Trusted Vendors</h4>
                  <p className="text-sm text-gray-600">Automatically approve requests from verified vendors</p>
                </div>
                <button className="w-12 h-6 bg-gray-300 rounded-full relative transition-colors">
                  <div className="w-4 h-4 bg-white rounded-full absolute top-1 left-1 transition-transform"></div>
                </button>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-800">Dark Mode</h4>
                  <p className="text-sm text-gray-600">Switch to dark theme</p>
                </div>
                <button className="w-12 h-6 bg-gray-300 rounded-full relative transition-colors">
                  <div className="w-4 h-4 bg-white rounded-full absolute top-1 left-1 transition-transform"></div>
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        .animate-fade-in-left {
          animation: fade-in-left 0.6s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }
        
        .animate-slide-down {
          animation: slide-down 0.6s ease-out forwards;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.6s ease-out forwards;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.6s ease-out forwards;
        }
        
        .counter {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
      
      <Sidebar />
      <div className={`transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-16'}`}>
        <Topbar />
        <main className="p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default TourixAdminDashboard;