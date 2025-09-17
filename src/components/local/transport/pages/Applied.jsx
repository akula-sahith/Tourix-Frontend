import { useState } from "react";
import { Clock, Calendar, User, MapPin, Users, Briefcase, CreditCard, Search, Filter, FileText, Image, AlertTriangle, Eye, Download, CheckCircle } from "lucide-react";

const appliedServices = [
  {
    id: 1,
    serviceType: "Jeep",
    serviceName: "Netarhat Adventure Jeeps",
    description: "4WD jeep service for hill station tours and adventure activities",
    location: "Netarhat",
    capacity: "8 jeeps",
    appliedDate: "2024-01-28",
    expectedApproval: "2024-02-12",
    status: "Under Review",
    applicantName: "Rohit Mehta",
    contactNumber: "+91 9876543210",
    email: "rohit@netarhatjeeps.com",
    estimatedRevenue: 85000,
    rating: 0,
    icon: <MapPin size={20} />,
    color: "bg-blue-500",
    serviceImage: "/src/assets/transportation/Jeep/image.png",
    proofDocuments: [
      { type: "Vehicle Registration", name: "Jeep_RC.pdf", size: "2.3 MB", uploaded: "2024-01-28" },
      { type: "Driver Licenses", name: "Driver_Licenses.zip", size: "5.7 MB", uploaded: "2024-01-28" },
      { type: "Insurance Papers", name: "Insurance_Docs.pdf", size: "1.8 MB", uploaded: "2024-01-28" },
      { type: "Permit Documents", name: "Transport_Permit.pdf", size: "0.9 MB", uploaded: "2024-01-28" }
    ],
    requirements: ["Vehicle Registration", "Driver Licenses", "Insurance Papers", "Transport Permit", "Pollution Certificates"]
  },
  {
    id: 2,
    serviceType: "Cab",
    serviceName: "Airport Express Cabs",
    description: "Premium cab service for airport transfers and city travel",
    location: "Ranchi",
    capacity: "15 cabs",
    appliedDate: "2023-12-10",
    expectedApproval: "2023-12-25",
    status: "Delayed - Missing Insurance",
    applicantName: "Tenzin Norbu",
    contactNumber: "+91 9876543211",
    email: "tenzin@airportcabs.com",
    estimatedRevenue: 120000,
    rating: 0,
    icon: <CreditCard size={20} />,
    color: "bg-green-500",
    serviceImage: "/src/assets/transportation/cab/image.png",
    delayReason: "Comprehensive insurance certificate is missing from the submitted documents. Insurance verification is required before approval can proceed.",
    adminContact: "Transport Insurance Officer - Rajesh Kumar (+91 9876543300)",
    proofDocuments: [
      { type: "Vehicle Registration", name: "Cab_RC.pdf", size: "1.2 MB", uploaded: "2023-12-10" },
      { type: "Driver Licenses", name: "Driver_Licenses.zip", size: "3.4 MB", uploaded: "2023-12-10" },
      { type: "Vehicle Photos", name: "Cab_Images.zip", size: "8.9 MB", uploaded: "2023-12-10" }
    ],
    requirements: ["Vehicle Registration", "Driver Licenses", "Insurance Papers", "Vehicle Photos", "Pollution Certificates"]
  },
  {
    id: 3,
    serviceType: "Auto",
    serviceName: "City Auto Service",
    description: "Three-wheeler auto rickshaw service for local city transportation",
    location: "Ranchi",
    capacity: "20 autos",
    appliedDate: "2024-01-18",
    expectedApproval: "2024-02-02",
    status: "Document Verification",
    applicantName: "Suresh Kumar",
    contactNumber: "+91 9876543212",
    email: "suresh@cityauto.com",
    estimatedRevenue: 65000,
    rating: 0,
    icon: <Users size={20} />,
    color: "bg-yellow-500",
    serviceImage: "/src/assets/transportation/auto/image.png",
    proofDocuments: [
      { type: "Vehicle Registration", name: "Auto_RC.zip", size: "12.3 MB", uploaded: "2024-01-18" },
      { type: "Driver Licenses", name: "Driver_Licenses.zip", size: "5.7 MB", uploaded: "2024-01-18" },
      { type: "Insurance Papers", name: "Insurance_Docs.pdf", size: "4.2 MB", uploaded: "2024-01-18" },
      { type: "Permit Documents", name: "Auto_Permit.pdf", size: "2.1 MB", uploaded: "2024-01-18" }
    ],
    requirements: ["Vehicle Registration", "Driver Licenses", "Insurance Papers", "Auto Permit", "Pollution Certificates"]
  },
  {
    id: 4,
    serviceType: "Rickshaw",
    serviceName: "Heritage Rickshaw Tours",
    description: "Traditional cycle rickshaw service for tourist areas and heritage sites",
    location: "Ranchi",
    capacity: "12 rickshaws",
    appliedDate: "2024-01-30",
    expectedApproval: "2024-02-14",
    status: "Recently Applied",
    applicantName: "Kavita Sharma",
    contactNumber: "+91 9876543213",
    email: "kavita@heritagerickshaw.com",
    estimatedRevenue: 35000,
    rating: 0,
    icon: <User size={20} />,
    color: "bg-red-500",
    serviceImage: "/src/assets/transportation/rickshaw/image.png",
    proofDocuments: [
      { type: "Vehicle Registration", name: "Rickshaw_RC.zip", size: "6.8 MB", uploaded: "2024-01-30" },
      { type: "Driver Licenses", name: "Driver_Licenses.pdf", size: "2.9 MB", uploaded: "2024-01-30" },
      { type: "ID Proofs", name: "ID_Documents.zip", size: "3.4 MB", uploaded: "2024-01-30" }
    ],
    requirements: ["Vehicle Registration", "Driver Licenses", "ID Proofs", "Background Verification", "Health Certificate"]
  },
  {
    id: 5,
    serviceType: "Minibus",
    serviceName: "Tourist Group Minibus",
    description: "Minibus service for group travel and tourist transportation",
    location: "Ranchi",
    capacity: "6 minibuses",
    appliedDate: "2023-11-15",
    expectedApproval: "2023-11-30",
    status: "Delayed - Insurance Verification",
    applicantName: "Maharaj Singh",
    contactNumber: "+91 9876543214",
    email: "maharaj@touristminibus.com",
    estimatedRevenue: 95000,
    rating: 0,
    icon: <Calendar size={20} />,
    color: "bg-indigo-500",
    serviceImage: "/src/assets/transportation/minibus/image.png",
    delayReason: "Insurance coverage verification is pending with the Insurance Regulatory Authority. The submitted insurance policy needs validation for passenger safety coverage as per new regulations implemented in December 2023.",
    adminContact: "Transport Insurance Officer - Meera Agarwal (+91 9876543301)",
    proofDocuments: [
      { type: "Vehicle Registration", name: "Minibus_RC.pdf", size: "4.5 MB", uploaded: "2023-11-15" },
      { type: "Driver Licenses", name: "Driver_Licenses.zip", size: "8.2 MB", uploaded: "2023-11-15" },
      { type: "Route Permits", name: "Route_Permits.pdf", size: "3.7 MB", uploaded: "2023-11-15" },
      { type: "Insurance Policy", name: "Insurance_Policy.pdf", size: "2.1 MB", uploaded: "2023-11-15" }
    ],
    requirements: ["Vehicle Registration", "Driver Licenses", "Route Permits", "Insurance Coverage", "Safety Certificates"]
  },
  {
    id: 6,
    serviceType: "Motor",
    serviceName: "Quick Delivery Motors",
    description: "Two-wheeler motorcycle service for quick delivery and personal transport",
    location: "Ranchi",
    capacity: "25 motorcycles",
    appliedDate: "2024-01-22",
    expectedApproval: "2024-02-06",
    status: "Under Review",
    applicantName: "Priya Nair",
    contactNumber: "+91 9876543215",
    email: "priya@quickmotors.com",
    estimatedRevenue: 45000,
    rating: 0,
    icon: <MapPin size={20} />,
    color: "bg-gray-500",
    serviceImage: "/src/assets/transportation/motor/image.png",
    proofDocuments: [
      { type: "Vehicle Registration", name: "Motor_RC.pdf", size: "1.1 MB", uploaded: "2024-01-22" },
      { type: "Driver Licenses", name: "Driver_Licenses.zip", size: "11.3 MB", uploaded: "2024-01-22" },
      { type: "Insurance Papers", name: "Insurance_Docs.pdf", size: "2.8 MB", uploaded: "2024-01-22" },
      { type: "Safety Certificates", name: "Safety_Certs.zip", size: "4.6 MB", uploaded: "2024-01-22" }
    ],
    requirements: ["Vehicle Registration", "Driver Licenses", "Insurance Papers", "Vehicle Photos", "Safety Certificates"]
  }
];

