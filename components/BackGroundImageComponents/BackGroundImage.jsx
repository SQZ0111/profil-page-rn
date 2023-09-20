import { StyleSheet,ImageBackground } from "react-native"
import { OverLayText } from "../TextComponents/OverLayText"


export function BackGroundImage({imgUrl,text,glow}) {
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