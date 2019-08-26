import React from 'react';
import {View, Text, Image, TouchableOpacity, Button} from 'react-native';
import styles from './styles';
import moment from 'moment';

const Session = ({
  item,
  navigation,
  faveIds,
  addFaveSession,
  removeFaveSession,
}) => {
  return (
    <View>
      <Text style={styles.location}>{item.location}</Text>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.time}>{moment(item.startTime).format('LT')}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.present}>Presented by:</Text>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Speaker', {item});
        }}
        activeOpacity={0.6}>
        <View style={styles.wrapper}>
          <Image style={styles.image} source={{uri: item.speaker.image}} />
          <Text style={styles.speaker}>{item.speaker.name}</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.line} />

      {!faveIds.includes(item.id) ? (
        <Button
          style={styles.button}
          onPress={() => addFaveSession(item.id, addFaveSession)}
          title="Add to Faves"
          color="#9963ea"
        />
      ) : (
        <Button
          style={styles.button}
          onPress={() => removeFaveSession(item.id, removeFaveSession)}
          title="Remove to Faves"
          color="#9963ea"
        />
      )}
    </View>
  );
};

export default Session;
