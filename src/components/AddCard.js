import React from 'react'

import {StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native'

class AddCard extends React.Component {

    state = {
        questionText: '',
        answerText: ''
    }

    handleAdd = () => {
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
        backgroundColor: '#fffaaa',
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        marginTop: 15
    }



})