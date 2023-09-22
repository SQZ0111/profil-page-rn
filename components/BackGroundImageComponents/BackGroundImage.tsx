import { StyleSheet,ImageBackground, ImageSourcePropType } from "react-native"
import { OverLayText } from "../TextComponents/OverLayText"
import React from "react";

interface imgProps {
    children: any,
    imgUrl: ImageSourcePropType,
    text: string,
    glow: boolean,

}

export function BackGroundImage({children,imgUrl,text,glow} : imgProps)
: React.JSX.Element {
    return(
        <ImageBackground resizeMode="cover" source={imgUrl} style={imageStyles.image}>
            {text && <OverLayText glow={glow} text={text}/>}
        </ImageBackground>
    )
}

const imageStyles = StyleSheet.create({
    image: {
        flex: 1,
        width: "100%",
        justifyContent: "center"
    }
})