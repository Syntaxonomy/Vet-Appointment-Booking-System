import React, { useState } from 'react';

const AdminConfig: React.FC = () => {
  const [config, setConfig] = useState({
    appointmentDuration: 30,
    workingHoursStart: '09:00',
    workingHoursEnd: '17:00',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setConfig({ ...config, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the updated config to your backend
    console.log('Updated config:', config);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Admin Configuration</h1>
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label className="block mb-2">Appointment Duration (minutes)</label>
          <input
            type="number"
            name="appointmentDuration"
            value={config.appointmentDuration}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Working Hours Start</label>
          <input
            type="time"
            name="workingHoursStart"
            value={config.workingHoursStart}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Working Hours End</label>
          <input
            type="time"
            name="workingHoursEnd"
            value={config.workingHoursEnd}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Save Configuration
        </button>
      </form>
    </div>
  );
};

export default AdminConfig;