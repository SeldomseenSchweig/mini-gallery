import React from "react";
import "./signup.css";
import { ChakraProvider, Button, Input, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Nav from "../navbar/Navbar";

function Signup() {
  // Add your signup logic here
  return (
    <ChakraProvider>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>

      <div className="App" fontFamily={"MoriaCitadel"}>
        <header className="App-header">
          <Link to={"/"}>
            <Button colorScheme="blue"> Home</Button>
          </Link>

          <h1>Sign Up</h1>
          <br></br>
          {/* Add your signup form with input fields here */}
          <form>
            <Stack size={3}>
              <Input
                focusBorderColor="lime"
                className="input"
                placeholder="Username"
              />
              <Input
                focusBorderColor="lime"
                className="input"
                placeholder="Email"
              />
              <Input
                focusBorderColor="lime"
                className="input"
                placeholder="Password"
                type="password"
              />
            </Stack>
            <Button colorScheme="blue" type="submit">
              Sign Up
            </Button>
          </form>
        </header>
      </div>
    </ChakraProvider>
  );
}

export default Signup;
