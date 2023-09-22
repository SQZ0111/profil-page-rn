import { Text,View,StyleSheet } from "react-native";
import { useAppTheme } from "../../customTheme/customTheme";
import React from "react";

export function OverLayText({text,glow}:{
    text: string,
    glow: boolean,
}) : React.JSX.Element {
    const theme = useAppTheme();


    return(
        <View style={[
            textStyleSheet.radiatingTextContainer,
            {
                borderColor: glow ? '#FF2079' : '#121212',
                width: "100%",
                alignSelf: "center"
                
                
            },
        ]}>
            <Text style={{
                fontFamily: theme.fonts.big.fontFamily,
                color: glow ? theme.colors.accent : '#E0E0E0',
                fontSize: theme.fonts.big.fontSize,
                lineHeight: 50,
                fontWeight: 'bold',
                textAlign: 'center',
            }}>{text}</Text>
        </View>
    );
}

const textStyleSheet = StyleSheet.create({
    radiatingTextContainer: {
        backgroundColor: '#000000c0',
        borderWidth: 2,
        borderRadius: 10,
        padding: 20,
    },
})