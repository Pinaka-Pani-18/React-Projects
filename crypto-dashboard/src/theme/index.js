import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    p: {
      purple: "#5700d7",
      black: "#171717",
    },
    gray: {
      5: "#f3f3f7",
      10: "#eeeef4",
      20: "#d8dde2",
      40: "#babac4",
      60: "#797e82",
      80: "#535d66",
    },
  },
  fonts: {
    heading: `Ubuntu`,
    body: `Ubuntu`,
  },
  styles: {
    global: {
      "html, body": {
        bg: "#f3f3f7",
      },
    },
  },
});

export default theme;
