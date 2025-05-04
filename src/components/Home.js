import React, { useState } from "react";
import ComplaintCards from "./Complaintcards";
import { Star } from "lucide-react";
import QRCode from "react-qr-code";

const Home = () => {
  const [feedback, setFeedback] = useState(4);

  return (
    <div className="p-6 bg-blue-100">
      <h1 className="text-3xl font-bold text-blue-600 mb-2">FixIt Hostel</h1>
      <p className="text-gray-700 mb-6">
        Efficiently manage hostel facilities, track maintenance, and ensure a safe environment. <br />
        Stay informed with real-time updates and feedback for continuous improvements.
      </p>
      

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Complaint Section (Left Side) */}
        <div className="md:col-span-2">
          <ComplaintCards />
        </div>

        {/* User Details & Reports (Right Side) */}
        <div className="space-y-4">
          {/* User Details */}
          <div className="bg-white shadow-md p-4 rounded-xl border border-gray-200">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">User Details</h2>
            <p><strong>Name:</strong> John Doe</p>
            <p><strong>Roll No:</strong> 123456</p>
            <p><strong>Room No:</strong> 101</p>
            <p><strong>Email:</strong> johndoe@example.com</p>
            <p><strong>Room Members:</strong> 1, 2, 3</p>
          </div>

          {/* Outing Receipt with QR Code */}
          <div className="bg-white shadow-md p-4 rounded-xl border border-gray-200 text-center">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Outing Receipt</h2>
            <QRCode value="https://fixit-hostel-outing.com/123456" size={100} className="mx-auto" />
          </div>

          {/* Attendance Status */}
          <div className="bg-white shadow-md p-4 rounded-xl border border-gray-200">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Attendance Status</h2>
            <span className="text-green-600 font-bold text-lg">Present</span> {/* Change to text-red-600 for absent */}
          </div>

          {/* Room Cleaning Report */}
          <div className="bg-white shadow-md p-4 rounded-xl border border-gray-200">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Room Cleaning Report</h2>
            <p><strong>Last Cleaned:</strong> April 1, 2025</p>
          </div>

          {/* Mess Feedback */}
          <div className="bg-white shadow-md p-4 rounded-xl border border-gray-200">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Mess Feedback</h2>
            <p><strong>Breakfast:</strong> 4.2 ★ - "Good variety and taste"</p>
            <p><strong>Lunch:</strong> 3.8 ★ - "Needs better spice balance"</p>
            <p><strong>Dinner:</strong> 4.5 ★ - "Excellent quality and serving"</p>

            {/* Star Rating Input */}
            <div className="flex items-center mt-3">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  size={20}
                  className={`cursor-pointer ${index < feedback ? "text-yellow-500" : "text-gray-300"}`}
                  onClick={() => setFeedback(index + 1)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
