import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  ViroARScene,
  ViroText,
  ViroMaterials,
  ViroBox,
  Viro3DObject,
  ViroAmbientLight,
  ViroSpotLight,
  ViroARPlaneSelector,
  ViroNode,
  ViroAnimations
} from 'react-viro';

class ARScene extends Component {
  getInitialState() {
    return {
      text : "Initializing AR..."
    };
  },

  render() {
    return (
      <ViroARScene onTrackingUpdated={()=>{this.setState({ text: "What do you see" })}}>
        <ViroText 
            text={this.state.text} 
            scale={[.1, .1, .1]} 
            height={1} 
            width={4} 
            position={[0, .2, -1]} 
            style={styles.textStyle} 
        />
        <ViroAmbientLight color={"#aaaaaa"} />
        <ViroSpotLight 
            innerAngle={5} 
            outerAngle={90} 
            direction={[0,-1,-.2]} 
            position={[0, 3, 1]} 
            color="#ffffff" 
            castsShadow={true} 
        />
        <ViroNode 
          position={[0, -1, 0]}
          dragType="FixedToWorld" 
          onDrag={()=>{}}>
          <Viro3DObject
              source={require('../../assets/augmented/free__hand_painted_potions/scene.gltf')}
              resources={[
                require('../../assets/augmented/free__hand_painted_potions/scene.bin'),
                require('../../assets/augmented/free__hand_painted_potions/textures/01_-_Default_baseColor.png'),
                require('../../assets/augmented/free__hand_painted_potions/textures/02_-_Default_baseColor.png'),
                require('../../assets/augmented/free__hand_painted_potions/textures/03_-_Default_baseColor.png'),
                require('../../assets/augmented/free__hand_painted_potions/textures/07_-_Default_baseColor.png')
              ]}
              type="GLTF"
              position={[0, -10, -15]}
              scale={[.05, .05, .05]}
          />
          </ViroNode>
      </ViroARScene>
    );
  }
}); 

var styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'Arial',
    fontSize: 50,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  }
});

export default ARScene;
