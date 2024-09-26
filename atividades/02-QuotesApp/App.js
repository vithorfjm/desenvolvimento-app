import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App() {
  
  const citacoesJSON = [
    {
        "nome": "Albert Einstein",
        "citacao": "A imaginação é mais importante que o conhecimento.",
        "foto": "https://s4.static.brasilescola.uol.com.br/be/conteudo/images/2-albert-einstein.jpg"
    },
    {
        "nome": "Nelson Mandela",
        "citacao": "A educação é a arma mais poderosa que você pode usar para mudar o mundo.",
        "foto": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTiUJLR57NJM64fbXum1dZC5n71l-VbKBAf6Oq3Yw-p4hC6u-Co"
    },
    {
        "nome": "Mahatma Gandhi",
        "citacao": "Você deve ser a mudança que deseja ver no mundo.",
        "foto": "https://brasil.un.org/sites/default/files/styles/featured_image/public/2018-10/Mahatma_Gandhi_laughing_0.jpeg?itok=8M5m1ejZ"
    },
    {
        "nome": "Marie Curie",
        "citacao": "Nada na vida é para ser temido, apenas compreendido.",
        "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Marie_Curie_c1920.jpg/640px-Marie_Curie_c1920.jpg"
    },
    {
        "nome": "Steve Jobs",
        "citacao": "Seu tempo é limitado, então não o gaste vivendo a vida de outra pessoa.",
        "foto": "https://vocesa.abril.com.br/wp-content/uploads/2022/02/SA285_PRAVC_1.jpg?crop=1&resize=1212,909"
    },
    {
        "nome": "Martin Luther King Jr.",
        "citacao": "Eu tenho um sonho que um dia esta nação se levantará e viverá o verdadeiro significado de seu credo.",
        "foto": "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcReJigHr4g9xWpt9gsnbOopHvM2ED-JWfJOftp8lbdsV-b2-6Xo7Ez4j7GJffN6LfEr0lLE28p51uocDUE"
    },
    {
        "nome": "Frida Kahlo",
        "citacao": "Pés, para que os quero, se tenho asas para voar?",
        "foto": "https://arteref.com/wp-content/uploads/2021/02/DESTAQUE.jpg"
    },
    {
        "nome": "Leonardo da Vinci",
        "citacao": "A simplicidade é o último grau de sofisticação.",
        "foto": "https://cdn.universoracionalista.org/wp-content/uploads/2021/10/leonardo-da-vinci-e1634382367389.jpg"
    },
    {
        "nome": "William Shakespeare",
        "citacao": "Ser ou não ser, eis a questão.",
        "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Shakespeare.jpg/1200px-Shakespeare.jpg"
    },
    {
        "nome": "Thomas Edison",
        "citacao": "Eu não falhei. Apenas descobri 10 mil maneiras que não funcionam.",
        "foto": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSp2AEBojcmDImM7jOvwR6nPM9aGPcxkVSYvteaNa7pMAM1U9sD"
    },
    {
        "nome": "Sócrates",
        "citacao": "Só sei que nada sei",
        "foto": "https://livrospraler.com/wp-content/uploads/2024/02/livros-de-socrates-1-1024x683.jpg"
    }
  ]

  const [citacao, setCitacao] = useState({"nome": "Martin Luther King Jr.",
                                          "citacao": "Eu tenho um sonho que um dia esta nação se levantará e viverá o verdadeiro significado de seu credo.",
                                          "foto": "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcReJigHr4g9xWpt9gsnbOopHvM2ED-JWfJOftp8lbdsV-b2-6Xo7Ez4j7GJffN6LfEr0lLE28p51uocDUE"});
  
  const pegarCitacaoAleatoria = () => {
    const index = Math.floor(Math.random() * citacoesJSON.length);
    setCitacao(citacoesJSON[index]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textoHeader}>Bem-vindo(a) ao QuotesApp</Text>
      <View style={styles.citacaoCard}>
        <Image source={{ uri: citacao.foto}} style={styles.foto}></Image>
        <Text style={styles.citacao}>"{citacao.citacao}"</Text>
        <Text style={styles.nome}>- {citacao.nome}</Text>
      </View>
      <Botao onPress={pegarCitacaoAleatoria} textoBotao={'Gerar'} d></Botao>
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
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 80
  },

  textoHeader: {
    color: '#3474BA',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40
  },

  citacaoCard: {
    justifyContent: 'flex-start',
    width: 300,
    height: 470,
    gap: 10,
  },
  
  citacao: {
    textAlign: 'center',
    fontSize: 23,
    fontWeight: 'bold'
  },

  nome: {
    textAlign: 'right',
    fontSize: 20
  },

  foto: {
    width: 300,
    height: 300,
    borderRadius: 15
  },
  
  botao: {
    backgroundColor: '#3474BA',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5
  },

  textoBotao: {
    fontSize: 25,
    color: 'white'

  }

});
