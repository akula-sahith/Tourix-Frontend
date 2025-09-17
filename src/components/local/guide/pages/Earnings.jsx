import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Calendar, TrendingUp, DollarSign, Eye, ChevronDown, ChevronUp } from 'lucide-react';

const Earnings = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [expandedService, setExpandedService] = useState(null);

  const monthlyData = [
    { month: 'Jan', wildlife: 12000, trekking: 8000, cultural: 5000 },
    { month: 'Feb', wildlife: 14000, trekking: 9500, cultural: 6200 },
    { month: 'Mar', wildlife: 16500, trekking: 11000, cultural: 7500 },
    { month: 'Apr', wildlife: 18000, trekking: 12500, cultural: 8000 },
    { month: 'May', wildlife: 20000, trekking: 14000, cultural: 9200 },
    { month: 'Jun', wildlife: 22500, trekking: 16000, cultural: 10500 }
  ];

  const dailyRevenue = {
    total: 1850,
    services: {
      wildlife: 850,
      trekking: 650,
      cultural: 350
    }
  };

  const serviceDetails = {
    wildlife: [
      { name: 'Betla Safari Guides', revenue: 18000, maxRevenue: 22000, taxes: 2700, commission: 1800, netEarnings: 13500, tours: 45, avgRate: 400 },
      { name: 'Elephant Safari Guides', revenue: 15000, maxRevenue: 18000, taxes: 2250, commission: 1500, netEarnings: 11250, tours: 25, avgRate: 600 },
      { name: 'Nature Walk Guides', revenue: 12000, maxRevenue: 15000, taxes: 1800, commission: 1200, netEarnings: 9000, tours: 60, avgRate: 200 }
    ],
    trekking: [
      { name: 'Parasnath Hill Guides', revenue: 25000, maxRevenue: 30000, taxes: 3750, commission: 2500, netEarnings: 18750, tours: 35, avgRate: 714 },
      { name: 'Sunrise Trek Guides', revenue: 18000, maxRevenue: 22000, taxes: 2700, commission: 1800, netEarnings: 13500, tours: 28, avgRate: 643 },
      { name: 'Photography Trek Guides', revenue: 15000, maxRevenue: 18000, taxes: 2250, commission: 1500, netEarnings: 11250, tours: 20, avgRate: 750 }
    ],
    cultural: [
      { name: 'Tribal Village Guides', revenue: 12000, maxRevenue: 15000, taxes: 1800, commission: 1200, netEarnings: 9000, tours: 40, avgRate: 300 },
      { name: 'Cultural Heritage Guides', revenue: 8000, maxRevenue: 10000, taxes: 1200, commission: 800, netEarnings: 6000, tours: 25, avgRate: 320 },
      { name: 'Craft Workshop Guides', revenue: 6000, maxRevenue: 8000, taxes: 900, commission: 600, netEarnings: 4500, tours: 20, avgRate: 300 }
    ]
  };

  const colors = ['#3B82F6', '#10B981', '#F59E0B'];

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
                    <th className="text-left p-2">Guide Service</th>
                    <th className="text-right p-2">Revenue</th>
                    <th className="text-right p-2">Tours</th>
                    <th className="text-right p-2">Avg Rate</th>
                    <th className="text-right p-2">Net Earnings</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="p-2 font-medium">{item.name}</td>
                      <td className="p-2 text-right">₹{item.revenue.toLocaleString()}</td>
                      <td className="p-2 text-right">{item.tours}</td>
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
        <h1 className="text-2xl font-bold">Guide Earnings Dashboard</h1>
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
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
            <Line type="monotone" dataKey="wildlife" stroke="#3B82F6" strokeWidth={2} name="Wildlife" />
            <Line type="monotone" dataKey="trekking" stroke="#10B981" strokeWidth={2} name="Trekking" />
            <Line type="monotone" dataKey="cultural" stroke="#F59E0B" strokeWidth={2} name="Cultural" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <ServiceSection title="Wildlife Guide Services" data={serviceDetails.wildlife} color="#3B82F6" />
      <ServiceSection title="Trekking Guide Services" data={serviceDetails.trekking} color="#10B981" />
      <ServiceSection title="Cultural Guide Services" data={serviceDetails.cultural} color="#F59E0B" />

      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Revenue Distribution</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={[
                    { name: 'Wildlife', value: 45000, fill: '#3B82F6' },
                    { name: 'Trekking', value: 58000, fill: '#10B981' },
                    { name: 'Cultural', value: 26000, fill: '#F59E0B' }
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
              { name: 'Wildlife Guides', value: 45000, color: '#3B82F6' },
              { name: 'Trekking Guides', value: 58000, color: '#10B981' },
              { name: 'Cultural Guides', value: 26000, color: '#F59E0B' }
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