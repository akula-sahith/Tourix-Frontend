import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Calendar, TrendingUp, DollarSign, Eye, ChevronDown, ChevronUp } from 'lucide-react';

const Earnings = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [expandedService, setExpandedService] = useState(null);

  const monthlyData = [
    { month: 'Jan', bamboo: 15000, paintings: 18000, metal: 22000, textiles: 16000, pottery: 8000 },
    { month: 'Feb', bamboo: 17000, paintings: 20000, metal: 25000, textiles: 18000, pottery: 9000 },
    { month: 'Mar', bamboo: 19000, paintings: 22000, metal: 28000, textiles: 20000, pottery: 10000 },
    { month: 'Apr', bamboo: 21000, paintings: 24000, metal: 30000, textiles: 22000, pottery: 11000 },
    { month: 'May', bamboo: 23000, paintings: 26000, metal: 32000, textiles: 24000, pottery: 12000 },
    { month: 'Jun', bamboo: 25000, paintings: 28000, metal: 35000, textiles: 26000, pottery: 13000 }
  ];

  const dailyRevenue = {
    total: 3200,
    services: {
      bamboo: 800,
      paintings: 950,
      metal: 750,
      textiles: 450,
      pottery: 250
    }
  };

  const serviceDetails = {
    bamboo: [
      { name: 'Traditional Bamboo Baskets', revenue: 25000, maxRevenue: 30000, taxes: 3750, commission: 2500, netEarnings: 18750, orders: 125, avgPrice: 200 },
      { name: 'Bamboo Furniture', revenue: 35000, maxRevenue: 40000, taxes: 5250, commission: 3500, netEarnings: 26250, orders: 35, avgPrice: 1000 },
      { name: 'Decorative Items', revenue: 18000, maxRevenue: 22000, taxes: 2700, commission: 1800, netEarnings: 13500, orders: 90, avgPrice: 200 }
    ],
    paintings: [
      { name: 'Sohrai Wall Paintings', revenue: 28000, maxRevenue: 35000, taxes: 4200, commission: 2800, netEarnings: 21000, orders: 35, avgPrice: 800 },
      { name: 'Khovar Art Pieces', revenue: 32000, maxRevenue: 38000, taxes: 4800, commission: 3200, netEarnings: 24000, orders: 40, avgPrice: 800 },
      { name: 'Canvas Tribal Art', revenue: 22000, maxRevenue: 28000, taxes: 3300, commission: 2200, netEarnings: 16500, orders: 55, avgPrice: 400 }
    ],
    metal: [
      { name: 'Dhokra Figurines', revenue: 35000, maxRevenue: 42000, taxes: 5250, commission: 3500, netEarnings: 26250, orders: 70, avgPrice: 500 },
      { name: 'Brass Utensils', revenue: 28000, maxRevenue: 35000, taxes: 4200, commission: 2800, netEarnings: 21000, orders: 56, avgPrice: 500 },
      { name: 'Metal Jewelry', revenue: 25000, maxRevenue: 30000, taxes: 3750, commission: 2500, netEarnings: 18750, orders: 125, avgPrice: 200 }
    ],
    textiles: [
      { name: 'Tussar Silk Sarees', revenue: 26000, maxRevenue: 32000, taxes: 3900, commission: 2600, netEarnings: 19500, orders: 26, avgPrice: 1000 },
      { name: 'Handloom Fabrics', revenue: 18000, maxRevenue: 24000, taxes: 2700, commission: 1800, netEarnings: 13500, orders: 90, avgPrice: 200 },
      { name: 'Traditional Scarves', revenue: 15000, maxRevenue: 20000, taxes: 2250, commission: 1500, netEarnings: 11250, orders: 75, avgPrice: 200 }
    ],
    pottery: [
      { name: 'Terracotta Items', revenue: 13000, maxRevenue: 18000, taxes: 1950, commission: 1300, netEarnings: 9750, orders: 130, avgPrice: 100 },
      { name: 'Decorative Pots', revenue: 10000, maxRevenue: 15000, taxes: 1500, commission: 1000, netEarnings: 7500, orders: 50, avgPrice: 200 },
      { name: 'Kitchen Utensils', revenue: 8000, maxRevenue: 12000, taxes: 1200, commission: 800, netEarnings: 6000, orders: 80, avgPrice: 100 }
    ]
  };

  const colors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];

  const ServiceSection = ({ title, data, color }) => {
    const isExpanded = expandedService === title;
    const totalRevenue = data.reduce((sum, item) => sum + item.revenue, 0);
    const totalNet = data.reduce((sum, item) => sum + item.netEarnings, 0);

    return (
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
        <div 
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setExpandedService(isExpanded ? null : title)}
        >
          <div className="flex items-center gap-4">
            <div className={`w-4 h-4 rounded`} style={{ backgroundColor: color }}></div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <div className="flex gap-4 text-sm text-gray-600">
              <span>Total: ₹{totalRevenue.toLocaleString()}</span>
              <span>Net: ₹{totalNet.toLocaleString()}</span>
            </div>
          </div>
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>

        {isExpanded && (
          <div className="mt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Craft Item</th>
                    <th className="text-right p-2">Revenue</th>
                    <th className="text-right p-2">Orders</th>
                    <th className="text-right p-2">Avg Price</th>
                    <th className="text-right p-2">Net Earnings</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="p-2 font-medium">{item.name}</td>
                      <td className="p-2 text-right">₹{item.revenue.toLocaleString()}</td>
                      <td className="p-2 text-right">{item.orders}</td>
                      <td className="p-2 text-right">₹{item.avgPrice}</td>
                      <td className="p-2 text-right font-semibold text-green-600">₹{item.netEarnings.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Handicraft Earnings Dashboard</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Calendar size={20} />
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign size={20} className="text-green-600" />
            <span className="text-sm text-gray-600">Total Daily</span>
          </div>
          <div className="text-2xl font-bold text-green-600">₹{dailyRevenue.total}</div>
        </div>
        {Object.entries(dailyRevenue.services).map(([service, amount], index) => (
          <div key={service} className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className={`w-3 h-3 rounded`} style={{ backgroundColor: colors[index] }}></div>
              <span className="text-sm text-gray-600 capitalize">{service}</span>
            </div>
            <div className="text-xl font-semibold">₹{amount}</div>
          </div>
        ))}
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Monthly Revenue Trends</h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip formatter={(value) => [`₹${value.toLocaleString()}`, '']} />
            <Line type="monotone" dataKey="bamboo" stroke="#3B82F6" strokeWidth={2} name="Bamboo" />
            <Line type="monotone" dataKey="paintings" stroke="#10B981" strokeWidth={2} name="Paintings" />
            <Line type="monotone" dataKey="metal" stroke="#F59E0B" strokeWidth={2} name="Metal" />
            <Line type="monotone" dataKey="textiles" stroke="#EF4444" strokeWidth={2} name="Textiles" />
            <Line type="monotone" dataKey="pottery" stroke="#8B5CF6" strokeWidth={2} name="Pottery" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <ServiceSection title="Bamboo Crafts" data={serviceDetails.bamboo} color="#3B82F6" />
      <ServiceSection title="Tribal Paintings" data={serviceDetails.paintings} color="#10B981" />
      <ServiceSection title="Metal Crafts" data={serviceDetails.metal} color="#F59E0B" />
      <ServiceSection title="Textiles" data={serviceDetails.textiles} color="#EF4444" />
      <ServiceSection title="Pottery" data={serviceDetails.pottery} color="#8B5CF6" />

      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Revenue Distribution</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={[
                    { name: 'Bamboo', value: 78000, fill: '#3B82F6' },
                    { name: 'Paintings', value: 82000, fill: '#10B981' },
                    { name: 'Metal', value: 88000, fill: '#F59E0B' },
                    { name: 'Textiles', value: 59000, fill: '#EF4444' },
                    { name: 'Pottery', value: 31000, fill: '#8B5CF6' }
                  ]}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                />
                <Tooltip formatter={(value) => [`₹${value.toLocaleString()}`, 'Revenue']} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-4">
            {[
              { name: 'Bamboo Crafts', value: 78000, color: '#3B82F6' },
              { name: 'Tribal Paintings', value: 82000, color: '#10B981' },
              { name: 'Metal Crafts', value: 88000, color: '#F59E0B' },
              { name: 'Textiles', value: 59000, color: '#EF4444' },
              { name: 'Pottery', value: 31000, color: '#8B5CF6' }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded">
                <div className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded`} style={{ backgroundColor: item.color }}></div>
                  <span className="font-medium">{item.name}</span>
                </div>
                <span className="font-semibold">₹{item.value.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Earnings;