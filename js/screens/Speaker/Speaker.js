import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Button,
  Linking,
} from 'react-native';
import styles from './styles';
import {SafeAreaView} from 'react-navigation';
import {withNavigation} from 'react-navigation';

const Speaker = ({item, navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          activiOpacity={0.5}>
          <Text style={styles.backbtn}>X</Text>
        </TouchableOpacity>
        <View style={styles.wrapper}>
          <Text style={styles.title}>About the Speaker</Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Image style={styles.image} source={{uri: item.image}} />
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.bio}>{item.bio}</Text>
      </View>

      <Button
        title="Read More on Wikipedia"
        onPress={() => Linking.openURL(item.url).catch(error => error)}
      />
    </SafeAreaView>
  );
};

export default withNavigation(Speaker);
