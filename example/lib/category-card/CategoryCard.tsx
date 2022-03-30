import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  ImageStyle,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import Androw from 'react-native-androw';
import {ScreenWidth} from '@freakycoder/react-native-helpers';
import LinearGradient from 'react-native-linear-gradient';
import Text from '@freakycoder/react-native-custom-text';
import RNBounceable from '@freakycoder/react-native-bounceable';

import styles, {_shadowStyle, _container} from './CategoryCard.style';

type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;
type CustomViewStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomImageStyleProp =
  | StyleProp<ImageStyle>
  | Array<StyleProp<ImageStyle>>;

export interface ISource {
  source: string | {uri: string};
}

interface IProps {
  count: number;
  width: number;
  height: number;
  titleText: string;
  titleColor: string;
  shadowColor: string;
  borderRadius: number;
  gradientColors: string;
  descriptionText: string;
  descriptionColor: string;
  backgroundColor: string;
  disableRightImage: boolean;
  imageSource: ISource;
  rightButtonImageSource: ISource;
  imageStyle: CustomViewStyleProp;
  shadowStyle: CustomViewStyleProp;
  buttonImageStyle: CustomImageStyleProp;
  ImageComponent: any;
  customImageComponent: React.ReactChild;
  customCountTextComponent: React.ReactChild;
  customTitleTextComponent: React.ReactChild;
  customDescriptionComponent: React.ReactChild;
  onPress: () => void;
}

interface IState {}

export default class CategoryCard extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      count,
      width = ScreenWidth * 0.8,
      height,
      borderRadius = 16,
      titleText = 'Fruit & Vegetables',
      titleColor,
      imageStyle,
      shadowColor = '#757575',
      shadowStyle,
      imageSource,
      gradientColors = ['#9CF4DF', '#30C9E8', '#107C91'],
      descriptionText,
      descriptionColor = '#B4B4B4',
      backgroundColor = '#fff',
      buttonImageStyle,
      customImageComponent,
      disableRightImage = false,
      ImageComponent = Image,
      rightButtonImageSource = require('../asset/next.png'),
      customCountTextComponent,
      customTitleTextComponent,
      customDescriptionComponent,
      onPress,
    } = this.props;

    const renderLeftImageContainer = () =>
      imageSource && (
        <LinearGradient
          start={{x: 0.0, y: 0.25}}
          end={{x: 0.5, y: 1.0}}
          colors={gradientColors}
          style={styles.gradient}>
          {customImageComponent || (
            <ImageComponent
              style={imageStyle || styles.imageStyle}
              source={imageSource}
            />
          )}
        </LinearGradient>
      );

    const renderTextContainer = () => (
      <View style={styles.textContainer}>
        {customTitleTextComponent || (
          <Text h4 bold color={titleColor}>
            {titleText}
          </Text>
        )}
        {descriptionText
          ? customDescriptionComponent || (
              <Text h5 bold color={descriptionColor} style={{paddingTop: 4}}>
                {descriptionText}
              </Text>
            )
          : null}
      </View>
    );

    const renderCountTextContainer = () =>
      count
        ? customCountTextComponent || (
            <View style={styles.countContainerStyle}>
              <Text h4 color={'#B4B4B4'}>
                {count}
              </Text>
            </View>
          )
        : null;

    const renderRightImageContainer = () =>
      !disableRightImage && (
        <View style={styles.rightButtonContainer}>
          <Image
            source={rightButtonImageSource}
            style={buttonImageStyle || styles.buttonImageStyle}
          />
        </View>
      );

    return (
      <RNBounceable onPress={onPress}>
        <Androw style={shadowStyle || _shadowStyle(shadowColor)}>
          <View
            style={_container(height, width, borderRadius, backgroundColor)}>
            {renderLeftImageContainer()}
            {renderTextContainer()}
            {renderCountTextContainer()}
            {renderRightImageContainer()}
          </View>
        </Androw>
      </RNBounceable>
    );
  }
}
