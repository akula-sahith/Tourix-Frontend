import { useNavigate } from "react-router-dom";
import { Truck, MapPin, Palette, Home } from "lucide-react";

export default function MainSelection() {
  const navigate = useNavigate();

  const dashboards = [
    {
      id: "transport",
      title: "Transport Services",
      description: "Manage taxi, cab, and transportation services across Jharkhand",
      icon: <Truck size={48} />,
      color: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
      path: "/transport",
      services: ["Safari Tours", "Cab Services", "Temple Shuttles", "Hill Trekking Transport"]
    },
    {
      id: "guide",
      title: "Tour Guide Services", 
      description: "Professional guides for wildlife, cultural, and adventure tours",
      icon: <MapPin size={48} />,
      color: "bg-green-500",
      hoverColor: "hover:bg-green-600",
      path: "/guide",
      services: ["Wildlife Guides", "Cultural Tours", "Trekking Guides", "Heritage Walks"]
    },
    {
      id: "handicraft",
      title: "Handicraft Services",
      description: "Traditional Jharkhand handicrafts and artisan services",
      icon: <Palette size={48} />,
      color: "bg-purple-500", 
      hoverColor: "hover:bg-purple-600",
      path: "/handicraft",
      services: ["Tribal Art", "Bamboo Crafts", "Wood Carvings", "Traditional Textiles"]
    },
    {
      id: "homestay",
      title: "Homestay Services",
      description: "Accommodation and hospitality services for tourists",
      icon: <Home size={48} />,
      color: "bg-orange-500",
      hoverColor: "hover:bg-orange-600", 
      path: "/homestay",
      services: ["Hill Resorts", "Forest Lodges", "Heritage Stays", "Village Homestays"]
    }
  ];

  const handleDashboardSelect = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Tourix Jharkhand Tourism
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Local Service Provider Dashboard
          </p>
          <p className="text-gray-500">
            Choose your service category to manage your tourism business
          </p>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {dashboards.map((dashboard) => (
            <div
              key={dashboard.id}
              onClick={() => handleDashboardSelect(dashboard.path)}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 border border-gray-200"
            >
              <div className="p-8">
                {/* Icon and Title */}
                <div className="flex items-center mb-6">
                  <div className={`${dashboard.color} text-white p-4 rounded-lg mr-4`}>
                    {dashboard.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">
                      {dashboard.title}
                    </h2>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {dashboard.description}
                </p>

                {/* Services List */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                    Services Include:
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {dashboard.services.map((service, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <div className={`w-2 h-2 ${dashboard.color} rounded-full mr-2`}></div>
                        {service}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <button
                  className={`w-full ${dashboard.color} ${dashboard.hoverColor} text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2`}
                >
                  Access Dashboard
                  <span className="text-lg">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-gray-500">
          <p>Promoting authentic Jharkhand tourism experiences</p>
          <p className="text-sm mt-2">
            Featuring Netarhat • Betla National Park • Hundru Falls • Parasnath Hill • Deoghar
          </p>
        </div>
      </div>
    </div>
  );
}