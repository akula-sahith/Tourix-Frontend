import { useState } from "react";
import { Calendar, Users, User, Clock, CreditCard, MapPin, Phone, Mail, ChevronLeft, ChevronRight, Search } from "lucide-react";

const mockBookings = {
  "2024-01-15": {
    homestays: [
      {
        id: 1,
        homestayName: "Netarhat Hill Resort",
        roomNumber: "A-205",
        roomType: "Deluxe Suite",
        customerName: "Raj Kumar",
        people: 4,
        adults: 2,
        children: 2,
        days: 3,
        amount: 15000,
        phone: "+91 9876543210",
        email: "raj@email.com",
        address: "Ranchi",
        transactionId: "TXN123456",
        checkIn: "2024-01-15",
        checkOut: "2024-01-18",
        hostName: "Suresh Patil",
        hostPhone: "+91 9876543271",
        propertyImages: [
          "/src/assets/hotels/netarhat-sunrise-lodge/image.png",
          "/src/assets/hotels/netarhat-sunrise-lodge/one.png",
          "/src/assets/hotels/netarhat-sunrise-lodge/two.png"
        ]
      },
      {
        id: 2,
        homestayName: "Betla Forest Lodge",
        roomNumber: "B-301",
        roomType: "Forest View Room",
        customerName: "Priya Sharma",
        people: 2,
        adults: 2,
        children: 0,
        days: 2,
        amount: 8000,
        phone: "+91 9876543211",
        email: "priya.s@email.com",
        address: "Jamshedpur",
        transactionId: "TXN123457",
        checkIn: "2024-01-15",
        checkOut: "2024-01-17",
        hostName: "Ramesh Singh",
        hostPhone: "+91 9876543273",
        propertyImages: [
          "/src/assets/hotels/betla-forest-lodge/image.png",
          "/src/assets/hotels/betla-forest-lodge/one.png",
          "/src/assets/hotels/betla-forest-lodge/two.png"
        ]
      },
      {
        id: 3,
        homestayName: "Ranchi Heritage Home",
        roomNumber: "C-102",
        roomType: "Traditional Room",
        customerName: "Amit Gupta",
        people: 3,
        adults: 2,
        children: 1,
        days: 1,
        amount: 4500,
        phone: "+91 9876543212",
        email: "amit.g@email.com",
        address: "Dhanbad",
        transactionId: "TXN123458",
        checkIn: "2024-01-15",
        checkOut: "2024-01-16",
        hostName: "Kavita Devi",
        hostPhone: "+91 9876543275",
        propertyImages: [
          "/src/assets/hotels/ranchi-hill-resort/exterior.jpg",
          "/src/assets/hotels/ranchi-hill-resort/lobby.jpg",
          "/src/assets/hotels/ranchi-hill-resort/deluxe-room.jpg"
        ]
      }
    ]
  }
};

export default function Bookings() {
  const [selectedDate, setSelectedDate] = useState("2024-01-15");
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const availableDates = Object.keys(mockBookings).sort();
  const currentDateIndex = availableDates.indexOf(selectedDate);

  const navigateDate = (direction) => {
    const newIndex = direction === 'prev' ? currentDateIndex - 1 : currentDateIndex + 1;
    if (newIndex >= 0 && newIndex < availableDates.length) {
      setSelectedDate(availableDates[newIndex]);
    }
  };

  const dateBookings = mockBookings[selectedDate] || {};
  const totalBookings = Object.values(dateBookings).reduce((sum, bookings) => sum + bookings.length, 0);

  const BookingCard = ({ booking }) => (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow cursor-pointer"
         onClick={() => setSelectedBooking(booking)}>
      <div className="flex gap-4 mb-3">
        <img 
          src={booking.propertyImages[0]} 
          alt={booking.homestayName}
          className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
        />
        <div className="flex-1">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-semibold text-lg">{booking.customerName}</h3>
              <p className="text-sm text-gray-600">{booking.homestayName} - {booking.roomType}</p>
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

  const BookingDetails = ({ booking, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Homestay Booking Details</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-xl">×</button>
        </div>
        
        <div className="space-y-4">
          <div className="border-b pb-3">
            <h3 className="font-semibold text-lg mb-2">Homestay Details</h3>
            <div className="mb-4">
              <div className="flex gap-2 mb-3">
                {booking.propertyImages.slice(0, 3).map((image, index) => (
                  <img 
                    key={index}
                    src={image} 
                    alt={`${booking.homestayName} ${index + 1}`}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                ))}
              </div>
              <div className="space-y-2 text-sm">
                <div><strong>Homestay:</strong> {booking.homestayName}</div>
                <div><strong>Room:</strong> {booking.roomNumber} - {booking.roomType}</div>
                <div><strong>Check-in:</strong> {booking.checkIn}</div>
                <div><strong>Check-out:</strong> {booking.checkOut}</div>
                <div><strong>Host:</strong> {booking.hostName} ({booking.hostPhone})</div>
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

  const homestays = dateBookings.homestays || [];
  const filteredHomestays = searchTerm ? homestays.filter(booking => 
    booking.customerName.toLowerCase().includes(searchTerm.toLowerCase())
  ) : homestays;

  return (
    <div>
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Homestay Bookings Management</h1>
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
            <span>Total Revenue: ₹{homestays.reduce((sum, b) => sum + b.amount, 0)}</span>
          </div>
        </div>
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search customers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full max-w-md"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredHomestays.map(booking => (
          <BookingCard key={booking.id} booking={booking} />
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