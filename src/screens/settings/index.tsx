import React, { useEffect } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Dimensions,
} from "react-native";
import { styles } from "./styles";

interface SettingsProps {}
const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenText}>Settings Screen</Text>
    </View>
  );
};

export default SettingsScreen;
