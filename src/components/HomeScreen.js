import React from 'react';
import { View, Text, Platform } from 'react-native';
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import DeckList from './DeckList'
import NewDeck from './NewDeck'

const Navigation = Platform.os === 'ios' ?
createBottomTabNavigator({
  DeckList,
  NewDeck
}) : createMaterialTopTabNavigator({
  DeckList,
  NewDeck
});
export default Navigation
