import { DefaultTheme } from "react-native-paper";

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
    appBackgroundColor: "#000000",
    // appBackgroundColor: "red",
    // background: "#000000",
    // backdrop: "#000000",
    neuronBlue: "#2E51DC",
    neuronDarkPurple: "#6040A3",
    neuronPurple: "#7F3580",
    neuronPink: "#9C2B5F",
    neuronRed: "#DD1515",
    textInputPlaceholderColor: "#6E6E6E",
  },
};

export default AppTheme;
