import React, { useRef, useEffect } from "react";
import {
  View,
  Image,
  Text,
  Dimensions,
  StyleSheet,
  ViewStyle,
  ImageStyle,
} from "react-native";
import { WHITE } from "../../../constants/styles/Colors";

const { width: screenWidth, height: screenHeight } = Dimensions.get("screen");

export enum UserIconSizes {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
  CUSTOM = "custom",
}

type UserIconProps = {
  size?: UserIconSizes;
  userProfilePhoto?: string;
  verified?: boolean;
  style?: ViewStyle;
};

const defaultProps: UserIconProps = {
  size: UserIconSizes.MEDIUM,
  userProfilePhoto: "",
  verified: true,
  style: StyleSheet.create({}),
};

const chooseSize = (size: UserIconSizes): SizeStyle => {
  switch (size) {
    case UserIconSizes.SMALL:
      return sizeStyles.small;
    case UserIconSizes.MEDIUM:
      return sizeStyles.medium;
    case UserIconSizes.LARGE:
      return sizeStyles.large;
    case UserIconSizes.CUSTOM:
      return sizeStyles.custom;
    default:
      return sizeStyles.medium;
  }
};

export const UserIcon = (props: UserIconProps) => {
  props = { ...defaultProps, ...props };
  const sizeStyleRef = useRef(chooseSize(props.size!));

  return (
    <View style={[sizeStyleRef.current.container, props.style]}>
      {props.verified ? (
        <Image
          style={styles.verifiedBackground}
          source={require("../../../assets/images/ultra-user-photo-verified-ring.png")}
        />
      ) : (
        <Image
          style={styles.verifiedBackground}
          source={require("../../../assets/images/ultra-user-photo-ring.png")}
        />
      )}
      <View style={sizeStyleRef.current.photo}></View>
      {props.verified && props.size == UserIconSizes.MEDIUM ? (
        <Image
          style={styles.verfiedCheck}
          source={require("../../../assets/images/ico-confirmed.png")}
        />
      ) : null}
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
  verifiedBackground: ImageStyle;
  verfiedCheck: ImageStyle;
};
const styles = StyleSheet.create<Style>({
  containerDefaults: {
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  userPhotoDefaults: {
    backgroundColor: "green",
  },
  containerSmall: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  userPhotoSmall: {
    width: 28,
    height: 28,
    borderRadius: 14,
  },
  containerMedium: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  userPhotoMedium: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  containerLarge: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  userPhotoLarge: {
    width: 82,
    height: 82,
    borderRadius: 41,
  },
  verifiedBackground: {
    resizeMode: "cover",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: undefined,
    height: undefined,
  },
  verfiedCheck: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 16,
    height: 16,
    borderRadius: 8,
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
  custom: SizeStyle;
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
  custom: {
    container: [styles.containerDefaults],
    photo: [styles.userPhotoDefaults],
  },
};
