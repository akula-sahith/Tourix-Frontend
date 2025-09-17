import { useState } from "react";
import { MapPin, Users, Calendar, User, CreditCard, Search, Filter, Star, Eye, Edit, ToggleLeft, ToggleRight, TrendingUp, Clock, Phone, Mail, Globe } from "lucide-react";

const providedServices = [
  {
    id: 1,
    serviceType: "Jeep",
    serviceName: "Betla Safari Jeeps",
    description: "4WD jeep services for wildlife safaris and adventure tours in Betla National Park",
    location: "Betla National Park",
    address: "Betla National Park, Latehar - 829202",
    capacity: "15 jeeps",
    rating: 4.8,
    totalReviews: 456,
    isActive: true,
    monthlyRevenue: 180000,
    yearlyRevenue: 2160000,
    bookingsThisMonth: 85,
    occupancyRate: 78,
    icon: <MapPin size={20} />,
    color: "bg-blue-500",
    contactNumber: "+91 6565-23456789",
    email: "info@betlasafarijeeps.com",
    website: "www.betlasafarijeeps.com",
    amenities: ["4WD Capability", "Professional Drivers", "Safari Equipment", "GPS Tracking", "Emergency Kit", "Wildlife Spotting Guide"],
    vehicleTypes: [
      { type: "Standard Safari Jeep", count: 10, rate: 15 },
      { type: "Premium Safari Jeep", count: 3, rate: 20 },
      { type: "Luxury Safari Jeep", count: 2, rate: 25 }
    ],
    operatingHours: "6:00 AM - 6:00 PM",
    establishedYear: 2018,
    staff: 18,
    languages: ["Hindi", "English", "Santhali", "Mundari"]
  },
  {
    id: 2,
    serviceType: "Cab",
    serviceName: "Ranchi City Cabs",
    description: "Reliable cab services for city travel, airport transfers, and outstation trips",
    location: "Ranchi",
    address: "Main Road, Ranchi - 834001",
    capacity: "50 cabs",
    rating: 4.6,
    totalReviews: 1247,
    isActive: true,
    monthlyRevenue: 250000,
    yearlyRevenue: 3000000,
    bookingsThisMonth: 450,
    occupancyRate: 85,
    icon: <CreditCard size={20} />,
    color: "bg-green-500",
    contactNumber: "+91 651-98765432",
    email: "bookings@ranchicitycabs.com",
    website: "www.ranchicitycabs.com",
    amenities: ["AC Vehicles", "GPS Tracking", "24/7 Service", "Online Booking", "Professional Drivers", "Airport Pickup"],
    vehicleTypes: [
      { type: "Hatchback", count: 20, rate: 8 },
      { type: "Sedan", count: 20, rate: 12 },
      { type: "SUV", count: 10, rate: 18 }
    ],
    operatingHours: "24/7",
    establishedYear: 2019,
    staff: 52,
    languages: ["Hindi", "English", "Santhali", "Bengali"]
  },
  {
    id: 3,
    serviceType: "Auto",
    serviceName: "Local Auto Service",
    description: "Three-wheeler auto rickshaw service for short distance city travel",
    location: "Ranchi",
    address: "Station Road, Ranchi - 834001",
    capacity: "25 autos",
    rating: 4.2,
    totalReviews: 634,
    isActive: true,
    monthlyRevenue: 80000,
    yearlyRevenue: 960000,
    bookingsThisMonth: 240,
    occupancyRate: 72,
    icon: <Users size={20} />,
    color: "bg-yellow-500",
    contactNumber: "+91 651-87654321",
    email: "info@localautoservice.com",
    website: "www.localautoservice.com",
    amenities: ["Meter System", "Local Area Expert", "Quick Service", "Affordable Rates", "CNG Powered"],
    vehicleTypes: [
      { type: "Standard Auto", count: 20, rate: 10 },
      { type: "Shared Auto", count: 5, rate: 5 }
    ],
    operatingHours: "6:00 AM - 10:00 PM",
    establishedYear: 2020,
    staff: 28,
    languages: ["Hindi", "English", "Santhali"]
  },
  {
    id: 4,
    serviceType: "Rickshaw",
    serviceName: "Traditional Rickshaw Service",
    description: "Eco-friendly cycle rickshaw service for short distances and tourist areas",
    location: "Ranchi",
    address: "Market Area, Ranchi - 834001",
    capacity: "20 rickshaws",
    rating: 4.0,
    totalReviews: 289,
    isActive: true,
    monthlyRevenue: 45000,
    yearlyRevenue: 540000,
    bookingsThisMonth: 180,
    occupancyRate: 65,
    icon: <User size={20} />,
    color: "bg-red-500",
    contactNumber: "+91 651-76543210",
    email: "info@traditionalrickshaw.com",
    website: "www.traditionalrickshaw.com",
    amenities: ["Eco-Friendly", "Cultural Experience", "Tourist Friendly", "Local Knowledge", "Affordable"],
    vehicleTypes: [
      { type: "Tourist Rickshaw", count: 8, rate: 25 },
      { type: "Local Rickshaw", count: 12, rate: 15 }
    ],
    operatingHours: "7:00 AM - 8:00 PM",
    establishedYear: 2017,
    staff: 22,
    languages: ["Hindi", "English", "Santhali"]
  },
  {
    id: 5,
    serviceType: "Cycle",
    serviceName: "Eco-Friendly Cycle Rentals",
    description: "Bicycle rental service for eco-tourism and city exploration",
    location: "Ranchi",
    address: "Park Area, Ranchi - 834001",
    capacity: "30 cycles",
    rating: 4.4,
    totalReviews: 156,
    isActive: true,
    monthlyRevenue: 22000,
    yearlyRevenue: 264000,
    bookingsThisMonth: 110,
    occupancyRate: 60,
    icon: <Calendar size={20} />,
    color: "bg-purple-500",
    contactNumber: "+91 651-65432109",
    email: "info@ecocyclerentals.com",
    website: "www.ecocyclerentals.com",
    amenities: ["Eco-Friendly", "Health Benefits", "Tourist Maps", "Safety Gear", "Maintenance Support"],
    vehicleTypes: [
      { type: "Standard Cycle", count: 20, rate: 5 },
      { type: "Mountain Bike", count: 8, rate: 10 },
      { type: "Electric Cycle", count: 2, rate: 15 }
    ],
    operatingHours: "6:00 AM - 8:00 PM",
    establishedYear: 2021,
    staff: 8,
    languages: ["Hindi", "English"]
  },
  {
    id: 6,
    serviceType: "Minibus",
    serviceName: "Group Travel Minibus",
    description: "Minibus service for group travel, school trips, and tourist groups",
    location: "Ranchi",
    address: "Transport Nagar, Ranchi - 834002",
    capacity: "12 minibuses",
    rating: 4.5,
    totalReviews: 234,
    isActive: true,
    monthlyRevenue: 120000,
    yearlyRevenue: 1440000,
    bookingsThisMonth: 48,
    occupancyRate: 80,
    icon: <Users size={20} />,
    color: "bg-indigo-500",
    contactNumber: "+91 651-54321098",
    email: "bookings@grouptravelminibus.com",
    website: "www.grouptravelminibus.com",
    amenities: ["AC Service", "Group Seating", "Professional Driver", "GPS Tracking", "Entertainment System"],
    vehicleTypes: [
      { type: "12-Seater Minibus", count: 8, rate: 20 },
      { type: "17-Seater Minibus", count: 4, rate: 25 }
    ],
    operatingHours: "5:00 AM - 11:00 PM",
    establishedYear: 2018,
    staff: 15,
    languages: ["Hindi", "English", "Bengali"]
  },
  {
    id: 7,
    serviceType: "Motor",
    serviceName: "Quick Delivery Motors",
    description: "Two-wheeler motorcycle service for quick delivery and personal transport",
    location: "Ranchi",
    address: "Commercial Area, Ranchi - 834001",
    capacity: "20 motorcycles",
    rating: 4.1,
    totalReviews: 178,
    isActive: false,
    monthlyRevenue: 35000,
    yearlyRevenue: 420000,
    bookingsThisMonth: 0,
    occupancyRate: 0,
    icon: <MapPin size={20} />,
    color: "bg-gray-500",
    contactNumber: "+91 651-43210987",
    email: "info@quickdeliverymotors.com",
    website: "www.quickdeliverymotors.com",
    amenities: ["Quick Service", "Fuel Efficient", "City Navigation", "Delivery Support", "Maintenance"],
    vehicleTypes: [
      { type: "Standard Motorcycle", count: 15, rate: 8 },
      { type: "Delivery Bike", count: 5, rate: 6 }
    ],
    operatingHours: "Currently Under Maintenance",
    establishedYear: 2020,
    staff: 12,
    languages: ["Hindi", "English"]
  }
];

