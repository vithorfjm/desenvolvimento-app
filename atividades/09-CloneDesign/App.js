import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.headerBotao}><Text style={styles.textoHeaderBotao}>🎟️</Text></TouchableOpacity>
        <TouchableOpacity style={styles.headerBotao}><Text style={styles.textoHeaderBotao}>🛍️</Text></TouchableOpacity>
        <TouchableOpacity style={styles.headerBotao}><Text style={styles.textoHeaderBotao}>🛒</Text></TouchableOpacity>
        <TouchableOpacity style={styles.headerBotao}><Text style={styles.textoHeaderBotao}>📊</Text></TouchableOpacity>
        <TouchableOpacity style={styles.headerBotao}><Text style={styles.textoHeaderBotao}>👤</Text></TouchableOpacity>
      </View>

      <View style={styles.separador}></View>

      <View style={styles.imagemContainer}>
        <Image
          // source={{uri : 'https://mmurad.com.br/wp-content/uploads/2023/02/Business-Intelligence-2023-MMurad-FGV.jpg'}}
          source={{uri : 'https://static.vecteezy.com/ti/vetor-gratis/p2/151264-vector-do-mapa-da-cidade-vetor.png'}}
          style={styles.imagem}
          resizeMode='cover'></Image>
        <TouchableOpacity style={[styles.botaoImagem, styles.botaoEsqSup]}><Text style={styles.textoBotao}>Como chegar</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.botaoImagem, styles.botaoDirSup]}><Text style={styles.textoBotao}>Nossas lojas</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.botaoImagem, styles.botaoDirInf]}><Text style={styles.textoBotao}>Em construção</Text></TouchableOpacity>
      </View>

      <View style={styles.funcionariosHeader}>
        <Text style={styles.funcionarioTitulo}>Categorias</Text>
        <TouchableOpacity style={styles.botaozinho}><Text>?</Text></TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        <View style={styles.card}>
          <Text style={styles.cardTitulo}>Eletrônicos</Text>
          <Text style={styles.cardIcone}>🔌</Text>
          <Text style={styles.cardDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitulo}>Moda</Text>
          <Text style={styles.cardIcone}>👘</Text>
          <Text style={styles.cardDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitulo}>Esporte</Text>
          <Text style={styles.cardIcone}>⚽</Text>
          <Text style={styles.cardDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </View>
      </View>

      <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.headerBotao}><Text style={styles.textoHeaderBotao}>🏠</Text></TouchableOpacity>
        <TouchableOpacity style={styles.headerBotao}><Text style={styles.textoHeaderBotao}>📖</Text></TouchableOpacity>
        <TouchableOpacity style={styles.headerBotao}><Text style={styles.textoHeaderBotao}>🎮</Text></TouchableOpacity>
        <TouchableOpacity style={styles.headerBotao}><Text style={styles.textoHeaderBotao}>🪀</Text></TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 75,
    paddingHorizontal: 10,
    gap: 20
  },

  headerContainer: {
    flexDirection: 'row',
    gap: 20
  },

  headerBotao: {
    width: 55,
    height: 55,
    borderRadius: 50,
    backgroundColor: '#93CAE5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  textoHeaderBotao: {
    backgroundColor: '#204A7B',
    borderRadius: 50,
    padding: 5,
    fontSize: 24,
  },

  separador: {
    width: 350,
    height: 2,
    backgroundColor: '#93CAE5',
  },

  imagemContainer: {
    position: 'relative',
  },
  
  imagem: {
    width: 350,
    height: 250,
    borderRadius: 10
  },

  botaoImagem: {
    width: 100,
    height: 40,
    backgroundColor: 'white',
    position: 'absolute',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },


  botaoEsqSup: {
    top: 5,
    left: 5,
  },

  botaoDirSup: {
    top: 5,
    right: 5,
  },

  botaoDirInf: {
    bottom: 5,
    right: 5,
  },

  textoBotao: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  funcionariosHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 205,
  },

  funcionarioTitulo: {
    fontSize: 24
  },

  botaozinho: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D8D7D7',
    width: 30,
    height: 30,
    borderRadius: 50
  },

  cardsContainer: {
    flexDirection: 'row',
    gap: 10
  },

  card: {
    width: 110,
    height: 300,
    backgroundColor: '#93CAE5',
    borderRadius: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  cardTitulo: {
    fontWeight: 'bold',
    fontSize: 17
  },

  cardIcone: {
    fontSize: 50,
    padding: 5,
    backgroundColor: '#3174C0',
    borderRadius: 10
  },

  cardDesc: {
    textAlign: 'center'
  },

  footerContainer: {
    flexDirection: 'row',
    gap: 40
  },

});
