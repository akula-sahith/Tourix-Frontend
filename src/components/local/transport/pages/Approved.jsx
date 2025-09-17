import { useState } from "react";
import { CheckCircle, Calendar, User, Clock, MapPin, Users, Briefcase, CreditCard, Search, Filter } from "lucide-react";

const approvedServices = [
  {
    id: 1,
    serviceType: "Jeep",
    serviceName: "Betla Safari Jeeps",
    description: "4WD jeep services for wildlife safaris and adventure tours in Betla National Park",
    location: "Betla National Park",
    capacity: "15 jeeps",
    appliedDate: "2024-01-10",
    approvedDate: "2024-01-12",
    approvedBy: "Rajesh Kumar",
    approverRole: "Transport Commissioner",
    status: "Active",
    rating: 4.8,
    monthlyRevenue: 180000,
    icon: <MapPin size={20} />,
    color: "bg-blue-500",
    serviceImage: "/src/assets/transportation/Jeep/image.png"
  },
  {
    id: 2,
    serviceType: "Cab",
    serviceName: "Ranchi City Cabs",
    description: "Reliable cab services for city travel, airport transfers, and outstation trips",
    location: "Ranchi",
    capacity: "50 cabs",
    appliedDate: "2024-01-08",
    approvedDate: "2024-01-11",
    approvedBy: "Priya Sharma",
    approverRole: "Transport Inspector",
    status: "Active",
    rating: 4.6,
    monthlyRevenue: 250000,
    icon: <CreditCard size={20} />,
    color: "bg-green-500",
    serviceImage: "/src/assets/transportation/cab/image.png"
  },
  {
    id: 3,
    serviceType: "Auto",
    serviceName: "Local Auto Service",
    description: "Three-wheeler auto rickshaw service for short distance city travel",
    location: "Ranchi",
    capacity: "25 autos",
    appliedDate: "2024-01-05",
    approvedDate: "2024-01-09",
    approvedBy: "Amit Singh",
    approverRole: "Auto Rickshaw Commissioner",
    status: "Active",
    rating: 4.2,
    monthlyRevenue: 80000,
    icon: <Users size={20} />,
    color: "bg-yellow-500",
    serviceImage: "/src/assets/transportation/auto/image.png"
  },
  {
    id: 4,
    serviceType: "Rickshaw",
    serviceName: "Traditional Rickshaw Service",
    description: "Eco-friendly cycle rickshaw service for short distances and tourist areas",
    location: "Ranchi",
    capacity: "20 rickshaws",
    appliedDate: "2024-01-07",
    approvedDate: "2024-01-10",
    approvedBy: "Sunita Devi",
    approverRole: "Local Transport Officer",
    status: "Active",
    rating: 4.0,
    monthlyRevenue: 45000,
    icon: <User size={20} />,
    color: "bg-red-500",
    serviceImage: "/src/assets/transportation/rickshaw/image.png"
  },
  {
    id: 5,
    serviceType: "Cycle",
    serviceName: "Eco-Friendly Cycle Rentals",
    description: "Bicycle rental service for eco-tourism and city exploration",
    location: "Ranchi",
    capacity: "30 cycles",
    appliedDate: "2024-01-12",
    approvedDate: "2024-01-15",
    approvedBy: "Vikash Gupta",
    approverRole: "Tourism Director",
    status: "Active",
    rating: 4.4,
    monthlyRevenue: 22000,
    icon: <Calendar size={20} />,
    color: "bg-purple-500",
    serviceImage: "/src/assets/transportation/cycle/image.png"
  },
  {
    id: 6,
    serviceType: "Minibus",
    serviceName: "Group Travel Minibus",
    description: "Minibus service for group travel, school trips, and tourist groups",
    location: "Ranchi",
    capacity: "12 minibuses",
    appliedDate: "2024-01-06",
    approvedDate: "2024-01-08",
    approvedBy: "Meera Nair",
    approverRole: "Transport Board Secretary",
    status: "Active",
    rating: 4.5,
    monthlyRevenue: 120000,
    icon: <Users size={20} />,
    color: "bg-indigo-500",
    serviceImage: "/src/assets/transportation/minibus/image.png"
  },
  {
    id: 7,
    serviceType: "Motor",
    serviceName: "Quick Delivery Motors",
    description: "Two-wheeler motorcycle service for quick delivery and personal transport",
    location: "Ranchi",
    capacity: "20 motorcycles",
    appliedDate: "2024-01-09",
    approvedDate: "2024-01-13",
    approvedBy: "Carlos D'Souza",
    approverRole: "Motor Vehicle Inspector",
    status: "Active",
    rating: 4.1,
    monthlyRevenue: 35000,
    icon: <MapPin size={20} />,
    color: "bg-gray-500",
    serviceImage: "/src/assets/transportation/motor/image.png"
  }
];

