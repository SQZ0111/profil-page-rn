import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper'
import {useTheme} from 'react-native-paper';

//own components
import { Home } from './components/HomeComponent/ButtonComponents/Home';


//custom Theme
import cyberpunkTheme from './customTheme/customTheme';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';


export default function App() {
  const [fontsLoaded] = useFonts({
    'orbitron-regular': require('./assets/fonts/Orbitron-Regular.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  },[])


  if (!fontsLoaded) {
    return null;
  } else {
    SplashScreen.hideAsync();
  }

  return (
      <PaperProvider theme={cyberpunkTheme}>
        <Home/>
      </PaperProvider>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
