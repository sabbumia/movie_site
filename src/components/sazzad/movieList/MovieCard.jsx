import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MovieCard.css'

function MovieCard({ movie }) {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate('/booking', { state: { movie } });
  };

  return (
    <div className="movie-card">
      <img src={movie.poster} alt={`${movie.name} poster`} className="movie-poster" />
      <h3 className="movie-name">{movie.name}</h3>
      <p className="movie-rating">Rating: {movie.rating}</p>
      <button onClick={handleBooking} className="book-button">Book Now</button>
    </div>
  );
}

export default MovieCard;
