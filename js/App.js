import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import RootStackNavigator from './navigation/RootStackNavigator';
import {ApolloProvider} from 'react-apollo';
import client from './config/api';
// import AboutContainer from './screens/About';

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <RootStackNavigator />

        {/* <AboutContainer /> */}
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({});

export default App;
