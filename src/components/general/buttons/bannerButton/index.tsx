import React from "react";
import { StyleSheet } from "react-native";
import GradientBorderButton from "../gradientBorderButton";
import { useTheme } from "native-base";
import { DARK_PURPLE } from "../../../../constants/styles/Colors";
import { StringLocale } from "yup/lib/locale";

interface BannerButtonProps {
  height?: number;
  width?: number;
  borderRadius?: number;
  text: string;
  fontSize?: number;
  textColor?: string;
  style?: any;
  disabled?: boolean;
  backgroundColor?: string;
  pressBackgroundColor?: string;
  onPress?: () => void;
}

const BannerButton: React.FC<BannerButtonProps> = (
  props: BannerButtonProps
) => {
  const theme = useTheme();
  return (
    <GradientBorderButton
      style={styles.btn}
      text={props.text}
      gradientColors={[
        theme.colors.tertiary[400],
        theme.colors.primary[400],
        theme.colors.secondary[400],
      ]}
      gradientPositions={{ start: { x: 0, y: 0 }, end: { x: 1, y: 1 } }}
      height={props.height}
      width={props.width}
      borderRadius={props.borderRadius}
      borderWidth={2}
      textColor={props.textColor}
      backgroundColor={props.backgroundColor}
      pressBackgroundColor={props.pressBackgroundColor}
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
  textColor: "#fff",
  backgroundColor: "#000",
  pressBackgroundColor: "#1a1a1a",
  disabled: false,
  style: {},
};

const styles = StyleSheet.create({
  btn: {},
});

export default BannerButton;
