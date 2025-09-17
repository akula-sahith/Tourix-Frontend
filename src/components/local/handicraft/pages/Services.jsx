import { useState } from "react";
import { MapPin, Users, Calendar, User, CreditCard, Search, Filter, Star, Eye, Edit, ToggleLeft, ToggleRight, TrendingUp, Clock, Phone, Mail, Globe } from "lucide-react";

const providedServices = [
  {
    id: 1,
    serviceType: "Bamboo Crafts",
    serviceName: "Traditional Bamboo Artisans",
    description: "Handcrafted bamboo products including baskets, furniture, and decorative items",
    location: "Ranchi",
    address: "Bamboo Craft Center, Ranchi - 834001",
    capacity: "50 items/month",
    rating: 4.6,
    totalReviews: 234,
    isActive: true,
    monthlyRevenue: 28000,
    yearlyRevenue: 336000,
    bookingsThisMonth: 18,
    occupancyRate: 75,
    icon: <Users size={20} />,
    color: "bg-green-500",
    contactNumber: "+91 651-23456789",
    email: "info@bamboocraft.com",
    website: "www.bamboocrafts.com",
    amenities: ["Eco-Friendly", "Handmade", "Custom Designs", "Bulk Orders", "Export Quality", "Traditional Techniques"],
    craftTypes: [
      { type: "Bamboo Baskets", price: 450, description: "Traditional storage baskets" },
      { type: "Bamboo Furniture", price: 2500, description: "Chairs, tables, and stools" },
      { type: "Decorative Items", price: 800, description: "Wall hangings and showpieces" },
      { type: "Kitchen Utensils", price: 300, description: "Eco-friendly kitchen tools" }
    ],
    operatingHours: "9:00 AM - 6:00 PM",
    establishedYear: 2018,
    staff: 12,
    languages: ["Hindi", "English", "Santhali"]
  },
  {
    id: 2,
    serviceType: "Tribal Paintings",
    serviceName: "Sohrai & Khovar Art Studio",
    description: "Traditional tribal paintings including Sohrai and Khovar art forms",
    location: "Hazaribagh",
    address: "Tribal Art Center, Hazaribagh - 825301",
    capacity: "30 paintings/month",
    rating: 4.8,
    totalReviews: 156,
    isActive: true,
    monthlyRevenue: 35000,
    yearlyRevenue: 420000,
    bookingsThisMonth: 12,
    occupancyRate: 80,
    icon: <Calendar size={20} />,
    color: "bg-purple-500",
    contactNumber: "+91 6546-87654321",
    email: "art@sohraistudio.com",
    website: "www.sohraistudio.com",
    amenities: ["Authentic Art", "Natural Colors", "Custom Paintings", "Art Workshops", "Cultural Stories", "Certificate of Authenticity"],
    craftTypes: [
      { type: "Sohrai Paintings", price: 1200, description: "Traditional harvest festival art" },
      { type: "Khovar Paintings", price: 1500, description: "Marriage ceremony art" },
      { type: "Wall Murals", price: 3000, description: "Large scale tribal art" },
      { type: "Canvas Paintings", price: 800, description: "Portable tribal art pieces" }
    ],
    operatingHours: "10:00 AM - 7:00 PM",
    establishedYear: 2019,
    staff: 8,
    languages: ["Hindi", "English", "Santhali", "Mundari"]
  },
  {
    id: 3,
    serviceType: "Metal Crafts",
    serviceName: "Dhokra Metal Art Workshop",
    description: "Traditional Dhokra metal casting and brass work by skilled artisans",
    location: "Ranchi",
    address: "Metal Craft Lane, Ranchi - 834002",
    capacity: "25 items/month",
    rating: 4.7,
    totalReviews: 189,
    isActive: true,
    monthlyRevenue: 42000,
    yearlyRevenue: 504000,
    bookingsThisMonth: 15,
    occupancyRate: 85,
    icon: <CreditCard size={20} />,
    color: "bg-yellow-500",
    contactNumber: "+91 651-98765432",
    email: "dhokra@metalcraft.com",
    website: "www.dhokrametalart.com",
    amenities: ["Traditional Technique", "Lost Wax Process", "Antique Finish", "Custom Orders", "Repair Services", "Bulk Supply"],
    craftTypes: [
      { type: "Dhokra Figurines", price: 800, description: "Traditional tribal figurines" },
      { type: "Brass Utensils", price: 1200, description: "Functional brass items" },
      { type: "Decorative Lamps", price: 1500, description: "Ornate metal lamps" },
      { type: "Jewelry Items", price: 600, description: "Traditional metal jewelry" }
    ],
    operatingHours: "8:00 AM - 6:00 PM",
    establishedYear: 2017,
    staff: 15,
    languages: ["Hindi", "English", "Bengali"]
  },
  {
    id: 4,
    serviceType: "Textiles",
    serviceName: "Tussar Silk Weavers",
    description: "Traditional Tussar silk weaving and textile production",
    location: "Dumka",
    address: "Silk Weaving Center, Dumka - 814101",
    capacity: "40 pieces/month",
    rating: 4.5,
    totalReviews: 267,
    isActive: true,
    monthlyRevenue: 38000,
    yearlyRevenue: 456000,
    bookingsThisMonth: 22,
    occupancyRate: 70,
    icon: <MapPin size={20} />,
    color: "bg-pink-500",
    contactNumber: "+91 6434-23456789",
    email: "silk@tussarweavers.com",
    website: "www.tussarsilk.com",
    amenities: ["Pure Silk", "Natural Dyes", "Handloom Weaving", "Custom Designs", "Bulk Orders", "Export Quality"],
    craftTypes: [
      { type: "Tussar Sarees", price: 2500, description: "Traditional silk sarees" },
      { type: "Silk Scarves", price: 800, description: "Lightweight silk accessories" },
      { type: "Fabric by Meter", price: 400, description: "Raw silk fabric" },
      { type: "Dress Materials", price: 1200, description: "Suit pieces and fabrics" }
    ],
    operatingHours: "7:00 AM - 5:00 PM",
    establishedYear: 2016,
    staff: 20,
    languages: ["Hindi", "English", "Santhali"]
  },
  {
    id: 5,
    serviceType: "Pottery",
    serviceName: "Traditional Clay Pottery",
    description: "Handmade pottery and terracotta items using traditional techniques",
    location: "Ranchi",
    address: "Potter's Village, Ranchi - 834003",
    capacity: "60 items/month",
    rating: 4.4,
    totalReviews: 145,
    isActive: true,
    monthlyRevenue: 22000,
    yearlyRevenue: 264000,
    bookingsThisMonth: 28,
    occupancyRate: 65,
    icon: <User size={20} />,
    color: "bg-orange-500",
    contactNumber: "+91 651-87654321",
    email: "clay@traditionalpottery.com",
    website: "www.claypottery.com",
    amenities: ["Natural Clay", "Eco-Friendly", "Handmade", "Custom Shapes", "Bulk Orders", "Workshops Available"],
    craftTypes: [
      { type: "Water Pots", price: 200, description: "Traditional water storage" },
      { type: "Decorative Vases", price: 350, description: "Artistic pottery pieces" },
      { type: "Kitchen Items", price: 150, description: "Clay cooking utensils" },
      { type: "Garden Planters", price: 400, description: "Terracotta plant pots" }
    ],
    operatingHours: "8:00 AM - 6:00 PM",
    establishedYear: 2020,
    staff: 10,
    languages: ["Hindi", "English"]
  },
  {
    id: 6,
    serviceType: "Wood Carvings",
    serviceName: "Tribal Wood Carving Studio",
    description: "Intricate wood carvings and sculptures by master craftsmen",
    location: "Gumla",
    address: "Wood Craft Center, Gumla - 835207",
    capacity: "20 pieces/month",
    rating: 4.9,
    totalReviews: 98,
    isActive: false,
    monthlyRevenue: 0,
    yearlyRevenue: 0,
    bookingsThisMonth: 0,
    occupancyRate: 0,
    icon: <Users size={20} />,
    color: "bg-brown-500",
    contactNumber: "+91 6524-76543210",
    email: "wood@tribalcarving.com",
    website: "www.tribalwoodcarving.com",
    amenities: ["Master Craftsmen", "Traditional Tools", "Custom Designs", "Repair Services", "Art Classes", "Cultural Motifs"],
    craftTypes: [
      { type: "Tribal Masks", price: 1500, description: "Traditional ceremonial masks" },
      { type: "Animal Sculptures", price: 2000, description: "Wildlife wood sculptures" },
      { type: "Decorative Panels", price: 3000, description: "Carved wall panels" },
      { type: "Furniture Items", price: 5000, description: "Carved wooden furniture" }
    ],
    operatingHours: "Currently Closed for Renovation",
    establishedYear: 2015,
    staff: 8,
    languages: ["Hindi", "English", "Mundari"]
  }
];

