"use client";

import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useState } from "react";

const NavLink = (props) => {
  const { children } = props;
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}
    >
      {children}
    </Box>
  );
};

export default function Navbar({ isLoggedIn, onLogout }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={"8vh"} alignItems={"center"} justifyContent={"space-between"}>
          <Box fontFamily={"MoriaCitadel"}>Mini Pics</Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              {isLoggedIn === true ? (
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                  >
                    <Avatar
                      style={{ width: "7vh", height: "7vh", margin: "2vh" }}
                      src={
                        "https://upload.wikimedia.org/wikipedia/commons/0/05/Rottweiler_puppy_-21603071920.jpg"
                      }
                    />
                  </MenuButton>
                  <MenuList alignItems={"center"} style={{ color: "white" }}>
                    <br />
                    <Center>
                      <Avatar
                        style={{ width: "10vh", height: "10vh" }}
                        src={
                          "https://upload.wikimedia.org/wikipedia/commons/0/05/Rottweiler_puppy_-21603071920.jpg"
                        }
                      />
                    </Center>
                    <br />
                    <Center>
                      <p>Username</p>
                    </Center>
                    <br />
                    <MenuDivider />
                    <MenuItem>Projects</MenuItem>
                    <MenuItem>Account Settings</MenuItem>
                    <MenuItem
                      onClick={() => {
                        onLogout();
                      }}
                    >
                      Logout
                    </MenuItem>
                  </MenuList>
                  <Button onClick={toggleColorMode}>
                    {colorMode === "light" ? <SunIcon /> : <MoonIcon />}
                  </Button>
                </Menu>
              ) : (
                ""
              )}
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
