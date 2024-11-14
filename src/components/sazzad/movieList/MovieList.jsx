import React, { useState } from 'react';
import './MovieList.css'
import Header from '../home/pageComponents/Header';
import Footer from '../home/pageComponents/Footer';
import FilterBar from './FilterBar';
import MovieCard from './MovieCard';

const sampleMovies = [
    { id: 1, name: "Inception", year: 2010, category: "Sci-Fi", rating: 8.8, poster: "https://lumiere-a.akamaihd.net/v1/images/au_homepage_avengersendgame_hero_short_m_5618553b.jpeg?region=0,0,750,668" },
    { id: 2, name: "The Dark Knight", year: 2008, category: "Action", rating: 9.0, poster: "https://m.media-amazon.com/images/S/pv-target-images/e9a43e647b2ca70e75a3c0af046c4dfdcd712380889779cbdc2c57d94ab63902.jpg" },
    { id: 3, name: "Interstellar", year: 2014, category: "Sci-Fi", rating: 8.6, poster: "https://m.media-amazon.com/images/S/pv-target-images/144540abcf5eb3ca17ea30a5ac3554dcd011a2880ccfba9694d13b27362060fe.jpg" },
    { id: 1, name: "Inception", year: 2010, category: "Sci-Fi", rating: 8.8, poster: "https://lumiere-a.akamaihd.net/v1/images/au_homepage_avengersendgame_hero_short_m_5618553b.jpeg?region=0,0,750,668" },
    { id: 2, name: "The Dark Knight", year: 2008, category: "Action", rating: 9.0, poster: "https://m.media-amazon.com/images/S/pv-target-images/e9a43e647b2ca70e75a3c0af046c4dfdcd712380889779cbdc2c57d94ab63902.jpg" },
    { id: 3, name: "Interstellar", year: 2014, category: "Sci-Fi", rating: 8.6, poster: "https://m.media-amazon.com/images/S/pv-target-images/144540abcf5eb3ca17ea30a5ac3554dcd011a2880ccfba9694d13b27362060fe.jpg" },
];

function MovieList() {
    const [filteredMovies, setFilteredMovies] = useState(sampleMovies);

    const handleFilter = (filtered) => setFilteredMovies(filtered);

    return (
        <div>
            <Header />
            <div className="movie-list-page">
                <h1 className="title">Movie List</h1>
                <FilterBar movies={sampleMovies} onFilter={handleFilter} />
                <div className="movie-grid">
                    {filteredMovies.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default MovieList;
