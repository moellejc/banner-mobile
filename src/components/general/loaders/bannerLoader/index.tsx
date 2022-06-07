import React from "react";
import { View, ActivityIndicator } from "react-native";

enum LoadingSizes {
  small,
  large,
}

interface LoadingProps {
  size?: number | LoadingSizes;
}

const Loader = (props: LoadingProps) => {
  return (
    <View style={styles.spinnerContainer}>
      <ActivityIndicator size={props.size} />
    </View>
  );
};

const styles = {
  spinnerContainer: {
    flex: -1,
    marginTop: 12,
    marginBottom: 12,
  },
};

export { Loader };
