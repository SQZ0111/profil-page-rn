import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper'
import {useTheme} from 'react-native-paper';


//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";


//Icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//own components
import { Home } from './components/HomeComponent/ButtonComponents/Home';


//custom Theme
import cyberpunkTheme from './customTheme/customTheme';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';


export default function App() {
  const Tab = createMaterialBottomTabNavigator();
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
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} options={{
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}/>
            <Tab.Screen name="Profil" component={Home} options={{
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="face-man-profile" color={color} size={26} />
              ),
            }}/>
            <Tab.Screen name="Exp" component={Home} options={{
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="head-lightbulb" color={color} size={26} />
              ),
            }}/>
            <Tab.Screen name="Tech Stack" component={Home} options={{
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="hammer-screwdriver" color={color} size={26} />
              ),
            }}/>
            <Tab.Screen name="More" component={Home} options={{
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="eye-plus" color={color} size={26} />
              ),
            }}/>
          </Tab.Navigator>
        </NavigationContainer>
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
