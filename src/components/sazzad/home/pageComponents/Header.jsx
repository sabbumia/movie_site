import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../../../store/authSlice'; // Import logout action
import './Header.css'; // Import styles for the header

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth); // Check authentication status

  // Change header style on scroll
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolling(true);
    } else {
      setScrolling(false);
    };
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle logout functionality
  const handleLogout = () => {
    dispatch(logout()); // Clear user session
    navigate('/login'); // Redirect to login page
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <header className={`header ${scrolling ? 'header--scrolled' : ''}`}>
      <div className="header__content">
        {/* Logo */}
        <div className="header__logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/320px-Netflix_2015_logo.svg.png"
            alt="Netflix Logo"
          />
        </div>

        {/* Navigation Menu */}
        <div className="header__nav">
          <a href="/" className="header__navItem">Home</a>
          <a href="/trending" className="header__navItem">Trending</a>
          <a href="/movies" className="header__navItem">Movies</a>
          <a href="/tvshows" className="header__navItem">TV Shows</a>
          <a href="/my-list" className="header__navItem">My List</a>
        </div>

        {/* Profile and Logout */}
        <div className="header__controls">
          {isAuthenticated && (
            <div className="header__user">
              <img
                src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png"
                alt="User Avatar"
                className="header__avatar"
              />
              <button className="header__logoutButton" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
          {!isAuthenticated && (
            <button className="header__loginButton" onClick={handleLogin}>
              LogIn
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
