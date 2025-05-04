import React from 'react';
import { useNavigate } from 'react-router-dom';

const Complaintbox = () => {
  const navigate = useNavigate();

  const complaints = [
    {
      title: "Room & Infrastructure Issues",
      description: "Damaged furniture, broken doors, poor ventilation, or structural problems in hostel rooms."
    },
    {
      title: "Electrical & Power Issues",
      description: "Frequent power outages, non-functional lights, faulty charging points, or AC/fan malfunctions."
    },
    {
      title: "Water & Sanitation Problems",
      description: "Leaking pipes, dirty or clogged washrooms, water shortage, or poor drainage system."
    },
    {
      title: "Internet & Network Connectivity",
      description: "Weak or no WiFi in hostel rooms, slow speed, or connectivity issues in common areas."
    },
    {
      title: "Security & Safety Concerns",
      description: "CCTV not working, broken locks, unauthorized entry, or security personnel issues."
    },
    {
      title: "Mess & Food Complaints",
      description: "Unhygienic food, lack of variety, quality issues, or improper meal timings."
    }
  ];

  const handleCardClick = (item) => {
    navigate('/complaintform', { state: { complaintType: item.title } });
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center p-6">
      <h2 className="text-3xl font-bold text-blue-600 mb-4">Complaint Box</h2>
      <p className="text-gray-600 mb-6 text-center">Submit your complaints here.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full">
        {complaints.map((item, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg cursor-pointer transition transform hover:scale-105 border-l-4 border-blue-500"
            onClick={() => handleCardClick(item)}
          >
            <h3 className="text-lg font-semibold text-blue-700">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Complaintbox;