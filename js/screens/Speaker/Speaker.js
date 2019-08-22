import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import {SafeAreaView} from 'react-navigation';

const Speaker = ({item}) => {
  return (
    <SafeAreaView style={styles.speakerContainer}>
      <Text>X</Text>
      <Text>about the speaker</Text>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: item.image}} />
        <Text>{item.name}</Text>
        <Text>{item.bio}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Speaker;
