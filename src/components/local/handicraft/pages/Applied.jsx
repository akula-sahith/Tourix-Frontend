import { useState } from "react";
import { Clock, Calendar, User, MapPin, Users, Briefcase, CreditCard, Search, Filter, FileText, Image, AlertTriangle, Eye, Download, CheckCircle } from "lucide-react";

const appliedServices = [
  {
    id: 1,
    serviceType: "Bamboo Crafts",
    serviceName: "Traditional Bamboo Artisans",
    description: "Handcrafted bamboo products including baskets, furniture, and decorative items",
    location: "Ranchi",
    capacity: "50 items/month",
    appliedDate: "2024-01-28",
    expectedApproval: "2024-02-12",
    status: "Under Review",
    applicantName: "Suresh Mahato",
    contactNumber: "+91 9876543210",
    email: "suresh@bamboocraft.com",
    estimatedRevenue: 28000,
    rating: 0,
    icon: <MapPin size={20} />,
    color: "bg-green-500",
    serviceImage: "/src/assets/handicrafts/bamboo-crafts/image.png",
    proofDocuments: [
      { type: "Craft License", name: "Bamboo_Craft_License.pdf", size: "2.3 MB", uploaded: "2024-01-28" },
      { type: "Product Samples", name: "Bamboo_Samples.zip", size: "15.7 MB", uploaded: "2024-01-28" },
      { type: "Workshop Photos", name: "Workshop_Photos.zip", size: "8.2 MB", uploaded: "2024-01-28" }
    ],
    requirements: ["Craft License", "Product Samples", "Workshop Photos", "Quality Certificate", "Tax Registration"]
  },
  {
    id: 2,
    serviceType: "Tribal Paintings",
    serviceName: "Sohrai & Khovar Art Studio",
    description: "Traditional tribal paintings including Sohrai and Khovar art forms",
    location: "Hazaribagh",
    capacity: "30 paintings/month",
    appliedDate: "2023-12-10",
    expectedApproval: "2023-12-25",
    status: "Delayed - Missing Authenticity Certificate",
    applicantName: "Kavita Devi",
    contactNumber: "+91 9876543211",
    email: "kavita@sohraistudio.com",
    estimatedRevenue: 35000,
    rating: 0,
    icon: <Users size={20} />,
    color: "bg-purple-500",
    serviceImage: "/src/assets/handicrafts/tribal-paintings/image.png",
    delayReason: "Tribal Art Authenticity Certificate is missing from the submitted documents. Cultural Heritage Department certification is required.",
    adminContact: "Cultural Officer - Meera Sharma (+91 9876543300)",
    proofDocuments: [
      { type: "Art Samples", name: "Sohrai_Paintings.zip", size: "12.4 MB", uploaded: "2023-12-10" },
      { type: "Artist Certificate", name: "Artist_Cert.pdf", size: "1.8 MB", uploaded: "2023-12-10" },
      { type: "Workshop Details", name: "Workshop_Info.pdf", size: "2.1 MB", uploaded: "2023-12-10" }
    ],
    requirements: ["Art Samples", "Authenticity Certificate", "Artist Certificate", "Workshop Details", "Cultural Endorsement"]
  },
  {
    id: 3,
    serviceType: "Metal Crafts",
    serviceName: "Dhokra Metal Art Workshop",
    description: "Traditional Dhokra metal casting and brass work by skilled artisans",
    location: "Ranchi",
    capacity: "25 items/month",
    appliedDate: "2024-01-18",
    expectedApproval: "2024-02-02",
    status: "Document Verification",
    applicantName: "Ramesh Kumar",
    contactNumber: "+91 9876543212",
    email: "ramesh@dhokrametalart.com",
    estimatedRevenue: 42000,
    rating: 0,
    icon: <CreditCard size={20} />,
    color: "bg-yellow-500",
    serviceImage: "/src/assets/handicrafts/metal-crafts/image.png",
    proofDocuments: [
      { type: "Metal Work License", name: "Metal_License.pdf", size: "1.9 MB", uploaded: "2024-01-18" },
      { type: "Dhokra Samples", name: "Dhokra_Items.zip", size: "18.3 MB", uploaded: "2024-01-18" },
      { type: "Furnace Certificate", name: "Furnace_Safety.pdf", size: "1.2 MB", uploaded: "2024-01-18" }
    ],
    requirements: ["Metal Work License", "Product Samples", "Furnace Certificate", "Safety Compliance", "Artisan Skills"]
  }
];

