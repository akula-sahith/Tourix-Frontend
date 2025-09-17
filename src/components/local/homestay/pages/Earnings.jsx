import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Calendar, TrendingUp, DollarSign, Eye, ChevronDown, ChevronUp } from 'lucide-react';

const Earnings = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [expandedService, setExpandedService] = useState(null);

  const monthlyData = [
    { month: 'Jan', hillResort: 180000, forestLodge: 120000, heritageHome: 85000, guesthouse: 65000 },
    { month: 'Feb', hillResort: 195000, forestLodge: 135000, heritageHome: 92000, guesthouse: 72000 },
    { month: 'Mar', hillResort: 210000, forestLodge: 150000, heritageHome: 98000, guesthouse: 78000 },
    { month: 'Apr', hillResort: 225000, forestLodge: 165000, heritageHome: 105000, guesthouse: 85000 },
    { month: 'May', hillResort: 240000, forestLodge: 180000, heritageHome: 112000, guesthouse: 92000 },
    { month: 'Jun', hillResort: 255000, forestLodge: 195000, heritageHome: 118000, guesthouse: 98000 }
  ];

  const dailyRevenue = {
    total: 8500,
    services: {
      hillResort: 3200,
      forestLodge: 2800,
      heritageHome: 1500,
      guesthouse: 1000
    }
  };

  const serviceDetails = {
    hillResort: [
      { name: 'Netarhat Hill Resort', revenue: 255000, maxRevenue: 300000, taxes: 38250, commission: 25500, netEarnings: 191250, bookings: 85, avgRate: 3000 },
      { name: 'Parasnath View Resort', revenue: 180000, maxRevenue: 220000, taxes: 27000, commission: 18000, netEarnings: 135000, bookings: 60, avgRate: 3000 },
      { name: 'Ranchi Hill Station', revenue: 150000, maxRevenue: 180000, taxes: 22500, commission: 15000, netEarnings: 112500, bookings: 50, avgRate: 3000 }
    ],
    forestLodge: [
      { name: 'Betla Forest Lodge', revenue: 195000, maxRevenue: 240000, taxes: 29250, commission: 19500, netEarnings: 146250, bookings: 65, avgRate: 3000 },
      { name: 'Hazaribagh Wildlife Lodge', revenue: 165000, maxRevenue: 200000, taxes: 24750, commission: 16500, netEarnings: 123750, bookings: 55, avgRate: 3000 },
      { name: 'Dalma Eco Lodge', revenue: 135000, maxRevenue: 165000, taxes: 20250, commission: 13500, netEarnings: 101250, bookings: 45, avgRate: 3000 }
    ],
    heritageHome: [
      { name: 'Ranchi Heritage Home', revenue: 118000, maxRevenue: 150000, taxes: 17700, commission: 11800, netEarnings: 88500, bookings: 59, avgRate: 2000 },
      { name: 'Tribal Culture Homestay', revenue: 95000, maxRevenue: 120000, taxes: 14250, commission: 9500, netEarnings: 71250, bookings: 48, avgRate: 2000 },
      { name: 'Traditional Village Stay', revenue: 85000, maxRevenue: 105000, taxes: 12750, commission: 8500, netEarnings: 63750, bookings: 43, avgRate: 2000 }
    ],
    guesthouse: [
      { name: 'Jamshedpur Guest House', revenue: 98000, maxRevenue: 120000, taxes: 14700, commission: 9800, netEarnings: 73500, bookings: 98, avgRate: 1000 },
      { name: 'Dhanbad Comfort Stay', revenue: 75000, maxRevenue: 95000, taxes: 11250, commission: 7500, netEarnings: 56250, bookings: 75, avgRate: 1000 },
      { name: 'Bokaro Budget Lodge', revenue: 65000, maxRevenue: 80000, taxes: 9750, commission: 6500, netEarnings: 48750, bookings: 65, avgRate: 1000 }
    ]
  };

  const colors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444'];

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
                    <th className="text-left p-2">Property</th>
                    <th className="text-right p-2">Revenue</th>
                    <th className="text-right p-2">Bookings</th>
                    <th className="text-right p-2">Avg Rate</th>
                    <th className="text-right p-2">Net Earnings</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="p-2 font-medium">{item.name}</td>
                      <td className="p-2 text-right">₹{item.revenue.toLocaleString()}</td>
                      <td className="p-2 text-right">{item.bookings}</td>
                      <td className="p-2 text-right">₹{item.avgRate}</td>
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
        <h1 className="text-2xl font-bold">Homestay Earnings Dashboard</h1>
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
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
              <span className="text-sm text-gray-600 capitalize">{service.replace(/([A-Z])/g, ' $1').trim()}</span>
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
            <Line type="monotone" dataKey="hillResort" stroke="#3B82F6" strokeWidth={2} name="Hill Resort" />
            <Line type="monotone" dataKey="forestLodge" stroke="#10B981" strokeWidth={2} name="Forest Lodge" />
            <Line type="monotone" dataKey="heritageHome" stroke="#F59E0B" strokeWidth={2} name="Heritage Home" />
            <Line type="monotone" dataKey="guesthouse" stroke="#EF4444" strokeWidth={2} name="Guest House" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <ServiceSection title="Hill Resort Properties" data={serviceDetails.hillResort} color="#3B82F6" />
      <ServiceSection title="Forest Lodge Properties" data={serviceDetails.forestLodge} color="#10B981" />
      <ServiceSection title="Heritage Home Properties" data={serviceDetails.heritageHome} color="#F59E0B" />
      <ServiceSection title="Guest House Properties" data={serviceDetails.guesthouse} color="#EF4444" />

      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Revenue Distribution</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={[
                    { name: 'Hill Resort', value: 585000, fill: '#3B82F6' },
                    { name: 'Forest Lodge', value: 495000, fill: '#10B981' },
                    { name: 'Heritage Home', value: 298000, fill: '#F59E0B' },
                    { name: 'Guest House', value: 238000, fill: '#EF4444' }
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
              { name: 'Hill Resort Properties', value: 585000, color: '#3B82F6' },
              { name: 'Forest Lodge Properties', value: 495000, color: '#10B981' },
              { name: 'Heritage Home Properties', value: 298000, color: '#F59E0B' },
              { name: 'Guest House Properties', value: 238000, color: '#EF4444' }
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