// src/BookingPage.jsx

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './BookingPage.css';
import Header from '../home/pageComponents/Header';
import Footer from '../home/pageComponents/Footer';

const BookingPage = () => {
  const location = useLocation();
  const { movieTitle, moviePoster } = location.state || {};
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [seatType, setSeatType] = useState('');
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  const confirmBooking = () => {
    alert(`Booking confirmed for ${movieTitle}`);
  };

  return (
    <div className="bookingPage">
      <Header />
      <h1>Book {movieTitle}</h1>
      <img className="bookingPage__poster" src={moviePoster} alt={movieTitle} />

      <div className="bookingPage__options">
        <label>
          Select Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <label>
          Select Show Time:
          <select value={time} onChange={(e) => setTime(e.target.value)}>
            <option value="">Choose Show Time</option>
            <option value="12.00 PM">12.00 PM</option>
            <option value="4.00 PM">4.00 PM</option>
            <option value="8.00 PM">8.00 PM</option>
          </select>
        </label>

        <label>
          Select Seat Type:
          <select value={seatType} onChange={(e) => setSeatType(e.target.value)}>
            <option value="">Choose seat type</option>
            <option value="VIP">VIP</option>
            <option value="Regular">Regular</option>
            <option value="Economy">Economy</option>
          </select>
        </label>
      </div>

      <div className="bookingPage__seatSelection">
        <h2>Select Your Seats</h2>
        <div className="seatGrid">
          {Array.from({ length: 30 }, (_, i) => (
            <div
              key={i}
              className={`seat ${selectedSeats.includes(i) ? 'selected' : ''}`}
              onClick={() => handleSeatClick(i)}
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>

      <button className="bookingPage__confirmButton" onClick={confirmBooking}>
        Confirm Booking
      </button>
      <Footer />
    </div>
  );
};

export default BookingPage;