export default function Applied() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [selectedService, setSelectedService] = useState(null);

  const serviceTypes = ["all", "Bamboo Crafts", "Tribal Paintings", "Metal Crafts"];
  const statusTypes = ["all", "Under Review", "Document Verification", "Delayed - Missing Authenticity Certificate"];

  const getDaysElapsed = (appliedDate) => {
    const today = new Date();
    const applied = new Date(appliedDate);
    return Math.floor((today - applied) / (1000 * 60 * 60 * 24));
  };

  const getDelayStatus = (appliedDate, expectedApproval, status) => {
    const daysElapsed = getDaysElapsed(appliedDate);
    
    if (daysElapsed <= 5) {
      return { level: "recent", color: "bg-white border-gray-200", textColor: "text-green-600", days: daysElapsed };
    }
    
    if (status.includes("Delayed")) {
      return { level: "critical", color: "bg-white border-red-300", textColor: "text-red-600", days: daysElapsed };
    }
    
    return { level: "normal", color: "bg-white border-gray-200", textColor: "text-gray-600", days: daysElapsed };
  };

  const filteredServices = appliedServices.filter(service => {
    const matchesSearch = service.serviceName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.applicantName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === "all" || service.serviceType === filterType;
    const matchesStatus = filterStatus === "all" || service.status === filterStatus;
    return matchesSearch && matchesType && matchesStatus;
  });

  const ServiceCard = ({ service }) => {
    const delayStatus = getDelayStatus(service.appliedDate, service.expectedApproval, service.status);
    
    return (
      <div className={`rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer border ${delayStatus.color}`}
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
          <div className="flex flex-col items-end gap-1">
            <div className="flex items-center gap-1">
              <Clock size={16} className={
                delayStatus.level === "recent" ? "text-green-500" :
                delayStatus.level === "critical" ? "text-red-500" : "text-gray-500"
              } />
              <span className={`text-sm font-medium ${delayStatus.textColor}`}>
                {delayStatus.days} days
              </span>
            </div>
            {delayStatus.level === "recent" && (
              <div className="flex items-center gap-1">
                <CheckCircle size={14} className="text-green-500" />
                <span className="text-xs text-green-600">New</span>
              </div>
            )}
            {delayStatus.level === "critical" && (
              <div className="flex items-center gap-1">
                <AlertTriangle size={14} className="text-red-500" />
                <span className="text-xs text-red-600">Delayed</span>
              </div>
            )}
          </div>
        </div>
        
        <p className="text-gray-700 text-sm mb-4">{service.description}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-sm">
            <span className="text-gray-500">Applicant:</span>
            <p className="font-medium">{service.applicantName}</p>
          </div>
          <div className="text-sm">
            <span className="text-gray-500">Capacity:</span>
            <p className="font-medium">{service.capacity}</p>
          </div>
        </div>
        
        <div className="border-t pt-4">
          <div className="flex justify-between items-center">
            <div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                service.status === "Under Review" ? "bg-blue-100 text-blue-800" :
                service.status === "Document Verification" ? "bg-purple-100 text-purple-800" :
                service.status.includes("Delayed") ? "bg-red-100 text-red-800" :
                "bg-yellow-100 text-yellow-800"
              }`}>
                {service.status}
              </span>
            </div>
            <div className="text-right">
              <span className="text-gray-500 text-sm">Est. Revenue:</span>
              <p className="font-semibold text-green-600">₹{service.estimatedRevenue.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-4">Handicraft Services Applied</h1>
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>Total Applications: {appliedServices.length}</span>
          </div>
          <div className="flex items-center gap-1">
            <AlertTriangle size={16} />
            <span>Delayed: {appliedServices.filter(s => getDelayStatus(s.appliedDate, s.expectedApproval, s.status).level === "critical").length}</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle size={16} />
            <span>Recent: {appliedServices.filter(s => getDelayStatus(s.appliedDate, s.expectedApproval, s.status).level === "recent").length}</span>
          </div>
          <div className="flex items-center gap-1">
            <CreditCard size={16} />
            <span>Est. Total Revenue: ₹{appliedServices.reduce((sum, s) => sum + s.estimatedRevenue, 0).toLocaleString()}</span>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search handicraft services, locations, or applicants..."
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
              <Clock size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
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
            <Clock size={48} className="mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-600 mb-2">No applications found</h3>
          <p className="text-gray-500">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
}