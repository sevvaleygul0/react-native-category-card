import React from "react";
import {
  View,
  Text,
  Image,
  StyleProp,
  ViewStyle,
  ImageStyle,
  Dimensions,
} from "react-native";
import Androw from "react-native-androw";
import LinearGradient from "react-native-linear-gradient";
import RNBounceable from "@freakycoder/react-native-bounceable";

import styles, {
  _shadowStyle,
  _container,
  _descriptionTextStyle,
  _countTextStyle,
  _titleTextStyle,
} from "./CategoryCard.style";
const windowWidth = Dimensions.get("window").width;

type CustomViewStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomImageStyleProp =
  | StyleProp<ImageStyle>
  | Array<StyleProp<ImageStyle>>;

export interface ISource {
  source: string | { uri: string };
}

interface IProps {
  count?: number;
  width?: number;
  height?: number;
  titleText?: string;
  titleColor?: string;
  shadowColor?: string;
  borderRadius?: number;
  gradientColors?: string;
  descriptionText?: string;
  descriptionColor?: string;
  backgroundColor?: string;
  disableRightButton?: boolean;
  imageSource?: ISource;
  rightButtonImageSource?: ISource;
  imageStyle?: CustomViewStyleProp;
  shadowStyle?: CustomViewStyleProp;
  buttonImageStyle?: CustomImageStyleProp;
  ImageComponent?: any;
  customImageComponent?: React.ReactChild;
  customCountTextComponent?: React.ReactChild;
  customTitleTextComponent?: React.ReactChild;
  customDescriptionComponent?: React.ReactChild;
  onPress?: () => void;
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
      width = windowWidth * 0.8,
      height,
      borderRadius = 16,
      titleText,
      titleColor = "#4B4B4B",
      imageStyle,
      shadowColor = "#757575",
      shadowStyle,
      imageSource,
      gradientColors = ["#9CF4DF", "#30C9E8", "#107C91"],
      descriptionText,
      descriptionColor = "#B4B4B4",
      backgroundColor = "#fff",
      buttonImageStyle,
      disableRightButton = false,
      customImageComponent,
      ImageComponent = Image,
      rightButtonImageSource = require("../asset/next.png"),
      customCountTextComponent,
      customTitleTextComponent,
      customDescriptionComponent,
      onPress,
    } = this.props;

    const renderLeftImageContainer = () =>
      imageSource && (
        <LinearGradient
          start={{ x: 0.0, y: 0.25 }}
          end={{ x: 0.5, y: 1.0 }}
          colors={gradientColors}
          style={styles.gradient}
        >
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
          <Text style={_titleTextStyle(titleColor)}>{titleText}</Text>
        )}
        {descriptionText
          ? customDescriptionComponent || (
              <Text style={_descriptionTextStyle(descriptionColor)}>
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
              <Text style={_countTextStyle(descriptionColor)}>{count}</Text>
            </View>
          )
        : null;

    const renderRightImageContainer = () =>
      !disableRightButton && (
        <Image
          source={rightButtonImageSource}
          style={buttonImageStyle || styles.buttonImageStyle}
        />
      );

    return (
      <RNBounceable onPress={onPress}>
        <Androw style={shadowStyle || _shadowStyle(shadowColor)}>
          <View
            style={_container(height, width, borderRadius, backgroundColor)}
          >
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
