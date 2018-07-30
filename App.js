import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import HomeScreen from './src/components/HomeScreen'
import {Constants} from 'expo'
import {setLocalNotification} from "./src/Notifications";

function MFStatusBar({backgroundColor, ...props}) {
    return (
        <View style={{backgroundColor, height: Constants.statusBarHeight}}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </View>
    )
}

export default class App extends React.Component {

    componentDidMount() {
        setLocalNotification()
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <MFStatusBar backgroundColor="blue"/>
                <HomeScreen/>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
