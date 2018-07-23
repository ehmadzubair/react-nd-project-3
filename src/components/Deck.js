import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

class Deck extends React.Component {
    render() {
        return (
            <View style={styles.container}>
              <Text>Deck.js</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  deckDetails: {
      flex: 4,
      backgroundColor: '#fffeee',
      justifyContent: 'center',
      alignItems: 'center',

  }
});

export default Deck
