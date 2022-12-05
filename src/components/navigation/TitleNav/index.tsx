import React, { useEffect, useRef, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { styles } from "./styles";
import { TITLE_TRANSITION_DIFFERNCE } from "./constants";
import { VisibilityStates } from "../../../types";
import { connect } from "react-redux";
import { RootState, Actions, store } from "../../../state";

interface TitleNavProps {
  visibility?: VisibilityStates | null;
  title?: string;
}

const TitleNav = ({ visibility, title }: TitleNavProps) => {
  const titleRef = useRef("");
  const titleVisibilityRef = useRef(VisibilityStates.Hidden);
  const titleTopMargin = useSharedValue(TITLE_TRANSITION_DIFFERNCE);

  const titleAnim = useAnimatedStyle(() => {
    return {
      marginTop: withTiming(titleTopMargin.value, { duration: 350 }),
    };
  });

  useEffect(() => {
    // update title text
    if (title !== null && title !== undefined) {
      titleRef.current = title;
    }

    // Update the document title using the browser API
    if (visibility === null || visibility === undefined) return;

    if (visibility !== titleVisibilityRef.current) {
      if (visibility === VisibilityStates.Visible) {
        titleTopMargin.value = TITLE_TRANSITION_DIFFERNCE;
      } else if (visibility === VisibilityStates.Hidden) {
        titleTopMargin.value = 0;
      }
      titleVisibilityRef.current = visibility;
    }
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.titleContainer, titleAnim]}>
        <Text style={styles.titleTxt}>{titleRef.current}</Text>
      </Animated.View>
    </View>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    visibility: state.places.titleState,
    title: state.places.currentPlace.name,
  };
};

export default connect(mapStateToProps)(TitleNav);
