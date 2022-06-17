import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SharedElement } from "react-navigation-shared-element";

const windowWidth = Dimensions.get("window").width;

type ProfileScreenProps = {};
export const ProfileScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Profile Screen</Text>
      <SharedElement id={`ProfilePhoto`}>
        <Image
          source={require("../../../assets/images/mock-images/test_profile_img_01.png")}
          resizeMode={"cover"}
          resizeMethod={"resize"}
          style={styles.profileLarge}
        />
      </SharedElement>
    </View>
  );
};

const styles = StyleSheet.create({
  profileLarge: {
    position: "absolute",
    left: windowWidth / 2 - 75 / 2,
    top: 50,
    width: 75,
    height: 75,
  },
});
