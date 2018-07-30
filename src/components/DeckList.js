import React from 'react'
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import Deck from './Deck'
import {createStackNavigator} from 'react-navigation'
import Quiz from "./Quiz";
import AddCard from "./AddCard";
import {getDecks} from "../data/Api";

class DeckList extends React.Component {
    state = {
        decks: {}
    }

    componentDidMount() {
        getDecks().then(results => {
            const mappedResults = results ? Object.keys(results).map((key) => results[key]) : []
            this.setState({decks: mappedResults})
        }).catch((error) => {
            console.log(error)
        })
    }

    handlePress = (deck) => {
        const {navigation} = this.props
        navigation.navigate('Deck', {deck})
    }

    render() {
        const {decks} = this.state
        return (
            <View style={styles.container}>
                {decks.length != 0 &&
                <FlatList
                    data={decks}
                    keyExtractor={(item) => item.title}
                    renderItem={({item}) => (
                        <TouchableOpacity
                            onPress={() => this.handlePress(item)}
                        >
                            <View style={styles.itemContainer}>
                                <Text style={styles.itemTitle}>{item.title}</Text>
                                <Text style={styles.itemSubtitle}>{item.questions.length} Card(s)</Text>
                            </View>
                        </TouchableOpacity>)}
                />
                }
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
        flex: 1,
        padding: 10,
        fontSize: 24,
    },
    itemSubtitle: {
        flex: 1,
        padding: 10,
        fontSize: 12,
    },
    divider: {
        flex: 1,
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
    Deck : {
        screen: Deck,
        navigationOptions: {
            tabBarVisible: false
        }
    },
    Quiz,
    AddCard
});
