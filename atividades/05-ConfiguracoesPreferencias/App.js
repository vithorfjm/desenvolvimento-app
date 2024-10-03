import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';
import { StyleSheet, Text, View, Switch, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [temaEscuroAtivado, setTemaEscuroAtivado] = useState(false);
  const [tamanhoFonte, setTamanhoFonte] = useState(24);

  const styles = temaEscuroAtivado ? escuro : claro;

  const resetar = () => {
    setTemaEscuroAtivado(false);
    setTamanhoFonte(24)
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.header, {fontSize: tamanhoFonte }]}>Configurações de{"\n"}Preferências</Text>
      <View style={styles.card}>

        <Text style={[styles.label, {fontSize: tamanhoFonte }]}>Tema:</Text>
        <View style={styles.bordaPicker}>
          <Picker
            selectedValue={temaEscuroAtivado}
            onValueChange={(value) => setTemaEscuroAtivado(value)}
            style={styles.picker}>
            <Picker.Item label='Claro' value={false}/>
            <Picker.Item label='Escuro' value={true}/>
            <Picker.Item label='Automático'/>
          </Picker>
        </View>

        <Text style={[styles.label, {fontSize: tamanhoFonte}]}>Tamanho da fonte: {tamanhoFonte}</Text>
        <Slider
          minimumValue={12}
          maximumValue={30}
          step={1}
          value={tamanhoFonte}
          onValueChange={(tamanho) => setTamanhoFonte(tamanho)}/>

        <Text style={[styles.label, {fontSize: tamanhoFonte}]}>Modo noturno</Text>
        <View style={styles.switchContainer}>
          <Switch
            value={temaEscuroAtivado}
            onValueChange={() => {setTemaEscuroAtivado(!temaEscuroAtivado)}}
            trackColor={{false: 'black', true: 'white'}}
            thumbColor={temaEscuroAtivado ? '#03DAC6' : '#9c9c9c'}
            />
            <Text style={[styles.estadoSwitch, {fontSize: tamanhoFonte}]}>{temaEscuroAtivado ? "Ativado" : "Desativado"}</Text>
        </View>

        <Botao
          onPress={resetar}
          textoBotao='Resetar preferências'
          styles={styles}/>

      </View>

    </View>
  );
}

const Botao = ({ onPress , textoBotao, styles}) => (
  <View style={styles.botaoContainer}>
    <TouchableOpacity
      style={styles.botao}
      activeOpacity={0.8}
      onPress={onPress}>
      <Text style={styles.textoBotao}>{textoBotao}</Text>
    </TouchableOpacity>
  </View>
)


const claro = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },

  header: {
    fontSize: 30,
    fontWeight: 'bold',
    width: 415,
    textAlign: 'center',
    paddingTop: 65,
    paddingBottom: 10,
    backgroundColor: '#dedede',
    color: 'black'
  },

  card: {
    paddingHorizontal: 10,
    width: 380
  },

  label: {
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 30
  },

  bordaPicker: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
  },

  switchContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 20
  },

  estadoSwitch: {
    color: 'black'
  },

  botaoContainer: {
    marginTop: 30,
    alignItems: 'center'
  },

  botao: {
    width: 'auto',
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50
  },

  textoBotao: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },
});

const escuro = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292929',
    alignItems: 'center'
  },

  header: {
    fontSize: 35,
    fontWeight: 'bold',
    width: 420,
    textAlign: 'center',
    paddingTop: 65,
    paddingBottom: 10,
    backgroundColor: 'black',
    color: '#fff'
  },

  card: {
    paddingHorizontal: 10
  },

  label: {
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 30,
  },

  bordaPicker: {
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
  },

  picker: {
    backgroundColor: '#fff'
  },

  switchContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 20
  },
  
  estadoSwitch: {
    color: '#fff'
  },

  botaoContainer: {
    marginTop: 30,
    alignItems: 'center'
  },

  botao: {
    width: 'auto',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50
  },

  textoBotao: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});