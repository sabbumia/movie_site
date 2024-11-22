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


// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import './BookingPage.css';
// import Header from '../home/pageComponents/Header';
// import Footer from '../home/pageComponents/Footer';

// const BookingPage = () => {
//   const location = useLocation();
//   const { movieTitle, moviePoster, movieId, userId } = location.state || {};

//   const [date, setDate] = useState('');
//   const [time, setTime] = useState('');
//   const [seatType, setSeatType] = useState('');
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [seatsStatus, setSeatsStatus] = useState([]); // Stores the status of each seat (booked/available)

//   // Function to fetch available and booked seats from the backend
//   const fetchSeatsStatus = async (date, time) => {
//     try {
//       const response = await fetch(`http://localhost:3000/user/bookings/seats?movieId=${movieId}&date=${date}&time=${time}`);
//       const data = await response.json();

//       if (response.ok) {
//         // setSeatsStatus(data.seats); 
//         alert(`success fetching seat status: ${data.seats}`);
//         alert(`success fetching seat status: ${time}`);
//         alert(`success fetching seat status: ${data}`);
//       } else {
//         alert(`Error fetching seat status: ${data.message}`);
//       }
//     } catch (error) {
//       alert(`Error fetching seat status: ${error.message}`);
//     }
//   };

//   useEffect(() => {
//     if (date && time) {
//       fetchSeatsStatus(date, time);
//     }
//   }, [date, time]);

//   const handleSeatClick = (seat) => {
//     if (seatsStatus[seat] === 'booked') {
//       return; // Prevent selecting already booked seats
//     }

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
//       show_time: time,
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
//         alert(`Booking confirmed for ${movieTitle} id is: ${movieId}`);
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
//               className={`seat ${seatsStatus[i] === 'booked' ? 'booked' : seatsStatus[i] === 'available' && selectedSeats.includes(i) ? 'selected' : 'available'}`}
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





// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import "./BookingPage.css";
// import Header from "../home/pageComponents/Header";
// import Footer from "../home/pageComponents/Footer";

// const BookingPage = () => {
//   const location = useLocation();
//   const { movieTitle, moviePoster, movieId, userId } = location.state || {};

//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");
//   const [seatType, setSeatType] = useState("");
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [seatsStatus, setSeatsStatus] = useState([]); // Stores the status of each seat

//   const fetchSeatsStatus = async (date, time) => {
//     try {
//       const response = await fetch(
//         `http://localhost:3000/user/bookings/seats?movieId=${movieId}&date=${date}&time=${time}`
//       );
//       const data = await response.json();

//       if (response.ok) {
//         setSeatsStatus(data.seats); // Update seat statuses
//       } else {
//         alert(`Error fetching seat status: ${data.message}`);
//       }
//     } catch (error) {
//       alert(`Error fetching seat status: ${error.message}`);
//     }
//   };

//   useEffect(() => {
//     if (date && time) {
//       fetchSeatsStatus(date, time);
//     }
//   }, [date, time]);

//   const handleSeatClick = (seatIndex) => {
//     if (seatsStatus[seatIndex] === "booked") {
//       return; // Prevent selecting already booked seats
//     }

//     setSelectedSeats((prev) =>
//       prev.includes(seatIndex)
//         ? prev.filter((s) => s !== seatIndex)
//         : [...prev, seatIndex]
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
//       show_time: time,
//       date,
//       seats: selectedSeats,
//       total_price,
//     };

//     try {
//       const response = await fetch("http://localhost:3000/user/bookings", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(bookingDetails),
//       });

//       if (response.ok) {
//         alert(`Booking confirmed for ${movieTitle}`);
//         setSelectedSeats([]);
//         fetchSeatsStatus(date, time); // Refresh seat status after booking
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
//           <input
//             type="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//           />
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
//               className={`seat ${
//                 seatsStatus[i] === "booked"
//                   ? "booked"
//                   : selectedSeats.includes(i)
//                   ? "selected"
//                   : "available"
//               }`}
//               onClick={() => handleSeatClick(i)}
//             >
//               {i + 1}
//             </div>
//           ))}
//         </div>
//       </div>

