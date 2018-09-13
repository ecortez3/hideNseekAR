import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { RNCamera  } from 'react-native-camera';
import { ViroVRSceneNavigator, ViroARSceneNavigator } from 'react-viro';
import Unicorn from './Unicorn.js';
import { getRandomNumber, deviceHeight, deviceWidth } from "../utils/utils";

const randomYVariable = getRandomNumber(-10, 10); //Random Y between -10 and 10
const apiKey = '50EF9586-C367-4A82-B110-79B6B9471439';
class Backdrop extends Component {
  render() {
    const { y } = this.props;
    const showUnicorn = Math.floor(y) === Math.floor(randomYVariable);

    console.log(Math.floor(y) === Math.floor(randomYVariable), Math.floor(y), Math.floor(randomYVariable));

    const imageWidth = 4 * deviceWidth;
    const backdropDimensions = {
      width: imageWidth,
      height: deviceHeight
    };

    const positionOnScreenX = -imageWidth / 2;
    // The y axis of the sensor data resembles what we need for the x axis in the image
    const movementX = -y / 10 * imageWidth;

    return (
      <View style={styles.container}>
        <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style = {styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            permissionDialogTitle={'Permission to use camera'}
            permissionDialogMessage={'We need your permission to use your camera phone'}
        />
        <View style={{ 
          flex: 0, 
          flexDirection: 'row', 
          justifyContent: 'center' }} 
        />
        {showUnicorn &&
          <ViroARSceneNavigator 
            apiKey={apiKey}
            initialScene={{ scene: InitialARScene }} 
          />
        }
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
});

export default Backdrop;
