import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Calendar, TrendingUp, DollarSign, Eye, ChevronDown, ChevronUp } from 'lucide-react';

const Earnings = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [expandedService, setExpandedService] = useState(null);

  // Transport earnings data
  const monthlyData = [
    { month: 'Jan', jeep: 8000, cab: 12000, auto: 4000, rickshaw: 3000, cycle: 1500, minibus: 6000, motor: 2500 },
    { month: 'Feb', jeep: 9500, cab: 14000, auto: 4800, rickshaw: 3500, cycle: 1800, minibus: 7200, motor: 3000 },
    { month: 'Mar', jeep: 11000, cab: 16500, auto: 5500, rickshaw: 4200, cycle: 2100, minibus: 8500, motor: 3500 },
    { month: 'Apr', jeep: 12500, cab: 18000, auto: 6000, rickshaw: 4800, cycle: 2400, minibus: 9000, motor: 4000 },
    { month: 'May', jeep: 14000, cab: 20000, auto: 6800, rickshaw: 5500, cycle: 2700, minibus: 10200, motor: 4500 },
    { month: 'Jun', jeep: 16000, cab: 22500, auto: 7500, rickshaw: 6200, cycle: 3000, minibus: 11500, motor: 5000 }
  ];

  const dailyRevenue = {
    total: 2850,
    services: {
      jeep: 650,
      cab: 850,
      auto: 420,
      rickshaw: 320,
      cycle: 180,
      minibus: 280,
      motor: 150
    }
  };

  const serviceDetails = {
    jeep: [
      { name: 'Betla Safari Jeeps', revenue: 18000, maxRevenue: 22000, taxes: 2700, commission: 1800, netEarnings: 13500, trips: 85, avgFare: 212 },
      { name: 'Netarhat Hill Jeeps', revenue: 15000, maxRevenue: 18000, taxes: 2250, commission: 1500, netEarnings: 11250, trips: 72, avgFare: 208 },
      { name: 'Ranchi Adventure Jeeps', revenue: 12000, maxRevenue: 15000, taxes: 1800, commission: 1200, netEarnings: 9000, trips: 60, avgFare: 200 }
    ],
    cab: [
      { name: 'Ranchi City Cabs', revenue: 25000, maxRevenue: 30000, taxes: 3750, commission: 2500, netEarnings: 18750, trips: 450, avgFare: 56 },
      { name: 'Airport Shuttle Cabs', revenue: 20000, maxRevenue: 25000, taxes: 3000, commission: 2000, netEarnings: 15000, trips: 320, avgFare: 63 },
      { name: 'Outstation Cab Service', revenue: 18000, maxRevenue: 22000, taxes: 2700, commission: 1800, netEarnings: 13500, trips: 180, avgFare: 100 }
    ],
    auto: [
      { name: 'Local Auto Service', revenue: 8000, maxRevenue: 10000, taxes: 1200, commission: 800, netEarnings: 6000, trips: 240, avgFare: 33 },
      { name: 'Station Auto Stand', revenue: 6500, maxRevenue: 8000, taxes: 975, commission: 650, netEarnings: 4875, trips: 200, avgFare: 33 },
      { name: 'Market Auto Service', revenue: 5000, maxRevenue: 6500, taxes: 750, commission: 500, netEarnings: 3750, trips: 160, avgFare: 31 }
    ],
    rickshaw: [
      { name: 'Traditional Rickshaw Service', revenue: 4500, maxRevenue: 6000, taxes: 675, commission: 450, netEarnings: 3375, trips: 180, avgFare: 25 },
      { name: 'Tourist Rickshaw Tours', revenue: 3800, maxRevenue: 5000, taxes: 570, commission: 380, netEarnings: 2850, trips: 95, avgFare: 40 },
      { name: 'Local Area Rickshaws', revenue: 3200, maxRevenue: 4000, taxes: 480, commission: 320, netEarnings: 2400, trips: 128, avgFare: 25 }
    ],
    cycle: [
      { name: 'Eco-Friendly Cycle Rentals', revenue: 2200, maxRevenue: 3000, taxes: 330, commission: 220, netEarnings: 1650, rentals: 110, avgRate: 20 },
      { name: 'Tourist Cycle Tours', revenue: 1800, maxRevenue: 2500, taxes: 270, commission: 180, netEarnings: 1350, tours: 45, avgRate: 40 },
      { name: 'City Cycle Service', revenue: 1500, maxRevenue: 2000, taxes: 225, commission: 150, netEarnings: 1125, rentals: 75, avgRate: 20 }
    ],
    minibus: [
      { name: 'Group Travel Minibus', revenue: 12000, maxRevenue: 15000, taxes: 1800, commission: 1200, netEarnings: 9000, trips: 48, avgFare: 250 },
      { name: 'School Transport Service', revenue: 10000, maxRevenue: 12000, taxes: 1500, commission: 1000, netEarnings: 7500, trips: 200, avgFare: 50 },
      { name: 'Tourist Minibus Service', revenue: 8500, maxRevenue: 10000, taxes: 1275, commission: 850, netEarnings: 6375, trips: 34, avgFare: 250 }
    ],
    motor: [
      { name: 'Quick Delivery Motors', revenue: 3500, maxRevenue: 4500, taxes: 525, commission: 350, netEarnings: 2625, trips: 175, avgFare: 20 },
      { name: 'City Motor Service', revenue: 2800, maxRevenue: 3500, taxes: 420, commission: 280, netEarnings: 2100, trips: 140, avgFare: 20 },
      { name: 'Tourist Motor Rides', revenue: 2200, maxRevenue: 3000, taxes: 330, commission: 220, netEarnings: 1650, trips: 88, avgFare: 25 }
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-medium mb-3">Revenue Breakdown</h4>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <YAxis />
                    <Tooltip formatter={(value) => [`₹${value.toLocaleString()}`, 'Revenue']} />
                    <Bar dataKey="revenue" fill={color} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div>
                <h4 className="font-medium mb-3">Net Earnings</h4>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <YAxis />
                    <Tooltip formatter={(value) => [`₹${value.toLocaleString()}`, 'Net Earnings']} />
                    <Bar dataKey="netEarnings" fill={color} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Service</th>
                    <th className="text-right p-2">Revenue</th>
                    <th className="text-right p-2">Max Revenue</th>
                    <th className="text-right p-2">Taxes</th>
                    <th className="text-right p-2">Commission</th>
                    <th className="text-right p-2">Net Earnings</th>
                    <th className="text-right p-2">Performance</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="p-2 font-medium">{item.name}</td>
                      <td className="p-2 text-right">₹{item.revenue.toLocaleString()}</td>
                      <td className="p-2 text-right">₹{item.maxRevenue.toLocaleString()}</td>
                      <td className="p-2 text-right text-red-600">₹{item.taxes.toLocaleString()}</td>
                      <td className="p-2 text-right text-orange-600">₹{item.commission.toLocaleString()}</td>
                      <td className="p-2 text-right font-semibold text-green-600">₹{item.netEarnings.toLocaleString()}</td>
                      <td className="p-2 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div 
                              className="h-2 rounded-full" 
                              style={{ 
                                width: `${(item.revenue / item.maxRevenue) * 100}%`,
                                backgroundColor: color 
                              }}
                            ></div>
                          </div>
                          <span className="text-xs">{Math.round((item.revenue / item.maxRevenue) * 100)}%</span>
                        </div>
                      </td>
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
        <h1 className="text-2xl font-bold">Earnings Dashboard</h1>
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

      {/* Daily Revenue Summary */}
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

      {/* Monthly Trends */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Monthly Revenue Trends</h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip formatter={(value) => [`₹${value.toLocaleString()}`, '']} />
            <Line type="monotone" dataKey="jeep" stroke="#3B82F6" strokeWidth={2} name="Jeep" />
            <Line type="monotone" dataKey="cab" stroke="#10B981" strokeWidth={2} name="Cab" />
            <Line type="monotone" dataKey="auto" stroke="#F59E0B" strokeWidth={2} name="Auto" />
            <Line type="monotone" dataKey="rickshaw" stroke="#EF4444" strokeWidth={2} name="Rickshaw" />
            <Line type="monotone" dataKey="cycle" stroke="#8B5CF6" strokeWidth={2} name="Cycle" />
            <Line type="monotone" dataKey="minibus" stroke="#FF6B6B" strokeWidth={2} name="Minibus" />
            <Line type="monotone" dataKey="motor" stroke="#4ECDC4" strokeWidth={2} name="Motor" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Service Sections */}
      <ServiceSection title="Jeep Services" data={serviceDetails.jeep} color="#3B82F6" />
      <ServiceSection title="Cab Services" data={serviceDetails.cab} color="#10B981" />
      <ServiceSection title="Auto Services" data={serviceDetails.auto} color="#F59E0B" />
      <ServiceSection title="Rickshaw Services" data={serviceDetails.rickshaw} color="#EF4444" />
      <ServiceSection title="Cycle Services" data={serviceDetails.cycle} color="#8B5CF6" />
      <ServiceSection title="Minibus Services" data={serviceDetails.minibus} color="#FF6B6B" />
      <ServiceSection title="Motor Services" data={serviceDetails.motor} color="#4ECDC4" />

      {/* Revenue Distribution */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Revenue Distribution</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={[
                    { name: 'Jeep', value: 45000, fill: '#3B82F6' },
                    { name: 'Cab', value: 63000, fill: '#10B981' },
                    { name: 'Auto', value: 19500, fill: '#F59E0B' },
                    { name: 'Rickshaw', value: 11500, fill: '#EF4444' },
                    { name: 'Cycle', value: 5500, fill: '#8B5CF6' },
                    { name: 'Minibus', value: 30500, fill: '#FF6B6B' },
                    { name: 'Motor', value: 8500, fill: '#4ECDC4' }
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
              { name: 'Jeep', value: 45000, color: '#3B82F6' },
              { name: 'Cab', value: 63000, color: '#10B981' },
              { name: 'Auto', value: 19500, color: '#F59E0B' },
              { name: 'Rickshaw', value: 11500, color: '#EF4444' },
              { name: 'Cycle', value: 5500, color: '#8B5CF6' },
              { name: 'Minibus', value: 30500, color: '#FF6B6B' },
              { name: 'Motor', value: 8500, color: '#4ECDC4' }
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