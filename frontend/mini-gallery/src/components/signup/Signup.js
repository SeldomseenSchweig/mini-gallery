import React from "react";
import "./signup.css";
import { ChakraProvider, Button, Input, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Nav from "../navbar/Navbar";

function Signup({ form }) {
  return (
    <ChakraProvider>
      <Helmet>
        <title> {form}</title>
      </Helmet>

      <div className="App" fontFamily={"MoriaCitadel"}>
        <header className="App-header">
          <Link to={"/"}>
            <Button colorScheme="blue"> Home</Button>
          </Link>

          <h1>{form}</h1>
          <br></br>

          <form>
            <Stack size={3}>
              <Input
                focusBorderColor="lime"
                className="input"
                placeholder="Username"
              />
              {form === "Sign up" ? (
                <Input
                  focusBorderColor="lime"
                  className="input"
                  placeholder="Email"
                />
              ) : (
                <></>
              )}

              <Input
                focusBorderColor="lime"
                className="input"
                placeholder="Password"
                type="password"
              />
            </Stack>
            <Button colorScheme="blue" type="submit">
              {form}
            </Button>
          </form>
        </header>
      </div>
    </ChakraProvider>
  );
}

export default Signup;
