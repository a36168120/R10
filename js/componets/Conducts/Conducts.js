import React, {Component} from 'react';
import {View, Text, Animated, Easing, TouchableOpacity} from 'react-native';
import styles from './styles';

class Conducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.spinValue = new Animated.Value(0);
  }

  spin = () => {
    this.spinValue.setValue(0);
    Animated.timing(this.spinValue, {
      toValue: 1,
      duration: 500,
      easing: Easing.linear,
    }).start();
    this.setState({open: !this.state.open});
  };

  render() {
    const {conduct} = this.props;

    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    return (
      <View key={conduct.id} style={styles.container}>
        <View>
          <TouchableOpacity onPress={this.spin}>
            {this.state.open ? (
              <View style={styles.wrapper}>
                <Animated.Text
                  style={styles.expend}
                  style={{
                    fontSize: 20,
                    width: 30,
                    height: 30,
                    color: '#9963ea',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transform: [{rotate: spin}],
                  }}>
                  -
                </Animated.Text>
                <Text style={styles.title}>{conduct.title}</Text>
              </View>
            ) : (
              <View style={styles.wrapper}>
                <Animated.Text
                  style={styles.expend}
                  style={{
                    fontSize: 20,
                    width: 30,
                    height: 30,
                    color: '#9963ea',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transform: [{rotate: spin}],
                  }}>
                  +
                </Animated.Text>
                <Text style={styles.title}>{conduct.title}</Text>
              </View>
            )}
          </TouchableOpacity>
          {this.state.open ? <Text>{conduct.description}</Text> : <Text></Text>}
        </View>
      </View>
    );
  }
}

export default Conducts;
