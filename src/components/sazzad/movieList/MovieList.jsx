import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios for making HTTP requests
import "./MovieList.css";
import Header from "../home/pageComponents/Header";
import Footer from "../home/pageComponents/Footer";
import FilterBar from "./FilterBar";
import MovieCard from "./MovieCard";

function MovieList() {
  const [movies, setMovies] = useState([]); // To hold all movies
  const [filteredMovies, setFilteredMovies] = useState([]); // To hold filtered movies
  const [loading, setLoading] = useState(true); // To manage loading state
  const [error, setError] = useState(null); // To handle errors if API call fails

  // Fetch movies data from API on component mount
  useEffect(() => {
    // Replace the URL with your backend endpoint
    axios
      .get("http://localhost:3000/movielist/show")
      .then((response) => {
        setMovies(response.data.data); // Set the movie data
        setFilteredMovies(response.data.data); // Set the filtered data as well
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((err) => {
        console.error("Error fetching movies:", err);
        setError("Failed to fetch movie data");
        setLoading(false);
      });
  }, []);

  // Handle filtering of movies
  const handleFilter = (filtered) => setFilteredMovies(filtered);

  // Show a loading spinner or error message if needed
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="list-page">
      <Header />
      <div className="movie-list-page">
        <h1 className="title">Movie List</h1>
        <FilterBar movies={movies} onFilter={handleFilter} />
        <div className="movie-grid">
          {filteredMovies.map((movie) => (
            <MovieCard key={movie._id} movie={movie} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MovieList;
