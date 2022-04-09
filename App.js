import { StyleSheet, Text, View, Button} from 'react-native';
import React, { useState } from 'react';

export default class extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      n1: Math.floor(Math.random() * 61),
      n2: Math.floor(Math.random() * 61),
      n3: Math.floor(Math.random() * 61),
      n4: Math.floor(Math.random() * 61),
      n5: Math.floor(Math.random() * 61),
      n6: Math.floor(Math.random() * 61),
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <Text>{[this.state.n1, "\n" + this.state.n2,
         "\n" + this.state.n3, "\n" + this.state.n4,
         "\n" + this.state.n5,  "\n" + this.state.n6]}</Text>
        <Button 
          title="OK"
          onPress={() => this.setState({
            n1: Math.floor(Math.random() * 61),
            n2: Math.floor(Math.random() * 61),
            n3: Math.floor(Math.random() * 61),
            n4: Math.floor(Math.random() * 61),
            n5: Math.floor(Math.random() * 61),
            n6: Math.floor(Math.random() * 61)
          })}/>
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


