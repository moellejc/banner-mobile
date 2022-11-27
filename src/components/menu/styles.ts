import { StyleSheet, Dimensions } from "react-native";
const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("window");
import {
  MENU_INDICATOR_SIZE,
  MENU_SIDE_MARGIN,
  MENU_ICON_SIZE,
  MENU_TOTAL_OPTIONS,
} from "./constants";

const MENU_CONTAINER_WIDTH = WINDOW_WIDTH - MENU_SIDE_MARGIN * 2;
const MENU_ICON_INDICATOR_CENTER = MENU_ICON_SIZE / 2 - MENU_INDICATOR_SIZE / 2;

/**
 * Calculates the left postion of the circular
 * menu indicator
 * @param indicatorIndex
 * @param totalItems
 * @returns
 */
export const calculateIndicatorPosition = (
  indicatorIndex: number,
  totalItems: number
): number => {
  if (indicatorIndex < 0 || totalItems < 1) return MENU_ICON_INDICATOR_CENTER;

  const innerWidth = MENU_CONTAINER_WIDTH - MENU_ICON_SIZE;
  const spaceInterval = innerWidth / (totalItems - 1);
  return spaceInterval * indicatorIndex + MENU_ICON_INDICATOR_CENTER;
};

export const styles = StyleSheet.create({
  menuContainer: {
    height: 90,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "white",
    justifyContent: "center",
    flexDirection: "column",
    paddingHorizontal: MENU_SIDE_MARGIN,
  },
  menuIconsContainer: {
    height: 40,
    width: "100%",
    marginTop: 15,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    width: MENU_ICON_SIZE,
    height: MENU_ICON_SIZE,
  },
  indicatorContainer: {
    width: "100%",
    height: MENU_INDICATOR_SIZE,
    marginBottom: "auto",
  },
  indicator: {
    position: "absolute",
    left: calculateIndicatorPosition(1, MENU_TOTAL_OPTIONS),
    backgroundColor: "purple",
    width: MENU_INDICATOR_SIZE,
    height: MENU_INDICATOR_SIZE,
    borderRadius: MENU_INDICATOR_SIZE / 2,
  },
});
