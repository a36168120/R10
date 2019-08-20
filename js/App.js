import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import RootStackNavigator from './navigation/RootStackNavigator';

class App extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <RootStackNavigator />
        <Text>This is R10</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});

export default App;
