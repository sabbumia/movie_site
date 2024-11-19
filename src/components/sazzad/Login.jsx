import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../../store/authSlice"; // Import loginSuccess action
import "./Login.css";
import Header from "./home/pageComponents/Header";
import Footer from "./home/pageComponents/Footer";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize navigate function for redirect

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });
      const result = await response.json();
      if (result.success) {
        // Dispatch loginSuccess to store the userId in Redux
        dispatch(loginSuccess({ userId: result.userId }));
        alert("Login successful! User ID: " + result.userId);
        navigate("/"); // Redirect to home page after successful login
      } else {
        alert(result.message || "Login failed!");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred.");
    }
  };

  // Function to handle register button click
  const handleRegisterClick = () => {
    navigate("/register"); // Redirect to the register page
  };

  return (
    <div className="login-container">
      <Header />
      <div className="login-form-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Login</button>
        </form>
        {/* Message to suggest registration if user doesn't have an account */}
        <div className="register-message">
          <p>Don't have an account? <button onClick={handleRegisterClick} className="register-btn">Register here</button></p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
