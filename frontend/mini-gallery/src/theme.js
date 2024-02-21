import { extendTheme } from "@chakra-ui/react";
import { color } from "framer-motion";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  styles: {
    global: {},
  },
});

export default theme;
