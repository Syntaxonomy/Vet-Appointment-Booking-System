import React from 'react';
import { Calendar } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Today's Appointments</h2>
            <Calendar className="text-blue-500" size={24} />
          </div>
          <p className="text-3xl font-bold">8</p>
        </div>
        {/* Add more dashboard widgets here */}
      </div>
    </div>
  );
};

export default Dashboard;