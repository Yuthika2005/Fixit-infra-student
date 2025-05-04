import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react";


const OutingRequest = () => {
  const [outingData, setOutingData] = useState({
    year: "",
    reason: "",
    outingDate: "",
    outingTime: "",
    returnDate: "",
  });

  const [outingRecords, setOutingRecords] = useState([
    { id: 1, year: "3", reason: "Family Function", outingDate: "2025-03-10", outingTime: "10:00", returnDate: "2025-03-12", status: "Completed" },
    { id: 2, year: "3", reason: "Medical Checkup", outingDate: "2025-04-02", outingTime: "08:30", returnDate: "2025-04-02", status: "Approved" },
    { id: 3, year: "3", reason: "Vacation", outingDate: "2025-04-15", outingTime: "12:00", returnDate: "2025-04-18", status: "Pending" },
  ]);

  const handleChange = (e) => {
    setOutingData({ ...outingData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Outing request submitted successfully!");
    setOutingRecords([...outingRecords, { id: outingRecords.length + 1, ...outingData, status: "Pending" }]);

    // Reset the form
    setOutingData({
      year: "",
      reason: "",
      outingDate: "",
      outingTime: "",
      returnDate: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-200 to-indigo-100 p-8">
      {/* Past Outings Section */}
      <div className="w-full max-w-3xl bg-white p-6 shadow-lg rounded-lg mb-6">
        <h2 className="text-xl font-bold text-indigo-700 mb-4">Past Outing Records</h2>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="p-3">Year</th>
                <th className="p-3">Reason</th>
                <th className="p-3">Outing Date</th>
                <th className="p-3">Return Date</th>
                <th className="p-3">Status</th>
                <th className="p-3">QR Code</th>
              </tr>
            </thead>
            <tbody>
              {outingRecords
                .sort((a, b) => new Date(b.outingDate) - new Date(a.outingDate))
                .map((record) => (
                  <tr
                    key={record.id}
                    className={`border border-gray-300 text-center ${record.status === "Completed" ? "opacity-50" : ""}`}
                  >
                    <td className="p-3">{record.year}</td>
                    <td className="p-3">{record.reason}</td>
                    <td className="p-3">{record.outingDate}</td>
                    <td className="p-3">{record.returnDate}</td>
                    <td
                      className={`p-3 font-semibold ${
                        record.status === "Approved"
                          ? "text-green-600"
                          : record.status === "Pending"
                          ? "text-yellow-600"
                          : "text-gray-500"
                      }`}
                    >
                      {record.status}
                    </td>
                    <td className="p-3">{record.status === "Approved" ? <QRCodeSVG value={record.id.toString()} size={50} /> : "-"}</td>

                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Outing Request Form */}
      <div className="bg-white p-8 shadow-lg rounded-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">Outing Request</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <select
            name="year"
            required
            onChange={handleChange}
            value={outingData.year}
            className="w-full p-3 border border-gray-300 rounded-lg"
          >
            <option value="">Select Year</option>
            <option value="1">1st Year</option>
            <option value="2">2nd Year</option>
            <option value="3">3rd Year</option>
            <option value="4">4th Year</option>
          </select>
          <input
            type="text"
            name="reason"
            placeholder="Reason for Outing"
            required
            value={outingData.reason}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="date"
            name="outingDate"
            required
            value={outingData.outingDate}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="time"
            name="outingTime"
            required
            value={outingData.outingTime}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="date"
            name="returnDate"
            required
            value={outingData.returnDate}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-all"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default OutingRequest;
