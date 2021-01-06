import React from "react";
import { AsyncStorage } from "react-native";
import { Text, Button, View, TextInput, StyleSheet } from "react-native";

export interface Props {}
export interface State {}

const styles = StyleSheet.create({
  field: {
    borderBottomWidth: 1,
    fontSize: 20,
    marginBottom: 15,
    height: 35,
  },
});

const defaultState = {
  values: {
    name: "",
    email: "",
    password: "",
  },
  errors: {},
  isSubmitting: false,
};

class Signup extends React.Component<Props, State> {
  state = defaultState;

  render() {
    return (
      <View
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ textAlign: "center" }}>Hello Login</Text>
      </View>
    );
  }
}
