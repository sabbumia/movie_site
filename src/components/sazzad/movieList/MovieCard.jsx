import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MovieCard.css';

function MovieCard({ movie }) {
  const navigate = useNavigate();

  // Navigate to the booking page with movie details
  const handleBooking = () => {
    navigate('/booking', {
      state: {
        movieTitle: movie.name,        // Movie title
        moviePoster: movie.imageLink,   // Movie poster image
        movieId: movie._id,            // Movie ID
        userId: '6738b3b9eba3c887e0f8fee4',          // Replace with actual user ID (you can fetch this from context or state)
      },
    });
  };

  return (
    <div className="movie-card">
      <img src={movie.imageLink} alt={`${movie.name} poster`} className="movie-poster" />
      <h3 className="movie-name">{movie.name}</h3>
      <p className="movie-rating">Rating: {movie.rating}</p>
      <button onClick={handleBooking} className="book-button">Book Now</button>
    </div>
  );
}

export default MovieCard;
