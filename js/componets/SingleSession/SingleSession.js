import React from 'react';
import {View, Text, SectionList, TouchableHighlight} from 'react-native';
import styles from './styles';

const SingleSession = ({item}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.location}>{item.location}</Text>
    </View>
  );
};

export default SingleSession;
