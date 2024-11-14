import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Button
                title="About"
                onPress={() => navigation.navigate('About', {nome: "Vithor", email: "vithor@email"})}
            />
            <Button
                title="Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
