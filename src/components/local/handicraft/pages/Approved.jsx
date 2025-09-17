import { useState } from "react";
import { CheckCircle, Calendar, User, MapPin, Users, Star, CreditCard, Search, Filter, TrendingUp, Clock, Phone, Mail, Eye, Edit } from "lucide-react";

const approvedServices = [
  {
    id: 1,
    serviceType: "Bamboo Crafts",
    serviceName: "Traditional Bamboo Artisans",
    description: "Handcrafted bamboo products including baskets, furniture, and decorative items",
    location: "Ranchi",
    capacity: "50 items/month",
    approvedDate: "2024-01-10",
    status: "Active",
    applicantName: "Suresh Mahato",
    contactNumber: "+91 9876543210",
    email: "suresh@bamboocraft.com",
    monthlyRevenue: 28000,
    yearlyRevenue: 336000,
    ordersThisMonth: 45,
    rating: 4.6,
    totalReviews: 234,
    icon: <MapPin size={20} />,
    color: "bg-green-500",
    serviceImage: "/src/assets/handicrafts/bamboo-crafts/image.png",
    products: ["Bamboo Baskets", "Furniture", "Decorative Items", "Kitchen Utensils"],
    certifications: ["Eco-Friendly", "Handmade", "Export Quality"],
    experience: "12 years"
  },
  {
    id: 2,
    serviceType: "Tribal Paintings",
    serviceName: "Sohrai & Khovar Art Studio",
    description: "Traditional tribal paintings including Sohrai and Khovar art forms",
    location: "Hazaribagh",
    capacity: "30 paintings/month",
    approvedDate: "2024-01-05",
    status: "Active",
    applicantName: "Kavita Devi",
    contactNumber: "+91 9876543211",
    email: "kavita@sohraistudio.com",
    monthlyRevenue: 35000,
    yearlyRevenue: 420000,
    ordersThisMonth: 28,
    rating: 4.8,
    totalReviews: 156,
    icon: <Users size={20} />,
    color: "bg-purple-500",
    serviceImage: "/src/assets/handicrafts/tribal-paintings/image.png",
    products: ["Sohrai Paintings", "Khovar Art", "Wall Murals", "Canvas Art"],
    certifications: ["Authentic Art", "Cultural Heritage", "Natural Colors"],
    experience: "15 years"
  },
  {
    id: 3,
    serviceType: "Metal Crafts",
    serviceName: "Dhokra Metal Art Workshop",
    description: "Traditional Dhokra metal casting and brass work by skilled artisans",
    location: "Ranchi",
    capacity: "25 items/month",
    approvedDate: "2023-12-20",
    status: "Active",
    applicantName: "Ramesh Kumar",
    contactNumber: "+91 9876543212",
    email: "ramesh@dhokrametalart.com",
    monthlyRevenue: 42000,
    yearlyRevenue: 504000,
    ordersThisMonth: 32,
    rating: 4.7,
    totalReviews: 189,
    icon: <CreditCard size={20} />,
    color: "bg-yellow-500",
    serviceImage: "/src/assets/handicrafts/metal-crafts/image.png",
    products: ["Dhokra Figurines", "Brass Utensils", "Decorative Lamps", "Jewelry"],
    certifications: ["Traditional Technique", "Lost Wax Process", "Antique Finish"],
    experience: "18 years"
  }
];

export default function Approved() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [selectedService, setSelectedService] = useState(null);

  const serviceTypes = ["all", "Bamboo Crafts", "Tribal Paintings", "Metal Crafts"];

  const filteredServices = approvedServices.filter(service => {
    const matchesSearch = service.serviceName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.applicantName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === "all" || service.serviceType === filterType;
    return matchesSearch && matchesType;
  });

  const totalRevenue = approvedServices.reduce((sum, s) => sum + s.monthlyRevenue, 0);
  const totalOrders = approvedServices.reduce((sum, s) => sum + s.ordersThisMonth, 0);

  const ServiceCard = ({ service }) => (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer border"
         onClick={() => setSelectedService(service)}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <img 
            src={service.serviceImage} 
            alt={service.serviceName}
            className="w-16 h-16 rounded-lg object-cover"
          />
          <div>
            <h3 className="text-lg font-semibold">{service.serviceName}</h3>
            <p className="text-sm text-gray-600">{service.serviceType} • {service.location}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle size={20} className="text-green-500" />
          <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
            {service.status}
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
          <p className="font-medium">{service.ordersThisMonth} orders</p>
        </div>
        <div className="text-right">
          <span className="text-gray-500">Experience:</span>
          <p className="font-medium">{service.experience}</p>
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

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-4">Approved Handicraft Services</h1>
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-1">
            <CheckCircle size={16} />
            <span>Active Crafts: {approvedServices.length}</span>
          </div>
          <div className="flex items-center gap-1">
            <TrendingUp size={16} />
            <span>Total Orders: {totalOrders}</span>
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
              placeholder="Search handicrafts, locations, or artisans..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
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
            <CheckCircle size={48} className="mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-600 mb-2">No approved services found</h3>
          <p className="text-gray-500">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
}