import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginStyle.css";

const Login = ({ onLogin }) => {
  const API_URL = "https://fixit-hostel-backend.onrender.com";
  const [rollNo, setRollNo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!rollNo || !password) {
      setError("Please enter both Roll No and Password");
      return;
    }

    try {
      const response = await fetch(`${API_URL}/api/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ rollNo, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message);
        return;
      }

      localStorage.setItem("user", JSON.stringify(data.user)); 
      onLogin(); // Update authentication state in App.js
      navigate("/"); // Redirect to home after login
    } catch (error) {
      setError("Login failed. Try again later.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Roll Number</label>
            <input
              type="text"
              className="input-field"
              value={rollNo}
              placeholder="Enter Roll No"
              onChange={(e) => setRollNo(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="input-field"
              value={password}
               placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p>username:22ec251 </p>
          <p>password:arun2004 </p>
          
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
