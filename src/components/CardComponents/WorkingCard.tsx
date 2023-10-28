import { Card, Text } from 'react-native-paper';
import { StyleSheet,View} from 'react-native';

export function WorkingCard() : React.JSX.Element {

    return(
        <View style={CardStyles.container}>
            <Card mode='elevated' elevation={5} style={CardStyles.card}>
                <Card.Title style={CardStyles.heading} titleVariant='displayLarge' title="Position"/>
                <Card.Content>
                <Text variant="bodyMedium">2019-2023</Text>
                <Text variant="bodyMedium">remote🏠</Text>
                <Text style={CardStyles.textContent}variant="bodyLarge">Description Lorem Ipsum blabla</Text>
                </Card.Content>
            </Card>   
        </View>
    )
}

const CardStyles = StyleSheet.create({
    card: {
        alignItems: 'center',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
        height: '80%',
        justifyContent: 'space-between',
        width: '80%'
    },
    container: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'space-evenly',
        width: '100%'
    },
    heading: {
        alignSelf: 'flex-start',

    },
    textContent: {
        top: 100
        
    }


})