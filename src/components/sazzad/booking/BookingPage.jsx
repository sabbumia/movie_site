// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import './BookingPage.css';
// import Header from '../home/pageComponents/Header';
// import Footer from '../home/pageComponents/Footer';

// const BookingPage = () => {
//   // Get movie details from the state passed through react-router navigation
//   const location = useLocation();
//   const { movieTitle, moviePoster, movieId, userId } = location.state || {}; // Ensure movieId and userId are passed

//   // Define state variables for booking
//   const [date, setDate] = useState('');
//   const [time, setTime] = useState('');
//   const [seatType, setSeatType] = useState('');
//   const [selectedSeats, setSelectedSeats] = useState([]);

//   const handleSeatClick = (seat) => {
//     setSelectedSeats((prev) =>
//       prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
//     );
//   };

//   const calculateTotalPrice = () => {
//     const seatPrices = { VIP: 500, Regular: 300, Economy: 200 };
//     return selectedSeats.length * (seatPrices[seatType] || 0);
//   };

//   const confirmBooking = async () => {
//     const total_price = calculateTotalPrice();
//     const bookingDetails = {
//       user_id: userId,
//       movie_id: movieId,
//       show_time: `${date}T${time}`,
//       date,
//       seats: selectedSeats.length ? selectedSeats : undefined,
//       total_price,
//     };

//     try {
//       const response = await fetch('http://localhost:3000/user/bookings', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(bookingDetails),
//       });

//       if (response.ok) {
//         alert(`Booking confirmed for ${movieTitle}`);
//       } else {
//         const errorData = await response.json();
//         alert(`Failed to confirm booking: ${errorData.message}`);
//       }
//     } catch (error) {
//       alert(`Error confirming booking: ${error.message}`);
//     }
//   };

//   return (
//     <div className="bookingPage">
//       <Header />
//       <h1>Book {movieTitle}</h1>
//       <img className="bookingPage__poster" src={moviePoster} alt={movieTitle} />

//       <div className="bookingPage__options">
//         <label>
//           Select Date:
//           <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
//         </label>
//         <label>
//           Select Show Time:
//           <select value={time} onChange={(e) => setTime(e.target.value)}>
//             <option value="">Choose Show Time</option>
//             <option value="12:00:00">12:00 PM</option>
//             <option value="16:00:00">4:00 PM</option>
//             <option value="20:00:00">8:00 PM</option>
//           </select>
//         </label>

//         <label>
//           Select Seat Type:
//           <select value={seatType} onChange={(e) => setSeatType(e.target.value)}>
//             <option value="">Choose seat type</option>
//             <option value="VIP">VIP</option>
//             <option value="Regular">Regular</option>
//             <option value="Economy">Economy</option>
//           </select>
//         </label>
//       </div>

//       <div className="bookingPage__seatSelection">
//         <h2>Select Your Seats</h2>
//         <div className="seatGrid">
//           {Array.from({ length: 30 }, (_, i) => (
//             <div
//               key={i}
//               className={`seat ${selectedSeats.includes(i) ? 'selected' : ''}`}
//               onClick={() => handleSeatClick(i)}
//             >
//               {i + 1}
//             </div>
//           ))}
//         </div>
//       </div>

//       <button className="bookingPage__confirmButton" onClick={confirmBooking}>
//         Confirm Booking
//       </button>
//       <Footer />
//     </div>
//   );
// };

// export default BookingPage;


import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './BookingPage.css';
import Header from '../home/pageComponents/Header';
import Footer from '../home/pageComponents/Footer';

const BookingPage = () => {
  const location = useLocation();
  const { movieTitle, moviePoster, movieId, userId } = location.state || {};

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [seatType, setSeatType] = useState('');
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [seatsStatus, setSeatsStatus] = useState([]); // Stores the status of each seat (booked/available)

  // Function to fetch available and booked seats from the backend
  const fetchSeatsStatus = async (date, time) => {
    try {
      const response = await fetch(`http://localhost:3000/user/bookings/seats?movieId=${movieId}&date=${date}&time=${time}`);
      const data = await response.json();

      if (response.ok) {
        setSeatsStatus(data.seats); // Assuming backend returns an array of seat statuses
      } else {
        alert(`Error fetching seat status: ${data.message}`);
      }
    } catch (error) {
      alert(`Error fetching seat status: ${error.message}`);
    }
  };

  useEffect(() => {
    if (date && time) {
      fetchSeatsStatus(date, time);
    }
  }, [date, time]);

  const handleSeatClick = (seat) => {
    if (seatsStatus[seat] === 'booked') {
      return; // Prevent selecting already booked seats
    }

    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  const calculateTotalPrice = () => {
    const seatPrices = { VIP: 500, Regular: 300, Economy: 200 };
    return selectedSeats.length * (seatPrices[seatType] || 0);
  };

  const confirmBooking = async () => {
    const total_price = calculateTotalPrice();
    const bookingDetails = {
      user_id: userId,
      movie_id: movieId,
      show_time: `${date}T${time}`,
      date,
      seats: selectedSeats.length ? selectedSeats : undefined,
      total_price,
    };

    try {
      const response = await fetch('http://localhost:3000/user/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingDetails),
      });

      if (response.ok) {
        alert(`Booking confirmed for ${movieTitle} id is: ${movieId}`);
      } else {
        const errorData = await response.json();
        alert(`Failed to confirm booking: ${errorData.message}`);
      }
    } catch (error) {
      alert(`Error confirming booking: ${error.message}`);
    }
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
            <option value="12:00:00">12:00 PM</option>
            <option value="16:00:00">4:00 PM</option>
            <option value="20:00:00">8:00 PM</option>
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
              className={`seat ${seatsStatus[i] === 'booked' ? 'booked' : seatsStatus[i] === 'available' && selectedSeats.includes(i) ? 'selected' : 'available'}`}
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
