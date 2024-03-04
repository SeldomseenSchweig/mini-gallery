import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Splash from "./components/splash/Splash";
import Signup from "./components/signup/Signup";
import Navbar from "./components/navbar/Navbar";
import "./index.css";
import theme from "./theme";
import axios from "axios";
import { ChakraProvider, Button } from "@chakra-ui/react";

const App = () => {
  // Create a state variable to track the login status
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [signedUp, setSignedUp] = useState(false);

  // Function to handle login
  const handleLogin = () => {
    setLoggedIn(true);
  };
  const handleSignUp = () => {
    setSignedUp(true);
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
        <Route
          path="/signup"
          element={<Signup form={"Sign up"} />}
          handleLogin={handleLogin}
        />
        <Route
          path="/signin"
          element={<Signup form={"Sign in"} />}
          handleLogin={handleLogin}
        />
      </Routes>
    </Router>
  );
};

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
  document.getElementById("root")
);
