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
  Calendar,
  Filter,
  Download,
  RefreshCw,
  AlertCircle,
  CheckCircle,
  XCircle
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const TourixAdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [loading, setLoading] = useState(false);
  const [animationsLoaded, setAnimationsLoaded] = useState(false);
  const [serviceRequests, setServiceRequests] = useState([]);
  const [filteredRequests, setFilteredRequests] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
  
  // Sample data for demonstration when API is not available
  const sampleRequests = [
    {
      id: '1',
      vendorName: 'Goa Beach Resort',
      vendorEmail: 'contact@goabeach.com',
      vendorPhone: '+91 9876543210',
      serviceName: 'Luxury Beach Stay',
      type: 'Hotel',
      price: 4500,
      location: 'North Goa',
      status: 'pending',
      requestDate: '2025-09-15'
    },
    {
      id: '2',
      vendorName: 'Kerala Houseboat Tours',
      vendorEmail: 'info@keralahouseboat.com',
      vendorPhone: '+91 9876543211',
      serviceName: 'Backwater Cruise Experience',
      type: 'Tour',
      price: 3200,
      location: 'Alleppey',
      status: 'approved',
      requestDate: '2025-09-14'
    },
    {
      id: '3',
      vendorName: 'Rajasthan Desert Safari',
      vendorEmail: 'bookings@rajdesert.com',
      vendorPhone: '+91 9876543212',
      serviceName: 'Camel Safari Adventure',
      type: 'Adventure',
      price: 2800,
      location: 'Jaisalmer',
      status: 'rejected',
      requestDate: '2025-09-13'
    }
  ];
  
  useEffect(() => {
    setTimeout(() => setAnimationsLoaded(true), 100);
    fetchServiceRequests();
  }, []);

  useEffect(() => {
    // Filter requests based on search term and status
    let filtered = serviceRequests;
    
    if (searchTerm) {
      filtered = filtered.filter(request => 
        request.vendorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        request.serviceName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        request.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (statusFilter !== 'all') {
      filtered = filtered.filter(request => request.status === statusFilter);
    }
    
    setFilteredRequests(filtered);
  }, [serviceRequests, searchTerm, statusFilter]);

  const fetchServiceRequests = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/admin/requests");
      
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      
      const requestsArray = await res.json();
      
      const formattedRequests = requestsArray.map((req) => ({
        id: req._id,
        vendorName: req.vendor.name,
        vendorEmail: req.vendor.email,
        vendorPhone: req.vendor.phone,
        serviceName: req.service.stayName,
        type: req.serviceType,
        price: req.service.pricePerNight,
        location: req.service.location,
        status: req.status,
        requestDate: new Date(req.createdAt).toLocaleDateString(),
      }));

      setServiceRequests(formattedRequests);
      
    } catch (err) {
      console.error("Error fetching service requests:", err);
      // Use sample data when API is not available
      setServiceRequests(sampleRequests);
      addNotification('Using sample data - API connection failed', 'warning');
    }
    setLoading(false);
  };

  const addNotification = (message, type = 'info') => {
    const notification = {
      id: Date.now(),
      message,
      type,
      timestamp: new Date().toLocaleTimeString()
    };
    setNotifications(prev => [notification, ...prev.slice(0, 4)]);
  };

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
      images: ['https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400'],
      status: 'active'
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
      images: ['https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400'],
      status: 'active'
    },
    {
      id: 3,
      title: 'Goa Beach Paradise',
      description: 'Relax on pristine beaches with golden sands',
      location: 'North Goa',
      coordinates: { lat: 15.2993, lng: 74.1240 },
      pricePerPerson: 2800,
      duration: '4 Days',
      category: 'Beach',
      rating: 4.7,
      images: ['https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400'],
      status: 'active'
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
      { month: 'Jun', tourists: 312 }
    ],
    incomeData: [
      { month: 'Jan', income: 145000 },
      { month: 'Feb', income: 182000 },
      { month: 'Mar', income: 234000 },
      { month: 'Apr', income: 198000 },
      { month: 'May', income: 276000 },
      { month: 'Jun', income: 312000 }
    ],
    categoryData: [
      { name: 'Nature', value: 35, color: '#10B981' },
      { name: 'Adventure', value: 28, color: '#F59E0B' },
      { name: 'Beach', value: 20, color: '#3B82F6' },
      { name: 'Cultural', value: 17, color: '#8B5CF6' }
    ]
  });

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'requests', label: 'Service Requests', icon: FileText },
    { id: 'destinations', label: 'Destinations', icon: MapPin },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const handleRequestAction = async (requestId, action) => {
    setLoading(true);

    try {
      const res = await fetch(`http://localhost:5000/admin/requests/${requestId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          action: action === 'accept' ? 'approve' : 'reject' 
        }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      
      const newStatus = action === 'accept' ? 'approved' : 'rejected';
      
      setServiceRequests(prev => 
        prev.map(req => 
          req.id === requestId 
            ? { ...req, status: newStatus } 
            : req
        )
      );
      
      addNotification(
        `Request ${newStatus} successfully`, 
        newStatus === 'approved' ? 'success' : 'info'
      );
      
    } catch (err) {
      console.error("Error updating request:", err);
      // Simulate action for demo purposes when API is not available
      const newStatus = action === 'accept' ? 'approved' : 'rejected';
      setServiceRequests(prev => 
        prev.map(req => 
          req.id === requestId 
            ? { ...req, status: newStatus } 
            : req
        )
      );
      addNotification(
        `Request ${newStatus} (demo mode)`, 
        newStatus === 'approved' ? 'success' : 'info'
      );
    } finally {
      setLoading(false);
    }
  };

  const handleAddDestination = (e) => {
    e.preventDefault();
    
    if (!newDestination.title || !newDestination.location || !newDestination.pricePerPerson) {
      addNotification('Please fill in all required fields', 'error');
      return;
    }
    
    const newDest = {
      id: destinations.length + 1,
      ...newDestination,
      pricePerPerson: parseInt(newDestination.pricePerPerson),
      rating: parseFloat(newDestination.rating) || 0,
      coordinates: {
        lat: parseFloat(newDestination.coordinates.lat) || 0,
        lng: parseFloat(newDestination.coordinates.lng) || 0
      },
      images: ['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400'],
      status: 'active'
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
    
    addNotification('Destination added successfully', 'success');
  };

  const handleDeleteDestination = (destinationId) => {
    if (window.confirm('Are you sure you want to delete this destination?')) {
      setDestinations(prev => prev.filter(dest => dest.id !== destinationId));
      addNotification('Destination deleted successfully', 'success');
    }
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

  const NotificationDropdown = () => (
    <div className="absolute right-0 top-12 w-80 bg-white rounded-lg shadow-xl border z-50 max-h-96 overflow-y-auto">
      <div className="p-4 border-b">
        <h3 className="font-semibold text-gray-800">Notifications</h3>
      </div>
      {notifications.length === 0 ? (
        <div className="p-4 text-center text-gray-500">
          No notifications
        </div>
      ) : (
        notifications.map(notification => (
          <div key={notification.id} className="p-4 border-b last:border-b-0 hover:bg-gray-50">
            <div className="flex items-start space-x-3">
              <div className={`p-1 rounded-full ${
                notification.type === 'success' ? 'bg-green-100' :
                notification.type === 'warning' ? 'bg-yellow-100' :
                notification.type === 'error' ? 'bg-red-100' :
                'bg-blue-100'
              }`}>
                {notification.type === 'success' ? <CheckCircle size={16} className="text-green-600" /> :
                 notification.type === 'warning' ? <AlertCircle size={16} className="text-yellow-600" /> :
                 notification.type === 'error' ? <XCircle size={16} className="text-red-600" /> :
                 <Bell size={16} className="text-blue-600" />}
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-800">{notification.message}</p>
                <p className="text-xs text-gray-500 mt-1">{notification.timestamp}</p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );

  const Topbar = () => (
    <div className="bg-white shadow-sm border-b px-6 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <h2 className="text-2xl font-semibold text-gray-800 capitalize">{activeSection}</h2>
      </div>
      <div className="flex items-center space-x-4">
        <button 
          onClick={() => fetchServiceRequests()}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          title="Refresh Data"
        >
          <RefreshCw size={20} className="text-gray-600" />
        </button>
        <div className="relative">
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative"
          >
            <Bell size={20} className="text-gray-600" />
            {notifications.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {notifications.length}
              </span>
            )}
          </button>
          {showNotifications && <NotificationDropdown />}
        </div>
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
          <div className={`w-2 h-2 rounded-full ${
            request.status === 'pending' ? 'bg-orange-400 animate-pulse' :
            request.status === 'approved' ? 'bg-green-400' :
            'bg-red-400'
          }`}></div>
          <span className={`text-sm font-medium ${
            request.status === 'pending' ? 'text-orange-600' :
            request.status === 'approved' ? 'text-green-600' :
            'text-red-600'
          }`}>
            {request.status === 'pending' ? 'Pending Review' :
             request.status === 'approved' ? 'Approved' :
             'Rejected'}
          </span>
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
        <p className="text-sm text-gray-600"><strong>Price:</strong> ₹{request.price?.toLocaleString()}</p>
      </div>
      
      {request.status === 'pending' && (
        <div className="flex space-x-3">
          <button
            onClick={() => handleRequestAction(request.id, 'accept')}
            disabled={loading}
            className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Check size={16} />
            <span>Accept</span>
          </button>
          <button
            onClick={() => handleRequestAction(request.id, 'reject')}
            disabled={loading}
            className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
          {request.status === 'approved' ? '✓ Approved' : '✗ Rejected'}
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
        <div className="absolute top-2 right-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            destination.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {destination.status}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{destination.title}</h3>
        <p className="text-sm text-gray-600 mb-3">{destination.description}</p>
        <div className="space-y-1 mb-4">
          <p className="text-sm text-gray-600"><strong>Location:</strong> {destination.location}</p>
          <p className="text-sm text-gray-600"><strong>Price:</strong> ₹{destination.pricePerPerson?.toLocaleString()}/person</p>
          <p className="text-sm text-gray-600"><strong>Duration:</strong> {destination.duration}</p>
          <p className="text-sm text-gray-600"><strong>Category:</strong> {destination.category}</p>
          <p className="text-sm text-gray-600"><strong>Rating:</strong> ⭐ {destination.rating}</p>
        </div>
        <div className="flex space-x-2">
          <button className="flex-1 bg-[#001F4D] text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2">
            <Edit size={16} />
            <span>Edit</span>
          </button>
          <button 
            onClick={() => handleDeleteDestination(destination.id)}
            className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
          >
            <Trash2 size={16} />
            <span>Delete</span>
          </button>
        </div>
      </div>
    </div>
  );

  const StatCard = ({ title, value, icon: Icon, color, index, trend }) => (
    <div className={`bg-white rounded-lg shadow-sm border p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
      animationsLoaded ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
    }`}
    style={{ animationDelay: `${index * 100}ms` }}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-2 counter">{value}</p>
          {trend && (
            <p className={`text-xs mt-1 flex items-center ${trend > 0 ? 'text-green-600' : 'text-red-600'}`}>
              <TrendingUp size={12} className="mr-1" />
              {trend > 0 ? '+' : ''}{trend}% vs last month
            </p>
          )}
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                title="Total Tourists"
                value={analytics.totalTourists.toLocaleString()}
                icon={Users}
                color="bg-blue-500"
                index={0}
                trend={12.5}
              />
              <StatCard
                title="Total Income"
                value={`₹${(analytics.totalIncome / 1000000).toFixed(1)}M`}
                icon={DollarSign}
                color="bg-green-500"
                index={1}
                trend={8.3}
              />
              <StatCard
                title="Pending Requests"
                value={filteredRequests.filter(r => r.status === 'pending').length}
                icon={FileText}
                color="bg-orange-500"
                index={2}
              />
              <StatCard
                title="Active Destinations"
                value={destinations.filter(d => d.status === 'active').length}
                icon={MapPin}
                color="bg-purple-500"
                index={3}
              />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className={`lg:col-span-2 bg-white rounded-lg shadow-sm border p-6 hover:shadow-lg transition-all duration-300 ${
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
                    <Bar dataKey="tourists" fill="#001F4D" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <div className={`bg-white rounded-lg shadow-sm border p-6 hover:shadow-lg transition-all duration-300 ${
                animationsLoaded ? 'animate-slide-in-right' : 'opacity-0 translate-x-10'
              }`}
              style={{ animationDelay: '600ms' }}>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Category Distribution</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={analytics.categoryData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}%`}
                    >
                      {analytics.categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className={`bg-white rounded-lg shadow-sm border p-6 hover:shadow-lg transition-all duration-300 ${
              animationsLoaded ? 'animate-fade-in' : 'opacity-0'
            }`}
            style={{ animationDelay: '800ms' }}>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Income Trends</h3>
              <ResponsiveContainer width="100%" height={300}>
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
        );

      case 'requests':
        return (
          <div className={`${animationsLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="mb-6 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Service Requests</h3>
                  <p className="text-sm text-gray-600">Review and manage vendor service requests</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => fetchServiceRequests()}
                    disabled={loading}
                    className="px-4 py-2 bg-[#001F4D] text-white rounded-lg hover:bg-blue-800 transition-colors flex items-center space-x-2 disabled:opacity-50"
                  >
                    <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
                    <span>Refresh</span>
                  </button>
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
                    <Download size={16} />
                    <span>Export</span>
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by vendor, service, or location..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001F4D] focus:border-transparent"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Filter size={20} className="text-gray-400" />
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001F4D] focus:border-transparent"
                  >
                    <option value="all">All Status</option>
                    <option value="pending">Pending</option>
                    <option value="approved">Approved</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>Showing {filteredRequests.length} of {serviceRequests.length} requests</span>
                <div className="flex items-center space-x-4">
                  <span className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
                    Pending: {filteredRequests.filter(r => r.status === 'pending').length}
                  </span>
                  <span className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    Approved: {filteredRequests.filter(r => r.status === 'approved').length}
                  </span>
                  <span className="flex items-center">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-2"></div>
                    Rejected: {filteredRequests.filter(r => r.status === 'rejected').length}
                  </span>
                </div>
              </div>
            </div>
            
            {filteredRequests.length === 0 ? (
              <div className="bg-white rounded-lg shadow-sm border p-12 text-center">
                <FileText size={48} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-lg font-medium text-gray-600 mb-2">No requests found</h3>
                <p className="text-gray-500">
                  {searchTerm || statusFilter !== 'all' 
                    ? 'Try adjusting your search or filter criteria' 
                    : 'No service requests available at the moment'}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredRequests.map((request, index) => (
                  <ServiceRequestCard key={request.id} request={request} index={index} />
                ))}
              </div>
            )}
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
              <form onSubmit={handleAddDestination} className="space-y-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Destination Title *"
                    value={newDestination.title}
                    onChange={(e) => setNewDestination({...newDestination, title: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001F4D] focus:border-transparent transition-all duration-200"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Location *"
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
                />
                
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                  <input
                    type="number"
                    placeholder="Price per Person *"
                    value={newDestination.pricePerPerson}
                    onChange={(e) => setNewDestination({...newDestination, pricePerPerson: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001F4D] focus:border-transparent transition-all duration-200"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Duration (e.g. 3 Days)"
                    value={newDestination.duration}
                    onChange={(e) => setNewDestination({...newDestination, duration: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001F4D] focus:border-transparent transition-all duration-200"
                  />
                  <select
                    value={newDestination.category}
                    onChange={(e) => setNewDestination({...newDestination, category: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001F4D] focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select Category</option>
                    <option value="Nature">Nature</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Beach">Beach</option>
                    <option value="Cultural">Cultural</option>
                    <option value="Historical">Historical</option>
                  </select>
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    max="5"
                    placeholder="Rating (0-5)"
                    value={newDestination.rating}
                    onChange={(e) => setNewDestination({...newDestination, rating: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001F4D] focus:border-transparent transition-all duration-200"
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
                  />
                </div>
                
                <button
                  type="submit"
                  className="bg-[#001F4D] text-white py-2 px-6 rounded-lg hover:bg-blue-800 transition-all duration-200 transform hover:scale-105 flex items-center space-x-2"
                >
                  <Plus size={16} />
                  <span>Add Destination</span>
                </button>
              </form>
            </div>

            {/* Existing Destinations */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-800">Existing Destinations ({destinations.length})</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">
                    Active: {destinations.filter(d => d.status === 'active').length}
                  </span>
                </div>
              </div>
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
                trend={12.5}
              />
              <StatCard
                title="Total Income"
                value={`₹${(analytics.totalIncome / 1000000).toFixed(1)}M`}
                icon={DollarSign}
                color="bg-green-500"
                index={1}
                trend={8.3}
              />
              <StatCard
                title="Avg. Monthly Growth"
                value="12.5%"
                icon={TrendingUp}
                color="bg-purple-500"
                index={2}
                trend={2.1}
              />
              <StatCard
                title="Active Destinations"
                value={destinations.filter(d => d.status === 'active').length}
                icon={MapPin}
                color="bg-orange-500"
                index={3}
                trend={-5.2}
              />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className={`bg-white rounded-lg shadow-sm border p-6 hover:shadow-lg transition-all duration-300 ${
                animationsLoaded ? 'animate-slide-in-left' : 'opacity-0 -translate-x-10'
              }`}
              style={{ animationDelay: '500ms' }}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Monthly Tourist Arrivals</h3>
                  <button className="text-[#001F4D] hover:text-blue-800 text-sm flex items-center space-x-1">
                    <Download size={14} />
                    <span>Export</span>
                  </button>
                </div>
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
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Revenue Trends</h3>
                  <button className="text-[#001F4D] hover:text-blue-800 text-sm flex items-center space-x-1">
                    <Download size={14} />
                    <span>Export</span>
                  </button>
                </div>
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
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className={`bg-white rounded-lg shadow-sm border p-6 hover:shadow-lg transition-all duration-300 ${
                animationsLoaded ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: '900ms' }}>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Category Performance</h3>
                <div className="space-y-3">
                  {analytics.categoryData.map((category, index) => (
                    <div key={category.name} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div 
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: category.color }}
                        ></div>
                        <span className="text-sm font-medium text-gray-700">{category.name}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div 
                            className="h-2 rounded-full transition-all duration-500"
                            style={{ 
                              width: `${category.value * 2.86}%`, 
                              backgroundColor: category.color 
                            }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600 w-10 text-right">{category.value}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className={`bg-white rounded-lg shadow-sm border p-6 hover:shadow-lg transition-all duration-300 ${
                animationsLoaded ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: '1100ms' }}>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Stats</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Conversion Rate</span>
                    <span className="text-lg font-bold text-blue-600">68.4%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Avg. Booking Value</span>
                    <span className="text-lg font-bold text-green-600">₹4,250</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Customer Satisfaction</span>
                    <span className="text-lg font-bold text-purple-600">4.7/5</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Repeat Customers</span>
                    <span className="text-lg font-bold text-orange-600">23%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'settings':
        return (
          <div className={`space-y-6 ${animationsLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg font-semibold text-gray-800 mb-6">General Settings</h3>
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
                
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-800">Real-time Updates</h4>
                    <p className="text-sm text-gray-600">Get live updates when new requests arrive</p>
                  </div>
                  <button className="w-12 h-6 bg-[#001F4D] rounded-full relative transition-colors">
                    <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1 transition-transform"></div>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg font-semibold text-gray-800 mb-6">Data & Privacy</h3>
              <div className="space-y-4">
                <button className="w-full text-left p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                  <h4 className="font-medium text-gray-800">Export Data</h4>
                  <p className="text-sm text-gray-600 mt-1">Download all your data in CSV format</p>
                </button>
                
                <button className="w-full text-left p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors">
                  <h4 className="font-medium text-gray-800">Clear Cache</h4>
                  <p className="text-sm text-gray-600 mt-1">Clear temporary data and cache</p>
                </button>
                
                <button className="w-full text-left p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
                  <h4 className="font-medium text-gray-800">Reset Settings</h4>
                  <p className="text-sm text-gray-600 mt-1">Reset all settings to default values</p>
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
    <div className="min-h-screen bg-gray-50" onClick={() => setShowNotifications(false)}>
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-left {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        .animate-fade-in { animation: fade-in 0.6s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.6s ease-out forwards; }
        .animate-fade-in-left { animation: fade-in-left 0.6s ease-out forwards; }
        .animate-slide-up { animation: slide-up 0.6s ease-out forwards; }
        .animate-slide-down { animation: slide-down 0.6s ease-out forwards; }
        .animate-slide-in-left { animation: slide-in-left 0.6s ease-out forwards; }
        .animate-slide-in-right { animation: slide-in-right 0.6s ease-out forwards; }
        
        .counter { animation: fade-in-up 0.8s ease-out forwards; }
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