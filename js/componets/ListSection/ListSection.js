import React from 'react';
import {View, Text, SectionList, TouchableHighlight} from 'react-native';
import {withNavigation} from 'react-navigation';
import moment from 'moment';
import SingleSession from '../../componets/SingleSession';
import {formatSessionData} from '../../lib/helper';
import styles from './styles';

const ListSection = ({session, navigation, faveIds}) => {
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
            <SingleSession item={item} faveIds={faveIds} />
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

export default withNavigation(ListSection);
