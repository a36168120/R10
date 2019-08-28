import React from 'react';
import {View, ScrollView, Image, Text, Platform} from 'react-native';
import styles from './styles';
import Conducts from '../../componets/Conducts';
import PropTypes from 'prop-types';

const About = ({conduct}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          style={styles.image}
          source={require('../../assets/images/r10_logo.png')}
        />
        <View style={styles.line} />

        <Text style={styles.text}>
          R10 is a conference that focuses on just about any topic related to
          dev.
        </Text>

        <Text style={styles.header}>Date &amp; Venue</Text>

        <Text style={styles.text}>
          The R10 conference will take place on Thursday, June 27, 2017 in
          Vancouver, BC.
        </Text>

        <Text style={styles.header}>Code of Conduct</Text>

        {conduct.allConducts.map(conduct => (
          <Conducts key={conduct.id} conduct={conduct} />
        ))}

        {Platform.OS === 'ios' && (
          <View>
            <View style={styles.line} />
            <Text style={styles.text}>ⓒ RED Academy 2019</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

About.PropTypes = {
  conduct: PropTypes.object.isRequired,
};

export default About;
