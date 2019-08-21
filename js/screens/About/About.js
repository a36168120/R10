import React from 'react';
import {View, ScrollView, Image, Text} from 'react-native';
import styles from './styles';

const About = ({conduct}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          style={styles.image}
          source={require('../../assets/images/r10_logo.png')}
        />

        <Text style={styles.text}>
          R10 is a conference that focuses on just about any topic related to
          dev.
        </Text>
        <Text style={styles.h2}>Date &amp; Venue</Text>
        <Text style={styles.text}>
          The R10 conference will take place on Thursday, June 27, 2017 in
          Vancouver, BC.
        </Text>
        <Text style={styles.h2}>Code of Conduct</Text>
      </ScrollView>
    </View>
  );
};

export default About;
