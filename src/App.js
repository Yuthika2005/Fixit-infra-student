import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Complaintbox from './components/Complaintbox';
import Complaintreport from './components/Complaintreport';
import Analytics from './components/AnalyticsPart';
import Complaintform from './components/Complaintform';
import Login from "./components/Login";
import Laundry from "./components/Laundry";
import MainPage from "./components/MainPage"; 
import './App.css';
import OutingRequest from './components/OutingRequest';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated);
  }, [isAuthenticated]);

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
  };

  return (
    <Router>
      {!isAuthenticated ? (
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/student-login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      ) : (
        <div className="app-container">
          <Navbar onLogout={handleLogout} />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/complaint-box" element={<Complaintbox />} />
              <Route path="/complaint-report" element={<Complaintreport />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/complaintform" element={<Complaintform />} />
              <Route path="/laundry" element={<Laundry />} />
              <Route path="/outingrequest" element={<OutingRequest />} />
              <Route path="/student-login" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </div>
      )}
    </Router>
  );
};

export default App;
