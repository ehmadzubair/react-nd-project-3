import React from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import {getDeck, saveDeckTitle} from "../data/Api";
import Deck from "./Deck";
import Quiz from "./Quiz";
import AddCard from "./AddCard";
import {createStackNavigator} from "react-navigation";

class NewDeck extends React.Component {

    state = {
        text: ''
    }

    handleSubmit = () => {
        const {text} = this.state
        const {navigation} = this.props

        this.setState({text: ''})
        deckId = saveDeckTitle(text)

        getDeck(deckId).then((deck) => navigation.navigate('Deck', {deck}))
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>What is the title of your new deck?</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder={'Deck Title'}
                    value={this.state.text}
                    onChangeText={(text) => this.setState({text})}
                />
                <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
                    <Text>Submit</Text>
                </TouchableOpacity>
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
        padding: 25
    },
    title: {
        fontSize: 26,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        height: 40,
        alignItems: 'stretch'
    },
    button: {
        backgroundColor: '#dddddd',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        marginTop: 15
    }

});

export default createStackNavigator({
    NewDeck: {
        screen: NewDeck,
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

