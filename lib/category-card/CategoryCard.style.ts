import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";

interface Style {
  gradient: ViewStyle;
  imageStyle: ImageStyle;
  textContainer: ViewStyle;
  countContainerStyle: ViewStyle;
  buttonImageStyle: ImageStyle;
}

export const _shadowStyle = (shadowColor): ViewStyle => ({
  shadowColor,
  shadowRadius: 5,
  shadowOpacity: 0.2,
  shadowOffset: {
    width: 0,
    height: 5,
  },
});

export const _titleTextStyle = (textColor: string): TextStyle => ({
  fontWeight: "bold",
  fontSize: 15,
  color: textColor,
});

export const _countTextStyle = (textColor: string): TextStyle => ({
  paddingTop: 4,
  fontSize: 15,
  color: textColor,
});
export const _descriptionTextStyle = (descriptionColor: string): TextStyle => ({
  paddingTop: 4,
  fontSize: 13,
  color: descriptionColor,
});

export const _container = (
  height,
  width,
  borderRadius,
  backgroundColor,
): ViewStyle => ({
  height,
  width,
  borderRadius,
  backgroundColor,
  paddingLeft: 20,
  paddingRight: 16,
  paddingTop: 12,
  paddingBottom: 12,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
});

export default StyleSheet.create<Style>({
  gradient: {
    height: 55,
    width: 55,
    opacity: 0.5,
    marginRight: 20,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  imageStyle: {
    width: 30,
    height: 30,
  },
  textContainer: {
    marginRight: "auto",
  },
  countContainerStyle: {
    marginLeft: "auto",
    marginRight: 12,
  },
  buttonImageStyle: {
    width: 12,
    height: 12,
  },
});
