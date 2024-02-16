import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Splash from "./components/splash/Splash";
import Signup from "./components/signup/Signup";
import Navbar from "./components/navbar/Navbar";
import "./index.css";

const App = () => {
  // Create a state variable to track the login status
  const [isLoggedIn, setLoggedIn] = useState(true);

  // Function to handle login
  const handleLogin = () => {
    setLoggedIn(true);
  };

  // Function to handle logout
  const handleLogout = () => {
    setLoggedIn(false);
    alert("You have been logged out");
  };

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/signup" element={<Signup />} handleLogin={handleLogin} />
        <Route path="/signin" element={<Signup />} handleLogin={handleLogin} />
      </Routes>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
