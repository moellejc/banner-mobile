import { NativeBaseProvider, extendTheme } from "native-base";
import {
  BLACK,
  BLUE,
  WHITE,
  PINK,
  PURPLE,
  RED,
  TEXTINPUT_PLACEHOLDER,
} from "./Colors";

const theme = extendTheme({
  colors: {
    primary: {
      50: "#dbcafd",
      100: "#c2a6f9",
      200: "#aa85f2",
      300: "#9266e9",
      400: PURPLE, // original
      500: "#6d36da",
      600: "#622ecb",
      700: "#5b30b1",
      800: "#543198",
      900: "#4c3181",
    },
    secondary: {
      50: "#fa62ff",
      100: "#f83aff",
      200: "#f218f9",
      300: "#d60ddd",
      400: PINK, // original
      500: "#970e9c",
      600: "#7e1182",
      700: "#661269",
      800: "#501152",
      900: "#3b103d",
    },
    tertiary: {
      50: "#7658ff",
      100: "#5833fc",
      200: "#3c13f4",
      300: "#3411cf",
      400: BLUE, // original
      500: "#28118f",
      600: "#251276",
      700: "#21135e",
      800: "#1b1148",
      900: "#150f33",
    },
  },
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: "dark",
  },
});

export default theme;