//       <button
//         className="bookingPage__confirmButton"
//         onClick={confirmBooking}
//         disabled={!selectedSeats.length || !seatType}
//       >
//         Confirm Booking
//       </button>
//       <Footer />
//     </div>
//   );
// };

// export default BookingPage;




// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import './BookingPage.css';
// import Header from '../home/pageComponents/Header';
// import Footer from '../home/pageComponents/Footer';

// const BookingPage = () => {
//   const location = useLocation();
//   const { movieTitle, moviePoster, movieId, userId } = location.state || {};

//   const [date, setDate] = useState('');
//   const [time, setTime] = useState('');
//   const [seatType, setSeatType] = useState('');
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [seatsStatus, setSeatsStatus] = useState([]); // Stores the status of each seat (booked/available)

//   // Function to fetch available and booked seats from the backend
//   const fetchSeatsStatus = async (date, time) => {
//     try {
//       const response = await fetch(`http://localhost:3000/user/bookings/seats?movieId=${movieId}&date=${date}&time=${time}`);
//       const data = await response.json();

//       if (response.ok) {
//         setSeatsStatus(data.seats); // Populate seat status
//       } else {
//         alert(`Error fetching seat status: ${data.message}`);
//       }
//     } catch (error) {
//       alert(`Error fetching seat status: ${error.message}`);
//     }
//   };

//   useEffect(() => {
//     if (date && time) {
//       fetchSeatsStatus(date, time);
//     }
//   }, [date, time]);

//   const handleSeatClick = (seatIndex) => {
//     if (seatsStatus[seatIndex] === 'booked') {
//       return; // Prevent selecting already booked seats
//     }

//     setSelectedSeats((prev) =>
//       prev.includes(seatIndex)
//         ? prev.filter((seat) => seat !== seatIndex) // Deselect if already selected
//         : [...prev, seatIndex] // Add to selected seats
//     );
//   };

//   const calculateTotalPrice = () => {
//     const seatPrices = { VIP: 500, Regular: 300, Economy: 200 };
//     return selectedSeats.length * (seatPrices[seatType] || 0);
//   };

//   const confirmBooking = async () => {
//     if (!selectedSeats.length) {
//       alert('Please select at least one seat to book.');
//       return;
//     }

//     const total_price = calculateTotalPrice();
//     const bookingDetails = {
//       user_id: userId,
//       movie_id: movieId,
//       show_time: time,
//       date,
//       seats: selectedSeats,
//       total_price,
//     };

//     try {
//       const response = await fetch('http://localhost:3000/user/bookings', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(bookingDetails),
//       });

//       if (response.ok) {
//         alert(`Booking confirmed for ${movieTitle}!`);
//         setSelectedSeats([]); // Clear selected seats after successful booking
//         fetchSeatsStatus(date, time); // Refresh seat status
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
//               className={`seat ${seatsStatus[i] === 'booked' ? 'booked' : selectedSeats.includes(i) ? 'selected' : 'available'}`}
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



//Old Final Codev 100% work

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
// import { useLocation } from 'react-router-dom';
// import './BookingPage.css';
// import Header from '../home/pageComponents/Header';
// import Footer from '../home/pageComponents/Footer';

// const BookingPage = () => {

//   const navigate = useNavigate();
//   const location = useLocation();
//   const { movieTitle, moviePoster, movieId, userId } = location.state || {};

//   const [date, setDate] = useState('');
//   const [time, setTime] = useState('');
//   const [seatType, setSeatType] = useState('');
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [seatsStatus, setSeatsStatus] = useState([]); // Array representing seat availability

//   // Fetch seat availability based on selected date and time
//   const fetchSeatsStatus = async () => {
//     if (!date || !time) return;

//     try {
//       const response = await fetch(
//         `http://localhost:3000/user/bookings/seats?movieId=${movieId}&date=${date}&time=${time}`
//       );
//       const data = await response.json();

//       if (response.ok) {
//         setSeatsStatus(data.seats); // Update the seatsStatus state
//       } else {
//         console.error('Failed to fetch seat status:', data.message);
//       }
//     } catch (error) {
//       console.error('Error fetching seat status:', error);
//     }
//   };

//   // Refresh seat status when the date or time changes
//   useEffect(() => {
//     fetchSeatsStatus();
//   }, [date, time]); // Fetch seats whenever date or time changes