export default function Services() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [selectedService, setSelectedService] = useState(null);
  const [services, setServices] = useState(providedServices);

  const serviceTypes = ["all", "Bamboo Crafts", "Tribal Paintings", "Metal Crafts", "Textiles", "Pottery", "Wood Carvings"];
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
          <p className="font-medium">{service.bookingsThisMonth} orders</p>
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
              <h3 className="font-semibold mb-3">Craft Information</h3>
              <div className="space-y-2 text-sm">
                <div><strong>Description:</strong> {service.description}</div>
                <div><strong>Address:</strong> {service.address}</div>
                <div><strong>Production Capacity:</strong> {service.capacity}</div>
                <div><strong>Operating Hours:</strong> {service.operatingHours}</div>
                <div><strong>Established:</strong> {service.establishedYear}</div>
                <div><strong>Artisans:</strong> {service.staff} craftspeople</div>
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
                  <span className="text-gray-500">This Month Orders:</span>
                  <p className="font-semibold">{service.bookingsThisMonth}</p>
                </div>
                <div>
                  <span className="text-gray-500">Capacity Utilization:</span>
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
              <h3 className="font-semibold mb-3">Product Catalog</h3>
              <div className="space-y-2">
                {service.craftTypes.map((craft, index) => (
                  <div key={index} className="p-2 bg-white rounded text-sm">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{craft.type}</span>
                      <span className="font-semibold text-green-600">₹{craft.price}</span>
                    </div>
                    <span className="text-gray-500">{craft.description}</span>
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
        <h1 className="text-2xl font-bold mb-4">Handicraft Services</h1>
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-1">
            <TrendingUp size={16} />
            <span>Active Crafts: {activeServices.length}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>Total Orders: {totalBookings}</span>
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
              placeholder="Search handicrafts, locations, or descriptions..."
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
                    {type === "all" ? "All Crafts" : type}
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
          <h3 className="text-lg font-medium text-gray-600 mb-2">No handicrafts found</h3>
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