export default function Applied() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [selectedService, setSelectedService] = useState(null);

  const serviceTypes = ["all", "Jeep", "Cab", "Auto", "Rickshaw", "Minibus", "Motor"];
  const statusTypes = ["all", "Under Review", "Recently Applied", "Document Verification", "Delayed - Missing Fire NOC", "Delayed - Insurance Verification"];

  const getDaysElapsed = (appliedDate) => {
    const today = new Date();
    const applied = new Date(appliedDate);
    return Math.floor((today - applied) / (1000 * 60 * 60 * 24));
  };

  const getDelayStatus = (appliedDate, expectedApproval, status) => {
    const daysElapsed = getDaysElapsed(appliedDate);
    
    // Check if it's a recently applied service (within 5 days)
    if (daysElapsed <= 5) {
      return { level: "recent", color: "bg-white border-gray-200", textColor: "text-green-600", days: daysElapsed };
    }
    
    // Check if it's delayed based on status
    if (status.includes("Delayed")) {
      return { level: "critical", color: "bg-white border-red-300", textColor: "text-red-600", days: daysElapsed };
    }
    
    // Normal processing
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
        
        <div className="flex items-center justify-between text-sm mb-4">
          <div>
            <span className="text-gray-500">Applied:</span>
            <p className="font-medium">{service.appliedDate}</p>
          </div>
          <div className="text-right">
            <span className="text-gray-500">Expected:</span>
            <p className="font-medium">{service.expectedApproval}</p>
          </div>
        </div>
        
        <div className="border-t pt-4">
          <div className="flex justify-between items-center">
            <div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                service.status === "Under Review" ? "bg-blue-100 text-blue-800" :
                service.status === "Recently Applied" ? "bg-green-100 text-green-800" :
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

  const ServiceDetails = ({ service, onClose }) => {
    const delayStatus = getDelayStatus(service.appliedDate, service.expectedApproval, service.status);
    
    return (
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
              </div>
            </div>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-xl">×</button>
          </div>
          
          {delayStatus.level === "recent" && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-green-500" />
                <div>
                  <h3 className="font-semibold text-green-800">Recently Applied</h3>
                  <p className="text-sm text-green-700">
                    This application was submitted {delayStatus.days} days ago and is being processed.
                  </p>
                </div>
              </div>
            </div>
          )}
          {delayStatus.level === "critical" && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <div className="flex items-center gap-2">
                <AlertTriangle size={20} className="text-red-500" />
                <div>
                  <h3 className="font-semibold text-red-800">Application Delayed</h3>
                  <p className="text-sm text-red-700 mb-2">
                    This application has been delayed for {delayStatus.days} days.
                  </p>
                  {service.delayReason && (
                    <div className="bg-white p-3 rounded border-l-4 border-red-500">
                      <p className="text-sm text-gray-700 mb-2"><strong>Reason for Delay:</strong></p>
                      <p className="text-sm text-gray-600 mb-2">{service.delayReason}</p>
                      {service.adminContact && (
                        <p className="text-sm text-blue-600"><strong>Contact:</strong> {service.adminContact}</p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Service Information</h3>
                <div className="space-y-2 text-sm">
                  <div><strong>Description:</strong> {service.description}</div>
                  <div><strong>Location:</strong> {service.location}</div>
                  <div><strong>Capacity:</strong> {service.capacity}</div>
                  <div><strong>Estimated Monthly Revenue:</strong> 
                    <span className="text-green-600 font-semibold ml-2">
                      ₹{service.estimatedRevenue.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Applicant Details</h3>
                <div className="space-y-2 text-sm">
                  <div><strong>Name:</strong> {service.applicantName}</div>
                  <div><strong>Contact:</strong> {service.contactNumber}</div>
                  <div><strong>Email:</strong> {service.email}</div>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Application Timeline</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-gray-500" />
                    <div>
                      <strong>Applied Date:</strong>
                      <span className="ml-2">{service.appliedDate}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-gray-500" />
                    <div>
                      <strong>Expected Approval:</strong>
                      <span className="ml-2">{service.expectedApproval}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {delayStatus.level === "recent" ? (
                      <CheckCircle size={16} className="text-green-500" />
                    ) : delayStatus.level === "critical" ? (
                      <AlertTriangle size={16} className="text-red-500" />
                    ) : (
                      <Clock size={16} className="text-gray-500" />
                    )}
                    <div>
                      <strong>Days Elapsed:</strong>
                      <span className={`ml-2 ${delayStatus.textColor} font-semibold`}>{delayStatus.days} days</span>
                    </div>
                  </div>
                  <div>
                    <strong>Current Status:</strong>
                    <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${
                      service.status === "Under Review" ? "bg-blue-100 text-blue-800" :
                      service.status === "Recently Applied" ? "bg-green-100 text-green-800" :
                      service.status === "Document Verification" ? "bg-purple-100 text-purple-800" :
                      service.status.includes("Delayed") ? "bg-red-100 text-red-800" :
                      "bg-yellow-100 text-yellow-800"
                    }`}>
                      {service.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Submitted Documents</h3>
                <div className="space-y-3">
                  {service.proofDocuments.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white rounded border">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 rounded">
                          {doc.type.includes("Photo") || doc.type.includes("Images") ? 
                            <Image size={16} className="text-blue-600" /> : 
                            <FileText size={16} className="text-blue-600" />
                          }
                        </div>
                        <div>
                          <p className="font-medium text-sm">{doc.type}</p>
                          <p className="text-xs text-gray-500">{doc.name} • {doc.size}</p>
                          <p className="text-xs text-gray-400">Uploaded: {doc.uploaded}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="p-1 text-blue-600 hover:bg-blue-100 rounded">
                          <Eye size={16} />
                        </button>
                        <button className="p-1 text-green-600 hover:bg-green-100 rounded">
                          <Download size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Required Documents</h3>
                <div className="space-y-2">
                  {service.requirements.map((req, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${
                        service.proofDocuments.some(doc => doc.type.toLowerCase().includes(req.toLowerCase().split(' ')[0])) 
                          ? "bg-green-500" : "bg-red-500"
                      }`}></div>
                      <span className="text-sm">{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-4">Services Applied</h1>
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
              placeholder="Search services, locations, or applicants..."
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

      {selectedService && (
        <ServiceDetails 
          service={selectedService} 
          onClose={() => setSelectedService(null)} 
        />
      )}
    </div>
  );
}