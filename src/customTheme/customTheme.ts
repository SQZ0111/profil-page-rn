import { MD3LightTheme as DefaultTheme, useTheme } from "react-native-paper";

const cyberpunkTheme = {
  ...DefaultTheme,
  fonts: {
    ...DefaultTheme.fonts,
    regular: {
      fontFamily: "orbitron-regular",
      fontWeight: "normal",
      fontSize: 12,
    },
    medium: {
      fontFamily: "orbitron-regular",
      fontWeight: "normal",
      fontSize: 14,
    },
    big: {
      fontFamily: "orbitron-regular",
      fontSize: 18,
    },
    veryBig: {
      fontFamily: "orbitron-regular",
      fontSize: 24,
    },
  },
  colors: {
    ...DefaultTheme.colors,
    primary: "#0F0F7D",
    accent: "#FF2079",
    background: "#121212",
    text: "#E0E0E0",
  },
};

export { cyberpunkTheme };

export type AppTheme = typeof cyberpunkTheme;

export const useAppTheme = () => useTheme<AppTheme>(cyberpunkTheme);
