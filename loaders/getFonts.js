import * as Font from 'expo-font';

export function getFonts() {
    Font.loadAsync({
        'orbitron-regular': require("../assets/fonts/Orbitron-Regular.ttf")
    })
}