import React, { useState } from 'react';

const AppointmentBooking: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    petName: '',
    ownerName: '',
    date: '',
    time: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Appointment booked:', formData);
    // Reset form or navigate to confirmation page
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Book an Appointment</h1>
      <form onSubmit={handleSubmit} className="max-w-md">
        {step === 1 && (
          <div>
            <input
              type="text"
              name="petName"
              value={formData.petName}
              onChange={handleInputChange}
              placeholder="Pet Name"
              className="w-full p-2 mb-4 border rounded"
              required
            />
            <input
              type="text"
              name="ownerName"
              value={formData.ownerName}
              onChange={handleInputChange}
              placeholder="Owner Name"
              className="w-full p-2 mb-4 border rounded"
              required
            />
            <button
              type="button"
              onClick={() => setStep(2)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Next
            </button>
          </div>
        )}
        {step === 2 && (
          <div>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="w-full p-2 mb-4 border rounded"
              required
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              className="w-full p-2 mb-4 border rounded"
              required
            />
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Book Appointment
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default AppointmentBooking;