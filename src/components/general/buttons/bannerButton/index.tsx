import React from "react";
import { StyleSheet } from "react-native";
import GradientBorderButton from "../gradientBorderButton";
import AppTheme from "../../../../constants/styles/Theme";
import { DARK_PURPLE } from "../../../../constants/styles/Colors";
import { StringLocale } from "yup/lib/locale";

interface BannerButtonProps {
  height?: number;
  width?: number;
  borderRadius?: number;
  text: string;
  fontSize?: number;
  style?: any;
  disabled?: boolean;
  onPress?: () => void;
}

const BannerButton: React.FC<BannerButtonProps> = (
  props: BannerButtonProps
) => {
  return (
    <GradientBorderButton
      style={styles.btn}
      text={props.text}
      gradientColors={[
        AppTheme.colors.bannerBlue,
        AppTheme.colors.bannerPurple,
        AppTheme.colors.bannerPink,
      ]}
      gradientPositions={{ start: { x: 0, y: 0 }, end: { x: 1, y: 1 } }}
      height={props.height}
      width={props.width}
      borderRadius={props.borderRadius}
      borderWidth={2}
      textColor="#fff"
      backgroundColor="#000"
      pressBackgroundColor="rgba(0,0,0,0.75)"
      disabled={props.disabled}
      onPress={props.onPress}
    />
  );
};

BannerButton.defaultProps = {
  height: 30,
  width: 100,
  borderRadius: 15,
  fontSize: 18,
  disabled: false,
  style: {},
};

const styles = StyleSheet.create({
  btn: {},
});

export default BannerButton;
