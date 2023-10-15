import { StyleSheet, ImageBackground, ImageSourcePropType } from "react-native";
import { DimensionValue } from "react-native";
import { OverLayText } from "../TextComponents/OverLayText";
import React from "react";

type imgPropsTypes = {
  imgUrl: ImageSourcePropType;
  text: string;
  glow: boolean;
};

type imgStylesType = {
  image: {
    flex: number;
    justifyContent:
      | "flex-start"
      | "flex-end"
      | "center"
      | "space-between"
      | "space-around"
      | "space-evenly"
      | undefined;
    width: DimensionValue | undefined;
  };
};

export function BackGroundImage({
  imgUrl,
  text,
  glow,
}: imgPropsTypes): React.JSX.Element {
  return (
    <ImageBackground
      resizeMode="cover"
      source={imgUrl}
      style={imageStyles.image}
    >
      {text && <OverLayText glow={glow} text={text} />}
    </ImageBackground>
  );
}

const imageStyles: imgStylesType = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
});
