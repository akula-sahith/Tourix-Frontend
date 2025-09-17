import { Home, Briefcase, ClipboardList, BadgeCheck, DollarSign, ShoppingBag, LogOut } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/handicraft", icon: <Home size={20} /> },
    { name: "Earnings", path: "/handicraft/earnings", icon: <DollarSign size={20} /> },
    { name: "Services Provided", path: "/handicraft/services", icon: <Briefcase size={20} /> },
    { name: "Services Applied", path: "/handicraft/applied", icon: <ClipboardList size={20} /> },
    { name: "Services Approved", path: "/handicraft/approved", icon: <BadgeCheck size={20} /> },
    { name: "Bookings", path: "/handicraft/bookings", icon: <ShoppingBag size={20} /> },
  ];

  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-white text-gray-900 shadow-md flex flex-col">
      {/* Logo */}
      <div className="p-6 text-xl font-bold text-gray-800 border-b border-gray-200">
        Tourix Handicraft
      </div>

      {/* Menu Items */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition font-medium ${
              location.pathname === item.path
                ? "bg-green-500 text-white shadow-sm"
                : "hover:bg-green-100 hover:text-green-600"
            }`}
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-gray-200">
        <button className="flex items-center gap-3 px-3 py-2 w-full rounded-lg hover:bg-red-100 hover:text-red-600 transition font-medium">
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </div>
  );
}
