import {
  Screen,
  ScreenWidth,
  ScreenHeight,
  isIOS,
  isAndroid,
} from '@freakycoder/react-native-helpers';

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
  justifyContent: 'center',
});

export const _imageContainer = (backgroundColor) => ({
  backgroundColor,
  borderRadius: 28,
  marginLeft: 16,
  height: 55,
  width: 55,
});

export default {
  gradient: {
    borderRadius: 28,
    marginLeft: 16,
    height: 55,
    width: 55,
    opacity: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {width: 30, height: 30},
};
