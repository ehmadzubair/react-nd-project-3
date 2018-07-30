import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {clearLocalNotification} from "../Notifications";

class Quiz extends React.Component {

    state = {
        currentQuestionIndex: 0,
        isShowingQuestion: true,
        correctQuestions: 0,
        incorrectQuestions: 0,
        isComplete: false


    }

    handleCardToggle = () => {
        this.setState({isShowingQuestion: !this.state.isShowingQuestion})
    }

    handleCorrectness = (isCorrect) => {
        this.setState((prevState, props) => {
                let correctness = {
                    correctQuestions: isCorrect ? prevState.correctQuestions + 1 : prevState.correctQuestions,
                    incorrectQuestions: isCorrect ? prevState.incorrectQuestions : prevState.incorrectQuestions + 1
                }

                const newQuestionIndex = prevState.currentQuestionIndex + 1
                const deck = props.navigation.getParam('deck')

                if (newQuestionIndex >= deck.questions.length) {
                    clearLocalNotification()
                    return {
                        isComplete: true,
                        ...correctness

                    }
                }

                return {
                    currentQuestionIndex: prevState.currentQuestionIndex + 1,
                    ...correctness
                }

            }
        )
    }

    handleRestartQuiz = () => {
        this.setState({
            currentQuestionIndex: 0,
            correctQuestions: 0,
            incorrectQuestions: 0,
            isComplete: false,
            isShowingQuestion: true
        })
    }

    handleBackToDeck = () => {
        const {navigation} = this.props
        navigation.pop()
    }

    render() {
        const {isShowingQuestion, currentQuestionIndex, isComplete, correctQuestions} = this.state
        const {navigation} = this.props
        const deck = navigation.getParam('deck')

        const card = deck.questions[currentQuestionIndex]


        const cardTitle = isShowingQuestion ? card.question : card.answer
        const buttonTitle = isShowingQuestion ? 'Answer' : 'Question'

        if (isComplete) {
            return (
                <View style={styles.resultContainer}>
                    <Text style={{fontSize: 28}}>Correct Answers: {(correctQuestions / deck.questions.length) * 100}%</Text>
                    <TouchableOpacity style={styles.deckButton} onPress={this.handleRestartQuiz}>
                        <Text>Restart Quiz</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.deckButton} onPress={this.handleBackToDeck}>
                        <Text>Back To Deck</Text>
                    </TouchableOpacity>
                </View>
            )
        }
        else {

            return (
                <View style={styles.container}>
                    <View style={styles.infoContainer}>
                        <Text>{currentQuestionIndex + 1} / {deck.questions.length}</Text>
                    </View>
                    <View style={styles.cardContainer}>
                        <Text style={{fontSize: 26, padding: 16}}>{cardTitle}</Text>
                        <TouchableOpacity onPress={this.handleCardToggle}>
                            <Text style={{fontSize: 12, padding: 16}}>{buttonTitle}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.deckButton}
                            onPress={() => this.handleCorrectness(true)}
                        >
                            <Text>Correct</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.deckButton}
                            onPress={() => this.handleCorrectness(false)}
                        >
                            <Text>Incorrect</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    resultContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginLeft: 5
    },
    cardContainer: {
        flex: 10,
        backgroundColor: '#eeefff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        flex: 4,
        justifyContent: 'space-evenly',
        alignItems: 'stretch',
        padding: 25
    },
    deckButton: {
        alignItems: 'center',
        backgroundColor: '#dddddd',
        justifyContent: 'center',
        margin: 20,
        padding: 20
    }
});

export default Quiz
