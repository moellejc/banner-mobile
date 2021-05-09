import React from "react";
import { useMutation } from "@apollo/client";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { Actions } from "../../state";
import { LOGOUT_MUTATION } from "../../constants/graphql/auth";

interface Props {}

export const FeedScreen: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [logout] = useMutation(LOGOUT_MUTATION, {
    onCompleted: (data) => {
      dispatch({
        type: Actions.AuthActions.CLEAR_TOKEN,
      });
    },
    onError: (data) => {
      console.log("error during logout");
    },
  });

  return (
    <View>
      <Text style={styles.helloText}>Hello Feed</Text>
      <Button mode="outlined" onPress={logout}>
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
