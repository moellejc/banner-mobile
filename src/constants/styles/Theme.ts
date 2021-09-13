import { DefaultTheme } from "react-native-paper";
import {
  BLACK,
  BLUE,
  DARK_PURPLE,
  PINK,
  PURPLE,
  RED,
  TEXTINPUT_PLACEHOLDER,
} from "./Colors";

declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      appBackgroundColor: string;
      ultraBlue: string;
      ultraDarkPurple: string;
      ultraPurple: string;
      ultraPink: string;
      ultraRed: string;
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
    ultraBlue: BLUE,
    ultraDarkPurple: DARK_PURPLE,
    ultraPurple: PURPLE,
    ultraPink: PINK,
    ultraRed: RED,
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
