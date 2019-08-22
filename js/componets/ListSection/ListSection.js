import React from 'react';
import {View, Text, SectionList, TouchableHighlight} from 'react-native';
import styles from './styles';
import moment from 'moment';
import SingleSession from '../../componets/SingleSession';

const ListSection = ({session, navigation}) => {
  const newData = formatSessionData(session);
  return (
    <View>
      <SectionList
        renderItem={({item, index, section}) => (
          <TouchableHighlight
            onPress={() => {
              navigation.navigate('Session', {item});
            }}
            underlayColor="#ECD8D9">
            <SingleSession item={item} />
          </TouchableHighlight>
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.time}>{moment(title).format('LT')}</Text>
        )}
        sections={newData}
        keyExtractor={(item, index) => item + index}
      />
    </View>
  );
};

export const formatSessionData = sessions => {
  return sessions
    .reduce((acc, curr) => {
      const timeExists = acc.find(section => section.title === curr.startTime);
      timeExists
        ? timeExists.data.push(curr)
        : acc.push({title: curr.startTime, data: [curr]});
      return acc;
    }, [])
    .sort((a, b) => a.title - b.title);
};

export default ListSection;
