import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

class Card extends React.Component {
    state = {
        isShowingQuestion: true
    }


    render() {
        const {question, answer} = this.props
        const {isShowingQuestion} = this.state
        return (
            <View>
                <Text>this.props.</Text>
                <TouchableOpacity onPress={() => this.setState({isShowingQuestion: !isShowingQuestion})}>
                    <Text>{isShowingQuestion ? 'Answer' : 'Question'}</Text>
                </TouchableOpacity>

            </View>
        )
    }

}

export default Card