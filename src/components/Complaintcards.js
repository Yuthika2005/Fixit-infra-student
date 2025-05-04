import React, { useEffect, useState } from "react";
import { CheckCircle, RefreshCcw, AlertCircle } from "lucide-react";

const ComplaintCards = () => {
  const API_URL = "https://fixit-hostel-backend.onrender.com";
  const [complaintData, setComplaintData] = useState([]);

  useEffect(() => {
    const fetchComplaintStats = async () => {
      try {
        const response = await fetch(`${API_URL}/api/complaints/statsByType`);
        const data = await response.json();
        setComplaintData(data);
      } catch (error) {
        console.error("Error fetching complaint data:", error);
      }
    };

    fetchComplaintStats();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      {complaintData.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-xl p-6 shadow-md border border-gray-200 transition-transform duration-300 hover:shadow-lg hover:-translate-y-2"
        >
          <h2 className="text-xl font-semibold text-blue-600">{item._id}</h2>
          <p className="text-gray-600 mb-4">Statistics for {item._id} complaints</p>

          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 px-3 py-2 bg-red-100 text-red-600 rounded-md">
              <AlertCircle size={16} />
              <span>Raised: {item.raised}</span>
            </div>

            <div className="flex items-center gap-2 px-3 py-2 bg-yellow-100 text-yellow-700 rounded-md">
              <RefreshCcw size={16} />
              <span>Updated: {item.updated}</span>
            </div>

            <div className="flex items-center gap-2 px-3 py-2 bg-green-100 text-green-600 rounded-md">
              <CheckCircle size={16} />
              <span>Completed: {item.completed}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ComplaintCards;