//   // Handle seat selection
//   const handleSeatClick = (seatIndex) => {
//     if (seatsStatus[seatIndex] === 'booked') {
//       return; // Prevent selecting already booked seats
//     }

//     setSelectedSeats((prev) =>
//       prev.includes(seatIndex)
//         ? prev.filter((seat) => seat !== seatIndex) // Deselect if already selected
//         : [...prev, seatIndex] // Add to selected seats
//     );
//   };

//   // Calculate the total price based on selected seat type
//   const calculateTotalPrice = () => {
//     const seatPrices = { VIP: 500, Regular: 300, Economy: 200 };
//     return selectedSeats.length * (seatPrices[seatType] || 0);
//   };

//   // Confirm the booking and send it to the backend
//   const confirmBooking = async () => {
//     if (!selectedSeats.length) {
//       alert('Please select at least one seat to book.');
//       return;
//     }

//     const total_price = calculateTotalPrice();
//     const bookingDetails = {
//       user_id: userId,
//       movie_id: movieId,
//       show_time: time,
//       date,
//       seats: selectedSeats,
//       total_price,
//     };

//     try {
//       const response = await fetch('http://localhost:3000/user/bookings', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(bookingDetails),
//       });

//       if (response.ok) {
//         alert(`Booking confirmed for ${movieTitle}!`);
//         setSelectedSeats([]); // Clear selected seats after successful booking
//         await fetchSeatsStatus(); // Refresh seat statuses
//         // Navigate to PaymentGateway with total_price passed via state
//         navigate('/payment', { state: { total_price } });
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
//               className={`seat ${
//                 seatsStatus[i] === 'booked' ? 'booked' : selectedSeats.includes(i) ? 'selected' : 'available'
//               }`}
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
import { useNavigate } from 'react-router-dom'; 
import { useLocation } from 'react-router-dom';
import './BookingPage.css';
import Header from '../home/pageComponents/Header';
import Footer from '../home/pageComponents/Footer';

const BookingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { movieTitle, moviePoster, movieId, userId } = location.state || {};

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [seatType, setSeatType] = useState('');
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [seatsStatus, setSeatsStatus] = useState([]);

  const fetchSeatsStatus = async () => {
    if (!date || !time) return;

    try {
      const response = await fetch(
        `http://localhost:3000/user/bookings/seats?movieId=${movieId}&date=${date}&time=${time}`
      );
      const data = await response.json();
      if (response.ok) {
        setSeatsStatus(data.seats);
      } else {
        console.error('Failed to fetch seat status:', data.message);
      }
    } catch (error) {
      console.error('Error fetching seat status:', error);
    }
  };

  useEffect(() => {
    fetchSeatsStatus();
  }, [date, time]);

  const handleSeatClick = (seatIndex) => {
    if (seatsStatus[seatIndex] === 'booked') {
      return; // Prevent selecting already booked seats
    }

    setSelectedSeats((prev) =>
      prev.includes(seatIndex)
        ? prev.filter((seat) => seat !== seatIndex)
        : [...prev, seatIndex]
    );
  };

  const calculateTotalPrice = () => {
    const seatPrices = { VIP: 500, Regular: 300, Economy: 200 };
    return selectedSeats.length * (seatPrices[seatType] || 0);
  };

  const confirmBooking = async () => {
    if (!selectedSeats.length) {
      alert('Please select at least one seat to book.');
      return;
    }

    const total_price = calculateTotalPrice();
    const bookingDetails = {
      user_id: userId,
      movie_id: movieId,
      show_time: time,
      date,
      seats: selectedSeats,
      total_price,
    };

    try {
      const response = await fetch('http://localhost:3000/user/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingDetails),
      });

      if (response.ok) {
        const responseData = await response.json();
        const { bookingId } = responseData; // Extract bookingId from the response
        alert(`Booking confirmed for ${movieTitle}! and Booking ID: ${bookingId} `);
        setSelectedSeats([]);
        await fetchSeatsStatus();

        // Navigate to PaymentGateway with bookingId and total_price
        navigate('/payment', { state: { total_price, bookingId, userId } });
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
              className={`seat ${
                seatsStatus[i] === 'booked' ? 'booked' : selectedSeats.includes(i) ? 'selected' : 'available'
              }`}
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
