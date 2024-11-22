// import React, { useState, useEffect } from "react";
// import axios from "axios"; // Import Axios for making HTTP requests
// import "./MovieList.css";
// import Header from "../home/pageComponents/Header";
// import Footer from "../home/pageComponents/Footer";
// import FilterBar from "./FilterBar";
// import MovieCard from "./MovieCard";

// function MovieList() {
//   const [movies, setMovies] = useState([]); // To hold all movies
//   const [filteredMovies, setFilteredMovies] = useState([]); // To hold filtered movies
//   const [loading, setLoading] = useState(true); // To manage loading state
//   const [error, setError] = useState(null); // To handle errors if API call fails

//   // Fetch movies data from API on component mount
//   useEffect(() => {
//     // Replace the URL with your backend endpoint
//     axios
//       .get("http://localhost:3000/movielist/show")
//       .then((response) => {
//         setMovies(response.data.data); // Set the movie data
//         setFilteredMovies(response.data.data); // Set the filtered data as well
//         setLoading(false); // Set loading to false once data is fetched
//       })
//       .catch((err) => {
//         console.error("Error fetching movies:", err);
//         setError("Failed to fetch movie data");
//         setLoading(false);
//       });
//   }, []);

//   // Handle filtering of movies
//   const handleFilter = (filtered) => setFilteredMovies(filtered);

//   // Show a loading spinner or error message if needed
//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="list-page">
//       <Header />
//       <div className="movie-list-page">
//         <h1 className="title">Movie List</h1>
//         <FilterBar movies={movies} onFilter={handleFilter} />
//         <div className="movie-grid">
//           {filteredMovies.map((movie) => (
//             <MovieCard key={movie._id} movie={movie} />
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default MovieList;

// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchMovies, filterMovies } from "../../../store/movieSlice";
// import "./MovieList.css";
// import Header from "../home/pageComponents/Header";
// import Footer from "../home/pageComponents/Footer";
// import FilterBar from "./FilterBar";
// import MovieCard from "./MovieCard";

// function MovieList() {
//   const dispatch = useDispatch();

//   // Access movies and user authentication state
//   const { movies, filteredMovies, loading, error } = useSelector(
//     (state) => state.movies
//   );
//   const { isAuthenticated } = useSelector((state) => state.auth); // Check if user is authenticated

//   useEffect(() => {
//     dispatch(fetchMovies());
//   }, [dispatch]);

//   const handleFilter = (filtered) => dispatch(filterMovies(filtered));

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="list-page">
//       <Header />
//       <div className="movie-list-page">
//         <h1 className="title">Movie List</h1>
//         <FilterBar movies={movies} onFilter={handleFilter} />
//         <div className="movie-grid">
//           {filteredMovies.map((movie) => (
//             <MovieCard key={movie._id} movie={movie} />
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default MovieList;




// MovieList.jsx
// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchMovies, filterMovies } from "../../../store/movieSlice";
// import "./MovieList.css";
// import Header from "../home/pageComponents/Header";
// import Footer from "../home/pageComponents/Footer";
// import FilterBar from "./FilterBar";
// import MovieCard from "./MovieCard";

// function MovieList() {
//   const dispatch = useDispatch();

//   // Access movies and user authentication state
//   const { movies, filteredMovies, loading, error } = useSelector(
//     (state) => state.movies
//   );
//   const { isAuthenticated } = useSelector((state) => state.auth); // Check if user is authenticated

//   useEffect(() => {
//     dispatch(fetchMovies()); // Ensure this dispatch is calling an action that fetches data
//   }, [dispatch]);

//   const handleFilter = (filtered) => dispatch(filterMovies(filtered));

//   if (loading) {
//     return <div className="loading">Loading...</div>;
//   }

//   if (error) {
//     return <div className="error">Error: {error}</div>;
//   }

//   return (
//     <div className="list-page">
//       <Header />
//       <div className="movie-list-page">
//         <h1 className="title">Movie List</h1>
//         <FilterBar movies={movies} onFilter={handleFilter} />
//         <div className="movie-grid">
//           {filteredMovies.length > 0 ? (
//             filteredMovies.map((movie) => (
//               <MovieCard key={movie.movieId} movie={movie} />
//             ))
//           ) : (
//             <div>No movies found</div>
//           )}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default MovieList;

