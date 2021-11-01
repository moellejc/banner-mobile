import React, { useRef, useEffect } from "react";
import { View, Text, Dimensions, StyleSheet, ViewStyle } from "react-native";
import { WHITE } from "../../constants/styles/Colors";

const { width: screenWidth, height: screenHeight } = Dimensions.get("screen");

export enum UserIconSizes {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

type UserIconProps = {
  size?: UserIconSizes;
  userProfilePhoto?: string;
};

const defaultProps: UserIconProps = {
  size: UserIconSizes.MEDIUM,
  userProfilePhoto: "",
};

const chooseSize = (size: UserIconSizes): SizeStyle => {
  switch (size) {
    case UserIconSizes.SMALL:
      return sizeStyles.small;
    case UserIconSizes.MEDIUM:
      return sizeStyles.medium;
    case UserIconSizes.LARGE:
      return sizeStyles.large;
    default:
      return sizeStyles.medium;
  }
};

export const UserIcon = (props: UserIconProps) => {
  props = { ...defaultProps, ...props };
  const sizeStyleRef = useRef(chooseSize(props.size!));

  return (
    <View style={sizeStyleRef.current.container}>
      <View style={sizeStyleRef.current.photo}></View>
    </View>
  );
};

type Style = {
  containerDefaults: ViewStyle;
  userPhotoDefaults: ViewStyle;
  containerSmall: ViewStyle;
  userPhotoSmall: ViewStyle;
  containerMedium: ViewStyle;
  userPhotoMedium: ViewStyle;
  containerLarge: ViewStyle;
  userPhotoLarge: ViewStyle;
};
const styles = StyleSheet.create<Style>({
  containerDefaults: {
    marginRight: 20,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  userPhotoDefaults: {
    backgroundColor: "green",
    borderColor: "black",
  },
  containerSmall: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  userPhotoSmall: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  containerMedium: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  userPhotoMedium: {
    width: 58,
    height: 58,
    borderRadius: 29,
  },
  containerLarge: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  userPhotoLarge: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
});

type SizeStyle = {
  container: ViewStyle[];
  photo: ViewStyle[];
};
type SizesStyle = {
  small: SizeStyle;
  medium: SizeStyle;
  large: SizeStyle;
};
const sizeStyles: SizesStyle = {
  small: {
    container: [styles.containerDefaults, styles.containerSmall],
    photo: [styles.userPhotoDefaults, styles.userPhotoSmall],
  },
  medium: {
    container: [styles.containerDefaults, styles.containerMedium],
    photo: [styles.userPhotoDefaults, styles.userPhotoMedium],
  },
  large: {
    container: [styles.containerDefaults, styles.containerLarge],
    photo: [styles.userPhotoDefaults, styles.userPhotoLarge],
  },
};
