import React from "react";
import "./Splash.css";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom"; // Import Link from React Router
import { Helmet } from "react-helmet";

function Splash({ isLoggedIn, onLogin, onLogout }) {
  return (
    <>
      <Helmet>
        <title>Miniature Gallery</title>
      </Helmet>
      <div className="App">
        <header className="App-header">
          <h1>Miniature Gallery</h1>
          <p>Share your painted miniatures with the world</p>
          <Link to="/signup">
            <Button colorScheme="orange" spacing={4}>
              Get Started
            </Button>
          </Link>{" "}
          <Link to="/signin">
            <Button colorScheme="green" spacing={4} marginTop={"5px"}>
              Sign In
            </Button>
          </Link>{" "}
        </header>
        <div className="App-content">
          {/* Your main content will go here once the user is logged in */}
        </div>
        <footer className="App-footer">
          <p>&copy; 2023 Mini Gallery</p>
        </footer>
      </div>
    </>
  );
}

export default Splash;
