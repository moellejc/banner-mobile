import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

interface ProfileProps {}
const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenText}>Profile Screen</Text>
    </View>
  );
};

export default Profile;
