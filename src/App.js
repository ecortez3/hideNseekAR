/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Gyroscope } from 'react-native-sensors';
import Backdrop from './components/Backdrop';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);

    new Gyroscope({
      updateInterval: 50
    })
      .then(observable => {
        observable.subscribe(({ y }) => {
          this.setState(state => ({
            y: y + state.y
          }));
        });
      })
      .catch(error => {
        console.log('The sensor is not available');
      });

    this.state = {
      y: 0
    };
  }

  render() {
    const { y } = this.state;
    return (
        <Backdrop y={y} />
    );
  }
}
