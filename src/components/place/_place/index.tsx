import React, { useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  FlatList,
  ListRenderItem,
} from "react-native";
import { VisibilityStates } from "../../../types";
import Animated, { useSharedValue, SharedValue } from "react-native-reanimated";
import { connect } from "react-redux";
import { RootState, Actions, store } from "../../../state";
import { useDispatch } from "react-redux";
import { PlacesActions } from "../../../state/actions";
import { styles } from "./styles";
import PlaceSection from "../section";
import {
  createPlace,
  Place as PlaceData,
  PlaceFeedSection,
} from "../../../tests";
const { height: WINDOW_HEIGHT } = Dimensions.get("window");

const { Value } = Animated;

// TODO: Replace with loading from API
const currentPlaceData = createPlace();
const HEADER_TITLE_BOTTOM = 90;

interface PlaceProps {
  bannerPlaceY: SharedValue<number>;
}

const Place = ({ bannerPlaceY }: PlaceProps) => {
  const y = new Value(0);
  const panDownY = useSharedValue(0);
  const placeTitleVisibility = useRef(VisibilityStates.Visible);
  const bannerPlaceScrollRef = useRef<FlatList>(null);

  const dispatch = useDispatch();

  const handleScroll = (y: number) => {
    // scrolling down the page
    if (
      y >= HEADER_TITLE_BOTTOM &&
      placeTitleVisibility.current === VisibilityStates.Visible
    ) {
      dispatch({ type: PlacesActions.HEADER_TITLE_HIDDEN });
      placeTitleVisibility.current = VisibilityStates.Hidden;
    }
    // scrolling up the page
    else if (
      y <= HEADER_TITLE_BOTTOM &&
      placeTitleVisibility.current === VisibilityStates.Hidden
    ) {
      dispatch({ type: PlacesActions.HEADER_TITLE_VISIBLE });
      placeTitleVisibility.current = VisibilityStates.Visible;
    }

    bannerPlaceY.value = y;
  };

  useEffect(() => {
    dispatch({
      type: PlacesActions.UPDATE_CURRENT_PLACE,
      payload: currentPlaceData,
    });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        ref={bannerPlaceScrollRef}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal={false}
        scrollEventThrottle={16}
        decelerationRate={"fast"}
        onScroll={(event) => {
          handleScroll(event.nativeEvent.contentOffset.y);
        }}
        style={styles.scrollContainerPlace}
        data={currentPlaceData.feedSections}
        keyExtractor={(item: PlaceFeedSection) => `${item.id}`}
        renderItem={(item) => (
          <PlaceSection place={currentPlaceData} category={item.item.id} />
        )}
      />
    </View>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    goToPlaceScreen: state.places.goToPlaceScreen,
  };
};

export default connect(mapStateToProps)(Place);
