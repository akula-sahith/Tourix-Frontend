import { useState } from "react";
import { Calendar, Users, User, Clock, CreditCard, MapPin, Phone, Mail, ChevronLeft, ChevronRight, Search } from "lucide-react";

const mockBookings = {
  "2024-01-15": {
    transportation: [
      {
        id: 1,
        vehicleName: "Betla Safari Jeeps",
        vehicleNumber: "JH-01-AB-1234",
        vehicleType: "Jeep",
        vehicleImage: "/src/assets/transportation/Jeep/image.png",
        customerName: "Raj Kumar",
        people: 4,
        adults: 2,
        children: 2,
        days: 3,
        amount: 9000,
        phone: "+91 9876543210",
        email: "raj@email.com",
        address: "Ranchi",
        transactionId: "TXN123456",
        pickupLocation: "Ranchi Airport",
        dropLocation: "Betla National Park",
        driverName: "Suresh Patil",
        driverPhone: "+91 9876543271"
      },
      {
        id: 2,
        vehicleName: "Ranchi City Cabs",
        vehicleNumber: "JH-02-XY-5678",
        vehicleType: "Cab",
        vehicleImage: "/src/assets/transportation/cab/image.png",
        customerName: "Priya Sharma",
        people: 2,
        adults: 2,
        children: 0,
        days: 1,
        amount: 1200,
        phone: "+91 9876543211",
        email: "priya.s@email.com",
        address: "Jamshedpur",
        transactionId: "TXN123457",
        pickupLocation: "Ranchi Railway Station",
        dropLocation: "Airport",
        driverName: "Rajesh Kumar",
        driverPhone: "+91 9876543273"
      },
      {
        id: 3,
        vehicleName: "Local Auto Service",
        vehicleNumber: "JH-03-CD-9012",
        vehicleType: "Auto",
        vehicleImage: "/src/assets/transportation/auto/image.png",
        customerName: "Amit Gupta",
        people: 3,
        adults: 2,
        children: 1,
        days: 1,
        amount: 350,
        phone: "+91 9876543212",
        email: "amit.g@email.com",
        address: "Dhanbad",
        transactionId: "TXN123458",
        pickupLocation: "Ranchi Station",
        dropLocation: "City Center",
        driverName: "Mohan Singh",
        driverPhone: "+91 9876543275"
      },
      {
        id: 4,
        vehicleName: "Group Travel Minibus",
        vehicleNumber: "JH-04-EF-3456",
        vehicleType: "Minibus",
        vehicleImage: "/src/assets/transportation/minibus/image.png",
        customerName: "Meera Patel",
        people: 12,
        adults: 8,
        children: 4,
        days: 2,
        amount: 6000,
        phone: "+91 9876543220",
        email: "meera@email.com",
        address: "Netarhat",
        transactionId: "TXN123466",
        pickupLocation: "Ranchi Bus Stand",
        dropLocation: "Netarhat Hills",
        driverName: "Ravi Gowda",
        driverPhone: "+91 9876543277"
      },
      {
        id: 5,
        vehicleName: "Traditional Rickshaw Service",
        vehicleNumber: "JH-05-GH-7890",
        vehicleType: "Rickshaw",
        vehicleImage: "/src/assets/transportation/rickshaw/image.png",
        customerName: "Kiran Joshi",
        people: 2,
        adults: 2,
        children: 0,
        days: 1,
        amount: 200,
        phone: "+91 9876543221",
        email: "kiran@email.com",
        address: "Ranchi",
        transactionId: "TXN123467",
        pickupLocation: "Main Market",
        dropLocation: "Railway Station",
        driverName: "Prakash Jadhav",
        driverPhone: "+91 9876543267"
      },
      {
        id: 6,
        vehicleName: "Eco-Friendly Cycle Rentals",
        vehicleNumber: "JH-06-IJ-1234",
        vehicleType: "Cycle",
        vehicleImage: "/src/assets/transportation/cycle/image.png",
        customerName: "Vikash Singh",
        people: 2,
        adults: 2,
        children: 0,
        days: 1,
        amount: 150,
        phone: "+91 9876543230",
        email: "vikash@email.com",
        address: "Ranchi",
        transactionId: "TXN123476",
        pickupLocation: "Park Area",
        dropLocation: "City Tour",
        driverName: "Self Ride",
        driverPhone: "N/A"
      },
      {
        id: 7,
        vehicleName: "Quick Delivery Motors",
        vehicleNumber: "JH-07-KL-5678",
        vehicleType: "Motor",
        vehicleImage: "/src/assets/transportation/motor/image.png",
        customerName: "Neha Agarwal",
        people: 1,
        adults: 1,
        children: 0,
        days: 1,
        amount: 300,
        phone: "+91 9876543231",
        email: "neha@email.com",
        address: "Ranchi",
        transactionId: "TXN123477",
        pickupLocation: "Commercial Area",
        dropLocation: "Airport",
        driverName: "Kishore Patel",
        driverPhone: "+91 9876543269"
      }
    ]
  },
  "2024-01-16": {
    transportation: [
      {
        id: 8,
        vehicleName: "Netarhat Hill Jeeps",
        vehicleNumber: "JH-08-MN-9012",
        vehicleType: "Jeep",
        customerName: "Rohit Sharma",
        people: 6,
        adults: 4,
        children: 2,
        days: 2,
        amount: 8000,
        phone: "+91 9876543240",
        email: "rohit@email.com",
        address: "Ranchi",
        transactionId: "TXN123480",
        pickupLocation: "Ranchi City",
        dropLocation: "Netarhat Hills",
        driverName: "Ramesh Kumar",
        driverPhone: "+91 9876543258"
      },
      {
        id: 9,
        vehicleName: "Airport Express Cabs",
        vehicleNumber: "JH-09-OP-3456",
        vehicleType: "Cab",
        customerName: "Lakshmi Iyer",
        people: 4,
        adults: 3,
        children: 1,
        days: 1,
        amount: 1500,
        phone: "+91 9876543241",
        email: "lakshmi@email.com",
        address: "Ranchi",
        transactionId: "TXN123481",
        pickupLocation: "Hotel",
        dropLocation: "Jamshedpur",
        driverName: "Suresh Kumar",
        driverPhone: "+91 9876543212"
      }
    ]
  },
  "2024-01-17": {
    transportation: [
      {
        id: 10,
        vehicleName: "Tourist Minibus Service",
        vehicleNumber: "JH-10-QR-7890",
        vehicleType: "Minibus",
        customerName: "David Wilson",
        people: 15,
        adults: 12,
        children: 3,
        days: 3,
        amount: 12000,
        phone: "+91 9876543243",
        email: "david@email.com",
        address: "Ranchi",
        transactionId: "TXN123483",
        pickupLocation: "Hotel",
        dropLocation: "Multiple Destinations",
        driverName: "Prakash Singh",
        driverPhone: "+91 9876543280"
      }
    ]
  }
};

