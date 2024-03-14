import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Splash from "./components/splash/Splash";
import UserForm from "./components/userform/UserForm";
import Navbar from "./components/navbar/Navbar";
import "./index.css";
import theme from "./theme";
import MiniaturesApi from "./api";
import { ChakraProvider, Button } from "@chakra-ui/react";

const App = () => {
  // Create a state variable to track the login status
  const [isSignedIn, setSignedIn] = useState(false);
  const [signUp, setSignUp] = useState(false);

  // Function to handle login
  const handleSignIn = async ({ username, password, email }) => {
    try {
      let user = await MiniaturesApi.login(username, password);

      if (user.username) {
        setSignedIn(true);
      } else {
        alert(user[0]);
      }
    } catch (error) {
      alert(error);
    }
  };
  const handleSignUp = async ({ username, password, email }) => {
    try {
      let res = await MiniaturesApi.register(username, password, email);
      if (res) setSignUp(true);
    } catch (error) {
      alert(error);
    }
  };

  // Function to handle logout
  const handleLogout = () => {
    setSignedIn(false);
    alert("You have been logged out");
  };

  return (
    <Router>
      <Navbar isLoggedIn={isSignedIn} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route
          path="/signup"
          element={<UserForm form={"Sign up"} processForm={handleSignUp} />}
        />
        <Route
          path="/signin"
          element={<UserForm form={"Sign in"} processForm={handleSignIn} />}
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
