// src/Home.jsx

import React from 'react';
import Header from './pageComponents/Header';  // Import Header component
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* Render Header at the top */}
      <Header />

      <div className="home__banner">
        {/* A banner image or other content for your homepage */}
        <img
          className="home__bannerImage"
          src="https://i.ibb.co.com/1GTb7Zz/auth-background.jpg"
          alt="Banner"
        />
        
        {/* Search Box in the middle of the banner */}
        <div className="home__searchWrapper">
          <input
            type="text"
            className="home__search"
            placeholder="Search for movies, shows..."
          />
        </div>
      </div>

      <div className="home__bannerContents">
        <h1 className="home__title">Popular Movies</h1>
        <button className="home__button">Play</button>
        <button className="home__button">My List</button>
     </div>

      {/* Movie section (example) */}
      <div className="home__row">
        {/* Movie 1 */}
        <div className="home__movie">
          <img
            className="home__moviePoster"
            src="https://m.media-amazon.com/images/I/71tIm0Xxr2L._AC_UF1000,1000_QL80_.jpg"
            alt="Movie Title"
          />
          <div className="home__movieDetails">
            <h3 className="home__movieTitle">Movie Title 1</h3>
            <p className="home__movieRating">⭐ 8.7/10</p>
          </div>
        </div>

        {/* Movie 2 */}
        <div className="home__movie">
          <img
            className="home__moviePoster"
            src="https://m.media-amazon.com/images/I/71-sziO1OsL._AC_UF1000,1000_QL80_.jpg"
            alt="Movie Title"
          />
          <div className="home__movieDetails">
            <h3 className="home__movieTitle">Movie Title 2</h3>
            <p className="home__movieRating">⭐ 7.9/10</p>
          </div>
        </div>

        {/* Movie 3 */}
        <div className="home__movie">
          <img
            className="home__moviePoster"
            src="https://www.mycollectables.com.au/cdn/shop/products/e2e7c3ee-5f00-4e65-b7a2-c3716bbf30ec__15778.1646965241.1280.1280.jpg?v=1702637668"
            alt="Movie Title"
          />
          <div className="home__movieDetails">
            <h3 className="home__movieTitle">Movie Title 3</h3>
            <p className="home__movieRating">⭐ 9.1/10</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
