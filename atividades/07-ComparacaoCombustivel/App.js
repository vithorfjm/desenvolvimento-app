import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [precoAlcool, setPrecoAlcool] = useState(0);
  const [precoGasolina, setPrecoGasolina] = useState(0);
  const [maisVantajoso, setMaisVantajoso] = useState('?');
  const [corResultado, setCorResultado] = useState('white')

  const getImagem = () => {
    switch (maisVantajoso) {
      case 'Gasolina':
        return require('./assets/gasolina.png');
      case 'Álcool':
        return require('./assets/alcool.png');
      default:
        return require('./assets/bomba.png');
    }
  };

  const calcular = () => {
    if (precoAlcool == 0 || precoGasolina == 0) {
      setMaisVantajoso('?');
      setCorResultado('#fff')
      return;
    }

    const diferenca = precoAlcool / precoGasolina;
    if (diferenca <= 0.7) {
      setMaisVantajoso("Álcool");
      setCorResultado("#1eb00b")
    } else {
      setMaisVantajoso("Gasolina")
      setCorResultado("#ff5e19")
    }
  }

  return (
    <ImageBackground
      source={require('./assets/posto_bg.png')}
      style={styles.background}>
        <View style={styles.card}>
          <Text style={styles.titulo}>Comparador de Preços de Combustíveis</Text>
          <View style={styles.inputContainer}>
            <Text style={[styles.label, {color: '#ff5e19'}]}>Preço do litro da gasolina:</Text>
            <TextInput
              style={styles.input}
              placeholder="Preço (l) da gasolina"
              keyboardType="numeric"
              value={precoGasolina}
              onChangeText={setPrecoGasolina}
              />
            <Text style={[styles.label, {color: '#1eb00b'}]}>Preço do litro do álcool:</Text>
            <TextInput
              style={styles.input}
              placeholder="Preço (l) do álcool"
              keyboardType="numeric"
              value={precoAlcool}
              onChangeText={setPrecoAlcool}
            />
            
          </View>
          <Botao
            onPress={calcular}
            textoBotao="Calcular"/>
          <View style={styles.resultadoContainer}>
            <Text style={styles.resultadoLabel}>Mais vantajoso:</Text>
            <Text style={[styles.resultado, {color: corResultado}]}>{maisVantajoso}</Text>
            <Image
              source={getImagem()}
              style={{width: 150, height: 150, borderRadius: 10}}
              resizeMode="contain"/>
          </View>
        </View>
    </ImageBackground>
  );
}

const Botao = ({ onPress , textoBotao }) => (
  <TouchableOpacity
    style={styles.botao}
    activeOpacity={0.8}
    onPress={onPress}>
    <Text style={styles.textoBotao}>{textoBotao}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  titulo: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 30
  },

  card: {
    width: 350,
    paddingVertical: 30,
    backgroundColor: 'rgba(0,0,0,0.75)',
    borderRadius: 15,
    alignItems: 'center'
  },

  inputContainer: {
    alignItems: 'center'
  },

  botao: {
    backgroundColor: '#FDEF1B',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 30,
    marginBottom: 20
  },

  textoBotao: {
    fontSize: 20,
    fontWeight: 'bold'
  },

  label: {
    fontSize: 20,
    fontWeight: 'bold'
  },

  input: {
    border: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    width: 175,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 5,
    fontSize: 16
  },

  resultadoContainer: {
    alignItems: 'center'
  },

  resultado: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  
  resultadoLabel: {
    color: 'white',
    fontSize: 25
  }

});
