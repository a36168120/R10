import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import ListSection from '../../componets/ListSection';
import PropTypes from 'prop-types';

const Schedule = ({session, faveIds}) => {
  return (
    <View style={styles.container}>
      <ListSection session={session} faveIds={faveIds} />
    </View>
  );
};

Schedule.PropTypes = {
  session: PropTypes.array.isRequired,
  faveIds: PropTypes.array.isRequired,
};

export default Schedule;
