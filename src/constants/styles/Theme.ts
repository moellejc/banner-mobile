import { NativeBaseProvider, extendTheme } from 'native-base';
import {
  BLACK,
  BLUE,
  DARK_PURPLE,
  PINK,
  PURPLE,
  RED,
  TEXTINPUT_PLACEHOLDER,
} from "./Colors";

export default function () {
  const theme = extendTheme({
    colors: {
      // Add new color
      primary: {
        50: '#E3F2F9',
        100: '#C5E4F3',
        200: '#A2D4EC',
        300: '#7AC1E4',
        400: '#47A9DA',
        500: '#0088CC',
        600: '#007AB8',
        700: '#006BA1',
        800: '#005885',
        900: '#003F5E',
      },
      // Redefining only one shade, rest of the color will remain same.
      amber: {
        400: '#d97706',
      },
    },
    config: {
      // Changing initialColorMode to 'dark'
      initialColorMode: 'dark',
    },
  });

declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      appBackgroundColor: string;
      bannerBlue: string;
      bannerDarkPurple: string;
      bannerPurple: string;
      bannerPink: string;
      bannerRed: string;
      textInputPlaceholderColor: string;
    }
  }
}

const AppTheme: ReactNativePaper.Theme = {
  ...DefaultTheme,
  // Specify custom property in nested object
  colors: {
    ...DefaultTheme.colors,
    appBackgroundColor: BLACK,
    // appBackgroundColor: "red",
    // background: "#000000",
    // backdrop: "#000000",
    bannerBlue: BLUE,
    bannerDarkPurple: DARK_PURPLE,
    bannerPurple: PURPLE,
    bannerPink: PINK,
    bannerRed: RED,
    textInputPlaceholderColor: TEXTINPUT_PLACEHOLDER,
  },
};

export default AppTheme;

const textInputTheme = {
  colors: {
    placeholder: AppTheme.colors.textInputPlaceholderColor,
    text: "white",
    underlineColor: "white",
    background: "black",
    primary: "white",
  },
};

export { textInputTheme };
