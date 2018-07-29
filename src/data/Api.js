import {AsyncStorage} from 'react-native'

CARDS_STORAGE_KEY = 'CARDS_STORE'


export function getDecks() {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem(CARDS_STORAGE_KEY).then((results) => {
            console.log(JSON.parse(results))
            resolve(JSON.parse(results))
        })
    })
}

export function getDeck(id) {
    return new Promise((resolve, reject) => {
        getDecks().then((results) => {
            debugger;
            console.log(results[id])
            resolve(results[id])
        })
    })
}

export function saveDeckTitle(title) {
    AsyncStorage.mergeItem(CARDS_STORAGE_KEY, JSON.stringify({
        [title]: {
            title: title,
            questions: []
        }
    }))

}

export function addCardToDeck(title, question) {
    debugger;
    getDeck(title).then((result) => {
        debugger;
        AsyncStorage.mergeItem(CARDS_STORAGE_KEY, JSON.stringify({
            [title]: {
                title,
                questions: [...result.questions, question]
            }
        }))
    })


    // , ({title, questions}) => {
    // debugger;
    // AsyncStorage.mergeItem(CARDS_STORAGE_KEY, JSON.stringify({
    //     title,
    //     questions: [...questions, card]
    // }))
    // })
}