import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
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
              onPress={() => Linking.openURL(item.url).catch(error => error)}>
              <Text style={styles.btnTxt}>Read More on Wikipedia</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default withNavigation(Speaker);
