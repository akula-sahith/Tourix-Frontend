import React, { useState } from 'react';
import { 
  Home, 
  Settings, 
  Calendar, 
  FileText, 
  Menu, 
  X, 
  Plus,
  Edit,
  Trash2,
  Clock,
  CheckCircle,
  XCircle,
  Eye,
  Upload,
  MapPin,
  Car,
  Users,
  User
} from 'lucide-react';

const VendorDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showAddServiceModal, setShowAddServiceModal] = useState(false);
  const [selectedServiceType, setSelectedServiceType] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({});

  // Dummy data
  const vendorInfo = {
    name: "Rajesh Kumar",
    email: "rajesh.kumar@tourix.in",
    avatar: "RK"
  };

  const services = [
    {
      id: 1,
      name: "Jharkhand Cultural Tour",
      price: "₹2,500",
      status: "active",
      bookings: 15,
      rating: 4.8
    },
    {
      id: 2,
      name: "Tribal Village Homestay",
      price: "₹1,800/night",
      status: "active",
      bookings: 8,
      rating: 4.6
    },
    {
      id: 3,
      name: "Handicraft Workshop",
      price: "₹800",
      status: "inactive",
      bookings: 3,
      rating: 4.2
    },
    {
      id: 4,
      name: "Netarhat Sunrise Trek",
      price: "₹1,200",
      status: "active",
      bookings: 22,
      rating: 4.9
    }
  ];

  const bookings = [
    {
      id: 1,
      customerName: "Priya Sharma",
      service: "Jharkhand Cultural Tour",
      date: "2025-09-25",
      status: "confirmed",
      amount: "₹2,500"
    },
    {
      id: 2,
      customerName: "Amit Patel",
      service: "Tribal Village Homestay",
      date: "2025-09-28",
      status: "pending",
      amount: "₹3,600"
    },
    {
      id: 3,
      customerName: "Sneha Gupta",
      service: "Netarhat Sunrise Trek",
      date: "2025-09-22",
      status: "completed",
      amount: "₹1,200"
    },
    {
      id: 4,
      customerName: "Rohit Singh",
      service: "Handicraft Workshop",
      date: "2025-09-30",
      status: "confirmed",
      amount: "₹800"
    }
  ];

  const pendingRequests = [
    {
      id: 1,
      serviceName: "Deoghar Temple Package",
      submittedDate: "2025-09-15",
      status: "under_review",
      description: "Complete pilgrimage package for Baidyanath Temple"
    },
    {
      id: 2,
      serviceName: "Ranchi City Tour",
      submittedDate: "2025-09-10",
      status: "approved",
      description: "Full day city tour covering major attractions"
    },
    {
      id: 3,
      serviceName: "Betla National Park Safari",
      submittedDate: "2025-09-08",
      status: "rejected",
      description: "Wildlife safari experience in Betla National Park"
    }
  ];

  const serviceTypes = [
    { id: 'homestay', label: 'Homestay', icon: Home, description: 'Accommodation services' },
    { id: 'guide', label: 'Tour Guide', icon: User, description: 'Local tour guide services' },
    { id: 'transport', label: 'Transport', icon: Car, description: 'Vehicle rental services' },
    { id: 'artisan', label: 'Artisan', icon: Users, description: 'Handicraft workshops & experiences' }
  ];

  // API call functions (replace with actual endpoints)
  const apiCalls = {
    createHomestay: async (data) => {
      // POST /api/homestays
      const response = await fetch('/api/homestays', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      return response.json();
    },
    createGuide: async (data) => {
      // POST /api/guides
      const response = await fetch('/api/guides', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      return response.json();
    },
    createTransport: async (data) => {
      // POST /api/transports
      const response = await fetch('/api/transports', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      return response.json();
    },
    createArtisan: async (data) => {
      // POST /api/artisans
      const response = await fetch('/api/artisans', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      return response.json();
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const resetForm = () => {
    setFormData({});
    setSelectedServiceType('');
    setShowAddServiceModal(false);
  };

  const handleSubmitService = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      let response;
      switch (selectedServiceType) {
        case 'homestay':
          response = await apiCalls.createHomestay(formData);
          break;
        case 'guide':
          response = await apiCalls.createGuide(formData);
          break;
        case 'transport':
          response = await apiCalls.createTransport(formData);
          break;
        case 'artisan':
          response = await apiCalls.createArtisan(formData);
          break;
        default:
          throw new Error('Invalid service type');
      }
      
      console.log('Service created:', response);
      alert('Service created successfully!');
      resetForm();
      
    } catch (error) {
      console.error('Error creating service:', error);
      alert('Failed to create service. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'services', label: 'Services', icon: FileText },
    { id: 'bookings', label: 'Bookings', icon: Calendar },
    { id: 'pending', label: 'Pending Requests', icon: Clock },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'inactive': return 'bg-gray-100 text-gray-800';
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-orange-100 text-orange-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      case 'under_review': return 'bg-orange-100 text-orange-800';
      case 'approved': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'approved': return <CheckCircle className="w-4 h-4" />;
      case 'rejected': return <XCircle className="w-4 h-4" />;
      case 'under_review': return <Clock className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const renderServiceForm = () => {
    const commonFields = (
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Location <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <input
              type="text"
              required
              value={formData.location || ''}
              onChange={(e) => handleInputChange('location', e.target.value)}
              placeholder="Enter location"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>
    );

    switch (selectedServiceType) {
      case 'homestay':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Stay Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.stayName || ''}
                onChange={(e) => handleInputChange('stayName', e.target.value)}
                placeholder="Enter homestay name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Rooms <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                required
                min="1"
                value={formData.rooms || ''}
                onChange={(e) => handleInputChange('rooms', parseInt(e.target.value))}
                placeholder="Enter number of rooms"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price per Night (₹) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                required
                min="0"
                value={formData.pricePerNight || ''}
                onChange={(e) => handleInputChange('pricePerNight', parseInt(e.target.value))}
                placeholder="Enter price per night"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            
            {commonFields}
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Images
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-500 transition-colors">
                <Upload className="mx-auto w-8 h-8 text-gray-400 mb-2" />
                <p className="text-sm text-gray-600">Click to upload images or drag and drop</p>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={(e) => handleInputChange('images', Array.from(e.target.files))}
                  className="hidden"
                />
              </div>
            </div>
          </div>
        );

      case 'guide':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Guide Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.name || ''}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Enter guide name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cost per Day (₹) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                required
                min="0"
                value={formData.cost || ''}
                onChange={(e) => handleInputChange('cost', parseInt(e.target.value))}
                placeholder="Enter daily cost"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            
            {commonFields}
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Specialization
              </label>
              <select
                value={formData.specialization || ''}
                onChange={(e) => handleInputChange('specialization', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Select specialization</option>
                <option value="cultural">Cultural Tours</option>
                <option value="adventure">Adventure Tours</option>
                <option value="wildlife">Wildlife Tours</option>
                <option value="religious">Religious Tours</option>
                <option value="tribal">Tribal Heritage</option>
              </select>
            </div>
          </div>
        );

      case 'transport':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Transport Type <span className="text-red-500">*</span>
              </label>
              <select
                required
                value={formData.transportType || ''}
                onChange={(e) => handleInputChange('transportType', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Select transport type</option>
                <option value="Car">Car</option>
                <option value="Jeep">Jeep</option>
                <option value="Bike">Bike</option>
                <option value="Bus">Bus</option>
                <option value="Tempo">Tempo</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rent per Hour (₹) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                required
                min="0"
                value={formData.rentPerHour || ''}
                onChange={(e) => handleInputChange('rentPerHour', parseInt(e.target.value))}
                placeholder="Enter hourly rent"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            
            {commonFields}
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Vehicle Image
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-500 transition-colors">
                <Upload className="mx-auto w-8 h-8 text-gray-400 mb-2" />
                <p className="text-sm text-gray-600">Click to upload vehicle image</p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleInputChange('image', e.target.files[0])}
                  className="hidden"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Vehicle Details
              </label>
              <textarea
                value={formData.details || ''}
                onChange={(e) => handleInputChange('details', e.target.value)}
                placeholder="Vehicle model, year, features, etc."
                rows="3"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>
        );

      case 'artisan':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Workshop Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.workshopName || ''}
                onChange={(e) => handleInputChange('workshopName', e.target.value)}
                placeholder="Enter workshop name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Craft Type <span className="text-red-500">*</span>
              </label>
              <select
                required
                value={formData.craftType || ''}
                onChange={(e) => handleInputChange('craftType', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Select craft type</option>
                <option value="pottery">Pottery</option>
                <option value="weaving">Weaving</option>
                <option value="metalwork">Metalwork</option>
                <option value="woodcraft">Woodcraft</option>
                <option value="painting">Traditional Painting</option>
                <option value="jewelry">Jewelry Making</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price per Session (₹) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                required
                min="0"
                value={formData.pricePerSession || ''}
                onChange={(e) => handleInputChange('pricePerSession', parseInt(e.target.value))}
                placeholder="Enter price per session"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Duration (hours) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                required
                min="1"
                value={formData.duration || ''}
                onChange={(e) => handleInputChange('duration', parseInt(e.target.value))}
                placeholder="Enter session duration"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            
            {commonFields}
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Workshop Description
              </label>
              <textarea
                value={formData.description || ''}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="Describe what participants will learn..."
                rows="3"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600">
          <h3 className="text-sm font-medium text-gray-500">Total Services</h3>
          <p className="text-2xl font-bold text-gray-900">{services.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-500">
          <h3 className="text-sm font-medium text-gray-500">Active Bookings</h3>
          <p className="text-2xl font-bold text-gray-900">{bookings.filter(b => b.status === 'confirmed').length}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
          <h3 className="text-sm font-medium text-gray-500">This Month Revenue</h3>
          <p className="text-2xl font-bold text-gray-900">₹15,600</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
          <h3 className="text-sm font-medium text-gray-500">Pending Approvals</h3>
          <p className="text-2xl font-bold text-gray-900">{pendingRequests.filter(r => r.status === 'under_review').length}</p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <div key={service.id} className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-medium text-gray-900 truncate">{service.name}</h3>
                <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(service.status)}`}>
                  {service.status}
                </span>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <p>Price: <span className="font-semibold text-green-600">{service.price}</span></p>
                <p>Bookings: {service.bookings}</p>
                <p>Rating: ⭐ {service.rating}</p>
              </div>
              <div className="flex justify-end space-x-2 mt-3">
                <button className="p-1 text-gray-500 hover:text-green-600 transition-colors">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="p-1 text-gray-500 hover:text-red-600 transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Bookings */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Bookings</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Customer</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Service</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Date</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Status</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Amount</th>
              </tr>
            </thead>
            <tbody>
              {bookings.slice(0, 3).map((booking) => (
                <tr key={booking.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm text-gray-900">{booking.customerName}</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{booking.service}</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{booking.date}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(booking.status)}`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm font-semibold text-green-600">{booking.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pending Requests */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Pending Requests</h2>
        <div className="space-y-3">
          {pendingRequests.map((request) => (
            <div key={request.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{request.serviceName}</h3>
                <p className="text-sm text-gray-600">{request.description}</p>
                <p className="text-xs text-gray-500 mt-1">Submitted: {request.submittedDate}</p>
              </div>
              <div className="flex items-center space-x-2">
                {getStatusIcon(request.status)}
                <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(request.status)}`}>
                  {request.status.replace('_', ' ')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'services':
        return (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">All Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <div key={service.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-medium text-gray-900">{service.name}</h3>
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(service.status)}`}>
                      {service.status}
                    </span>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <p>Price: <span className="font-semibold text-green-600">{service.price}</span></p>
                    <p>Bookings: {service.bookings}</p>
                    <p>Rating: ⭐ {service.rating}</p>
                  </div>
                  <div className="flex justify-between">
                    <button className="flex items-center space-x-1 px-3 py-1 text-sm text-green-600 hover:bg-green-50 rounded">
                      <Eye className="w-4 h-4" />
                      <span>View</span>
                    </button>
                    <div className="flex space-x-2">
                      <button className="p-1 text-gray-500 hover:text-green-600 transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-gray-500 hover:text-red-600 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'bookings':
        return (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">All Bookings</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Customer</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Service</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Date</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Status</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Amount</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking) => (
                    <tr key={booking.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-sm text-gray-900">{booking.customerName}</td>
                      <td className="py-3 px-4 text-sm text-gray-600">{booking.service}</td>
                      <td className="py-3 px-4 text-sm text-gray-600">{booking.date}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(booking.status)}`}>
                          {booking.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-sm font-semibold text-green-600">{booking.amount}</td>
                      <td className="py-3 px-4">
                        <button className="text-green-600 hover:text-green-700 text-sm">
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'pending':
        return (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Pending Requests</h2>
            <div className="space-y-4">
              {pendingRequests.map((request) => (
                <div key={request.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 mb-2">{request.serviceName}</h3>
                      <p className="text-sm text-gray-600 mb-2">{request.description}</p>
                      <p className="text-xs text-gray-500">Submitted on: {request.submittedDate}</p>
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                      {getStatusIcon(request.status)}
                      <span className={`px-3 py-1 text-sm rounded-full ${getStatusColor(request.status)}`}>
                        {request.status.replace('_', ' ')}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Settings</h2>
            <div className="max-w-2xl space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Vendor Name</label>
                <input 
                  type="text" 
                  defaultValue={vendorInfo.name}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  defaultValue={vendorInfo.email}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input 
                  type="tel" 
                  defaultValue="+91 9876543210"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Business Description</label>
                <textarea 
                  rows="4"
                  defaultValue="Providing authentic cultural experiences and tours across Jharkhand since 2018. Specializing in tribal heritage, local handicrafts, and eco-tourism."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors">
                Save Changes
              </button>
            </div>
          </div>
        );
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" 
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 transition-transform duration-300 ease-in-out`}>
        
        {/* Logo */}
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="font-bold text-xl text-gray-900">TOURIX</span>
          </div>
          <button 
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-1 rounded-md text-gray-400 hover:text-gray-500"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-6 px-3">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-left transition-colors mb-1 ${
                  activeTab === item.id
                    ? 'bg-green-50 text-green-700 border-r-4 border-green-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between h-16 px-6">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                <Menu className="w-6 h-6" />
              </button>
              <h1 className="text-2xl font-semibold text-gray-900 capitalize">
                {activeTab === 'pending' ? 'Pending Requests' : activeTab}
              </h1>
            </div>
            
            {/* User Profile */}
            <div className="flex items-center space-x-4">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium text-gray-900">{vendorInfo.name}</p>
                <p className="text-xs text-gray-500">Vendor</p>
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-medium text-sm">{vendorInfo.avatar}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6">
          {renderContent()}
        </main>
      </div>

      {/* Floating Action Button */}
      <button 
        onClick={() => setShowAddServiceModal(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg flex items-center justify-center transition-colors z-30"
      >
        <Plus className="w-6 h-6" />
      </button>

      {/* Add Service Modal */}
      {showAddServiceModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Add New Service</h2>
              <button
                onClick={resetForm}
                className="p-1 text-gray-400 hover:text-gray-500"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              {!selectedServiceType ? (
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Select Service Type</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {serviceTypes.map((type) => {
                      const Icon = type.icon;
                      return (
                        <button
                          key={type.id}
                          onClick={() => setSelectedServiceType(type.id)}
                          className="p-6 border-2 border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-all text-left group"
                        >
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                              <Icon className="w-6 h-6 text-green-600" />
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900">{type.label}</h4>
                              <p className="text-sm text-gray-500">{type.description}</p>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmitService}>
                  <div className="flex items-center space-x-2 mb-6">
                    <button
                      type="button"
                      onClick={() => setSelectedServiceType('')}
                      className="text-green-600 hover:text-green-700 text-sm"
                    >
                      ← Back to service types
                    </button>
                    <span className="text-gray-300">|</span>
                    <span className="font-medium text-gray-900">
                      {serviceTypes.find(t => t.id === selectedServiceType)?.label}
                    </span>
                  </div>

                  {renderServiceForm()}

                  <div className="flex space-x-4 mt-8 pt-6 border-t border-gray-200">
                    <button
                      type="button"
                      onClick={resetForm}
                      className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? 'Creating...' : 'Create Service'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VendorDashboard;