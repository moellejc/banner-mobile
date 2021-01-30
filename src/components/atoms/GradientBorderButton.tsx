import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface GradientCoords {
  x: number;
  y: number;
}

interface GradientPositions {
  start: GradientCoords;
  end: GradientCoords;
}

interface GradientBorderButtonProps {
  height?: number;
  width?: number;
  borderWidth?: number;
  borderRadius?: number;
  gradientColors?: string[];
  gradientPositions?: GradientPositions;
  text: string;
  textColor?: string;
  fontSize?: number;
  backgroundColor?: string;
  pressBackgroundColor?: string;
  style: any;
  onPress?: () => void;
}

const GradientBorderButton: React.FC<GradientBorderButtonProps> = (
  props: GradientBorderButtonProps
) => {
  const [buttonBackgroundColor, setButtonBackgroundColor] = React.useState(
    props.backgroundColor
  );
  return (
    <TouchableOpacity
      activeOpacity={1}
      disabled={false}
      style={[
        {
          borderRadius: props.borderRadius,
          margin: props.borderWidth,
          //   backgroundColor: props.backgroundColor,
        },
        props.style,
      ]}
      onPress={props.onPress}
      onPressIn={() => setButtonBackgroundColor(props.pressBackgroundColor)}
      onPressOut={() => setButtonBackgroundColor(props.backgroundColor)}
    >
      <LinearGradient
        colors={props.gradientColors!}
        start={props.gradientPositions?.start}
        end={props.gradientPositions?.end}
        style={{
          borderRadius: props.borderRadius,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: props.height,
          width: props.width,
        }}
      >
        <View
          style={{
            padding: props.borderWidth,
            opacity: 1,
            flex: 0,
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",

            backgroundColor: buttonBackgroundColor,
            height: props.height! - props.borderWidth! * 2,
            width: props.width! - props.borderWidth! * 2,
            borderRadius: props.borderRadius,
          }}
          pointerEvents={"none"}
        >
          <Text
            style={{
              textAlignVertical: "center",
              paddingHorizontal: 16,
              color: props.textColor,
              backgroundColor: "transparent",
              fontSize: props.fontSize,
              fontWeight: "bold",
            }}
            numberOfLines={1}
          >
            {props.text}
          </Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

GradientBorderButton.defaultProps = {
  borderRadius: 10,
  borderWidth: 1,
  gradientPositions: {
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 },
  },
  textColor: "#fff",
  backgroundColor: "#000",
  pressBackgroundColor: "rgba(0,0,0,0.75)",
  fontSize: 18,
  style: {},
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default GradientBorderButton;
