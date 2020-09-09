export const _shadowStyle = (shadowColor) => ({
  shadowColor,
  shadowRadius: 10,
  shadowOpacity: 0.08,
  shadowOffset: {
    width: 0,
    height: 5,
  },
});

export const _container = (height, width, backgroundColor) => ({
  height,
  width,
  backgroundColor,
  borderRadius: 28,
  flexDirection: 'row',
  alignItems: 'center',
});

export default {
  gradient: {
    borderRadius: 28,
    marginLeft: 16,
    marginRight: 20,
    height: 55,
    width: 55,
    opacity: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {width: 30, height: 30},
  textContainer: {justifyContent: 'space-around', height: 50},
  countContainerStyle: {marginLeft: 'auto'},
  rightButtonContainer: {marginLeft: 22, marginRight: 8},
  buttonImageStyle: {width: 16, height: 16},
};
