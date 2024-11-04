import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [tarefa, setTarefa] = useState('');
  const [listaTarefas, setListaTarefas] = useState([]);

  async function carregarTarefas() {
    const tarefasSalvas = await AsyncStorage.getItem('@tarefas');
    if (tarefasSalvas) {
      setListaTarefas(JSON.parse(tarefasSalvas));
    }
  };
  
  async function salvarTarefas() {
    await AsyncStorage.setItem('@tarefas', JSON.stringify(listaTarefas));
  };
  
  useEffect(() => {
    carregarTarefas();
  }, []);
  
  useEffect(() => {
    salvarTarefas();
  }, [listaTarefas]);
  

  function adicionarTarefa() {
    if (tarefa != "") {
      setListaTarefas([...listaTarefas, { id: gerarIdAleatorio(), tarefa: tarefa }]);
      setTarefa("");
    }
  };

  function gerarIdAleatorio() {
    return Math.ceil(Math.random() * 1000000).toString();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tarefas</Text>
      <TextInput
        style={styles.input}
        placeholder="Add a new task"
        value={tarefa}
        onChangeText={setTarefa}
      />
      <TouchableOpacity style={styles.botao} onPress={adicionarTarefa}>
        <Text style={styles.botaoTexto}>Adicionar Tarefa</Text>
      </TouchableOpacity>
      <FlatList
        data={listaTarefas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemTarefa}>
            <Text style={styles.textoTarefa}>{item.tarefa}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 30
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10
  },

  input: {
    borderWidth: 1,
    borderColor: '#D6D6D6',
    padding: 10,
    borderRadius: 5,
    fontSize: 17
  },

  botao: {
    width: '100%',
    height: 40,
    backgroundColor: '#007BFF',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20
  },

  botaoTexto: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },

  itemTarefa: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#F9F9F9',
    borderRadius: 5,
    borderBottomWidth: 2,
    borderBottomColor: '#D6D6D6'
  },

  textoTarefa: {
    fontSize: 16,
  },
});
