import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';

export default function App() {

  const emojis = ['🪨', '📃', '✂️'];
  const opcoes = ['Pedra', 'Papel', 'Tesoura']
  const [jogadaDoUsuario, setJogadaDoUsuario] = useState(-1);
  const [jogadaDoPrograma, setJogadaDoPrograma] = useState(-1);
  const [resultado, setResultado] = useState('');
  const [relatorio, setRelatorio] = useState('');
  const [corResultado, setCorResultado] = useState('');

  
  const gerarJogadaDoPrograma = () => {
    const indiceAleatorio = Math.floor(Math.random() * emojis.length);
    setJogadaDoPrograma(indiceAleatorio);
    return indiceAleatorio;
  }

  const jogar = (opcaoUsuario) => {

    setJogadaDoUsuario(opcaoUsuario);
    let jogadaDoPrograma = gerarJogadaDoPrograma();

    // 0 - Pedra
    // 1 - Papel
    // 2 - Tesoura
    switch (opcaoUsuario) {
      case 0:
        if (jogadaDoPrograma == 0) {
          setResultado('NÓS EMPATAMOS');
          setRelatorio(`Ambos jogamos ${opcoes[opcaoUsuario]}`);
          setCorResultado('#7A0270')
        } else if (jogadaDoPrograma == 1) {
          setResultado('EU GANHEI');
          setRelatorio(`${opcoes[jogadaDoPrograma]} vence ${opcoes[opcaoUsuario]}`);
          setCorResultado('#D93159');
        } else if (jogadaDoPrograma == 2) {
          setResultado('VOCÊ GANHOU');
          setRelatorio(`${opcoes[opcaoUsuario]} vence ${opcoes[jogadaDoPrograma]}`);
          setCorResultado('#DEB317');
        }
        break;
        case 1: 
        if (jogadaDoPrograma == 0) {
          setResultado('VOCÊ GANHOU');
          setRelatorio(`${opcoes[opcaoUsuario]} vence ${opcoes[jogadaDoPrograma]}`);
          setCorResultado('#DEB317');
        } else if (jogadaDoPrograma == 1) {
          setResultado('NÓS EMPATAMOS');
          setRelatorio(`Ambos jogamos ${opcoes[opcaoUsuario]}`); 
          setCorResultado('#7A0270')
        } else if (jogadaDoPrograma == 2) {
          setResultado('EU GANHEI');
          setRelatorio(`${opcoes[jogadaDoPrograma]} vence ${opcoes[opcaoUsuario]}`);
          setCorResultado('#D93159');
        }
        break;
        case 2: 
        if (jogadaDoPrograma == 0) {
          setResultado('EU GANHEI');
          setRelatorio(`${opcoes[jogadaDoPrograma]} vence ${opcoes[opcaoUsuario]}`);
          setCorResultado('#D93159');
        } else if (jogadaDoPrograma == 1) {
          setResultado('VOCÊ GANHOU');
          setRelatorio(`${opcoes[opcaoUsuario]} vence ${opcoes[jogadaDoPrograma]}`);
          setCorResultado('#DEB317');
        } else if (jogadaDoPrograma == 2) {
          setResultado('NÓS EMPATAMOS');
          setRelatorio(`Ambos jogamos ${opcoes[opcaoUsuario]}`);
          setCorResultado('#7A0270')
        }
        break;
    }

  }

  return (
    <ImageBackground
      source={require('./assets/bg.png')}
      style={styles.background}>
        <Text style={styles.titulo}>Pedra, Papel e Tesoura</Text>
        <View style={styles.botoesContainer}>
          <Botao onPress={() => jogar(0)} textoBotao="🪨" cor={'#7A0270'}/>
          <Botao onPress={() => jogar(1)} textoBotao="📃" cor={'#D93159'}/>
          <Botao onPress={() => jogar(2)} textoBotao="✂️" cor={'#DEB317'}/>
        </View>

        { jogadaDoUsuario != -1 && (
          <>
          <View style={styles.jogadaContainer}>
            <View style={styles.jogadaCard}>
              <Text style={styles.jogadaLabel}>Você jogou:</Text>
              <Text style={styles.jogada}>{emojis[jogadaDoUsuario]}</Text>
            </View>
            <View style={styles.jogadaCard}>
              <Text style={styles.jogadaLabel}>Eu joguei:</Text>
              <Text style={styles.jogada}>{emojis[jogadaDoPrograma]}</Text>
            </View>
          </View>
          <Text style={styles.relatorio}>{relatorio}</Text>
          <Text style={[styles.resultado, {backgroundColor: corResultado}]}>{resultado}</Text>
          </>
        )}
    </ImageBackground>
  );
}

const Botao = ({ onPress , textoBotao, cor }) => (
  <TouchableOpacity
    style={[styles.botao, {backgroundColor: cor}]}
    activeOpacity={0.8}
    onPress={onPress}>
    <Text style={styles.textoBotao}>{textoBotao}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  background: {
    flex: 1,
    // paddingTop: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },

  titulo: {
    backgroundColor: '#120078',
    fontSize: 32,
    fontWeight: 'bold',
    paddingVertical: 30,
    paddingHorizontal: 20,
    color: 'white',
    borderRadius: 5
  },

  botoesContainer: {
    marginTop: 20,
    flexDirection: 'row',
    gap: 30
  },

  botao: {
    width: 100,
    height: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },

  textoBotao: {
    fontSize: 60,
    fontWeight: 'bold',
  },

  jogadaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 25
    
  },
  
  jogadaCard: {
    backgroundColor: '#120078',
    justifyContent: 'center',
    alignItems: 'center',
    width: 170,
    height: 170,
    borderRadius: 15,
    marginTop: 20
  },
  
  jogadaLabel: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold'
  },

  jogada: {
    fontSize: 40
  },

  relatorio: {
    backgroundColor: '#120078',
    fontSize: 30,
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: 360,
    color: 'white',
    borderRadius: 5,
    marginTop: 20,
    textAlign: 'center'
  },

  resultado: {
    fontSize: 30,
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: 360,
    color: 'black',
    borderRadius: 5,
    marginTop: 20,
    textAlign: 'center',
    fontWeight: 'bold'
  }

});
