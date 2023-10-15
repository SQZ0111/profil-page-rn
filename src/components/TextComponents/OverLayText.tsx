import { Text, View, StyleSheet } from "react-native";
import { useAppTheme } from "../../customTheme/customTheme";
import React from "react";

type OverLayTextPropsType = {
  text: string;
  glow: boolean;
};

type textStlyesType = {
  radiatingTextContainer: {
    backgroundColor: string;
    borderWidth: number;
    borderRadius: number;
    padding: number;
  };
};
export function OverLayText({
  text,
  glow,
}: OverLayTextPropsType): React.JSX.Element {
  const theme = useAppTheme();

  return (
    <View
      style={[
        textStyleSheet.radiatingTextContainer,
        {
          alignSelf: "center",
          borderColor: glow ? "#FF2079" : "#121212",
          width: "100%",
        },
      ]}
    >
      <Text
        style={{
          fontFamily: theme.fonts.big.fontFamily,
          color: glow ? theme.colors.accent : "#E0E0E0",
          fontSize: theme.fonts.big.fontSize,
          lineHeight: 50,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {text}
      </Text>
    </View>
  );
}

const textStyleSheet: textStlyesType = StyleSheet.create({
  radiatingTextContainer: {
    backgroundColor: "#000000c0",
    borderRadius: 10,
    borderWidth: 2,
    padding: 20,
  },
});
