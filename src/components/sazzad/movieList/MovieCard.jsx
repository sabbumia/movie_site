// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './MovieCard.css';

// function MovieCard({ movie }) {
//   const navigate = useNavigate();

//   // Navigate to the booking page with movie details
//   const handleBooking = () => {
//     navigate('/booking', {
//       state: {
//         movieTitle: movie.name,        // Movie title
//         moviePoster: movie.imageLink,   // Movie poster image
//         movieId: movie._id,            // Movie ID
//         userId: '6738b3b9eba3c887e0f8fee4',          // Replace with actual user ID (you can fetch this from context or state)
//       },
//     });
//   };

//   return (
//     <div className="movie-card">
//       <img src={movie.imageLink} alt={`${movie.name} poster`} className="movie-poster" />
//       <h3 className="movie-name">{movie.name}</h3>
//       <p className="movie-rating">Rating: {movie.rating}</p>
//       <button onClick={handleBooking} className="book-button">Book Now</button>
//     </div>
//   );
// }

// export default MovieCard;




import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux"; // Access Redux store
import "./MovieCard.css";

function MovieCard({ movie }) {
  const navigate = useNavigate();
  const { userId, isAuthenticated } = useSelector((state) => state.auth); // Access userId from Redux store

  console.log("MovieCard: Authenticated:", isAuthenticated);
  console.log("MovieCard: User ID:", userId);
  // Navigate to the booking page with movie details
  const handleBooking = () => {
    if (!isAuthenticated) {
      alert("Please log in to book a movie.");
      navigate("/login"); // Redirect to login page
      return;
    }

    navigate("/booking", {
      state: {
        movieTitle: movie.name,
        moviePoster: movie.imageLink,
        movieId: movie._id,
        userId: userId, // Pass actual userId from Redux
      },
    });
  };

  return (
    <div className="movie-card">
      <img src={movie.imageLink} alt={`${movie.name} poster`} className="movie-poster" />
      <h3 className="movie-name">{movie.name}</h3>
      <p className="movie-rating">Rating: {movie.rating}</p>
      <button onClick={handleBooking} className="book-button">
        Book Now
      </button>
    </div>
  );
}

export default MovieCard;
