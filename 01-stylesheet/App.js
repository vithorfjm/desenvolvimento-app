import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInputComponent } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.boxesContainer}>
        <View style={styles.redBox}></View>
        <View style={styles.whiteBox}></View>
        <View style={styles.greenBox}></View>
      </View>
    </View>
  );
}

function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.logo}></View>
      <Text style={styles.logoName}>App.js</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  
  container: {
    backgroundColor: '#333',
    flex: 1,
    paddingTop: 20
  },
  
  header: {
    flexDirection: 'row',
    paddingLeft: 20,
    gap: 20
  },

  logo: {
    width: 60,
    height: 60,
    backgroundColor: '#870a28'
  },

  logoName: {
    fontSize: 36,
    fontWeight: 'bold'
  },

  boxesContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end'
  },

  redBox: {
    width: 100,
    height: 700,
    backgroundColor: '#870a28'
  },

  whiteBox: {
    width: 100,
    height: 700,
    backgroundColor: '#ffffff'
  },

  greenBox: {
    width: 100,
    height: 700,
    backgroundColor: '#006136'
  }

});
