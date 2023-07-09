import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

interface ProfileProps {}
const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.screenText}>Profile Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
        <Text>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
