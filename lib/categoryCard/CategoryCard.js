import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Androw from 'react-native-androw';
import {
  Screen,
  ScreenWidth,
  ScreenHeight,
  isIOS,
  isAndroid,
} from '@freakycoder/react-native-helpers';
import LinearGradient from 'react-native-linear-gradient';

import styles, {_shadowStyle, _container} from './CategoryCard.style';

export default class CategoryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      shadowStyle,
      shadowColor,
      height,
      width,
      backgroundColor,
      LinearGradientColors,
      imageStyle,
      imageSource,
      titleTextStyle,
      titleText,
      disableDescriptionText,
      descriptionText,
      descriptionTextStyle,
      count,
      disableCountContainer,
      countTextStyle,
      onPress,
      rightButtonImageSource,
      buttonImageStyle,
    } = this.props;
    return (
      <Androw style={shadowStyle || _shadowStyle(shadowColor)}>
        <View style={_container(height, width, backgroundColor)}>
          <LinearGradient
            start={{x: 0.0, y: 0.25}}
            end={{x: 0.5, y: 1.0}}
            colors={LinearGradientColors}
            style={styles.gradient}>
            <Image
              style={imageStyle || styles.imageStyle}
              source={imageSource}></Image>
          </LinearGradient>
          <View style={styles.textContainer}>
            <Text style={titleTextStyle || styles.titleTextStyle}>
              {titleText}
            </Text>
            {!disableDescriptionText ? (
              <Text style={descriptionTextStyle || styles.descriptionTextStyle}>
                {descriptionText}
              </Text>
            ) : null}
          </View>
          {!disableCountContainer ? (
            <View style={styles.countContainerStyle}>
              <Text style={countTextStyle || styles.countTextStyle}>
                {count}
              </Text>
            </View>
          ) : null}
          <View style={styles.rightButtonContainer}>
            <TouchableOpacity onPress={onPress}>
              <Image
                source={rightButtonImageSource}
                style={buttonImageStyle || styles.buttonImageStyle}></Image>
            </TouchableOpacity>
          </View>
        </View>
      </Androw>
    );
  }
}

CategoryCard.propTypes = {
  shadowColor: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  backgroundColor: PropTypes.string,
  LinearGradientColors: PropTypes.array,
  titleText: PropTypes.string,
  disableDescriptionText: PropTypes.bool,
  descriptionText: PropTypes.string,
  count: PropTypes.number,
  disableCountContainer: PropTypes.bool,
  count: PropTypes.number,
};

CategoryCard.defaultProps = {
  shadowColor: '#757575',
  height: 80,
  width: ScreenWidth * 0.8,
  backgroundColor: '#fff',
  LinearGradientColors: ['#9CF4DF', '#30C9E8', '#107C91'],
  imageSource: require('../assets/bananas.png'),
  titleText: 'Fruit & Vegetables',
  disableDescriptionText: false,
  descriptionText: 'Fresh Food',
  disableCountContainer: false,
  count: 10,
  rightButtonImageSource: require('../assets/next.png'),
};
