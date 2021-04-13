import React from "react";
import { StyleSheet } from "react-native";
import GradientBorderButton from "./GradientBorderButton";
import AppTheme from "../../constants/styles/Theme";
import { DARK_PURPLE } from "../../constants/styles/Colors";
import { StringLocale } from "yup/lib/locale";

interface FabricButtonProps {
  height?: number;
  width?: number;
  borderRadius?: number;
  text: string;
  fontSize?: number;
  style?: any;
  onPress?: () => void;
}

const FabricButton: React.FC<FabricButtonProps> = (
  props: FabricButtonProps
) => {
  return (
    <GradientBorderButton
      style={styles.btn}
      text={props.text}
      gradientColors={[
        AppTheme.colors.fabricBlue,
        AppTheme.colors.fabricPurple,
        AppTheme.colors.fabricPink,
      ]}
      gradientPositions={{ start: { x: 0, y: 0 }, end: { x: 1, y: 1 } }}
      height={props.height}
      width={props.width}
      borderRadius={props.borderRadius}
      borderWidth={2}
      textColor="#fff"
      backgroundColor="#000"
      pressBackgroundColor="rgba(0,0,0,0.75)"
      onPress={props.onPress}
    />
  );
};

FabricButton.defaultProps = {
  height: 30,
  width: 100,
  borderRadius: 15,
  fontSize: 18,
  style: {},
};

const styles = StyleSheet.create({
  btn: {},
});

export default FabricButton;
