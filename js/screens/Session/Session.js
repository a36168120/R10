import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import moment from 'moment';

const Session = ({item, navigation}) => {
  return (
    <View>
      <Text>{item.location}</Text>
      <Text>{item.title}</Text>
      <Text>{moment(item.startTime).format('LT')}</Text>
      <Text>{item.description}</Text>
      <Text>Presentedc by:</Text>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Speaker', {item});
        }}
        activeOpacity={0.6}>
        <Image style={styles.image} source={{uri: item.speaker.image}} />
      </TouchableOpacity>

      <Text>{item.speaker.name}</Text>
    </View>
  );
};

export default Session;
