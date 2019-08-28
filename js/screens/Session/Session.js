import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import moment from 'moment';
import PropTypes from 'prop-types';

const Session = ({
  item,
  navigation,
  faveIds,
  addFaveSession,
  removeFaveSession,
}) => {
  return (
    <ScrollView>
      <View style={styles.headerWrapper}>
        <Text style={styles.location}>{item.location}</Text>

        {faveIds.includes(item.id) ? (
          <Ionicons style={styles.heart} name="ios-heart" size={18} />
        ) : null}
      </View>

      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.time}>{moment(item.startTime).format('LT')}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.present}>Presented by:</Text>

      {item.speaker ? (
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
      ) : null}

      <View style={styles.line} />

      {!faveIds.includes(item.id) ? (
        <View style={styles.bigWrapper}>
          <View style={styles.btnWrapper}>
            <LinearGradient
              colors={['#9963ea', '#8797D6']}
              start={{x: 0.0, y: 1.0}}
              end={{x: 1.0, y: 0.0}}
              style={[StyleSheet.absoluteFill]}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => addFaveSession(item.id)}>
              <Text style={styles.btnTxt}>Add to Faves</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={styles.bigWrapper}>
          <View style={styles.btnWrapper}>
            <LinearGradient
              colors={['#9963ea', '#8797D6']}
              start={{x: 0.0, y: 1.0}}
              end={{x: 1.0, y: 0.0}}
              style={[StyleSheet.absoluteFill]}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => removeFaveSession(item.id)}>
              <Text style={styles.btnTxt}>Remove to Faves</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

Session.PropTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    startTime: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    speaker: PropTypes.shape({
      id: PropTypes.string.isRequired,
      bio: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  }),
  navigation: PropTypes.object.isRequired,
  addFaveSession: PropTypes.func.isRequired,
  removeFaveSession: PropTypes.func.isRequired,
};

export default Session;
