import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
  
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);
  const [IMC, setIMC] = useState(0);
  const [faixaIMC, setFaixaIMC] = useState('')
  const [corResultado, setCorResultado] = useState('#ff0026');
  
  const calcularIMC = () => {
    
    if (altura == 0 || peso == 0) {
      setFaixaIMC("Insira valores válidos");
      setIMC("Insira valores válidos");
      return;
    }
  
    const tempIMC = peso / (altura * altura);
    setIMC(tempIMC.toFixed(2));
    
    atualizarFaixaIMC(tempIMC);
  }

  const atualizarFaixaIMC = (IMC) => {
    if (IMC < 18.5) {
      setFaixaIMC('Abaixo do peso normal');
      setCorResultado('#fad97d');
    } else if (IMC < 24.9) {
      setFaixaIMC('Peso normal');
      setCorResultado('#34b32b');
    } else if (IMC < 29.9) {
      setFaixaIMC('Excesso de peso');
      setCorResultado('#fad97d');
    } else if (IMC < 34.9) {
      setFaixaIMC('Obesidade classe 1');
      setCorResultado('#ffa742');
    } else if (IMC < 39.9) {
      setFaixaIMC('Obesidade classe 2');
      setCorResultado('#ff6b2b');
    } else {
      setFaixaIMC('Obesidade classe 3');
      setCorResultado('#ff0026');
    }
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/balanca.png')}
        style={{width: 150, height: 150}}
        resizeMode="contain"/>
      <Text style={styles.titulo}>Calculadora IMC</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Altura (m):</Text>
        <TextInput
        style={styles.input}
        placeholder="Digite sua altura"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Peso (kg):</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu peso"
          keyboardType="numeric"
          value={peso}
          onChangeText={setPeso}
        />
      </View>


      <Botao onPress={calcularIMC} textoBotao="Calcular IMC"/>

      { IMC != 0 && (
        <View style={[styles.resultadosContainer, {backgroundColor: corResultado}]}>
          <Text style={styles.resultadoLabel}>Seu IMC: </Text>
          <Text style={styles.resultado}>{IMC}</Text>
          <Text style={styles.resultadoLabel}>Sua faixa de IMC: </Text>
          <Text style={styles.resultado}>{faixaIMC}</Text>
        </View>
      )}

      <Image
        source={require('./assets/trena.png')}
        style={{width: 400, height: 30, marginTop: 30}}
      />
    </View>
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 75,
    alignItems: 'center'
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  
  label: {
    fontSize: 24
  },

  inputContainer: {
    marginTop: 15
  },

  input: {
    border: 1,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    maxWidth: 300,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 5 
  },

  botao: {
    backgroundColor: '#FDEF1B',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 30
  },

  textoBotao: {
    fontSize: 20,
    fontWeight: 'bold'
  },

  resultadosContainer: {
    alignItems: 'center',
    marginTop: 40,
    width: 220,
    padding: 10,
    borderRadius: 10
  },

  resultadoLabel: {
    fontSize: 16
  },

  resultado: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  }

  
});
