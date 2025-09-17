import { useState } from "react";
import { MapPin, Users, Calendar, User, CreditCard, Search, Filter, Star, Eye, Edit, ToggleLeft, ToggleRight, TrendingUp, Clock, Phone, Mail, Globe } from "lucide-react";

const providedServices = [
  {
    id: 1,
    serviceType: "Resort",
    serviceName: "Ranchi Hill Resort",
    description: "Luxury hill resort with premium amenities, spa services, and fine dining overlooking Ranchi hills",
    location: "Ranchi",
    address: "Hill Top, Kanke Road, Ranchi - 834008",
    capacity: "200 rooms",
    rating: 4.8,
    totalReviews: 1247,
    isActive: true,
    monthlyRevenue: 450000,
    yearlyRevenue: 5400000,
    bookingsThisMonth: 89,
    occupancyRate: 85,
    icon: <MapPin size={20} />,
    color: "bg-blue-500",
    contactNumber: "+91 651-23456789",
    email: "info@ranchihillresort.com",
    website: "www.ranchihillresort.com",
    amenities: ["Free WiFi", "Swimming Pool", "Spa & Wellness", "Restaurant", "Room Service", "Parking", "Gym", "Conference Hall"],
    roomTypes: [
      { type: "Standard Room", count: 80, price: 3500 },
      { type: "Deluxe Room", count: 70, price: 5000 },
      { type: "Suite", count: 30, price: 8000 },
      { type: "Presidential Suite", count: 20, price: 15000 }
    ],
    operatingHours: "24/7",
    establishedYear: 2018,
    staff: 45,
    languages: ["Hindi", "English", "Santhali", "Mundari"]
  },
  {
    id: 2,
    serviceType: "Lodge",
    serviceName: "Netarhat Sunrise Lodge",
    description: "Scenic hill station lodge with sunrise views and nature activities",
    location: "Netarhat",
    address: "Sunrise Point, Netarhat - 829709",
    capacity: "80 rooms",
    rating: 4.7,
    totalReviews: 892,
    isActive: true,
    monthlyRevenue: 280000,
    yearlyRevenue: 3360000,
    bookingsThisMonth: 72,
    occupancyRate: 78,
    icon: <Users size={20} />,
    color: "bg-green-500",
    contactNumber: "+91 6565-87654321",
    email: "info@netarhatsunrise.com",
    website: "www.netarhatsunriselodge.com",
    amenities: ["Hill Station Location", "Sunrise Views", "Nature Walks", "Bonfire", "Local Cuisine", "Trekking Arrangements", "Photography Tours"],
    roomTypes: [
      { type: "Standard Room", count: 40, price: 2500 },
      { type: "Deluxe Room", count: 25, price: 3500 },
      { type: "Family Room", count: 10, price: 5000 },
      { type: "Sunrise Suite", count: 5, price: 7000 }
    ],
    operatingHours: "24/7",
    establishedYear: 2020,
    staff: 28,
    languages: ["Hindi", "English", "Santhali", "Bengali"]
  },
  {
    id: 3,
    serviceType: "Forest Lodge",
    serviceName: "Betla Forest Lodge",
    description: "Wildlife lodge inside Betla National Park with safari arrangements",
    location: "Betla National Park",
    address: "Betla National Park, Latehar - 829202",
    capacity: "50 rooms",
    rating: 4.5,
    totalReviews: 634,
    isActive: true,
    monthlyRevenue: 320000,
    yearlyRevenue: 3840000,
    bookingsThisMonth: 65,
    occupancyRate: 72,
    icon: <Calendar size={20} />,
    color: "bg-orange-500",
    contactNumber: "+91 6565-23456789",
    email: "bookings@betlaforest.com",
    website: "www.betlaforestlodge.com",
    amenities: ["Wildlife Safari", "Nature Guides", "Jungle Walks", "Bird Watching", "Campfire", "Local Tribal Culture", "Photography Support"],
    roomTypes: [
      { type: "Forest Cottage", count: 20, price: 4000 },
      { type: "Tree House", count: 10, price: 6000 },
      { type: "Safari Suite", count: 15, price: 5500 },
      { type: "Family Cottage", count: 5, price: 8000 }
    ],
    operatingHours: "24/7",
    establishedYear: 2019,
    staff: 35,
    languages: ["Hindi", "English", "Santhali", "Bengali"]
  },
  {
    id: 4,
    serviceType: "Palace Inn",
    serviceName: "Jamshedpur Palace Inn",
    description: "Heritage-style accommodation with modern amenities in industrial city",
    location: "Jamshedpur",
    address: "Bistupur, Jamshedpur - 831001",
    capacity: "120 rooms",
    rating: 4.6,
    totalReviews: 456,
    isActive: true,
    monthlyRevenue: 380000,
    yearlyRevenue: 4560000,
    bookingsThisMonth: 95,
    occupancyRate: 68,
    icon: <User size={20} />,
    color: "bg-purple-500",
    contactNumber: "+91 657-23456789",
    email: "palace@jamshedpurinn.com",
    website: "www.jamshedpurpalaceinn.com",
    amenities: ["Heritage Architecture", "Business Center", "Conference Rooms", "City Tours", "Industrial Heritage Tours", "Shopping Assistance", "Airport Transfer"],
    roomTypes: [
      { type: "Classic Room", count: 60, price: 3000 },
      { type: "Executive Room", count: 40, price: 4500 },
      { type: "Palace Suite", count: 15, price: 7000 },
      { type: "Royal Suite", count: 5, price: 12000 }
    ],
    operatingHours: "24/7",
    establishedYear: 2017,
    staff: 42,
    languages: ["Hindi", "English", "Bengali", "Odia"]
  }
];

export default function Services() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [selectedService, setSelectedService] = useState(null);
  const [services, setServices] = useState(providedServices);

  const serviceTypes = ["all", "Resort", "Lodge", "Forest Lodge", "Palace Inn"];
  const statusTypes = ["all", "Active", "Inactive"];

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
            <button className="p-2 text-green-600 hover:bg-green-100 rounded">
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
              <h3 className="font-semibold mb-3">Property Information</h3>
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
              <h3 className="font-semibold mb-3">Business Metrics</h3>
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
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-4">Homestay Properties</h1>
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-1">
            <TrendingUp size={16} />
            <span>Active Properties: {activeServices.length}</span>
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
              placeholder="Search properties, locations, or descriptions..."
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
                    {type === "all" ? "All Properties" : type}
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
          <h3 className="text-lg font-medium text-gray-600 mb-2">No properties found</h3>
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