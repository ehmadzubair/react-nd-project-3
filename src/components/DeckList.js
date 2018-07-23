import React from 'react'
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import Deck from './Deck'
import {createStackNavigator} from 'react-navigation'

class DeckList extends React.Component {

    handlePress = (item) => {
        const {navigation} = this.props
        navigation.navigate('Deck')
    }

    render() {
        const deckList = [
            {
                key: 'DeckName 1',
                numCards: 10
            }
        ]
        return (
            <View style={styles.container}>
              <FlatList
                      data={[
                {key: 'Devin'},
                {key: 'Jackson'},
                {key: 'James'},
                {key: 'Joel'},
                {key: 'John'},
                {key: 'Jillian'},
                {key: 'Jimmy'},
                {key: 'Julie'},
                {key: 'Jimmy 2'},
                {key: 'Julie 2'},
                ]}
                renderItem={({item}) => (
                    <TouchableOpacity
                        onPress={() => this.handlePress(item)}
                        >

                <View style={styles.itemContainer}>
                    <Text style={styles.itemTitle}>{item.key}</Text>
                    <Text style={styles.itemSubtitle}>{item.key}</Text>
                </View>
            </TouchableOpacity>)}
                  />
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  itemContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 120,
    backgroundColor: '#fffeee'
  },
  itemTitle: {
    flex:1,
    padding: 10,
    fontSize: 24,
  },
  itemSubtitle: {
    flex:1,
    padding: 10,
    fontSize: 12,
  },
  divider: {
      flex:1,
      height: 1,
      backgroundColor: '#000000'
  }
});

export default createStackNavigator({
  DeckList: {
      screen: DeckList,
      navigationOptions: {
          header: null
      }
  },
  Deck,
});
