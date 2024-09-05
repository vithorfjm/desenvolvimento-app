import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';


export default function App() {

  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <Header/>
      <TextInput
        style={styles.input}
        placeholder='Digite seu nome'
        value={name}
        onChangeText={text => setName(text)}></TextInput>
      <Text style={[styles.logoName, styles.nome]}>Nome: {name}</Text>
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
    paddingTop: 50
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
    fontWeight: 'bold',
    color: 'white'
  },

  boxesContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end'
  },

  redBox: {
    width: 100,
    height: 200,
    backgroundColor: '#870a28'
  },

  whiteBox: {
    width: 100,
    height: 200,
    backgroundColor: '#ffffff'
  },

  greenBox: {
    width: 100,
    height: 200,
    backgroundColor: '#006136'
  },

  input: {
    borderWidth: 3,
    borderColor: '#870a28',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    width: 300,
    fontSize: 24,
    marginLeft: 20,
    marginTop: 20,
    padding: 5,
    borderRadius: 50
  },

  nome: {
    marginLeft: 20,
  }
});
