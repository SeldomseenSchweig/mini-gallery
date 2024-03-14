import React, { useState } from "react";
import "./userForm.css";
import { ChakraProvider, Button, Input, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const UserForm = ({ form, processForm }) => {
  const initialState = {
    username: "",
    password: "",
    email: "",
  };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formData:", formData);
  };

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
                name="username"
                onChange={handleChange}
              />
              {form === "Sign up" ? (
                <Input
                  focusBorderColor="lime"
                  className="input"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              ) : (
                <></>
              )}

              <Input
                focusBorderColor="lime"
                className="input"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={formData.password}
                type="password"
              />
            </Stack>
            <Button colorScheme="blue" type="submit" onClick={handleSubmit}>
              {form}
            </Button>
          </form>
        </header>
      </div>
    </ChakraProvider>
  );
};

export default UserForm;
