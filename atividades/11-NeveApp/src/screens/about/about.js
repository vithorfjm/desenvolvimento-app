import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const About = ( {route} ) => {
    
    const {nome, email} = route.params;

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>ABOUT:</Text>
            <Text style={styles.text}>{nome}</Text>
            <Text style={styles.text}>{email}</Text>

            <Button
                title="Home"
                onPress={() => navigation.goBack()}/>
            <Button
                title="Details"
                onPress={() => navigation.navigate("Details")}/>
        </View>
    );
}

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: 'orange',
    fontWeight: 'bold',
    fontSize: 30
  }
});
