import React from 'react';
import {View, Text, SectionList, TouchableHighlight} from 'react-native';
import styles from './styles';

const SingleSession = ({item}) => {
  return (
    <View>
      <Text>{item.title}</Text>
      <Text>{item.location}</Text>
    </View>
  );
};

export default SingleSession;
