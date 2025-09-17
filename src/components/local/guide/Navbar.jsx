import { User } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b px-6 py-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
        <div className="flex items-center space-x-3">
          <span className="text-gray-600">Welcome back, John</span>
          <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
            <User size={18} className="text-gray-600" />
          </div>
        </div>
      </div>
    </nav>
  );
}