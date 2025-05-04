import React, { useEffect, useState } from "react";

const Complaintreport = () => {
  const API_URL = "https://fixit-hostel-backend.onrender.com";
  const [complaints, setComplaints] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const response = await fetch(`${API_URL}/api/complaints`);
        if (!response.ok) {
          throw new Error("Failed to fetch complaints");
        }
        const data = await response.json();

        const groupedComplaints = data.reduce((acc, complaint) => {
          const { complaintType } = complaint;
          if (!acc[complaintType]) {
            acc[complaintType] = [];
          }
          acc[complaintType].push(complaint);
          return acc;
        }, {});

        setComplaints(groupedComplaints);
      } catch (err) {
        console.error("Error fetching complaints:", err);
        setError("Unable to fetch complaints. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchComplaints();
  }, []);

  if (loading) {
    return <p className="text-center text-lg text-gray-600">Loading complaints...</p>;
  }

  if (error) {
    return <p className="text-center text-lg text-red-500">{error}</p>;
  }
  
  return (
    <div className="min-h-screen bg-blue-100 p-6">
      <h2 className="text-4xl font-bold text-center text-blue-800 mb-6">Complaint Report</h2>
      {Object.keys(complaints).length === 0 ? (
        <p className="text-center text-lg text-gray-600">No complaints found.</p>
      ) : (
        Object.entries(complaints).map(([type, complaintsList]) => (
          <div key={type} className="bg-white p-6 rounded-lg shadow-md mb-6 transition-transform hover:scale-105">
            <h3 className="text-xl font-semibold text-blue-700 border-b-2 pb-2">{type}</h3>
            <div className="overflow-x-auto mt-4">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-blue-500 text-white">
                  <tr>
                    <th className="py-3 px-4 text-left">Name</th>
                    <th className="py-3 px-4 text-left">Email</th>
                    <th className="py-3 px-4 text-left">Department</th>
                    <th className="py-3 px-4 text-left">Room No</th>
                    <th className="py-3 px-4 text-left">Date</th>
                    <th className="py-3 px-4 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {complaintsList.map((complaint, index) => (
                    <tr
                      key={complaint._id}
                      className={`border-b border-gray-300 ${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
                    >
                      <td className="py-3 px-4">{complaint.name}</td>
                      <td className="py-3 px-4">{complaint.email}</td>
                      <td className="py-3 px-4">{complaint.department}</td>
                      <td className="py-3 px-4">{complaint.roomNumber}</td>
                      <td className="py-3 px-4">{new Date(complaint.date).toLocaleDateString()}</td>
                      <td className="py-3 px-4">{complaint.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Complaintreport;