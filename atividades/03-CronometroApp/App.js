import { useState, useRef } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [pausado, setPausado] = useState(true)
  const [tempo, setTempo] = useState(0); // tempo em milisegundos
  let [milisegundos, setMilisegundos] = useState(0);
  let [segundos, setSegundos] = useState(0);
  let [minutos, setMinutos] = useState(0);
  let interval = useRef(null); // referência intervalo

  const formatarTempo = () => {
    let milisegundosFormatado = milisegundos;
    let segundosFormatado = segundos;
    let minutosFormatado = minutos;
    
    if (milisegundos < 10)
      milisegundosFormatado = "00" + milisegundos;
  
    else if (milisegundos < 100)
      milisegundosFormatado = "0" + milisegundos;
    
    if (segundos < 10)
      segundosFormatado = "0" + segundos;

    if (minutos < 10)
      minutosFormatado = "0" + minutos;

    return `${minutosFormatado}:${segundosFormatado}:${milisegundosFormatado}`;
  }

  const iniciar = () => {
    if (pausado) {
      setPausado(false);
      interval.current = setInterval(() => {

        setMilisegundos((milisegundoAnterior) => {
          const novoMilisegundo = milisegundoAnterior + 10;
          if (novoMilisegundo >= 1000) {
            setSegundos((segundoAnterior) => {
              const novoSegundo = segundoAnterior + 1;
              if (novoSegundo === 60) {
                setMinutos((minutoAnterior) => minutoAnterior + 1);
                return 0;
              }
              return novoSegundo;
            });
            return 0;
          }
          return novoMilisegundo;
        });
      }, 10);
    }
  };

  const pausar = () => {
    clearInterval(interval.current);
    setPausado(true);
  }

  const resetar = () => {
    clearInterval(interval.current);
    setPausado(true);
    setMilisegundos(0);
    setSegundos(0);
    setMinutos(0);
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.textoHeader}>CRONÔMETRO</Text>
        <Text style={styles.tempo}>{formatarTempo(tempo)}</Text>
        <View style={styles.botoesContainer}>
          <Button onPress={iniciar} title={'Iniciar'}></Button>
          <Button onPress={pausar} title={'Pausar'}></Button>
          <Button onPress={resetar} title={'Resetar'}></Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3474BA',
    alignItems: 'center',
    justifyContent: 'center',
  },

  card: {
    width: 350,
    height: 350,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  },

  textoHeader: {
    color: '#3474BA',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40
  },

  tempo: {
    fontSize: 64,
    fontWeight: 'bold',
    marginBottom: 40
  },

  botoesContainer: {
    flexDirection: 'row',
    gap: 20
  }
});
