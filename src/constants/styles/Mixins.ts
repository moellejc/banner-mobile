import { Dimensions, PixelRatio } from "react-native";

const WINDOW_WIDTH = Dimensions.get("window").width;
const guidelineBaseWidth = 375;

export const scaleSize = (size: number) =>
  (WINDOW_WIDTH / guidelineBaseWidth) * size;

export const scaleFont = (size: number) => size * PixelRatio.getFontScale();

function dimensions(
  top: number,
  right: number = top,
  bottom: number = top,
  left: number = right,
  property: string
) {
  let styles: { [key: string]: number } = {};

  styles[`${property}Top`] = top;
  styles[`${property}Right`] = right;
  styles[`${property}Bottom`] = bottom;
  styles[`${property}Left`] = left;

  return styles;
}

export function margin(
  top: number,
  right: number,
  bottom: number,
  left: number
) {
  return dimensions(top, right, bottom, left, "margin");
}

export function padding(
  top: number,
  right: number,
  bottom: number,
  left: number
) {
  return dimensions(top, right, bottom, left, "padding");
}

interface IBoxShadowDimensions {
  height: number;
  width: number;
}

interface IBoxShadow {
  shadowColor: string;
  shadowOffset: IBoxShadowDimensions;
  shadowOpacity: number;
  shadowRadius: number;
  elevation: number;
}

export function boxShadow(
  color: string,
  offset: IBoxShadowDimensions = { height: 2, width: 2 },
  radius: number = 8,
  opacity: number = 0.2
): IBoxShadow {
  return {
    shadowColor: color,
    shadowOffset: offset,
    shadowOpacity: opacity,
    shadowRadius: radius,
    elevation: radius,
  };
}
