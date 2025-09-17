import { useState } from "react";
import { MapPin, Users, Calendar, User, CreditCard, Search, Filter, Star, Eye, Edit, ToggleLeft, ToggleRight, TrendingUp, Clock, Phone, Mail, Globe } from "lucide-react";

const providedServices = [
  {
    id: 1,
    serviceType: "Wildlife Guide",
    serviceName: "Betla National Park Guides",
    description: "Professional wildlife guides for Betla National Park with expert local knowledge",
    location: "Betla National Park",
    address: "Betla National Park, Latehar - 829202",
    capacity: "25 guides",
    rating: 4.9,
    totalReviews: 456,
    isActive: true,
    monthlyRevenue: 95000,
    yearlyRevenue: 1140000,
    bookingsThisMonth: 78,
    occupancyRate: 68,
    icon: <User size={20} />,
    color: "bg-green-500",
    contactNumber: "+91 6565-23456789",
    email: "tours@betlaguides.com",
    website: "www.betlanationalparkguides.com",
    amenities: ["Licensed Guides", "Group Tours", "Private Tours", "Photography Assistance", "Historical Insights", "Local Stories", "Flexible Timings"],
    tourTypes: [
      { type: "Wildlife Safari", duration: "3 hours", price: 800 },
      { type: "Elephant Safari", duration: "4 hours", price: 1200 },
      { type: "Nature Walk", duration: "2 hours", price: 600 },
      { type: "Full Day Safari", duration: "8 hours", price: 2500 }
    ],
    operatingHours: "6:00 AM - 8:00 PM",
    establishedYear: 2017,
    staff: 25,
    languages: ["Hindi", "English", "Santhali", "Mundari", "Bengali"]
  },
  {
    id: 2,
    serviceType: "Trekking Guide",
    serviceName: "Parasnath Hill Trekking Guides",
    description: "Expert trekking guides for Parasnath Hill with safety equipment and local knowledge",
    location: "Parasnath Hill",
    address: "Parasnath Hill, Giridih - 815301",
    capacity: "15 guides",
    rating: 4.7,
    totalReviews: 324,
    isActive: true,
    monthlyRevenue: 68000,
    yearlyRevenue: 816000,
    bookingsThisMonth: 45,
    occupancyRate: 75,
    icon: <MapPin size={20} />,
    color: "bg-blue-500",
    contactNumber: "+91 6565-87654321",
    email: "info@parasnathtrekking.com",
    website: "www.parasnathtrekking.com",
    amenities: ["Safety Equipment", "First Aid Certified", "Mountain Expertise", "Photography Support", "Local History", "Flexible Routes"],
    tourTypes: [
      { type: "Half Day Trek", duration: "4 hours", price: 1200 },
      { type: "Full Day Trek", duration: "8 hours", price: 2000 },
      { type: "Sunrise Trek", duration: "6 hours", price: 1500 },
      { type: "Photography Trek", duration: "5 hours", price: 1800 }
    ],
    operatingHours: "5:00 AM - 7:00 PM",
    establishedYear: 2019,
    staff: 15,
    languages: ["Hindi", "English", "Bengali"]
  },
  {
    id: 3,
    serviceType: "Cultural Guide",
    serviceName: "Tribal Heritage Walks",
    description: "Cultural guides specializing in tribal heritage, traditions, and village tours",
    location: "Ranchi",
    address: "Tribal Cultural Center, Ranchi - 834001",
    capacity: "20 guides",
    rating: 4.8,
    totalReviews: 267,
    isActive: true,
    monthlyRevenue: 52000,
    yearlyRevenue: 624000,
    bookingsThisMonth: 38,
    occupancyRate: 82,
    icon: <Users size={20} />,
    color: "bg-purple-500",
    contactNumber: "+91 651-23456789",
    email: "heritage@tribalwalks.com",
    website: "www.tribalheritagewalks.com",
    amenities: ["Cultural Expertise", "Village Access", "Traditional Crafts", "Local Stories", "Authentic Experience", "Language Skills"],
    tourTypes: [
      { type: "Village Tour", duration: "3 hours", price: 600 },
      { type: "Craft Workshop", duration: "4 hours", price: 800 },
      { type: "Cultural Immersion", duration: "6 hours", price: 1200 },
      { type: "Multi-Village Tour", duration: "8 hours", price: 1500 }
    ],
    operatingHours: "8:00 AM - 6:00 PM",
    establishedYear: 2020,
    staff: 20,
    languages: ["Hindi", "English", "Santhali", "Mundari", "Ho"]
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

  const serviceTypes = ["all", "Wildlife Guide", "Trekking Guide", "Cultural Guide"];
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
          <p className="font-medium">{service.bookingsThisMonth} tours</p>
        </div>
        <div className="text-right">
          <span className="text-gray-500">Utilization:</span>
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
                <div><strong>Staff:</strong> {service.staff} guides</div>
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
                  <span className="text-gray-500">This Month Tours:</span>
                  <p className="font-semibold">{service.bookingsThisMonth}</p>
                </div>
                <div>
                  <span className="text-gray-500">Utilization Rate:</span>
                  <p className="font-semibold">{service.occupancyRate}%</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-3">Specialties & Features</h3>
              <div className="flex flex-wrap gap-2">
                {service.amenities.map((amenity, index) => (
                  <span key={index} className="px-2 py-1 bg-white rounded text-xs border">
                    {amenity}
                  </span>
                ))}
              </div>
            </div>
            
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
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-4">Guide Services Provided</h1>
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-1">
            <TrendingUp size={16} />
            <span>Active Guides: {activeServices.length}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>Total Tours: {totalBookings}</span>
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
              placeholder="Search guide services, locations, or descriptions..."
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
          <h3 className="text-lg font-medium text-gray-600 mb-2">No guide services found</h3>
          <p className="text-gray-500">Try adjusting your search or filter criteria</p>
        </div>
      )}

      {selectedService && (
        <ServiceDetails 
          service={selectedService} 
          onClose={() => setSelectedService(null)} 
        />
      )}
    </div>
  );
}