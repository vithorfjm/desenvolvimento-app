import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Details = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>DETAILS:</Text>
            <Button
                title="HOME"
                onPress={() => navigation.popToTop()}/>
        </View>
    );
}

export default Details;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
      },
    
      text: {
        color: 'yellow',
        fontWeight: 'bold',
        fontSize: 30
      }
});
