import { View, StyleSheet, FlexAlignType } from "react-native";
import { useState } from "react";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
//components
import { BackGroundImage } from "../BackGroundImageComponents/BackGroundImage";
//assets
const Image = require("../../../assets/img/sky.png");
//utils
import performCyberpunkRadiationOnInterval from "../../utils/useCyberpunkRadiationOnIntervall";
//icons

//nicht notwendig da Styles.create schon ein ts objekt darauf macht
type StylesHomeType = {
  container: {
    flex: number;
    flexDirection:
      | "row"
      | "column"
      | "row-reverse"
      | "column-reverse"
      | undefined;
    justifyContent:
      | "flex-start"
      | "flex-end"
      | "center"
      | "space-between"
      | "space-around"
      | "space-evenly"
      | undefined;
    alignItems: FlexAlignType;
  };
};

export function Home(): React.JSX.Element {
  const [glow, setGlow] = useState<boolean>(false);
  performCyberpunkRadiationOnInterval(setGlow);

  return (
    <SafeAreaProvider>
      <View style={homeStyles.container}>
        <BackGroundImage
          imgUrl={Image}
          text={
            "The possibility of finding the truth, the ideas of transhumanism and science fiction are the things that thrive me"
          }
          glow={glow}
        ></BackGroundImage>
      </View>
    </SafeAreaProvider>
  );
}

const homeStyles: StylesHomeType = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});
