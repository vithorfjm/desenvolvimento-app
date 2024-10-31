import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function App() {

  const [input, setInput] = useState("");
  const [nome, setNome] = useState("");
  
  async function loadData(){
    await AsyncStorage.getItem('@name').then((value) => {
      setNome(value);
    })
  }
  
  async function addName(){
    await AsyncStorage.setItem('@name', input);
    setNome(input);
    setInput("");
  }
  

  useEffect(() => {
    loadData();
  }, [])



  return (
    <View style={styles.container}>
      <TextInput onChangeText={(value) => setInput(value)} placeholder='Digite seu nome'></TextInput>
      <View style={{flexDirection: 'row', gap: 10}}>
        <Button title="Salvar" onPress={addName}/>
      </View>
      <Text>{nome}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