// src/components/movie/MovieList.jsx
// src/components/movie/MovieList.jsx

// src/components/movie/MovieList.jsx

// src/components/movie/MovieList.jsx

// src/components/movie/MovieList.jsx
// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useLocation } from 'react-router-dom';
// import { fetchMovies, filterMovies } from '../../../store/movieSlice';
// import './MovieList.css';
// import Header from '../home/pageComponents/Header';
// import Footer from '../home/pageComponents/Footer';
// import FilterBar from './FilterBar';
// import MovieCard from './MovieCard';

// function MovieList() {
//   const dispatch = useDispatch();
//   const location = useLocation();

//   // Get the search query from the URL
//   const queryParams = new URLSearchParams(location.search);
//   const searchQuery = queryParams.get('search') || '';

//   // Access the movies and filteredMovies from Redux state
//   const { movies, filteredMovies, loading, error } = useSelector(
//     (state) => state.movies
//   );

//   useEffect(() => {
//     if (movies.length === 0) {
//       console.log('Fetching movies...');
//       dispatch(fetchMovies());
//     } else {
//       console.log('Movies already fetched:', movies);
//     }
//   }, [dispatch, movies.length]);

//   // Apply filtering when search query changes or movies are updated
//   useEffect(() => {
//     console.log('Current Search Query:', searchQuery);

//     if (searchQuery) {
//       // Filter movies based on search query
//       const filtered = movies.filter((movie) =>
//         movie.name.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//       console.log('Filtered Movies:', filtered);
//       dispatch(filterMovies(filtered));
//     } else {
//       // If no search query, reset the filter to show all movies
//       console.log('No search query, showing all movies.');
//       dispatch(filterMovies(movies));
//     }
//   }, [searchQuery, movies, dispatch]);

//   // Show loading or error message
//   if (loading) {
//     return <div className="loading">Loading...</div>;
//   }

//   if (error) {
//     return <div className="error">Error: {error}</div>;
//   }

//   // Log the final list of filtered movies
//   console.log('Filtered Movies (After Filtering):', filteredMovies);

//   return (
//     <div className="list-page">
//       <Header />
//       <div className="movie-list-page">
//         <h1 className="title">Movie List</h1>
//         <FilterBar />
//         <div className="movie-grid">
//           {filteredMovies.length > 0 ? (
//             filteredMovies.map((movie) => (
//               <MovieCard key={movie.movieId} movie={movie} />
//             ))
//           ) : (
//             <div>No movies found</div>
//           )}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default MovieList;



// final code.........................

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchMovies, filterMovies } from '../../../store/movieSlice';
import './MovieList.css';
import Header from '../home/pageComponents/Header';
import Footer from '../home/pageComponents/Footer';
import FilterBar from './FilterBar';
import MovieCard from './MovieCard';

function MovieList() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { movies, filteredMovies, loading, error } = useSelector((state) => state.movies);
  const { isAuthenticated } = useSelector((state) => state.auth);

  const searchQuery = location.state?.query || '';  // Retrieve the query from location state

  useEffect(() => {
    dispatch(fetchMovies()); // Fetch all movies when the component mounts
  }, [dispatch]);

  useEffect(() => {
    // Filter the movies based on the search query if it's available
    if (searchQuery) {
      const filtered = movies.filter((movie) =>
        movie.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      dispatch(filterMovies(filtered));
    } else {
      dispatch(filterMovies(movies)); // Reset to all movies if no search query
    }
  }, [searchQuery, movies, dispatch]);

  const handleFilter = (filtered) => dispatch(filterMovies(filtered));

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="list-page">
      <Header />
      <div className="movie-list-page">
        <h1 className="title">Movie List</h1>
        <FilterBar movies={movies} onFilter={handleFilter} />
        <div className="movie-grid">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => (
              <MovieCard key={movie.movieId} movie={movie} />
            ))
          ) : (
            <div>No movies found</div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}


export default MovieList;

