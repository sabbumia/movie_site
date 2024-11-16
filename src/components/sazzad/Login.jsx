import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importing useNavigate for redirect
import "./Login.css";
import Header from "./home/pageComponents/Header";
import Footer from "./home/pageComponents/Footer";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

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
        alert("Login successful!");
        navigate("/"); // Redirect to home page after successful login
      } else {
        alert(result.message || "Login failed!");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred.");
    }
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
      </div>
      <Footer />
    </div>
  );
};

export default Login;
