import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./GetuserdetailStyle.css";

const Getuserdetail = ({ rollNo }) => {
  const API_URL = "https://fixit-hostel-backend.onrender.com";
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      const token = localStorage.getItem("token"); // ✅ Retrieve token from local storage
      if (!token) {
        setError("Unauthorized: No token provided");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`${API_URL}/api/users/details?rollNo=${rollNo}`, {
          headers: {
            Authorization: `Bearer ${token}`, // ✅ Send token for authentication
          },
        });
        setUser(response.data);
      } catch (err) {
        setError(err.response?.data?.message || "Error fetching user details");
      } finally {
        setLoading(false);
      }
    };

    if (rollNo) fetchUserDetails();
  }, [rollNo]);

  if (loading) return <div className="loading">Loading user details...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="user-detail-container">
      <h2>User Details</h2>
      {user ? (
        <div className="user-card">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Roll No:</strong> {user.rollNo}</p>
          <p><strong>Department:</strong> {user.department}</p>
          <p><strong>Batch:</strong> {user.batch}</p>
          <p><strong>Hostel:</strong> {user.hostel}</p>
          <p><strong>Room No:</strong> {user.roomNo}</p>
        </div>
      ) : (
        <p className="error">User not found</p>
      )}
    </div>
  );
};

export default Getuserdetail;