export default function Services() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [selectedService, setSelectedService] = useState(null);
  const [editingService, setEditingService] = useState(null);
  const [editFormData, setEditFormData] = useState({});
  const [services, setServices] = useState(providedServices);

  const serviceTypes = ["all", "Jeep", "Cab", "Auto", "Rickshaw", "Cycle", "Minibus", "Motor"];
  const statusTypes = ["all", "Active", "Inactive"];

  const handleEditService = (service) => {
    setEditingService(service);
    setEditFormData({ ...service });
  };

  const handleSaveService = () => {
    const updatedServices = services.map(service => 
      service.id === editFormData.id ? editFormData : service
    );
    setServices(updatedServices);
    setEditingService(null);
    setEditFormData({});
  };

  const handleInputChange = (field, value) => {
    setEditFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleArrayChange = (field, index, value) => {
    const updatedArray = [...editFormData[field]];
    updatedArray[index] = value;
    setEditFormData(prev => ({ ...prev, [field]: updatedArray }));
  };

  const addArrayItem = (field, newItem) => {
    setEditFormData(prev => ({ 
      ...prev, 
      [field]: [...(prev[field] || []), newItem] 
    }));
  };

  const removeArrayItem = (field, index) => {
    const updatedArray = editFormData[field].filter((_, i) => i !== index);
    setEditFormData(prev => ({ ...prev, [field]: updatedArray }));
  };

  const filteredServices = services.filter(service => {
    const matchesSearch = service.serviceName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === "all" || service.serviceType === filterType;
    const matchesStatus = filterStatus === "all" || 
                         (filterStatus === "Active" && service.isActive) ||
                         (filterStatus === "Inactive" && !service.isActive);
    return matchesSearch && matchesType && matchesStatus;
  });

  const activeServices = services.filter(s => s.isActive);
  const totalRevenue = activeServices.reduce((sum, s) => sum + s.monthlyRevenue, 0);
  const totalBookings = activeServices.reduce((sum, s) => sum + s.bookingsThisMonth, 0);

  const ServiceCard = ({ service }) => (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer border"
         onClick={() => setSelectedService(service)}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`${service.color} text-white p-3 rounded-lg`}>
            {service.icon}
          </div>
          <div>
            <h3 className="text-lg font-semibold">{service.serviceName}</h3>
            <p className="text-sm text-gray-600">{service.serviceType} • {service.location}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {service.isActive ? (
            <ToggleRight size={20} className="text-green-500" />
          ) : (
            <ToggleLeft size={20} className="text-gray-400" />
          )}
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            service.isActive ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-600"
          }`}>
            {service.isActive ? "Active" : "Inactive"}
          </span>
        </div>
      </div>
      
      <p className="text-gray-700 text-sm mb-4">{service.description}</p>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="text-sm">
          <span className="text-gray-500">Rating:</span>
          <div className="flex items-center gap-1">
            <Star size={14} className="text-yellow-500 fill-current" />
            <span className="font-medium">{service.rating}</span>
            <span className="text-gray-400">({service.totalReviews})</span>
          </div>
        </div>
        <div className="text-sm">
          <span className="text-gray-500">Capacity:</span>
          <p className="font-medium">{service.capacity}</p>
        </div>
      </div>
      
      <div className="flex items-center justify-between text-sm mb-4">
        <div>
          <span className="text-gray-500">This Month:</span>
          <p className="font-medium">{service.bookingsThisMonth} bookings</p>
        </div>
        <div className="text-right">
          <span className="text-gray-500">Occupancy:</span>
          <p className="font-medium">{service.occupancyRate}%</p>
        </div>
      </div>
      
      <div className="border-t pt-4">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-gray-500 text-sm">Monthly Revenue:</span>
            <p className="font-semibold text-green-600">₹{service.monthlyRevenue.toLocaleString()}</p>
          </div>
          <div className="flex gap-2">
            <button className="p-2 text-blue-600 hover:bg-blue-100 rounded">
              <Eye size={16} />
            </button>
            <button 
              className="p-2 text-green-600 hover:bg-green-100 rounded"
              onClick={(e) => {
                e.stopPropagation();
                handleEditService(service);
              }}
            >
              <Edit size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const ServiceDetails = ({ service, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <div className={`${service.color} text-white p-3 rounded-lg`}>
              {service.icon}
            </div>
            <div>
              <h2 className="text-2xl font-bold">{service.serviceName}</h2>
              <p className="text-gray-600">{service.serviceType} • {service.location}</p>
              <div className="flex items-center gap-2 mt-1">
                <Star size={16} className="text-yellow-500 fill-current" />
                <span className="font-medium">{service.rating}</span>
                <span className="text-gray-400">({service.totalReviews} reviews)</span>
              </div>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-xl">×</button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-3">Service Information</h3>
              <div className="space-y-2 text-sm">
                <div><strong>Description:</strong> {service.description}</div>
                <div><strong>Address:</strong> {service.address}</div>
                <div><strong>Capacity:</strong> {service.capacity}</div>
                <div><strong>Operating Hours:</strong> {service.operatingHours}</div>
                <div><strong>Established:</strong> {service.establishedYear}</div>
                <div><strong>Staff:</strong> {service.staff} members</div>
                <div><strong>Languages:</strong> {service.languages.join(", ")}</div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-3">Contact Information</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-gray-500" />
                  <span>{service.contactNumber}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-gray-500" />
                  <span>{service.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe size={16} className="text-gray-500" />
                  <span>{service.website}</span>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-3">Performance Metrics</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Monthly Revenue:</span>
                  <p className="font-semibold text-green-600">₹{service.monthlyRevenue.toLocaleString()}</p>
                </div>
                <div>
                  <span className="text-gray-500">Yearly Revenue:</span>
                  <p className="font-semibold text-blue-600">₹{service.yearlyRevenue.toLocaleString()}</p>
                </div>
                <div>
                  <span className="text-gray-500">This Month Bookings:</span>
                  <p className="font-semibold">{service.bookingsThisMonth}</p>
                </div>
                <div>
                  <span className="text-gray-500">Occupancy Rate:</span>
                  <p className="font-semibold">{service.occupancyRate}%</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-3">Amenities & Features</h3>
              <div className="flex flex-wrap gap-2">
                {service.amenities.map((amenity, index) => (
                  <span key={index} className="px-2 py-1 bg-white rounded text-xs border">
                    {amenity}
                  </span>
                ))}
              </div>
            </div>
            
            {service.roomTypes && (
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Room Types & Pricing</h3>
                <div className="space-y-2">
                  {service.roomTypes.map((room, index) => (
                    <div key={index} className="flex justify-between items-center p-2 bg-white rounded text-sm">
                      <div>
                        <span className="font-medium">{room.type}</span>
                        <span className="text-gray-500 ml-2">({room.count} rooms)</span>
                      </div>
                      <span className="font-semibold text-green-600">₹{room.price}/night</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {service.vehicleTypes && (
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Vehicle Types & Rates</h3>
                <div className="space-y-2">
                  {service.vehicleTypes.map((vehicle, index) => (
                    <div key={index} className="flex justify-between items-center p-2 bg-white rounded text-sm">
                      <div>
                        <span className="font-medium">{vehicle.type}</span>
                        <span className="text-gray-500 ml-2">({vehicle.count} vehicles)</span>
                      </div>
                      <span className="font-semibold text-green-600">₹{vehicle.rate}/km</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {service.tourTypes && (
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Tour Packages</h3>
                <div className="space-y-2">
                  {service.tourTypes.map((tour, index) => (
                    <div key={index} className="p-2 bg-white rounded text-sm">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{tour.type}</span>
                        <span className="font-semibold text-green-600">₹{tour.price}</span>
                      </div>
                      <span className="text-gray-500">Duration: {tour.duration}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {service.packageTypes && (
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Package Options</h3>
                <div className="space-y-2">
                  {service.packageTypes.map((pkg, index) => (
                    <div key={index} className="p-2 bg-white rounded text-sm">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{pkg.type}</span>
                        <span className="font-semibold text-green-600">₹{pkg.price}</span>
                      </div>
                      <span className="text-gray-500">Includes: {pkg.includes}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {service.cuisineTypes && (
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Cuisine & Specialties</h3>
                <div className="space-y-2 text-sm">
                  <div><strong>Cuisine Types:</strong> {service.cuisineTypes.join(", ")}</div>
                  <div><strong>Specialties:</strong> {service.specialties.join(", ")}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const EditServiceModal = ({ service, formData, onClose, onSave, onInputChange, onArrayChange, onAddArrayItem, onRemoveArrayItem }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-6xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <div className={`${service.color} text-white p-3 rounded-lg`}>
              {service.icon}
            </div>
            <div>
              <h2 className="text-2xl font-bold">Edit {service.serviceName}</h2>
              <p className="text-gray-600">{service.serviceType} Service</p>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-xl">×</button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Basic Information */}
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-4">Basic Information</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Service Name</label>
                  <input
                    type="text"
                    value={formData.serviceName || ''}
                    onChange={(e) => onInputChange('serviceName', e.target.value)}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    value={formData.description || ''}
                    onChange={(e) => onInputChange('description', e.target.value)}
                    rows={3}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                    <input
                      type="text"
                      value={formData.location || ''}
                      onChange={(e) => onInputChange('location', e.target.value)}
                      className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Capacity</label>
                    <input
                      type="text"
                      value={formData.capacity || ''}
                      onChange={(e) => onInputChange('capacity', e.target.value)}
                      className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  <input
                    type="text"
                    value={formData.address || ''}
                    onChange={(e) => onInputChange('address', e.target.value)}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Operating Hours</label>
                    <input
                      type="text"
                      value={formData.operatingHours || ''}
                      onChange={(e) => onInputChange('operatingHours', e.target.value)}
                      className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Staff Count</label>
                    <input
                      type="number"
                      value={formData.staff || ''}
                      onChange={(e) => onInputChange('staff', parseInt(e.target.value))}
                      className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="text"
                    value={formData.contactNumber || ''}
                    onChange={(e) => onInputChange('contactNumber', e.target.value)}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    value={formData.email || ''}
                    onChange={(e) => onInputChange('email', e.target.value)}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
                  <input
                    type="url"
                    value={formData.website || ''}
                    onChange={(e) => onInputChange('website', e.target.value)}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
            
            {/* Performance Metrics */}
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-4">Performance Metrics</h3>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Revenue</label>
                  <input
                    type="number"
                    value={formData.monthlyRevenue || ''}
                    onChange={(e) => onInputChange('monthlyRevenue', parseInt(e.target.value))}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Occupancy Rate (%)</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={formData.occupancyRate || ''}
                    onChange={(e) => onInputChange('occupancyRate', parseInt(e.target.value))}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="mt-3">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.isActive || false}
                    onChange={(e) => onInputChange('isActive', e.target.checked)}
                    className="mr-2"
                  />
                  <span className="text-sm font-medium text-gray-700">Service Active</span>
                </label>
              </div>
            </div>
          </div>
          
          {/* Service-Specific Information */}
          <div className="space-y-4">
            {/* Amenities */}
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-4">Amenities & Features</h3>
              <div className="space-y-2">
                {(formData.amenities || []).map((amenity, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <input
                      type="text"
                      value={amenity}
                      onChange={(e) => onArrayChange('amenities', index, e.target.value)}
                      className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      onClick={() => onRemoveArrayItem('amenities', index)}
                      className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  onClick={() => onAddArrayItem('amenities', '')}
                  className="w-full p-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-500 hover:text-blue-500"
                >
                  + Add Amenity
                </button>
              </div>
            </div>
            
            {/* Languages */}
            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-4">Languages Supported</h3>
              <div className="space-y-2">
                {(formData.languages || []).map((language, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <input
                      type="text"
                      value={language}
                      onChange={(e) => onArrayChange('languages', index, e.target.value)}
                      className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      onClick={() => onRemoveArrayItem('languages', index)}
                      className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  onClick={() => onAddArrayItem('languages', '')}
                  className="w-full p-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-500 hover:text-blue-500"
                >
                  + Add Language
                </button>
              </div>
            </div>
            
            {/* Room Types for Hotels */}
            {formData.roomTypes && (
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-4">Room Types & Pricing</h3>
                <div className="space-y-3">
                  {formData.roomTypes.map((room, index) => (
                    <div key={index} className="p-3 bg-white rounded border">
                      <div className="grid grid-cols-3 gap-2 mb-2">
                        <input
                          type="text"
                          placeholder="Room Type"
                          value={room.type}
                          onChange={(e) => {
                            const updatedRooms = [...formData.roomTypes];
                            updatedRooms[index] = { ...room, type: e.target.value };
                            onInputChange('roomTypes', updatedRooms);
                          }}
                          className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                          type="number"
                          placeholder="Count"
                          value={room.count}
                          onChange={(e) => {
                            const updatedRooms = [...formData.roomTypes];
                            updatedRooms[index] = { ...room, count: parseInt(e.target.value) };
                            onInputChange('roomTypes', updatedRooms);
                          }}
                          className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                          type="number"
                          placeholder="Price"
                          value={room.price}
                          onChange={(e) => {
                            const updatedRooms = [...formData.roomTypes];
                            updatedRooms[index] = { ...room, price: parseInt(e.target.value) };
                            onInputChange('roomTypes', updatedRooms);
                          }}
                          className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <button
                        onClick={() => {
                          const updatedRooms = formData.roomTypes.filter((_, i) => i !== index);
                          onInputChange('roomTypes', updatedRooms);
                        }}
                        className="text-red-600 text-sm hover:text-red-800"
                      >
                        Remove Room Type
                      </button>
                    </div>
                  ))}
                  <button
                    onClick={() => {
                      const newRoom = { type: '', count: 0, price: 0 };
                      onInputChange('roomTypes', [...(formData.roomTypes || []), newRoom]);
                    }}
                    className="w-full p-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-500 hover:text-blue-500"
                  >
                    + Add Room Type
                  </button>
                </div>
              </div>
            )}
            
            {/* Vehicle Types for Transportation */}
            {formData.vehicleTypes && (
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-4">Vehicle Types & Rates</h3>
                <div className="space-y-3">
                  {formData.vehicleTypes.map((vehicle, index) => (
                    <div key={index} className="p-3 bg-white rounded border">
                      <div className="grid grid-cols-3 gap-2 mb-2">
                        <input
                          type="text"
                          placeholder="Vehicle Type"
                          value={vehicle.type}
                          onChange={(e) => {
                            const updatedVehicles = [...formData.vehicleTypes];
                            updatedVehicles[index] = { ...vehicle, type: e.target.value };
                            onInputChange('vehicleTypes', updatedVehicles);
                          }}
                          className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                          type="number"
                          placeholder="Count"
                          value={vehicle.count}
                          onChange={(e) => {
                            const updatedVehicles = [...formData.vehicleTypes];
                            updatedVehicles[index] = { ...vehicle, count: parseInt(e.target.value) };
                            onInputChange('vehicleTypes', updatedVehicles);
                          }}
                          className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                          type="number"
                          placeholder="Rate/km"
                          value={vehicle.rate}
                          onChange={(e) => {
                            const updatedVehicles = [...formData.vehicleTypes];
                            updatedVehicles[index] = { ...vehicle, rate: parseInt(e.target.value) };
                            onInputChange('vehicleTypes', updatedVehicles);
                          }}
                          className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <button
                        onClick={() => {
                          const updatedVehicles = formData.vehicleTypes.filter((_, i) => i !== index);
                          onInputChange('vehicleTypes', updatedVehicles);
                        }}
                        className="text-red-600 text-sm hover:text-red-800"
                      >
                        Remove Vehicle Type
                      </button>
                    </div>
                  ))}
                  <button
                    onClick={() => {
                      const newVehicle = { type: '', count: 0, rate: 0 };
                      onInputChange('vehicleTypes', [...(formData.vehicleTypes || []), newVehicle]);
                    }}
                    className="w-full p-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-500 hover:text-blue-500"
                  >
                    + Add Vehicle Type
                  </button>
                </div>
              </div>
            )}
            
            {/* Cuisine Types for Restaurants */}
            {formData.cuisineTypes && (
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-4">Cuisine Types</h3>
                <div className="space-y-2">
                  {formData.cuisineTypes.map((cuisine, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <input
                        type="text"
                        value={cuisine}
                        onChange={(e) => onArrayChange('cuisineTypes', index, e.target.value)}
                        className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <button
                        onClick={() => onRemoveArrayItem('cuisineTypes', index)}
                        className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <button
                    onClick={() => onAddArrayItem('cuisineTypes', '')}
                    className="w-full p-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-500 hover:text-blue-500"
                  >
                    + Add Cuisine Type
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex justify-end gap-4 mt-6 pt-6 border-t">
          <button
            onClick={onClose}
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={onSave}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-4">Services Provided</h1>
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-1">
            <TrendingUp size={16} />
            <span>Active Services: {activeServices.length}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>Total Bookings: {totalBookings}</span>
          </div>
          <div className="flex items-center gap-1">
            <CreditCard size={16} />
            <span>Monthly Revenue: ₹{totalRevenue.toLocaleString()}</span>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search services, locations, or descriptions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex gap-4">
            <div className="relative">
              <Filter size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="pl-10 pr-8 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
              >
                {serviceTypes.map(type => (
                  <option key={type} value={type}>
                    {type === "all" ? "All Types" : type}
                  </option>
                ))}
              </select>
            </div>
            <div className="relative">
              <ToggleRight size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="pl-10 pr-8 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
              >
                {statusTypes.map(status => (
                  <option key={status} value={status}>
                    {status === "all" ? "All Status" : status}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      {filteredServices.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-2">
            <TrendingUp size={48} className="mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-600 mb-2">No services found</h3>
          <p className="text-gray-500">Try adjusting your search or filter criteria</p>
        </div>
      )}

      {selectedService && (
        <ServiceDetails 
          service={selectedService} 
          onClose={() => setSelectedService(null)} 
        />
      )}

      {editingService && (
        <EditServiceModal 
          service={editingService}
          formData={editFormData}
          onClose={() => {
            setEditingService(null);
            setEditFormData({});
          }}
          onSave={handleSaveService}
          onInputChange={handleInputChange}
          onArrayChange={handleArrayChange}
          onAddArrayItem={addArrayItem}
          onRemoveArrayItem={removeArrayItem}
        />
      )}
    </div>
  );
}