export default function Approved() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [selectedService, setSelectedService] = useState(null);

  const serviceTypes = ["all", "Jeep", "Cab", "Auto", "Rickshaw", "Cycle", "Minibus", "Motor"];

  const filteredServices = approvedServices.filter(service => {
    const matchesSearch = service.serviceName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.approvedBy.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === "all" || service.serviceType === filterType;
    return matchesSearch && matchesFilter;
  });

  const ServiceCard = ({ service }) => (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
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
        <div className="flex items-center gap-1 text-green-600">
          <CheckCircle size={16} />
          <span className="text-sm font-medium">Approved</span>
        </div>
      </div>
      
      <p className="text-gray-700 text-sm mb-4">{service.description}</p>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="text-sm">
          <span className="text-gray-500">Capacity:</span>
          <p className="font-medium">{service.capacity}</p>
        </div>
        <div className="text-sm">
          <span className="text-gray-500">Rating:</span>
          <p className="font-medium">{service.rating}/5.0 ⭐</p>
        </div>
      </div>
      
      <div className="border-t pt-4">
        <div className="flex justify-between items-center text-sm">
          <div>
            <span className="text-gray-500">Approved by:</span>
            <p className="font-medium">{service.approvedBy}</p>
            <p className="text-xs text-gray-500">{service.approverRole}</p>
          </div>
          <div className="text-right">
            <span className="text-gray-500">Monthly Revenue:</span>
            <p className="font-semibold text-green-600">₹{service.monthlyRevenue.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );

  const ServiceDetails = ({ service, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <div className={`${service.color} text-white p-3 rounded-lg`}>
              {service.icon}
            </div>
            <div>
              <h2 className="text-2xl font-bold">{service.serviceName}</h2>
              <p className="text-gray-600">{service.serviceType} • {service.location}</p>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-xl">×</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-3">Service Information</h3>
              <div className="space-y-2 text-sm">
                <div><strong>Description:</strong> {service.description}</div>
                <div><strong>Location:</strong> {service.location}</div>
                <div><strong>Capacity:</strong> {service.capacity}</div>
                <div><strong>Rating:</strong> {service.rating}/5.0 ⭐</div>
                <div><strong>Status:</strong> 
                  <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                    {service.status}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-3">Financial Information</h3>
              <div className="space-y-2 text-sm">
                <div><strong>Monthly Revenue:</strong> 
                  <span className="text-green-600 font-semibold ml-2">
                    ₹{service.monthlyRevenue.toLocaleString()}
                  </span>
                </div>
                <div><strong>Annual Projection:</strong> 
                  <span className="text-blue-600 font-semibold ml-2">
                    ₹{(service.monthlyRevenue * 12).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-3">Approval Details</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-gray-500" />
                  <div>
                    <strong>Applied Date:</strong>
                    <span className="ml-2">{service.appliedDate}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <div>
                    <strong>Approved Date:</strong>
                    <span className="ml-2">{service.approvedDate}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <User size={16} className="text-gray-500" />
                  <div>
                    <strong>Approved By:</strong>
                    <span className="ml-2">{service.approvedBy}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase size={16} className="text-gray-500" />
                  <div>
                    <strong>Approver Role:</strong>
                    <span className="ml-2">{service.approverRole}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-gray-500" />
                  <div>
                    <strong>Processing Time:</strong>
                    <span className="ml-2">
                      {Math.ceil((new Date(service.approvedDate) - new Date(service.appliedDate)) / (1000 * 60 * 60 * 24))} days
                    </span>
                  </div>
                </div>
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
        <h1 className="text-2xl font-bold mb-4">Services Approved</h1>
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-1">
            <CheckCircle size={16} />
            <span>Total Approved: {approvedServices.length}</span>
          </div>
          <div className="flex items-center gap-1">
            <CreditCard size={16} />
            <span>Total Monthly Revenue: ₹{approvedServices.reduce((sum, s) => sum + s.monthlyRevenue, 0).toLocaleString()}</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search services, locations, or approvers..."
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
                  {type === "all" ? "All Services" : type}
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
    </div>
  );
}