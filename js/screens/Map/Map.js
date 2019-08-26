import React from 'react';
import {View, Text} from 'react-native';
import MapView from 'react-native-maps';
import Marker from 'react-native-maps';
import styles from './styles';

const Map = () => {
  return (
    <MapView
      style={{flex: 1}}
      region={{
        latitude: 49.263489,
        longitude: -123.131348,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }}>
      <MapView.Marker
        coordinate={{latitude: 49.263489, longitude: -123.131348}}
        image={require('../../assets/images/map_pin.png')}
      />
    </MapView>
  );
};

export default Map;
