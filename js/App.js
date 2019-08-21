import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import RootStackNavigator from './navigation/RootStackNavigator';
import {ApolloProvider} from 'react-apollo';
import client from './config/api';
import {FavesProvider} from './context/FavesContext';

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <FavesProvider>
          <RootStackNavigator />
        </FavesProvider>
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({});

export default App;