export default function Bookings() {
  const [selectedDate, setSelectedDate] = useState("2024-01-15");
  const [selectedService, setSelectedService] = useState(null);
  const [selectedServiceName, setSelectedServiceName] = useState(null);
  const [selectedServiceBookings, setSelectedServiceBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const availableDates = Object.keys(mockBookings).sort();
  const currentDateIndex = availableDates.indexOf(selectedDate);

  const navigateDate = (direction) => {
    const newIndex = direction === 'prev' ? currentDateIndex - 1 : currentDateIndex + 1;
    if (newIndex >= 0 && newIndex < availableDates.length) {
      setSelectedDate(availableDates[newIndex]);
      setSelectedService(null);
      setSelectedServiceName(null);
      setSelectedServiceBookings([]);
    }
  };

  const dateBookings = mockBookings[selectedDate] || {};
  const totalBookings = Object.values(dateBookings).reduce((sum, bookings) => sum + bookings.length, 0);

  const services = [
    { key: 'transportation', name: 'Vehicle Bookings', icon: <CreditCard size={24} />, color: 'bg-blue-500' }
  ];

  // Group bookings by service name
  const groupBookingsByService = (bookings, serviceType) => {
    const grouped = {};
    bookings.forEach(booking => {
      const serviceName = booking.vehicleName;
      if (!grouped[serviceName]) {
        grouped[serviceName] = [];
      }
      grouped[serviceName].push(booking);
    });
    return grouped;
  };

  const handleServiceClick = (serviceName, bookings) => {
    setSelectedServiceName(serviceName);
    setSelectedServiceBookings(bookings);
  };

  const ServiceCard = ({ serviceName, bookings, serviceType, onServiceClick }) => {
    const totalRevenue = bookings.reduce((sum, b) => sum + b.amount, 0);
    const totalGuests = bookings.reduce((sum, b) => sum + b.people, 0);

    return (
      <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow cursor-pointer"
           onClick={() => onServiceClick(serviceName, bookings)}>
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="font-semibold text-lg">{serviceName}</h3>
            <p className="text-sm text-gray-600">{bookings.length} bookings</p>
          </div>
          <span className="text-green-600 font-bold">₹{totalRevenue}</span>
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Users size={16} />
            <span>{totalGuests} total guests</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>Avg ₹{Math.round(totalRevenue / bookings.length)}</span>
          </div>
        </div>
      </div>
    );
  };

  const BookingCard = ({ booking, serviceType }) => {
    const getServiceDetails = () => {
      return `${booking.vehicleType} - ${booking.vehicleNumber}`;
    };

    return (
      <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow cursor-pointer"
           onClick={() => setSelectedBooking(booking)}>
        <div className="flex gap-4 mb-3">
          <img 
            src={booking.vehicleImage} 
            alt={booking.vehicleName}
            className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
          />
          <div className="flex-1">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold text-lg">{booking.customerName}</h3>
                <p className="text-sm text-gray-600">{getServiceDetails()}</p>
              </div>
              <span className="text-green-600 font-bold">₹{booking.amount}</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Users size={16} />
                <span>{booking.people} people</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={16} />
                <span>{booking.days} days</span>
              </div>
              <div>Adults: {booking.adults}</div>
              <div>Children: {booking.children}</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const BookingDetails = ({ booking, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Booking Details</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-xl">×</button>
        </div>
        
        <div className="space-y-4">
          <div className="border-b pb-3">
            <h3 className="font-semibold text-lg mb-2">Service Details</h3>
            <div className="flex gap-4 mb-4">
              <img 
                src={booking.vehicleImage} 
                alt={booking.vehicleName}
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div className="space-y-2 text-sm flex-1">
                <div><strong>Vehicle:</strong> {booking.vehicleName}</div>
                <div><strong>Number:</strong> {booking.vehicleNumber}</div>
                <div><strong>Type:</strong> {booking.vehicleType}</div>
                <div><strong>Pickup:</strong> {booking.pickupLocation}</div>
                <div><strong>Drop:</strong> {booking.dropLocation}</div>
                <div><strong>Driver:</strong> {booking.driverName} ({booking.driverPhone})</div>
              </div>
            </div>
          </div>

          <div className="border-b pb-3">
            <h3 className="font-semibold text-lg mb-2">Customer Information</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <User size={16} className="text-gray-500" />
                <span>{booking.customerName}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-gray-500" />
                <span>{booking.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-gray-500" />
                <span>{booking.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-gray-500" />
                <span>{booking.address}</span>
              </div>
            </div>
          </div>

          <div className="border-b pb-3">
            <h3 className="font-semibold text-lg mb-2">Booking Information</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>Total People: {booking.people}</div>
              <div>Adults: {booking.adults}</div>
              <div>Children: {booking.children}</div>
              <div>Duration: {booking.days} days</div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Transaction Details</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Amount:</span>
                <span className="font-semibold text-green-600">₹{booking.amount}</span>
              </div>
              <div className="flex justify-between">
                <span>Transaction ID:</span>
                <span className="font-mono text-xs">{booking.transactionId}</span>
              </div>
              <div className="flex justify-between">
                <span>Status:</span>
                <span className="text-green-600 font-semibold">Confirmed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (selectedServiceName) {
    let filteredBookings = selectedServiceBookings;
    
    // Filter bookings based on search term
    if (searchTerm) {
      filteredBookings = selectedServiceBookings.filter(booking => 
        booking.customerName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return (
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <button 
              onClick={() => {
                setSelectedServiceName(null);
                setSelectedServiceBookings([]);
              }}
              className="text-blue-600 hover:text-blue-800 mb-2 flex items-center gap-1"
            >
              ← Back to Services
            </button>
            <h1 className="text-2xl font-bold">{selectedServiceName} - {selectedDate}</h1>
            <p className="text-gray-600">{filteredBookings.length} bookings • Total Revenue: ₹{filteredBookings.reduce((sum, b) => sum + b.amount, 0)}</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search customers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredBookings.map(booking => (
            <BookingCard key={booking.id} booking={booking} serviceType={selectedService} />
          ))}
        </div>

        {selectedBooking && (
          <BookingDetails 
            booking={selectedBooking} 
            onClose={() => setSelectedBooking(null)} 
          />
        )}
      </div>
    );
  }

  if (selectedService) {
    const serviceBookings = dateBookings[selectedService] || [];
    const serviceName = services.find(s => s.key === selectedService)?.name;
    const groupedServices = groupBookingsByService(serviceBookings, selectedService);
    
    return (
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <button 
              onClick={() => setSelectedService(null)}
              className="text-blue-600 hover:text-blue-800 mb-2 flex items-center gap-1"
            >
              ← Back to Services
            </button>
            <h1 className="text-2xl font-bold">{serviceName} - {selectedDate}</h1>
            <p className="text-gray-600">{Object.keys(groupedServices).length} services • {serviceBookings.length} total bookings</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(groupedServices).map(([serviceName, bookings]) => (
            <ServiceCard 
              key={serviceName}
              serviceName={serviceName}
              bookings={bookings}
              serviceType={selectedService}
              onServiceClick={handleServiceClick}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Vehicle Bookings Management</h1>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => navigateDate('prev')}
              disabled={currentDateIndex === 0}
              className="p-2 border rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="px-4 py-2 bg-blue-50 border border-blue-200 rounded-lg">
              <Calendar size={16} className="inline mr-2" />
              {selectedDate}
            </div>
            <button 
              onClick={() => navigateDate('next')}
              disabled={currentDateIndex === availableDates.length - 1}
              className="p-2 border rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-1">
            <Users size={16} />
            <span>Total Bookings: {totalBookings}</span>
          </div>
          <div className="flex items-center gap-1">
            <CreditCard size={16} />
            <span>Total Revenue: ₹{Object.values(dateBookings).reduce((sum, bookings) => sum + bookings.reduce((s, b) => s + b.amount, 0), 0)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>Available Dates: {availableDates.length}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(service => {
          const bookings = dateBookings[service.key] || [];
          const uniqueServices = groupBookingsByService(bookings, service.key);
          return (
            <div 
              key={service.key}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedService(service.key)}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`${service.color} text-white p-3 rounded-lg`}>
                  {service.icon}
                </div>
                <div>
                  <h2 className="text-xl font-semibold">{service.name}</h2>
                  <p className="text-gray-600">{Object.keys(uniqueServices).length} services • {bookings.length} bookings</p>
                  <p className="text-xs text-gray-500">{bookings.reduce((sum, b) => sum + b.people, 0)} total guests</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Revenue</span>
                  <span className="text-xl font-bold text-green-600">
                    ₹{bookings.reduce((sum, b) => sum + b.amount, 0)}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Avg per booking</span>
                  <span className="text-gray-700">
                    ₹{bookings.length > 0 ? Math.round(bookings.reduce((sum, b) => sum + b.amount, 0) / bookings.length) : 0}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {selectedBooking && (
        <BookingDetails 
          booking={selectedBooking} 
          onClose={() => setSelectedBooking(null)} 
        />
      )}
    </div>
  );
}