import React from 'react';
import {View, Text, SectionList, TouchableHighlight} from 'react-native';
import styles from './styles';
import ListSection from '../../componets/ListSection';

const Schedule = ({session, faveIds}) => {
  return (
    <View style={styles.container}>
      <ListSection session={session} faveIds={faveIds} />
    </View>
  );
};

export default Schedule;
