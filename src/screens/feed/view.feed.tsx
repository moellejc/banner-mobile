import React from "react";
import { useMutation } from "@apollo/client";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { Actions } from "../../state";
import { Services } from "../../services/index";

interface Props {}

export const FeedScreen: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <View>
      <Text style={styles.helloText}>Hello Feed</Text>
      <Button mode="outlined" onPress={Services.AuthService.logout}>
        Logout
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  helloText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
});
