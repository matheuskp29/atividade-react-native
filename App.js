import { StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

const sorteio = () => {

  let vect = []

  do {
    let numeroAleatorio = Math.floor(Math.random() * 60) + 1
    if(!vect.includes(numeroAleatorio)) {
      vect.push(numeroAleatorio)
      console.log(vect)
    }
  } while(vect.length < 6)

  return vect
}

export default class extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      numeros: []
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={{paddingBottom: 10, fontWeight: 'bold'}}>{this.state.numeros.join(' \n')}</Text>
        <Button 
          title="Fazer sorteio"
          onPress={() => this.setState({numeros: sorteio()})}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})