import React from 'react'

import {StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native'
import {addCardToDeck} from "../data/Api";

class AddCard extends React.Component {

    state = {
        questionText: '',
        answerText: ''
    }

    handleAdd = () => {
        const {navigation} = this.props
        const deck = navigation.getParam('deck')

        const {questionText, answerText} = this.state

        addCardToDeck(deck.title, {
            question: questionText,
            answer: answerText
        })
        this.setState({
            questionText: '',
            answerText: ''
        })
    }

    render() {

        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    placeholder={'Question'}
                    value={this.state.questionText}
                    onChangeText={(questionText) => this.setState({questionText})}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder={'Answer'}
                    value={this.state.answerText}
                    onChangeText={(answerText) => this.setState({answerText})}
                />
                <TouchableOpacity style={styles.button} onPress={this.handleAdd}>
                    <Text>Add</Text>
                </TouchableOpacity>



            </View>
        )
    }
}

export default AddCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fffeee',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        padding: 50
    },
    textInput: {
        height: 40,
        margin: 10
    },
    button: {
        backgroundColor: '#dddddd',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        marginTop: 15
    }



})