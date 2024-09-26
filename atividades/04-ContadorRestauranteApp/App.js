import { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';

export default function App() {

  const [contador, setContador] = useState(0);
  const [palavraPessoa, setPalavraPessoa] = useState('pessoa')

  const adicionar = () => {
    setContador((contadorAntigo) => {
      const novoContador = contadorAntigo + 1;
      corrigirPlural(novoContador);
      return novoContador;
    });
  };
  
  const remover = () => {
    setContador((contadorAntigo) => {
      if (contadorAntigo > 0) {
        const novoContador = contadorAntigo - 1;
        corrigirPlural(novoContador);
        return novoContador;
      }
      return contadorAntigo; // se não diminuir o contador
    });
  };

  const corrigirPlural = (palavra) => {
    if (palavra < 2) {
      setPalavraPessoa("pessoa")
    } else {
      setPalavraPessoa("pessoas")
    }
  }

  return (
    <View style={styles.container}>
      <ImageBackground
          source={require('./assets/restaurante.png')}
          style={styles.background}>
          <View style={styles.card}>
            <Text style={styles.textHeader}>Contador Restaurante</Text>
            <View style={styles.contadorContainer}>
              <Text style={styles.contador}>{contador}</Text>
              <Text style={styles.subtitulo}>{palavraPessoa}</Text>
            </View>
            <View style={styles.botoesContainer}>
              <Botao onPress={adicionar} textoBotao={'Adicionar'}></Botao>
              <Botao onPress={remover} textoBotao={'Remover'}></Botao>
            </View>
          </View>
      </ImageBackground>
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
    flex: 1
  },

  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  card: {
    width: 350,
    height: 350,
    backgroundColor: 'rgba(0,0,0,0.8)',
    borderRadius: 15,
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  textHeader: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  
  contadorContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  contador: {
    color: 'white',
    fontSize: 64,
    fontWeight: 'bold',
  },
  
  subtitulo: {
    color: 'white',
    fontSize: 18
  },

  botoesContainer: {
    flexDirection: 'row',
    gap: 30
  },

  botao: {
    backgroundColor: '#FFC107',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5
  },

  textoBotao: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
