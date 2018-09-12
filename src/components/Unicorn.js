import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { deviceHeight, deviceWidth, getRandomNumber } from '../utils/utils';

// Subtract 20 to give some space on sides and account for top/bottom phone bars
const topPosition = getRandomNumber(0, (deviceHeight - 20));
const leftPosition = getRandomNumber(0, (deviceWidth - 20));

class Unicorn extends Component {
  render() {
    return (
      <Image
        style={[styles.unicorn]}
        source={require('../../assets/images/unicorn.png')}
      />
    );
  }
}

const styles = StyleSheet.create({
  unicorn: {
    position: 'absolute',
    top: topPosition,
    left: leftPosition,
    zIndex: 9999,
    height: 100,
    width: 100
  }
});

export default Unicorn;
