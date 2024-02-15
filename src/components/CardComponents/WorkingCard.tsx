import { Card, Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { Dimensions } from "react-native";
import { useAppTheme } from "../../customTheme/customTheme";

const screenWidth: number = Dimensions.get("window").width;

type WorkingCardPropTypes = {
  position: string;
  years: string;
  location: string;
  description: string;
};

export function WorkingCard({
  position,
  years,
  location,
  description,
}: WorkingCardPropTypes): React.JSX.Element {
  const theme = useAppTheme();

  const CardStyles = StyleSheet.create({
    card: {
      alignItems: "center",
      borderRadius: 10,
      display: "flex",
      flexDirection: "column",
      height: "80%",
      justifyContent: "space-between",
      width: screenWidth - 40,
    },
    container: {
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      justifyContent: "space-evenly",
      paddingHorizontal: 20,
      width: screenWidth,
    },
    heading: {
      alignSelf: "flex-start",
      fontFamily: theme.fonts.medium.fontFamily,
      fontSize: theme.fonts.medium.fontSize,
    },
    textContent: {
      fontFamily: theme.fonts.regular.fontFamily,
      fontSize: theme.fonts.regular.fontSize,
    },
  });
  return (
    <View style={CardStyles.container}>
      <Card mode="elevated" elevation={5} style={CardStyles.card}>
        <Card.Title style={CardStyles.heading} title={position} />
        <Card.Content>
          <Text>{years}</Text>
          <Text>{location}</Text>
          <Text style={CardStyles.textContent}>{description}</Text>
        </Card.Content>
      </Card>
    </View>
  );
}
