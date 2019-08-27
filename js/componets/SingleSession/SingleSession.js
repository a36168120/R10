import React from 'react';
import {View, Text, SectionList, TouchableHighlight} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const SingleSession = ({item, faveIds}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.wrapper}>
        <Text style={styles.location}>{item.location}</Text>
        {faveIds.includes(item.id) ? (
          <Ionicons style={styles.heart} name="ios-heart" size={18} />
        ) : null}
      </View>
    </View>
  );
};

export default SingleSession;
