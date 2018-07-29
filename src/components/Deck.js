import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {getDecks} from "../data/Api";

class Deck extends React.Component {

    render() {
        const {navigation} = this.props
        const deck = navigation.getParam('deck')

        return (
            <View style={styles.container}>
                <View style={styles.deckDetails}>
                        <Text style={{fontSize: 26}}>{deck.title}</Text>
                        <Text style={{fontSize: 18}}>{deck.questions.length} Card(s)</Text>
                </View>
                <View style={styles.deckButtonsContainer}>
                    <TouchableOpacity style={styles.deckButton} onPress={() => navigation.navigate('AddCard', {deck})}>
                        <Text>Add Card</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.deckButton} onPress={() => navigation.navigate('Quiz', {deck})}>
                        <Text>Start Quiz</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fffeee',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    deckDetails: {
        flex: 3,
        backgroundColor: '#fffeee',
        justifyContent: 'center',
        alignItems: 'center',

    },
    deckButtonsContainer: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'stretch',
        padding: 25
    },
    deckButton: {
        alignItems: 'center',
        backgroundColor: '#dddddd',
        justifyContent: 'center',
        padding: 20
    }
});

export default Deck
