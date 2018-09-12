const Dimensions = require('Dimensions');

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;

export const getRandomNumber = (min, max) => {
  return Math.random() * (max - min) + min;
};
