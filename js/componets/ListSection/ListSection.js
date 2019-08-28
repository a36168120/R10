import React from 'react';
import {View, Text, SectionList, TouchableHighlight} from 'react-native';
import {withNavigation} from 'react-navigation';
import moment from 'moment';
import SingleSession from '../../componets/SingleSession';
import {formatSessionData} from '../../lib/helper';
import styles from './styles';
import PropTypes from 'prop-types';

const ListSection = ({session, navigation, faveIds}) => {
  const newData = formatSessionData(session);
  return (
    <View>
      <SectionList
        renderItem={({item}) => (
          <TouchableHighlight
            onPress={() => {
              navigation.navigate('Session', {item});
            }}
            underlayColor="#ECD8D9">
            <SingleSession item={item} faveIds={faveIds} />
          </TouchableHighlight>
        )}
        renderSectionHeader={({section: {title}}) => (
          <View style={styles.timeWrapper}>
            <Text style={styles.time}>{moment(title).format('LT')}</Text>
          </View>
        )}
        sections={newData}
        keyExtractor={(item, index) => item + index}
      />
    </View>
  );
};

ListSection.PropTypes = {
  session: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired,
  faveIds: PropTypes.array.isRequired,
};

export default withNavigation(ListSection);
