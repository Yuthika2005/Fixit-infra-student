import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RoomcleanreportStyle.css';

const daysInMonth = (month, year) => new Date(year, month, 0).getDate();

const Roomcleanreport = () => {
  const roomNo = '339';
  const currentMonth = '03'; // March
  const currentYear = new Date().getFullYear();
  const days = daysInMonth(3, currentYear);
  const [cleaningStatus, setCleaningStatus] = useState({});

  // Fetch room cleaning status from backend
  useEffect(() => {
    axios.get(`/api/roomclean?roomNo=${roomNo}&month=${currentMonth}&year=${currentYear}`)
      .then((res) => {
        const statusMap = {};
        res.data.forEach((entry) => {
          statusMap[entry.date] = entry.cleaned;
        });
        setCleaningStatus(statusMap);
      })
      .catch((err) => console.error("Error fetching cleaning status:", err));
  }, [roomNo, currentMonth, currentYear]);

  // Handle checkbox toggle
  const handleCheckboxChange = (date) => {
    const newStatus = !cleaningStatus[date];
    setCleaningStatus((prev) => ({ ...prev, [date]: newStatus }));

    axios.post('/api/roomclean/update', { roomNo, date, cleaned: newStatus })
      .then(() => console.log("Status updated"))
      .catch((err) => console.error("Error updating status:", err));
  };

  return (
    <div className='room-clean-container'>
      <div className='room-clean-box'>
        <h2>Room No: {roomNo}</h2>
        <h3>March</h3>
        <div className='calendar-grid'>
          {Array.from({ length: days }, (_, i) => {
            const date = `${currentYear}-03-${String(i + 1).padStart(2, '0')}`;
            return (
              <div key={i} className='day-box'>
                <label>
                  <input
                    type='checkbox'
                    checked={cleaningStatus[date] || false}
                    onChange={() => handleCheckboxChange(date)}
                  />
                  <span>{i + 1}</span>
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Roomcleanreport;
