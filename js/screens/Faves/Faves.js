import React from 'react';
import {View, Text, SectionList} from 'react-native';
import {formatSessionData} from '../../lib/helper';
import styles from './styles';

const Faves = ({faves, faveIds, removeFaveSession}) => {
  const fave = formatSessionData(faves);
  return (
    <View>
      <SectionList
        renderItem={({item, index, section}) => <Text>{item}</Text>}
        sections={fave}
      />
    </View>
  );
};

export default Faves;
