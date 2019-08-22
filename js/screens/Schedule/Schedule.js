import React from 'react';
import {View, Text, SectionList, TouchableHighlight} from 'react-native';
import styles from './styles';
import ListSection from '../../componets/ListSection';

const Schedule = ({session, navigation}) => {
  return (
    <View style={styles.title}>
      <ListSection session={session} navigation={navigation} />
    </View>
  );
};

export default Schedule;
