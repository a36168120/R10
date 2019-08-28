import React from 'react';
import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import PropTypes from 'prop-types';

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

SingleSession.PropTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    startTime: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    startTime: PropTypes.string.isRequired,
  }),
  faveIds: PropTypes.array.isRequired,
};

export default SingleSession;
