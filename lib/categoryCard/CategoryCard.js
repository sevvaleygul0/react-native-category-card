import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Image } from "react-native";
import Androw from "react-native-androw";
import { ScreenWidth } from "@freakycoder/react-native-helpers";
import LinearGradient from "react-native-linear-gradient";
import Text from "@freakycoder/react-native-custom-text";
import RNBounceable from "@freakycoder/react-native-bounceable";

import styles, { _shadowStyle, _container } from "./CategoryCard.style";

export default class CategoryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      count,
      width,
      height,
      borderRadius,
      titleText,
      imageStyle,
      shadowColor,
      shadowStyle,
      imageSource,
      gradientColors,
      descriptionText,
      backgroundColor,
      buttonImageStyle,
      customImageComponent,
      disableCountContainer,
      disableDescriptionText,
      ImageComponent = Image,
      rightButtonImageSource,
      customCountTextComponent,
      customTitleTextComponent,
      customDescriptionComponent,
      onPress,
    } = this.props;
    return (
      <RNBounceable onPress={onPress}>
        <Androw style={shadowStyle || _shadowStyle(shadowColor)}>
          <View
            style={_container(height, width, borderRadius, backgroundColor)}
          >
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
            <View style={styles.textContainer}>
              {customTitleTextComponent || (
                <Text h4 bold>
                  {titleText}
                </Text>
              )}
              {!disableDescriptionText
                ? customDescriptionComponent || (
                    <Text h5 bold color={"#B4B4B4"}>
                      {descriptionText}
                    </Text>
                  )
                : null}
            </View>
            {!disableCountContainer
              ? customCountTextComponent || (
                  <View style={styles.countContainerStyle}>
                    <Text h4 color={"#B4B4B4"}>
                      {count}
                    </Text>
                  </View>
                )
              : null}
            <View style={styles.rightButtonContainer}>
              <Image
                source={rightButtonImageSource}
                style={buttonImageStyle || styles.buttonImageStyle}
              />
            </View>
          </View>
        </Androw>
      </RNBounceable>
    );
  }
}

CategoryCard.propTypes = {
  width: PropTypes.number,
  count: PropTypes.number,
  borderRadius: PropTypes.number,
  height: PropTypes.number,
  titleText: PropTypes.string,
  shadowColor: PropTypes.string,
  gradientColors: PropTypes.array,
  descriptionText: PropTypes.string,
  backgroundColor: PropTypes.string,
  disableCountContainer: PropTypes.bool,
  disableDescriptionText: PropTypes.bool,
};

CategoryCard.defaultProps = {
  count: 10,
  borderRadius: 32,
  height: 80,
  shadowColor: "#757575",
  backgroundColor: "#fff",
  width: ScreenWidth * 0.8,
  disableCountContainer: false,
  descriptionText: "Fresh Food",
  disableDescriptionText: false,
  titleText: "Fruit & Vegetables",
  gradientColors: ["#9CF4DF", "#30C9E8", "#107C91"],
  rightButtonImageSource: require("../asset/next.png"),
};
