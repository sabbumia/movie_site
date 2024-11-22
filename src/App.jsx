// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


// src/App.jsx

import React from "react";
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/sazzad/home/Home';
import Login from './components/sazzad/Login';
import Profile from './components/sazzad/Profile';
import Register from './components/sazzad/Register';
import MovieList from './components/sazzad/movieList/MovieList';
import BookingPage from './components/sazzad/booking/BookingPage';
import PaymentPage from './components/sazzad/payment/PaymentGateway';

const App = () => {
  console.log("Rendering App Component..."); // Debug log
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/register" element={<Register />} />
      <Route path="/movies" element={<MovieList />} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/payment" element={<PaymentPage />} />
    </Routes>
  );
};

export default App;
