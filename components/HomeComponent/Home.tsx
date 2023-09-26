import { View, StyleSheet, FlexAlignType } from "react-native";
import { useState } from "react";
import React from "react";
//components
import { BackGroundImage } from "../BackGroundImageComponents/BackGroundImage";
//assets
const Image = require("../../assets/img/sky.png");
//utils
import performCyberpunkRadiationOnInterval from "../../utils/useCyberpunkRadiationOnIntervall";
//icons

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
    <View style={homeStyles.container}>
      <BackGroundImage
        imgUrl={Image}
        text={
          "The possibility of finding the truth, the ideas of transhumanism and science fiction are the things that thrive me"
        }
        glow={glow}
      ></BackGroundImage>
    </View>
  );
}

const homeStyles: StylesHomeType = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  },
});
