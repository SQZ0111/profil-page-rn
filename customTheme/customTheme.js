import { MD3LightTheme as DefaultTheme} from "react-native-paper";

const cyberpunkTheme = {
    ...DefaultTheme,
    fonts: {
      ...DefaultTheme.fonts,
      regular: {
        fontFamily: 'orbitron-regular',
        fontWeight: 'normal',
      },
      medium: {
        fontFamily: 'orbitron-regular',
        fontWeight: 'normal',
      },
      big: {
          fontFamily: 'orbitron-regular',
          fontSize: 18,
      },
    },
    colors: {
      ...DefaultTheme.colors,
      primary: '#0F0F7D',
      accent: '#FF2079',
      background: '#121212',
      text: '#E0E0E0',

    },
  };

export default cyberpunkTheme;