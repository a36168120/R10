import React from 'react';
import {View, Text, SectionList, TouchableHighlight} from 'react-native';
import styles from './styles';

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

const Schedule = ({session}) => {
  const newData = formatSessionData(session);
  // const newTitle = toLocaleTimeString(session.item.title);
  // console.log(newTitle);
  console.log(newData);
  return (
    <View>
      <SectionList
        renderItem={({item, index, section}) => (
          <TouchableHighlight
            onPress={() => {
              console.log('need to go to session screen here');
            }}
            underlayColor="#ECD8D9">
            <View>
              <Text>{item.title}</Text>
              <Text>{item.location}</Text>
            </View>
          </TouchableHighlight>
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text style={{fontWeight: 'bold'}}>{title}</Text>
        )}
        sections={newData}
        keyExtractor={(item, index) => item + index}
      />
    </View>
  );
};

export default Schedule;
