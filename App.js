import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/native-stack';
import registerNNPushToken from 'native-notify';

import Home from './src/screens/Home';
import ChosenTask from './src/screens/ChosenTask';

const stack = createStackNavigator();

export default function App() {
  // push notifications
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
