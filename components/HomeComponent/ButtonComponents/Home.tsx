import { View,StyleSheet } from "react-native";
import { useState } from "react";
import React from "react";
//components
import { BackGroundImage } from "../../BackGroundImageComponents/BackGroundImage";
//assets
const Image = require("../../../assets/img/sky.png");
//utils
import performCyberpunkRadiationOnInterval from "../../../utils/useCyberpunkRadiationOnIntervall";
//icons


export function Home(): React.JSX.Element {
    const [glow, setGlow] = useState(false);
    performCyberpunkRadiationOnInterval(setGlow);
   

    return(
        <View style={homeStyles.container}>
            <BackGroundImage imgUrl={Image} text={"The possibility of finding the truth, the ideas of transhumanism and science fiction are the things that thrive me"} glow={glow}>
            </BackGroundImage>       
        </View>
    );
}

const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
})