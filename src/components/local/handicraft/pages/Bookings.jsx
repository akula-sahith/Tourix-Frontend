import { useState } from "react";
import { Calendar, Users, User, Clock, CreditCard, MapPin, Phone, Mail, ChevronLeft, ChevronRight, Search } from "lucide-react";

const mockBookings = {
  "2024-01-15": {
    handicrafts: [
      {
        id: 1,
        craftName: "Traditional Bamboo Crafts",
        craftType: "Bamboo",
        customerName: "Raj Kumar",
        people: 1,
        quantity: 5,
        items: "Bamboo Baskets",
        days: 7,
        amount: 2250,
        phone: "+91 9876543210",
        email: "raj@email.com",
        address: "Ranchi",
        transactionId: "TXN123456",
        craftsman: "Suresh Mahato",
        craftsmanPhone: "+91 9876543271",
        craftImage: "/src/assets/handicrafts/bamboo-crafts/image.png"
      },
      {
        id: 2,
        craftName: "Sohrai Tribal Paintings",
        craftType: "Painting",
        customerName: "Priya Sharma",
        people: 1,
        quantity: 3,
        items: "Wall Art Paintings",
        days: 10,
        amount: 4500,
        phone: "+91 9876543211",
        email: "priya.s@email.com",
        address: "Jamshedpur",
        transactionId: "TXN123457",
        craftsman: "Kavita Devi",
        craftsmanPhone: "+91 9876543273",
        craftImage: "/src/assets/handicrafts/tribal-paintings/image.png"
      },
      {
        id: 3,
        craftName: "Dhokra Metal Art",
        craftType: "Metal",
        customerName: "Amit Gupta",
        people: 1,
        quantity: 2,
        items: "Brass Figurines",
        days: 14,
        amount: 3200,
        phone: "+91 9876543212",
        email: "amit.g@email.com",
        address: "Dhanbad",
        transactionId: "TXN123458",
        craftsman: "Ramesh Kumar",
        craftsmanPhone: "+91 9876543275",
        craftImage: "/src/assets/handicrafts/metal-crafts/image.png"
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
          src={booking.craftImage} 
          alt={booking.craftName}
          className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
        />
        <div className="flex-1">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-semibold text-lg">{booking.customerName}</h3>
              <p className="text-sm text-gray-600">{booking.craftName} - {booking.craftType}</p>
            </div>
            <span className="text-green-600 font-bold">₹{booking.amount}</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Users size={16} />
              <span>{booking.quantity} items</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={16} />
              <span>{booking.days} days</span>
            </div>
            <div>Items: {booking.items}</div>
            <div>Type: {booking.craftType}</div>
          </div>
        </div>
      </div>
    </div>
  );

  const BookingDetails = ({ booking, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Handicraft Order Details</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-xl">×</button>
        </div>
        
        <div className="space-y-4">
          <div className="border-b pb-3">
            <h3 className="font-semibold text-lg mb-2">Craft Details</h3>
            <div className="flex gap-4 mb-4">
              <img 
                src={booking.craftImage} 
                alt={booking.craftName}
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div className="space-y-2 text-sm flex-1">
                <div><strong>Craft:</strong> {booking.craftName}</div>
                <div><strong>Type:</strong> {booking.craftType}</div>
                <div><strong>Items:</strong> {booking.items}</div>
                <div><strong>Quantity:</strong> {booking.quantity}</div>
                <div><strong>Craftsman:</strong> {booking.craftsman} ({booking.craftsmanPhone})</div>
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
            <h3 className="font-semibold text-lg mb-2">Order Information</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>Quantity: {booking.quantity}</div>
              <div>Delivery: {booking.days} days</div>
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

  const handicrafts = dateBookings.handicrafts || [];
  const filteredHandicrafts = searchTerm ? handicrafts.filter(booking => 
    booking.customerName.toLowerCase().includes(searchTerm.toLowerCase())
  ) : handicrafts;

  return (
    <div>
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Handicraft Orders Management</h1>
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
            <span>Total Orders: {totalBookings}</span>
          </div>
          <div className="flex items-center gap-1">
            <CreditCard size={16} />
            <span>Total Revenue: ₹{handicrafts.reduce((sum, b) => sum + b.amount, 0)}</span>
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
        {filteredHandicrafts.map(booking => (
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