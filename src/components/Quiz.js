import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

class Quiz extends React.Component {

    state = {
        currentQuestionIndex: 0,
        isShowingQuestion: true,
        correctQuestions: 0,
        incorrectQuestions: 0,
        isComplete: false


    }

    questions = [
        {
            question: 'What is a closure?',
            answer: 'The combination of a function and the lexical environment within which that function was declared.'
        },
        {
            question: 'What is a closure? 2',
            answer: 'The combination of a function and the lexical environment within which that function was declared.'
        },
        {
            question: 'What is a closure? 3',
            answer: 'The combination of a function and the lexical environment within which that function was declared.'
        },
        {
            question: 'What is a closure? 4',
            answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
    ]

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
            if (newQuestionIndex >= this.questions.length) {
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

render()
{
    const {isShowingQuestion, currentQuestionIndex} = this.state

    const card = this.questions[currentQuestionIndex]


    const cardTitle = isShowingQuestion ? card.question : card.answer
    const buttonTitle = isShowingQuestion ? 'Answer' : 'Question'
    return (
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <Text>{currentQuestionIndex + 1} / {this.questions.length}</Text>
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

const styles = StyleSheet.create({
    container: {
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
        flex: 2,
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

export default Quiz
