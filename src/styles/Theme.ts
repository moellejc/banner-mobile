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
      neuronBlue: string;
      neuronDarkPurple: string;
      neuronPurple: string;
      neuronPink: string;
      neuronRed: string;
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
    neuronBlue: BLUE,
    neuronDarkPurple: DARK_PURPLE,
    neuronPurple: PURPLE,
    neuronPink: PINK,
    neuronRed: RED,
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
