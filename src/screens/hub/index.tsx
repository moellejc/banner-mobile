import React, { useEffect, useRef, useMemo, useCallback } from "react";
import { Text, View, Dimensions, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import Place from "../../components/place";
import Profile from "../profile";
import Settings from "../settings";
import Chat from "../../components/chat";
import Menu from "../../components/menu";
import {
  BANNER_SCROLL_POSITIONS,
  BANNER_PLACE_POSITIONS,
} from "../../components/place/_place/model";
import { HubScreens } from "../../types";
import Animated, { useSharedValue } from "react-native-reanimated";
import BottomSheet from "@gorhom/bottom-sheet";
import { connect } from "react-redux";
import { RootState, Actions, store } from "../../state";
import { styles } from "./styles";

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("window");

type HubScreenProps = {};
const HubScreen: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const bannerPlaceY = useSharedValue(BANNER_PLACE_POSITIONS.CONTENT);

  useEffect(() => {});

  return (
    <>
      <View style={[styles.screen]}>
        <Place {...{ bannerPlaceY }} />
      </View>
      <Menu />
    </>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    goToScreen: state.hub.toGoScreen,
  };
};

export default connect(mapStateToProps)(HubScreen);
