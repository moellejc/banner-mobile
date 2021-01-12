import React from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button, Caption } from "react-native-paper";

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

interface LoginProps {
  defaultEmail?: "";
}

const Login: React.FC<LoginProps> = (props: LoginProps) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <TextInput
        style={{
          flex: 1,
          flexDirection: "row",
        }}
        mode="flat"
        label="Email"
        value={email}
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        style={{
          flex: 1,
          flexDirection: "row",
        }}
        mode="flat"
        label="Password"
        value={password}
        onChangeText={(password) => setPassword(password)}
      />
      <Button
        style={{
          flex: 1,
          flexDirection: "row",
        }}
        mode="outlined"
        onPress={() => console.log("Login Pressed")}
      >
        Login
      </Button>
      <Caption
        style={{
          flex: 1,
          flexDirection: "row",
        }}
      >
        Don’t have an account? Sign up!
      </Caption>
    </View>
  );
};

export default Login;
