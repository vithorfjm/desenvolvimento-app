import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App() {

  const [urlImagem, setUrlImagem] = useState(require('./assets/biscoito.png'));
  const [mensagem, setMensagem] = useState("");
  const [botaoDesabilitado, setBotaoDesabilitado] = useState(false);

  const quebrarBiscoito = () => {
    setUrlImagem(require('./assets/biscoito_quebrado.png'))
    desativarBotao();
    atualizarMensagem();
  }

  const resetar = () => {
    setMensagem('')
    setUrlImagem(require('./assets/biscoito.png'))
    reativarBotao();
  }

  const atualizarMensagem = async () => {

    try {
      // Faz requisição na API Fortune Cookie
      const response = await fetch('https://aphorismcookie.herokuapp.com/');
      const data = await response.json();
      const message = data.data.message;
      // Seta a frase gerada na variável 'mensagem'
      setMensagem(message);
    } catch (e) {
      setMensagem('Não foi possível carregar a frase de sorte.');
    }
  };

  const desativarBotao = () => {
    setBotaoDesabilitado(true);
  }

  const reativarBotao = () => {
    setBotaoDesabilitado(false)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textoHeader}>Bem-vindo(a) ao Fortune Cookie</Text>
      <Image source={urlImagem}></Image>
      <View style={styles.mensagemContainer}>
        <Text style={styles.mensagem}>{mensagem}</Text>
      </View>
      <BotaoQuebrar onPress={quebrarBiscoito} textoBotao={'Quebrar'} desabilitado={botaoDesabilitado} ></BotaoQuebrar>
      <BotaoQuebrar onPress={resetar} textoBotao={'Resetar'} desabilitado={false}></BotaoQuebrar>
    </View>
  );
}

const BotaoQuebrar = ({ onPress , textoBotao, desabilitado }) => (
  <TouchableOpacity
    style={styles.botao}
    activeOpacity={0.8}
    onPress={onPress}
    disabled={desabilitado}>
    <Text style={styles.textoBotao}>{textoBotao}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8a0002',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 80
  },

  textoHeader: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },

  botao: {
    backgroundColor: 'yellow',
    color: 'black',
    padding: 6,
    borderRadius: 5,
    marginBottom: 250
  },

  textoBotao: {
    fontSize: 24,
    color: '#8a0002',
    fontWeight: 'bold'
  },
  
  mensagemContainer: {
    backgroundColor: 'white',
    width: 412,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 6,
    marginBottom: 50,
    height: 70
  },
  
  mensagem: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold'
  }

});
